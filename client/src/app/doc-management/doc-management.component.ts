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
  cases: { id: number, name: string }[] = [];
  filteredCases: { id: number, name: string }[] = [];
  searchQuery: string = '';
  selectedCase: { id: number, name: string } | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch all cases (you can replace this with an API call)
    this.cases = [
      { id: 1, name: 'Case 1 Description' },
      { id: 2, name: 'Case 2 Description' },
      { id: 3, name: 'Case 3 Description' },
    ];
  }

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.filesToUpload.push(files.item(i)!);
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    const files: FileList = event.dataTransfer!.files;
    for (let i = 0; i < files.length; i++) {
      this.filesToUpload.push(files.item(i)!);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  onSearch(): void {
    if (this.searchQuery.length > 0) {
      this.filteredCases = this.cases.filter(caseItem =>
        caseItem.id.toString().includes(this.searchQuery) || 
        caseItem.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredCases = [];
    }
  }

  selectCase(caseItem: { id: number, name: string }): void {
    this.selectedCase = caseItem;
    this.filteredCases = [];
    this.searchQuery = `${caseItem.id} - ${caseItem.name}`;
  }

  uploadFiles(): void {
    if (!this.selectedCase) {
      this.errorMessage = 'Please select a case before uploading files.';
      return;
    }

    if (this.filesToUpload.length === 0) {
      this.errorMessage = 'Please select at least one file to upload.';
      return;
    }

    this.progress = 0;
    this.errorMessage = undefined;
    const totalFiles = this.filesToUpload.length;
    let filesUploaded = 0;

    this.filesToUpload.forEach(file => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('caseId', this.selectedCase!.id.toString());

      const uploadReq = new HttpRequest('POST', 'https://your-upload-api-endpoint', formData, {
        reportProgress: true,
      });

      this.http.request(uploadReq).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round((100 * event.loaded) / event.total!);
        } else if (event instanceof HttpResponse) {
          filesUploaded++;

          if (filesUploaded === totalFiles) {
            this.progress = undefined;
            this.filesToUpload = [];
            alert('All files uploaded successfully!');
          }
        }
      }, error => {
        console.error('Upload error:', error);
        this.errorMessage = 'Failed to upload one or more files. Please try again.';
      });
    });
  }

  removeFile(index: number): void {
    this.filesToUpload.splice(index, 1);
  }
}

