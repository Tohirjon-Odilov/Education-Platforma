import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lesson-get-all',
  templateUrl: './lesson-get-all.component.html',
  styleUrl: './lesson-get-all.component.scss'
})
export class LessonGetAllComponent {
  private apiUrl = 'https://edu-api.tohirjon.uz/api/Course/GetAllCourses';
  private lessonsUrl = 'https://edu-api.tohirjon.uz/api/Lesson/GetAllLessons';

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getLessonsByCourseId(courseId: string): Observable<any> {
    return this.http.get<any>(`${this.lessonsUrl}?courseId=${courseId}`);
  }
  courses: any[] = [];
  selectedCourseId: string | null = null;
  lessons: any[] = [];
  selectedLesson: any = null;


  ngOnInit(): void {
    this.getAllCourses().subscribe((res) => {
      this.courses = res;
    });
  }

  onCourseSelect(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCourseId = selectElement.value;
    if (this.selectedCourseId) {
      this.getLessonsByCourseId(this.selectedCourseId).subscribe((res) => {
        this.lessons = res;
        this.selectedLesson = null; // Reset selected lesson
      });
    }
  }

  onLessonSelect(lesson: any): void {
    this.selectedLesson = this.selectedLesson === lesson ? null : lesson;
  }

  onDownloadVideo(videoPath: string): void {
    const link = document.createElement('a');
    link.href = videoPath;
    link.download = videoPath.split('/').pop()!;
    link.click();
  }
}
