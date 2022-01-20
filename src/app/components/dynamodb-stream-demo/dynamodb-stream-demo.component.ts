import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
// import { MatSnackBar } from '@angular/material/snack-bar';

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
  scoreBoard: any[];

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
            this.scoreBoard = Object.keys(msg)
              .filter((key) => !['hashKey', 'sortKey'].includes(key))
              .map((key) => ({ username: key, score: msg[key] }));
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
