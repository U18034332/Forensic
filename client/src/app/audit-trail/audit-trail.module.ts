import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuditTrailRoutingModule } from './audit-trail-routing.module';
import { AuditTrailComponent } from './audit-trail.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    declarations: [
        AuditTrailComponent
    ],
    imports: [
        CommonModule,
        AuditTrailRoutingModule,
        CoreModule
    ]
})
export class AuditTrailModule { }