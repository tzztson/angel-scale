import { Component, OnInit } from '@angular/core';
import { Testimonial } from './client-testimonial';

@Component({
  selector: 'angelscale-app-client-testimonials',
  templateUrl: './client-testimonials.component.html',
  styleUrls: ['./client-testimonials.component.scss']
})
export class ClientTestimonialsComponent implements OnInit {

  testimonials: Testimonial[] = [];


  constructor() { }

  ngOnInit() {
    this.testimonials = [
      {
        evaluation: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s”',
        image: '/assets/images/icons/testimonial-kelly.svg',
        name: 'Kelly Stanze',
        title: 'UX UI Design Student'
      },
      {
        evaluation: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s”',
        image: '/assets/images/icons/testimonial-michael.svg',
        name: 'Michael Platt',
        title: 'Digital Marketing Student'
      },
      {
        evaluation: '“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s”',
        image: '/assets/images/icons/testimonial-recula.svg',
        name: 'Recula buhan',
        title: 'English Language Student'
      }
    ]
  }

}
