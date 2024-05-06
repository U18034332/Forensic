import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AllocateUserPageRoutingModule } from './allocate-user-routing.module';
import { AllocateUserPage } from './allocate-user.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllocateUserPageRoutingModule,
  ],
  declarations: [AllocateUserPage]
})
export class AllocateUserPageModule {}
