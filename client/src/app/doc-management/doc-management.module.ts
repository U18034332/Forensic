import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocManagementComponent } from './doc-management.component';
import { DocManagementComponentRoutingModule } from './doc-management-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CoreModule } from '../core/core.module';

@NgModule({ declarations: [
        DocManagementComponent,
    ], imports: [CommonModule,
        DocManagementComponentRoutingModule,
        MatCardModule,
        MatProgressBarModule,
        MatButtonModule,
        MatIconModule,
        CoreModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class DocManagementModule { }