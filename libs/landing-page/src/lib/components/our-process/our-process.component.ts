import { Component, OnInit } from '@angular/core';
import { Process } from './process-type';


@Component({
  selector: 'angelscale-app-our-process',
  templateUrl: './our-process.component.html',
  styleUrls: ['./our-process.component.scss']
})
export class OurProcessComponent implements OnInit {

  processes: Process[] = [];

  constructor() {
    this.processes = [
      {
        image: '/assets/images/icons/process-search.svg',
        title: 'Discover quality talent fast',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
      },
      {
        image: '/assets/images/icons/process-chat.svg',
        title: 'Collaboration tools for project tracking',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
      },
      {
        image: '/assets/images/icons/process-customer.svg',
        title: 'Account support and guidance',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
      },
      {
        image: '/assets/images/icons/process-credit_card.svg',
        title: 'Safe, easy payments',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. '
      }
    ]
  }

  ngOnInit() {
  }

}
