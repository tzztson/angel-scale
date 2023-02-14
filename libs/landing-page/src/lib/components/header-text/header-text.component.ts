import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'angelscale-app-header-text',
  templateUrl: './header-text.component.html',
  styleUrls: ['./header-text.component.scss'],
})
export class HeaderTextComponent implements OnInit {
  @Input() public title!: string;
  @Input() public subtitle!: string;
  @Input() public buttonText!: string;
  @Input() public buttonLink!: string;

  constructor() {}

  ngOnInit(): void {}
}
