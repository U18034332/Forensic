import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgenciesAndFirmsComponent } from './agencies-and-firms.component';
import { AgenciesAndFirmsRoutingModule } from './agencies-and-firms-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [
        AgenciesAndFirmsComponent
    ],
    imports: [
        CommonModule,
        AgenciesAndFirmsRoutingModule,
        CoreModule
    ]
})
export class AgenciesAndFirmsModule { }