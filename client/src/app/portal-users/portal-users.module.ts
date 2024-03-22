import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortalUsersPageRoutingModule } from './portal-users-routing.module';

import { PortalUsersPage } from './portal-users.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortalUsersPageRoutingModule
  ],
  declarations: [PortalUsersPage]
})
export class PortalUsersPageModule {}
