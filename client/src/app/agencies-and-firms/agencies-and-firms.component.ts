import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SedupeAndMetjaDialogComponent } from './firms-dialogs/sedupe-and-metja-dialog/sedupe-and-metja-dialog.component';
import { UBACDialogComponent } from './firms-dialogs/ubac-dialog/ubac-dialog.component';
import { FundudziDialogComponent } from './firms-dialogs/fundudzi-dialog/fundudzi-dialog.component';
import { OpenWaterDialogComponent } from './firms-dialogs/open-water-dialog/open-water-dialog.component';
import { GfiaDialogComponent } from './firms-dialogs/gfia-dialog/gfia-dialog.component';
import { FrrimDialogComponent } from './firms-dialogs/frrim-dialog/frrim-dialog.component';
import { LigwaDialogComponent } from './firms-dialogs/ligwa-dialog/ligwa-dialog.component';
import { AfisDialogComponent } from './firms-dialogs/afis-dialog/afis-dialog.component';
import { NexiaSabAndTDialogComponent } from './firms-dialogs/nexia-sab-and-t-dialog/nexia-sab-and-t-dialog.component';
import { SapsDialogComponent } from './agencies-dialogs/saps-dialog/saps-dialog.component';
import { SarsDialogComponent } from './agencies-dialogs/sars-dialog/sars-dialog.component';
import { SpecialInvestigationUnitDialogComponent } from './agencies-dialogs/special-investigation-unit-dialog/special-investigation-unit-dialog.component';
import { DepartmentOfSocialDevelopmentDialogComponent } from './agencies-dialogs/department-of-social-development-dialog/department-of-social-development-dialog.component';
import { DpciDialogComponent } from './agencies-dialogs/dpci-dialog/dpci-dialog.component';
import { DticDialogComponent } from './agencies-dialogs/dtic-dialog/dtic-dialog.component';
import { NationalTreasuryDialogComponent } from './agencies-dialogs/national-treasury-dialog/national-treasury-dialog.component';
import { CpicDialogComponent } from './agencies-dialogs/cpic-dialog/cpic-dialog.component';
@Component({
  selector: 'app-agencies-and-firms',
  templateUrl: './agencies-and-firms.component.html',
  styleUrls: ['./agencies-and-firms.component.scss']
})
export class AgenciesAndFirmsComponent {
  constructor(private dialog: MatDialog) {}


  openSapsDialog() {
    this.dialog.open(SapsDialogComponent, {
      maxWidth: '97vw',  // Maximum width is 97% of the viewport width
      minWidth: '500px', // Minimum width to ensure it doesn’t get too small
    });
  }
  openSarsDialog() {
    this.dialog.open(SarsDialogComponent, {
      maxWidth: '97vw',  // Maximum width is 97% of the viewport width
      minWidth: '500px', // Minimum width to ensure it doesn’t get too small
    });
  }
  openSpecialInvestigationUnitDialog() {
    this.dialog.open(SpecialInvestigationUnitDialogComponent, {
      maxWidth: '97vw',  // Maximum width is 97% of the viewport width
      minWidth: '500px', // Minimum width to ensure it doesn’t get too small
    });
  }
  openCpicDialog() {
    this.dialog.open(CpicDialogComponent, {
      maxWidth: '97vw',  // Maximum width is 97% of the viewport width
      minWidth: '500px', // Minimum width to ensure it doesn’t get too small
    });
  }
  openDepartmentOfSocialDevelopmentDialog() {
    this.dialog.open(DepartmentOfSocialDevelopmentDialogComponent, {
      maxWidth: '97vw',  // Maximum width is 97% of the viewport width
      minWidth: '500px', // Minimum width to ensure it doesn’t get too small
    });
  }
  openDpciDialog() {
    this.dialog.open(DpciDialogComponent, {
      maxWidth: '97vw',  // Maximum width is 97% of the viewport width
      minWidth: '500px', // Minimum width to ensure it doesn’t get too small
    });
  }
  openDticDialog() {
    this.dialog.open(DticDialogComponent, {
      maxWidth: '97vw',  // Maximum width is 97% of the viewport width
      minWidth: '500px', // Minimum width to ensure it doesn’t get too small
    });
  }
  openNationalTreasurytDialog() {
    this.dialog.open(NationalTreasuryDialogComponent, {
      maxWidth: '97vw',  // Maximum width is 97% of the viewport width
      minWidth: '500px', // Minimum width to ensure it doesn’t get too small
    });
  }

  openSedupeAndMetjaDialog() {
    this.dialog.open(SedupeAndMetjaDialogComponent, {
      maxWidth: '97vw',  // Maximum width is 97% of the viewport width
      minWidth: '500px', // Minimum width to ensure it doesn’t get too small
    });
  }

  openUbacDialog() {
    this.dialog.open(UBACDialogComponent, {
      maxWidth: '97vw',
      minWidth: '500px',
    });
  }

  openFundudziDialog() {
    this.dialog.open(FundudziDialogComponent, {
      maxWidth: '97vw',
      minWidth: '500px',
    });
  }
  openOpenWaterDailog() {
    this.dialog.open(OpenWaterDialogComponent, {
      maxWidth: '97vw',
      minWidth: '500px',
    });
  }
  openGfiaDialog() {
    this.dialog.open(GfiaDialogComponent, {
      maxWidth: '97vw',
      minWidth: '500px',
    });
  }
  openFrrimDialog() {
    this.dialog.open(FrrimDialogComponent, {
      maxWidth: '97vw',
      minWidth: '500px',
    });
  }
  openLigwaDialog() {
    this.dialog.open(LigwaDialogComponent, {
      maxWidth: '97vw',
      minWidth: '500px',
    });
  }
  openAfisDialog() {
    this.dialog.open(AfisDialogComponent, {
      maxWidth: '97vw',
      minWidth: '500px',
    });
  }
  openNexiaSabAndTDialog() {
    this.dialog.open(NexiaSabAndTDialogComponent, {
      maxWidth: '97vw',
      minWidth: '500px',
    });
  }
}
