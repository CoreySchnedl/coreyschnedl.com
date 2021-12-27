import { Component } from '@angular/core';
import Skillset from 'src/app/models/SkillSet';

@Component({
  selector: 'app-current-skillsets',
  templateUrl: './current-skillsets.component.html',
  styleUrls: ['./current-skillsets.component.scss']
})
export class CurrentSkillsetsComponent {
  skillSets: Skillset[] = [
    {
      name: 'AWS',
      skills: [
        {
          name: 'API Gateway',
          score: 95,
          additionalDetails:
            'I have a ton of experience building with AWS API Gateway (v1 and v2) with Lambda to implement REST, HTTP, and Websocket APIs.',
          imgUrl: '../../../assets/skills/APIGateway.png'
        },
        {
          name: 'Lambda',
          score: 100,
          additionalDetails:
            'This is another one of my biggest strength areas. It combines my love of architecture with software development. Odds are, if you have a question regarding AWS Lambda, I can answer it. Recently have worked a lot with using Lambda with Step Function orchestrations.',
          imgUrl: '../../../assets/skills/Lambda.png'
        },
        {
          name: 'VPC / Networking',
          score: 85,
          additionalDetails:
            'I have experience setting up and troubleshooting complex networking setups between AWS and On Premises. I am certified in the AWS Advanced Networking Speciality subject area as of Dec 2021.',
          imgUrl: '../../../assets/skills/VPC.png'
        },
        {
          name: 'EC2 / ECS + ECR',
          score: 65,
          additionalDetails:
            'Comfortable right-sizing, building, and deploying EC2 instances, as well as working with ECS.',
          imgUrl: '../../../assets/skills/EC2.png'
        },
        {
          name: 'Webhosting',
          score: 95,
          additionalDetails:
            'Very comfortable creating architectures to support Web applications within AWS. This site runs off of S3 Static website hosting with Cloudfront. It is also integrated with Route53 and ACM.',
          imgUrl: '../../../assets/skills/Cloudfront.png'
        },
        {
          name: 'Databases',
          score: 85,
          additionalDetails:
            'I have a lot of hands on experience working with and designing DynamoDB tables, building them to support flexible use cases. I also have implemented RDS in hands on labs (mainly PostgreSQL). I have experience creating efficient stored procedures tweaking database performance by adding indexes when necessary.',
          imgUrl: '../../../assets/skills/DynamoDB.png'
        }
      ]
    },
    {
      name: 'DevOps',
      skills: [
        {
          name: 'Terraform',
          score: 95,
          additionalDetails:
            'I have hands on experience building reusable terraform modules that are used throughout a large organization. Terraform is my IaC tool of choice. I also have experience working with Terraform Enterprise.',
          imgUrl: '../../../assets/skills/terraform.png'
        },
        {
          name: 'Azure Devops',
          score: 85,
          additionalDetails:
            'I have hands on experience building and modifying Azure Devops YAML pipelines that implement CICD for web and back end applications both on premise and in the cloud.',
          imgUrl: '../../../assets/skills/AzureDevops.png'
        },
        {
          name: 'Jenkins',
          score: 50,
          additionalDetails:
            'I have limited experience with Jenkins to implement CICD.',
          imgUrl: '../../../assets/skills/Jenkins.png'
        },
        {
          name: 'Docker',
          score: 75,
          additionalDetails:
            'I have hands on experience using Docker with Lambda',
          imgUrl: '../../../assets/skills/Docker.png'
        },
        {
          name: 'Cloudformation',
          score: 60,
          additionalDetails:
            'As an alternative to Terraform, I also have experience using AWS Cloudformation.',
          imgUrl: '../../../assets/skills/Cloudformation.png'
        }
      ]
    },
    {
      name: 'Other Cloud',
      skills: [
        {
          name: 'Azure',
          score: 30,
          additionalDetails:
            'Although my primary expertise is in AWS, I also have limited experience with Azure. I have helped maintain multiple Azure App service applications and Azure Functions working as a production support consultant.',
          imgUrl: '../../../assets/skills/Azure.png'
        }
      ]
    },
    {
      name: 'Web Development',
      skills: [
        {
          name: 'Angular 2+',
          score: 90,
          additionalDetails:
            'I have 3+ years of experience building and maintaining Angular 2+ web applications. I have experience using NgRx for reactive state management. This site is built from scratch by me, and all the code for this site can be viewed on my github in the link above.',
          imgUrl: '../../../assets/skills/Angular.png'
        }
      ]
    },
    {
      name: 'Back End Programming',
      skills: [
        {
          name: 'Java',
          score: 85,
          additionalDetails:
            'Java is my home. It is the first programming language I ever learned, and my first three years of my career was primarily writing and fixing Java based applications.',
          imgUrl: '../../../assets/skills/java.png'
        },
        {
          name: 'NodeJs',
          score: 95,
          additionalDetails:
            'Node has been my goto programming language for the majority of Lambda based work I have done over the past 2+ years. I prefer writing applications in Typescript (Node), as Node has the lowest cold start times compared to other languages supported by AWS Lambda. It also goes hand in hand with the Angular work I have been focused on.',
          imgUrl: '../../../assets/skills/NodeJs.png'
        },
        {
          name: 'Python',
          score: 75,
          additionalDetails:
            'Most of my Python experience comes from my studies at OSU. A lot of the software used in the GIS degree required a strong Python understanding.',
          imgUrl: '../../../assets/skills/Python.png'
        },
        {
          name: '.NET Framework / .NET Core',
          score: 65,
          additionalDetails:
            'I have had to implement some Lambdas using .NET Core due to .NET specific requirements. I also have worked on a few .NET Framework and .NET Core applications for clients of Insight.',
          imgUrl: '../../../assets/skills/NETCore.png'
        }
      ]
    },
    {
      name: 'Agile/Scrum',
      skills: [
        {
          name: 'Agile',
          score: 80,
          additionalDetails:
            "5+ years experience working within Agile teams. Achieved PSM I Certification after taking Scrum.org's Professional Scrum Foundations course.",
          imgUrl: '../../../assets/skills/Scrum.png'
        }
      ]
    }
  ];
}
