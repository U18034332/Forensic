import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-doc-management',
  templateUrl: './doc-management.component.html',
  styleUrls: ['./doc-management.component.scss']
})
export class DocManagementComponent implements OnInit {

  progress: number | undefined;
  errorMessage: string | undefined;
  filesToUpload: File[] = [];
  cases: any[] = []; // Array to hold cases
  filteredCases: any[] = []; // Array to hold filtered cases
  searchQuery: string = ''; // User's search input
  selectedCase: any; // Selected case object

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch all cases initially or load them from a service
    this.cases = [
      { id: 1, name: 'Case 1 Description' },
      { id: 2, name: 'Case 2 Description' },
      { id: 3, name: 'Case 3 Description' },
      // Add more cases as needed
    ];
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.filesToUpload.push(files.item(i)!); // Add each selected file to the filesToUpload array
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer!.files;
    for (let i = 0; i < files.length; i++) {
      this.filesToUpload.push(files.item(i)!); // Add each dropped file to the filesToUpload array
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onSearch() {
    if (this.searchQuery.length > 0) {
      this.filteredCases = this.cases.filter(caseItem =>
        caseItem.id.toString().includes(this.searchQuery)
      );
    } else {
      this.filteredCases = [];
    }
  }

  selectCase(caseItem: any) {
    this.selectedCase = caseItem; // Store the selected case
    this.filteredCases = []; // Clear search results after selection
    this.searchQuery = `${caseItem.id} - ${caseItem.name}`; // Display selected case in input field
  }

  uploadFiles() {
    if (!this.selectedCase) {
      this.errorMessage = 'Please select a case before uploading files.';
      return;
    }

    if (this.filesToUpload.length === 0) {
      this.errorMessage = 'Please select at least one file to upload.';
      return;
    }

    // Reset progress and error message
    this.progress = 0;
    this.errorMessage = undefined;

    const totalFiles = this.filesToUpload.length;
    let filesUploaded = 0;

    this.filesToUpload.forEach(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('caseId', this.selectedCase.id); // Include selected case ID

      const uploadReq = new HttpRequest('POST', 'https://your-upload-api-endpoint', formData, {
        reportProgress: true,
      });

      this.http.request(uploadReq).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round((100 * event.loaded) / event.total!);
        } else if (event instanceof HttpResponse) {
          // File uploaded successfully
          console.log('File uploaded:', event.body);
          filesUploaded++;

          // If all files uploaded, reset progress and clear filesToUpload array
          if (filesUploaded === totalFiles) {
            this.progress = undefined;
            this.filesToUpload = []; // Clear files after successful upload
            alert('All files uploaded successfully!');
          }
        }
      }, error => {
        // Handle upload error
        console.error('Upload error:', error);
        this.errorMessage = 'Failed to upload one or more files. Please try again.';
      });
    });
  }

  removeFile(index: number) {
    this.filesToUpload.splice(index, 1); // Remove file from filesToUpload array
  }
}
