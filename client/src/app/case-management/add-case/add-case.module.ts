import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AddCaseComponent } from './add-case.page';

@NgModule({
  declarations: [
    AddCaseComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    AddCaseComponent
  ]
})
export class AddCaseModule {}

