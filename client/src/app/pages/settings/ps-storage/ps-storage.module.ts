import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PsStoragePageRoutingModule } from './ps-storage-routing.module';
import { PsStoragePage } from './ps-storage.page';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PsStoragePageRoutingModule,
    SharedModule
  ],
  declarations: [PsStoragePage]
})
export class PsStoragePageModule {}
