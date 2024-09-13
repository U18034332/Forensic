import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatMenuItem } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'; // Corrected import
import { MatIcon } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAccordion } from '@angular/material/expansion';
import { MatIconButton } from '@angular/material/button';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatExpansionPanel } from '@angular/material/expansion';
import { MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AgenciesAndFirmsComponent } from './agencies-and-firms.component';
import { SedupeAndMetjaDialogComponent } from './firms-dialogs/sedupe-and-metja-dialog/sedupe-and-metja-dialog.component';
import { UBACDialogComponent } from './firms-dialogs/ubac-dialog/ubac-dialog.component';
import { FundudziDialogComponent } from './firms-dialogs/fundudzi-dialog/fundudzi-dialog.component';
import { CpicDialogComponent } from './agencies-dialogs/cpic-dialog/cpic-dialog.component';
import { DepartmentOfSocialDevelopmentDialogComponent } from './agencies-dialogs/department-of-social-development-dialog/dsd-cd-d.component';
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
import { SapsDialogCaseDetailsComponent } from './agencies-dialogs/saps-dialog/saps-dialog-case-details/saps-dialog-case-details.component';
import { SARSDialogCaseDetailsDialogComponent } from './agencies-dialogs/sars-dialog/sars-dialog-case-details-dialog/sars-dialog-case-details-dialog.component';
import { SUIDialogCaseDetailsDialogComponent } from './agencies-dialogs/special-investigation-unit-dialog/sui-dialog-case-details-dialog/sui-dialog-case-details-dialog.component';
import { CPICDialogCaseDetailsDialogComponent } from './agencies-dialogs/cpic-dialog/cpic-dialog-case-details-dialog/cpic-dialog-case-details-dialog.component';
import { DSDDialogCaseDetailsDialogComponent } from './agencies-dialogs/department-of-social-development-dialog/dsd-cd-d/dsd-dialog-case-details-dialog.component';
import { DPCIDialogCaseDetailsDialogComponent } from './agencies-dialogs/dpci-dialog/dpci-dialog-case-details-dialog/dpci-dialog-case-details-dialog.component';
import { DTICDialogCaseDetailsDialogComponent } from './agencies-dialogs/dtic-dialog/dtic-dialog-case-details-dialog/dtic-dialog-case-details-dialog.component';

import { NTDialogCaseDetailsDialogComponent } from './agencies-dialogs/national-treasury-dialog/nt-dialog-case-details-dialog/nt-dialog-case-details-dialog.component';
import { SAndMDialogComponent } from './firms-dialogs/sedupe-and-metja-dialog/s-and-mdialog/s-and-mdialog.component';
import { UBACCaseDetailsDialogComponent } from './firms-dialogs/ubac-dialog/ubac-case-details-dialog/ubac-case-details-dialog.component';
import { FundudziCaseDetailsDialogComponent } from './firms-dialogs/fundudzi-dialog/fundudzi-case-details-dialog/fundudzi-case-details-dialog.component';
import { OpenWaterCaseDetailsDialogComponent } from './firms-dialogs/open-water-dialog/open-water-case-details-dialog/open-water-case-details-dialog.component';
import { GFIACaseDetailsDialogComponent } from './firms-dialogs/gfia-dialog/gfia-case-details-dialog/gfia-case-details-dialog.component';
import { FRRIMCaseDetailsDialogComponent } from './firms-dialogs/frrim-dialog/frrim-case-details-dialog/frrim-case-details-dialog.component';
import { LIGWACaseDetailsDialogComponent } from './firms-dialogs/ligwa-dialog/ligwa-case-details-dialog/ligwa-case-details-dialog.component';
import { AFISCaseDetailsDialogComponent } from './firms-dialogs/afis-dialog/afis-case-details-dialog/afis-case-details-dialog.component';
import { NexiaSABAndTCaseDetailsDialogComponent } from './firms-dialogs/nexia-sab-and-t-dialog/nexia-sab-and-t-case-details-dialog/nexia-sab-and-t-case-details-dialog.component';


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
    SapsDialogCaseDetailsComponent,
    SARSDialogCaseDetailsDialogComponent,
    SUIDialogCaseDetailsDialogComponent,
    CPICDialogCaseDetailsDialogComponent,
    DSDDialogCaseDetailsDialogComponent,
    DPCIDialogCaseDetailsDialogComponent,
    DTICDialogCaseDetailsDialogComponent,
    NTDialogCaseDetailsDialogComponent,

    SAndMDialogComponent,
    UBACCaseDetailsDialogComponent,
    FundudziCaseDetailsDialogComponent,
    OpenWaterCaseDetailsDialogComponent,
    GFIACaseDetailsDialogComponent,
    FRRIMCaseDetailsDialogComponent,
    LIGWACaseDetailsDialogComponent,
    AFISCaseDetailsDialogComponent,
    NexiaSABAndTCaseDetailsDialogComponent


  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule, 
    MatExpansionModule,
    MatFormFieldModule,
    MatIcon,
    MatAccordion,
    MatIconButton,
    MatMenuItem ,
    MatMenuTrigger,
    MatExpansionPanel,
    MatLabel,
    MatInputModule,
    
  ],
  exports: [
    AgenciesAndFirmsComponent,
  ]
})
export class AgenciesAndFirmsModule {}
