import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angelscale-app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss'],
})
export class BannerSectionComponent implements OnInit {
  @Input() public title!: string;
  @Input() public subtitle!: string;
  @Input() public buttonText!: string;
  @Input() public buttonLink!: string;

  constructor() {}

  ngOnInit(): void {}
}
