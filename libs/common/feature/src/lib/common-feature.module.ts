import { CommonMaterialModule } from '@angelscale-app/common-material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonUiModule } from '../../../ui/src/lib/common-ui.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SiteMenuComponent } from './site-menu/site-menu.component';
import { SearchHeaderComponent } from './search-header/search-header.component';


export { FooterComponent } from './footer/footer.component';
export { HeaderComponent } from './header/header.component';
export {SearchHeaderComponent} from './search-header/search-header.component';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchHeaderComponent,
  SiteMenuComponent
]

@NgModule({
  imports: [
    CommonModule,
    CommonUiModule,
    CommonMaterialModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CommonFeatureModule {}
