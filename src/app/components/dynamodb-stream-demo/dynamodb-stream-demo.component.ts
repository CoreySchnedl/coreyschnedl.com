import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  scoreBoard: { username: string; score: number }[];
  displayedColumns: string[] = ['position', 'username', 'score'];

  disableConnectButton = false;
  connected = false;

  constructor(private _snackBar: MatSnackBar) {}

  connect(): void {
    this.disableConnectButton = true;

    try {
      this.webSocketConnection = webSocket(
        `wss://${this.connectionKey.value}.execute-api.us-east-1.amazonaws.com/demo`
      );

      this.webSocketConnection.subscribe(
        (msg: any) => {
          if ((msg as any).hashKey === 'SCOREBOARD') {
            if (this.connected && this.scoreBoard) {
              this._snackBar.open('Scoreboard Updated!', 'Dismiss', {
                duration: 2000
              });
            }
            this.scoreBoard = Object.keys(msg)
              .filter((key) => key !== 'hashKey' && key !== 'sortKey')
              .map((key) => ({ username: key, score: msg[key] }))
              .sort((a, b) => b.score - a.score);
          }
          if (!this.connected) {
            this._snackBar.open('Connected!', 'Dismiss', {
              duration: 3000
            });
          }
          this.connected = true;
        },
        (err: string) => {
          this._snackBar.open('Error connecting to scoreboard. Please check connectionKey with Corey.', 'Dismiss', {
            duration: 3000
          });
          console.log(err);
          this.disableConnectButton = false;
        },
        () => console.log('websocket disconnected!')
      );

      this.webSocketConnection.next({
        action: 'message',
        message: JSON.stringify({
          username: this.username.value
        })
      });
      // this.snackBar.open('Connected!');
    } catch (e) {
      console.log(e);
      // this.snackBar.open(
      //   'Unable to connect to websocket. Get Connection Key from Corey to proceed.'
      // );
    }
  }

  sendMessage(): void {
    this.webSocketConnection.next({
      action: 'message',
      message: JSON.stringify({
        message: this.message.value
      })
    });
  }
}
