import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'angelscale-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  isProduction: boolean;

  constructor(
  ) {
    this.isProduction = environment.production;
  }
}
