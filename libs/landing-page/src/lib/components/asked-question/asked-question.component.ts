import { Component, OnInit } from '@angular/core';
import { FAQ } from './faq-type';

@Component({
  selector: 'angelscale-app-asked-question',
  templateUrl: './asked-question.component.html',
  styleUrls: ['./asked-question.component.scss']
})
export class AskedQuestionComponent implements OnInit {

  faqs: FAQ[] = [];

  constructor() { }

  ngOnInit() {
    this.faqs = [
      {
        visible: true,
        image: '/assets/images/icons/faq-plus.svg',
        title: 'What should I look for in a business consultant?',
        content: 'Consulting is unfortunately a vast industry, and business consultants operate at all levels. No matter what stage of business you’re in, you want to find (and hire!) consultants who can meet you where your business is at.  doing so.'
      },
      {
        visible: false,
        image: '/assets/images/icons/faq-plus.svg',
        title: 'Will I need to sign up for regular consultations?',
        content: 'Consulting is unfortunately a vast industry, and business consultants operate at all levels. No matter what stage of business you’re in, you want to find (and hire!) consultants who can meet you where your business is at.  doing so.'
      },
      {
        visible: false,
        image: '/assets/images/icons/faq-plus.svg',
        title: 'How does Angel Scale Work?',
        content: 'Consulting is unfortunately a vast industry, and business consultants operate at all levels. No matter what stage of business you’re in, you want to find (and hire!) consultants who can meet you where your business is at.  doing so.'
      },
      {
        visible: false,
        image: '/assets/images/icons/faq-plus.svg',
        title: 'Should I hire a full-time consultant?',
        content: 'Consulting is unfortunately a vast industry, and business consultants operate at all levels. No matter what stage of business you’re in, you want to find (and hire!) consultants who can meet you where your business is at.  doing so.'
      },
    ]
  }

  openMessage(index: number) {
    this.faqs.map(ele => {
      ele.visible = false;
      ele.image = '/assets/images/icons/faq-plus.svg';
    });
    this.faqs[index].visible = true;
    this.faqs[index].image = '/assets/images/icons/faq-minus.svg';
  }

}
