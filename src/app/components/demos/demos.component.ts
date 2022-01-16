import { Component } from '@angular/core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent {
  demos = [
    {
      title: 'DynamoDB Streams',
      subtitle: 'and why you should be using them',
      imgUrl: '../../../assets/skills/DynamoDB.png',
      description:
        'DynamoDB Streams allow for powerful architecture patterns. Some of the reasons you should consider using streams: ',
      list: [
        'Point in time recovery',
        'Active/Active Global Tables',
        'Real time dashboards',
        'Business Intelligence / Analytics'
      ],
      route: 'dynamodb-streams'
    }
  ];

  constructor() {}
}
