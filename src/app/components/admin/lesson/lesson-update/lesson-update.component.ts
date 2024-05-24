import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson-update',
  templateUrl: './lesson-update.component.html',
  styleUrl: './lesson-update.component.scss'
})
export class LessonUpdateComponent {
  selectedFile: File | null = null;
  Id = '';
  title = '';
  expForWatching = '';


  handleFileInput(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadVideo(): void {
    if (!this.selectedFile) {
      return;
    }
  }

  submit() {
    
  }
}
