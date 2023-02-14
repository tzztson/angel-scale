import { Component, OnInit } from '@angular/core';
import { Consultant } from './consultant-type';

@Component({
  selector: 'angelscale-app-high-quality-consultant',
  templateUrl: './high-quality-consultant.component.html',
  styleUrls: ['./high-quality-consultant.component.scss']
})
export class HighQualityConsultantComponent implements OnInit {

  consultants: Consultant[] = [];

  constructor() { }



  ngOnInit() {
    this.consultants = [
      {
        image: '/assets/images/icons/consultant-bos.svg',
        name: 'Michael Platt',
        title: 'Business Operations Specialist'
      },
      {
        image: '/assets/images/icons/consultant-ts.svg',
        name: 'Kelly Stanze',
        title: 'Technical SEO'
      }, {
        image: '/assets/images/icons/consultant-cs.svg',
        name: 'Tasha Cerny',
        title: 'Content Specialist'
      },
      {
        image: '/assets/images/icons/consultant-bos.svg',
        name: 'Michael Platt',
        title: 'Business Operations Specialist'
      },
      {
        image: '/assets/images/icons/consultant-ts.svg',
        name: 'Kelly Stanze',
        title: 'Technical SEO'
      }, {
        image: '/assets/images/icons/consultant-cs.svg',
        name: 'Tasha Cerny',
        title: 'Content Specialist'
      }
    ]
  }
}
