import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgenciesAndFirmsPageRoutingModule } from './agencies-and-firms-routing.module';

import { AgenciesAndFirmsPage } from './agencies-and-firms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgenciesAndFirmsPageRoutingModule
  ],
  declarations: [AgenciesAndFirmsPage]
})
export class AgenciesAndFirmsPageModule {}
