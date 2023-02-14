import { Component, OnInit } from '@angular/core';
import { Service } from './service-type';

@Component({
  selector: 'angelscale-app-top-services',
  templateUrl: './top-services.component.html',
  styleUrls: ['./top-services.component.scss'],
})
export class TopServicesComponent implements OnInit {

  services: Service[] = [];

  constructor() { }


  ngOnInit(): void {
    this.services = [
      {
        image: '/assets/images/icons/service-research.svg',
        title: 'Research',
        content: 'Have an idea, but unsure if it’s a good one? Let Angel Scale help you navigate the world of competitive and market research to make strategic decisions about your business.',
        learn_more: ''
      },
      {
        image: '/assets/images/icons/service-research.svg',
        title: 'Marketing Plan',
        content: 'We’ll match you with an expert marketer who will help you develop a marketing strategy perfect for your business budget, and help you navigate the ever-changing digital marketing landscape.',
        learn_more: ''
      },
      {
        image: '/assets/images/icons/service-research.svg',
        title: 'Social Media Plan',
        content: 'Don’t let the 21st Century’s greatest marketing tool pass you by. Angel Scale’s experts will show you the best ways to utilize social media for your business success.',
        learn_more: ''
      },
      {
        image: '/assets/images/icons/service-research.svg',
        title: 'Business Setup',
        content: 'Our experienced consultants are successful entrepreneurs who have created, run, and sold their own businesses. Let them guide you on building your idea from the ground up.',
        learn_more: ''
      },
      {
        image: '/assets/images/icons/service-research.svg',
        title: 'Research',
        content: 'Have an idea, but unsure if it’s a good one? Let Angel Scale help you navigate the world of competitive and market research to make strategic decisions about your business.',
        learn_more: ''
      },
      {
        image: '/assets/images/icons/service-research.svg',
        title: 'Marketing Plan',
        content: 'We’ll match you with an expert marketer who will help you develop a marketing strategy perfect for your business budget, and help you navigate the ever-changing digital marketing landscape.',
        learn_more: ''
      },
      {
        image: '/assets/images/icons/service-research.svg',
        title: 'Social Media Plan',
        content: 'Don’t let the 21st Century’s greatest marketing tool pass you by. Angel Scale’s experts will show you the best ways to utilize social media for your business success.',
        learn_more: ''
      },
      {
        image: '/assets/images/icons/service-research.svg',
        title: 'Business Setup',
        content: 'Our experienced consultants are successful entrepreneurs who have created, run, and sold their own businesses. Let them guide you on building your idea from the ground up.',
        learn_more: ''
      },
    ]
  }
}
