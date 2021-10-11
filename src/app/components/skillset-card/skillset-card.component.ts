import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skillset-card',
  templateUrl: './skillset-card.component.html',
  styleUrls: ['./skillset-card.component.scss']
})
export class SkillsetCardComponent {
  @Input()
  skillSet: any;
}
