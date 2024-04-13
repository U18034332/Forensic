import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AgenciesAndFirmsPageRoutingModule } from './agencies-and-firms-routing.module';
import { AgenciesAndFirmsPage } from './agencies-and-firms.page';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgenciesAndFirmsPageRoutingModule,
    SharedModule
  ],
  declarations: [AgenciesAndFirmsPage]
})
export class AgenciesAndFirmsPageModule {}
