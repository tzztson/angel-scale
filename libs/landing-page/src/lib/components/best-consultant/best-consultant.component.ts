import { Component, OnInit } from '@angular/core';
import { BestConsultant } from './best-consultant';


@Component({
  selector: 'angelscale-app-best-consultant',
  templateUrl: './best-consultant.component.html',
  styleUrls: ['./best-consultant.component.css']
})
export class BestConsultantComponent implements OnInit {

  bestConsultants: BestConsultant[] = [];

  constructor() { }

  ngOnInit() {
    this.bestConsultants = [
      {
        image: 'assets/images/icons/service-research.svg',
        title: 'Business Setup'
      },
      {
        image: 'assets/images/icons/service-research.svg',
        title: 'Research'
      },
      {
        image: 'assets/images/icons/service-research.svg',
        title: 'Marketing Plan'
      },
      {
        image: 'assets/images/icons/service-research.svg',
        title: 'Social Media Plan'
      },
    ]
  }

}
