import { CommonFeatureModule } from '@angelscale-app/common/feature';
import { CommonUiModule } from '@angelscale-app/common/ui';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BannerSectionComponent } from './components/banner-section/banner-section.component';
import { BrowseByCategoryComponent } from './components/browse-by-category/browse-by-category.component';
import { HeaderImageComponent } from './components/header-image/header-image.component';
import { HeaderTextComponent } from './components/header-text/header-text.component';
import { LandingPageV1Component } from './components/landing-page-v1/landing-page-v1.component';
import { TopServicesComponent } from './components/top-services/top-services.component';
import { TopConsultantsComponent } from './components/top-consultants/top-consultants.component';
import { ClientTestimonialsComponent } from './components/client-testimonials/client-testimonials.component';


import { FindAngelComponent } from './components/find-angel/find-angel.component';
import { OurProcessComponent } from './components/our-process/our-process.component';
import { BestConsultantComponent } from './components/best-consultant/best-consultant.component';
import { BestConsultantSecondComponent } from './components/best-consultant-second/best-consultant-second.component';

import { WhyAngelScaleComponent } from './components/why-angel-scale/why-angel-scale-page.component';
import { BenefitComponent } from './components/benefit/benefit.component';
import { ServiceWorkComponent } from './components/service-work/service-work.component';
import { HighQualityConsultantComponent } from './components/high-quality-consultant/high-quality-consultant.component';
import { ServicePaymentComponent } from './components/service-payment/service-payment.component';
import { AskedQuestionComponent } from './components/asked-question/asked-question.component';

import { FindAnAngelLandingPageComponent } from './containers/find-an-angel/find-an-angel.component';
import { LandingComponent } from './containers/landing/landing.component';
import { WhyAngelScaleLangingPageComponent } from './containers/why-angel-scale-langing-page/why-angel-scale-langing-page.component';


import {IvyCarouselModule} from 'angular-responsive-carousel';


export const landingPageRoutes: Route[] = [
  { path: '', component: LandingComponent },
  { path: 'find-an-angel', component: FindAnAngelLandingPageComponent },
  { path: 'why-angel-scale', component: WhyAngelScaleLangingPageComponent },
  { path: 'areas-of-expertise', component: WhyAngelScaleLangingPageComponent },
];

@NgModule({
  imports: [CommonModule, CommonUiModule, CommonFeatureModule, RouterModule, IvyCarouselModule],
  declarations: [
    FindAnAngelLandingPageComponent,
    LandingComponent,
    HeaderTextComponent,
    LandingPageV1Component,
    WhyAngelScaleComponent,
    HeaderImageComponent,
    BrowseByCategoryComponent,
    BannerSectionComponent,
    TopServicesComponent,
    TopConsultantsComponent,
    ClientTestimonialsComponent,
    FindAngelComponent,
    OurProcessComponent,
    BestConsultantComponent,
    BestConsultantSecondComponent,
    BenefitComponent,
    ServiceWorkComponent,
    HighQualityConsultantComponent,
    ServicePaymentComponent,
    AskedQuestionComponent,
    WhyAngelScaleLangingPageComponent,
  ],
})
export class LandingPageModule {}
