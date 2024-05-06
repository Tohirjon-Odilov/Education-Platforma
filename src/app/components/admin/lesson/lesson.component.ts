import { Component } from '@angular/core';
import { CrudService } from '../../../services/CRUDs/crud.service';
import { LessonModel } from '../../../models/lesson-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss',
})
export class LessonComponent {
  constructor(private crudService: CrudService, private http: HttpClient) {}
  title: string = '';
  expForWaatching: number = 5;
  selectedFile: File | null = null;
  // courseId: string = 'a1892ffc-bfeb-4913-a2b7-c9d3e50a1155';
  videoFile: any;

  lesson: LessonModel = {
    Title: '',
    CourseId: 'a1892ffc-bfeb-4913-a2b7-c9d3e50a1155',
    ExpForWatching: 0,
    Video: null,
  };

  private base64textString: String = '';

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }

  // name = 'Angular';

  handleFileSelect(evt: any) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }

  submit() {
    this.lesson.Title = this.title;
    this.lesson.ExpForWatching = this.expForWaatching;
    this.lesson.Video = this.base64textString;
    console.log(this.lesson);
    try {
      // this.crudService.CreateLesson(this.lesson).subscribe(res => {
      //   console.log(res)
      //   if(res.isSuccess){
      //     alert('Succesful')
      //   }
      //   else{
      //     alert('Unsuccesful')
      //   }
      // })
      alert('Succesful');
    } catch (error) {
      console.log(error);
      alert('Unsuccesful');
    }

    this.title = '';
    this.expForWaatching = 5;
    this.videoFile = null;
  }

  onSubmit() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('photo', this.selectedFile);

      // Send the photo to the server
      this.http.post<any>('https://example.com/upload', formData).subscribe(
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
