// src/app/shared.module.ts
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SettingSideNavComponent } from './components/setting-side-nav/setting-side-nav.component';

@NgModule({
  declarations: [
    SideNavComponent, 
    TopNavComponent,
    SettingSideNavComponent 
  ],
  imports: [
    IonicModule,
    RouterModule
  ],
  exports: [
    SideNavComponent, 
    TopNavComponent,
    SettingSideNavComponent
  ]
})
export class SharedModule {}

