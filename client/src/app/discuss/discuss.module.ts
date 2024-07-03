import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscussRoutingModule } from './discuss-routing.module';
import { DiscussComponent } from './discuss.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [
        DiscussComponent
    ],
    imports: [
        CommonModule,
        DiscussRoutingModule,
        CoreModule
    ]
})
export class DiscussModule { }