import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
@Component({
  selector: 'app-dynamodb-stream-demo',
  templateUrl: './dynamodb-stream-demo.component.html',
  styleUrls: ['./dynamodb-stream-demo.component.scss']
})
export class DynamodbStreamDemoComponent {
  username = new FormControl('', [Validators.required]);
  connectionKey = new FormControl('', [Validators.required]);
  message = new FormControl('', [Validators.required]);
  webSocketConnection: Subject<any>;
  dataSource: {username: string, score: number}[];
  displayedColumns: string[] = ['username', 'score'];

  connected = false;

  constructor() {}

  connect(): void {
    console.log('connecting!');

    console.log(this.connectionKey.value);

    try {
      this.webSocketConnection = webSocket(
        `wss://${this.connectionKey.value}.execute-api.us-east-1.amazonaws.com/demo`
      );

      this.webSocketConnection.subscribe(
        (msg: any) => {
          console.log(msg);
          console.log(JSON.stringify(msg, undefined, 4));
          if ((msg as any).hashKey === 'SCOREBOARD') {
            let scoreBoard = Object.keys(msg)
              .filter((key) => {
                console.log(key);
                return key !== 'hashKey' && key !== 'sortKey';
              })
              .map((key) => ({ username: key, score: msg[key] }))
              .sort((a, b) => b.score - a.score);
            
            console.log('scoreBoard', scoreBoard);
            this.dataSource = scoreBoard
          }
        },
        (err: string) => console.log(err),
        () => console.log('complete')
      );

      this.webSocketConnection.next({
        action: 'message',
        message: JSON.stringify({
          username: this.username.value
        })
      });

      this.connected = true;

      // this.snackBar.open('Connected!');
    } catch (e) {
      console.log(e);
      // this.snackBar.open(
      //   'Unable to connect to websocket. Get Connection Key from Corey to proceed.'
      // );
    }
  }

  sendMessage(): void {
    console.log('Sending message!');

    this.webSocketConnection.next({
      action: 'message',
      message: JSON.stringify({
        message: this.message.value
      })
    });
  }
}
