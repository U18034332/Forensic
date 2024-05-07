import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AllocateUserPageRoutingModule } from './allocate-user-routing.module';
import { AllocateUserPage } from './allocate-user.page';




@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    AllocateUserPageRoutingModule,
  ],
  declarations: [AllocateUserPage]
})
export class AllocateUserPageModule {}
