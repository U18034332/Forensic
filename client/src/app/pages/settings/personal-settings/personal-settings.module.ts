import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PersonalSettingsPageRoutingModule } from './personal-settings-routing.module';
import { PersonalSettingsPage } from './personal-settings.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalSettingsPageRoutingModule,
    SharedModule
  ],
  declarations: [PersonalSettingsPage]
})
export class PersonalSettingsPageModule {}
