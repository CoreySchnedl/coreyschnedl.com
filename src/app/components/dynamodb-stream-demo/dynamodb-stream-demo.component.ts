import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamodb-stream-demo',
  templateUrl: './dynamodb-stream-demo.component.html',
  styleUrls: ['./dynamodb-stream-demo.component.scss']
})
export class DynamodbStreamDemoComponent {
  username = new FormControl('', [Validators.required]);
  connectionKey = new FormControl('', [Validators.required]);

  constructor() {}
}
