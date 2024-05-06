import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  user: any;
  selectedFile: File | null = null;
  constructor(private http: HttpClient) {
    localStorage.getItem('user');
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('Id', '9a0299f0-4369-4813-9f27-83a4bf634090');
      formData.append('FullName', 'Homidjon');
      formData.append('Role', 'User');
      formData.append('Photo', this.selectedFile);
      formData.append('Counry', 'Andijon');

      // Send the photo to the server
      this.http
        .put<any>('https://edu-api.tohirjon.uz/api/User/UpdateUser', formData)
        .subscribe(
          (response) => {
            console.log('Photo uploaded successfully!', response);
          },
          (error) => {
            console.error('Error uploading photo:', error);
          }
        );
    }
  }
}
