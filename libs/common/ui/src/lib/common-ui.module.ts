import { CommonMaterialModule } from '@angelscale-app/common-material';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './button/button.component';

const COMPONENTS = [
  ButtonComponent,
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, CommonMaterialModule],
})
export class CommonUiModule {}
