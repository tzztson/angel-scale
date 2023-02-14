import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Route, RouterModule } from '@angular/router';

import { CommonUiModule } from '@angelscale-app/common/ui';
import { landingPageRoutes } from '@angelscale-app/landing-page';
import { LayoutModule } from '@angelscale-app/layout';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

const appRoutes: Route[] = [
  { path: '', children: [...landingPageRoutes] },
  // {
  //   path: 'dashboard',
  //   canActivate: [AngularFireAuthGuard],
  //   data: { authGuardPipe: redirectUnauthorizedToLogin },
  //   loadChildren: () => import('@syas-app/dashboard').then( m => m.DashboardFeatureModule)
  // },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    CommonUiModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
      scrollPositionRestoration: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
