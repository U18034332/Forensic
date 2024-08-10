import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AgenciesAndFirmsComponent } from './agencies-and-firms.component';
import { SedupeAndMetjaDialogComponent } from './firms-dialogs/sedupe-and-metja-dialog/sedupe-and-metja-dialog.component';
import { UBACDialogComponent } from './firms-dialogs/ubac-dialog/ubac-dialog.component';
import { FundudziDialogComponent } from './firms-dialogs/fundudzi-dialog/fundudzi-dialog.component';
import { CpicDialogComponent } from './agencies-dialogs/cpic-dialog/cpic-dialog.component';
import { DepartmentOfSocialDevelopmentDialogComponent } from './agencies-dialogs/department-of-social-development-dialog/department-of-social-development-dialog.component';
import { DpciDialogComponent } from './agencies-dialogs/dpci-dialog/dpci-dialog.component';
import { DticDialogComponent } from './agencies-dialogs/dtic-dialog/dtic-dialog.component';
import { NationalTreasuryDialogComponent } from './agencies-dialogs/national-treasury-dialog/national-treasury-dialog.component';
import { SapsDialogComponent } from './agencies-dialogs/saps-dialog/saps-dialog.component';
import { SarsDialogComponent } from './agencies-dialogs/sars-dialog/sars-dialog.component';
import { SpecialInvestigationUnitDialogComponent } from './agencies-dialogs/special-investigation-unit-dialog/special-investigation-unit-dialog.component';
import { AfisDialogComponent } from './firms-dialogs/afis-dialog/afis-dialog.component';
import { FrrimDialogComponent } from './firms-dialogs/frrim-dialog/frrim-dialog.component';
import { GfiaDialogComponent } from './firms-dialogs/gfia-dialog/gfia-dialog.component';
import { LigwaDialogComponent } from './firms-dialogs/ligwa-dialog/ligwa-dialog.component';
import { NexiaSabAndTDialogComponent } from './firms-dialogs/nexia-sab-and-t-dialog/nexia-sab-and-t-dialog.component';
import { OpenWaterDialogComponent } from './firms-dialogs/open-water-dialog/open-water-dialog.component';




@NgModule({
  declarations: [
    AgenciesAndFirmsComponent,
    SedupeAndMetjaDialogComponent,
    UBACDialogComponent,
    FundudziDialogComponent,
    CpicDialogComponent,
    DepartmentOfSocialDevelopmentDialogComponent,
    DpciDialogComponent,
    DticDialogComponent,
    NationalTreasuryDialogComponent,
    SapsDialogComponent,
    SarsDialogComponent,
    SpecialInvestigationUnitDialogComponent,
    AfisDialogComponent,
   
    FrrimDialogComponent,
    GfiaDialogComponent,
    LigwaDialogComponent,
    NexiaSabAndTDialogComponent,
    OpenWaterDialogComponent,

  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
   
  ],
  exports: [
    AgenciesAndFirmsComponent,
  ]
})
export class AgenciesAndFirmsModule {}
