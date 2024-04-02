import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscussPageRoutingModule } from './discuss-routing.module';

import { DiscussPage } from './discuss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscussPageRoutingModule
  ],
  declarations: [DiscussPage]
})
export class DiscussPageModule {}
