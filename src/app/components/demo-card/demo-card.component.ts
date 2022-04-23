import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo-card',
  templateUrl: './demo-card.component.html',
  styleUrls: ['./demo-card.component.scss']
})
export class DemoCardComponent {
  @Input()
  demo: any;

  constructor() {}
}
