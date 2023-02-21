import { Component, OnInit, HostListener } from '@angular/core';
import { Consultant } from './consultant-type';

@Component({
  selector: 'angelscale-app-top-consultants',
  templateUrl: './top-consultants.component.html',
  styleUrls: ['./top-consultants.component.scss']
})
export class TopConsultantsComponent implements OnInit {

  consultants: Consultant[] = [];
  showCells = window.innerWidth<400?1:3;
  cellHeight = 520;
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
      }
    ]
  }
  @HostListener("window:resize", []) updateDays() {
    if (window.innerWidth >= 1280) {
      this.showCells = 3;
      this.cellHeight = 480;
    }
    else if (window.innerWidth >= 1024) {
      this.showCells = 2;
      this.cellHeight = 480;
    }

    else if (window.innerWidth >= 768) {
      this.showCells = 2;
      this.cellHeight = 400;
    }

    else if (window.innerWidth >= 640) {
      this.showCells = 1;
      this.cellHeight = 400;
    }
    console.log(this.showCells)
  }

}
