import { Component } from '@angular/core';
import Skill from 'src/app/models/Skill';

@Component({
  selector: 'app-skills-card',
  templateUrl: './skills-card.component.html',
  styleUrls: ['./skills-card.component.scss']
})
export class SkillsCardComponent {
  skills = [];
  // skills: Skill[] = [
  //   {
  //     name: 'Angular',
  //     imageURL: 'assets/Angular.png',
  //     experiences: [
  //       'Extensive experience',
  //       'Self taught',
  //       'Front-end language of choice',
  //       'NgRx reactive state management',
  //       'Material Design'
  //     ]
  //   },
  //   {
  //     name: 'Java',
  //     imageURL: 'assets/java.png',
  //     experiences: [
  //       '3 years of working experience',
  //       'JSP, JSF, Spring Boot, Spring Core',
  //       'Maven, Gradle'
  //     ]
  //   },
  //   {
  //     name: 'AWS',
  //     imageURL: 'assets/aws.png',
  //     experiences: [
  //       '1 year of working experience',
  //       'Working towards Solution Architect Certification'
  //     ]
  //   },
  //   {
  //     name: 'Terraform',
  //     imageURL: 'assets/terraform.png',
  //     experiences: [
  //       '1 year of working experience',
  //       'Terraform Enterprise experience',
  //       'Able to write reusable modules'
  //     ]
  //   }
  // ];
}
