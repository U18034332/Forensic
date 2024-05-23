import { Component } from '@angular/core';
// Import ModalController and other necessary components for your forms
import { ModalController } from '@ionic/angular';
import { AddCaseComponent } from './add-case/add-case.page';

@Component({
  selector: 'app-case-management',
  templateUrl: './case-management.page.html',
  styleUrls: ['./case-management.page.scss'],
})
export class CaseManagementPage {
  subFilesExpanded: boolean = false;
  annexures: string[] = ['Annexure A', 'Annexure B', 'Annexure C', 'Annexure D', 'Annexure E', 'Annexure F'];

  // Inject ModalController or any other services needed
  constructor(public modalController: ModalController) { }


  toggleSubFiles(): void {
    this.subFilesExpanded = !this.subFilesExpanded;
  }

  // Method to handle 'Add File' button click
  async presentAddFileDialog() {
    console.log("Add File button clicked");
    // Replace with your form presentation logic
    // const modal = await this.modalController.create({
    //   component: YourAddFileComponent, // Replace with your component
    //   cssClass: 'your-custom-class' // Use a custom class if needed
    // });
    // return await modal.present();
  }

  // Method to handle 'Add Case' button click
  async presentAddCaseDialog() {
    console.log("Add Case button clicked");
    // Replace with your form presentation logic
     const modal = await this.modalController.create({
       component: AddCaseComponent, // Replace with your component
       cssClass: 'your-custom-class' // Use a custom class if needed
     });
     return await modal.present();
  }
}
