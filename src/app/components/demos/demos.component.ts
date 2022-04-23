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
        'DynamoDB Streams allow for powerful architecture patterns. DynamoDB is highly scalable, and one of the most performant database technologies on the market if used correctly. Some of the reasons you should consider using streams: ',
      list: [
        'Point in time recovery',
        'Active/Active Global Tables',
        'Real time dashboards',
        'Business Intelligence / Analytics'
      ],
      route: 'dynamodb-streams'
    },
    {
      title: 'API Gateway Deep Dive',
      subtitle: 'talk on advanced features of API Gateway',
      imgUrl: '../../../assets/skills/APIGateway.png',
      description:
        'API Gateway is a very feature rich service. Some of the topics in this demo include: ',
      list: [
        'Authorization Options',
        'Enabling caching',
        'Stages integration with Lambda Aliases',
        'How to set up service proxies',
        'Private API Gateway networking'
      ],
      route: 'api-gateway-deep-dive',
      comingSoon: true
    },
    {
      title: 'IAM Policies',
      subtitle:
        'beginner focused talk about how to become an IAM policy master',
      imgUrl: '../../../assets/skills/IAM.png',
      description:
        'IAM has a high learning curve. Learn ways to diagnose IAM issues, prevent access issues, and keep your security team happy: ',
      list: [
        'Learning the IAM decision tree',
        'Resource vs Identity policies',
        'Cross Account access',
        'Using Athena with Cloudtrail to diagnose issues',
        'Examples of good vs bad policies'
      ],
      route: 'iam-policies',
      comingSoon: true
    },
    {
      title: 'Navigating Security / Architecture Reviews',
      subtitle:
        'presentation tips on how to navigate and prepare for reviews of your architecture.',
      imgUrl: '../../../assets/certifications/Security.png',
      description:
        'The ability of defending your architecture is an art that needs to be practiced. What to expect and how to prepare tips including: ',
      list: [
        'Tools used to create effective presentations',
        'How wording can make or break your chances at success',
        'How to predict the concerns ahead of time',
        'The risk of path forging and the importance of communicating timelines'
      ],
      route: 'navigating-reviews',
      comingSoon: true
    },
    {
      title: 'Certifications - The Good and the Bad',
      subtitle: 'So you passed the exam. So what?',
      imgUrl: '../../../assets/certifications/SAP.png',
      description:
        'opinions on certifications and what they mean is a hotly debated topic within the IT industry. In this presentation, I will go over the experience I had during 2021 hunting for AWS certifications. Topics include: ',
      list: [
        'What I believe certifications are good for vs how they can be abused',
        'Deciding on a learning path',
        'Differences in courses',
        'Finding a community to help with studying and keeping skills sharp',
        'Online versus In-Person thoughts'
      ],
      route: 'certification-thoughts',
      comingSoon: true
    }
  ];

  constructor() {}
}
