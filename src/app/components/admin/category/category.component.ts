import { UserService } from './../../../services/CRUDs/user.service';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../services/CRUDs/crud.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
})
export class CategoryComponent implements OnInit {
  name = '';
  // students: Student[] = STUDENTS;
  topStudents: any;
  user: any;
  constructor(
    private crudService: CrudService,
    private UserService: UserService
  ) {}

  ngOnInit(): void {
    this.UserService.getAllUsers().subscribe((res) => {
      console.log(res);
      this.topStudents = res;

      this.user = res.find(
        (user: any) => user.id === 'a2ba924a-4ae0-4220-a08b-5aa1ecf359d6'
      );

      localStorage.setItem('user', JSON.stringify(this.user));

      console.log(this.user.photoPath);
    });
  }
  
  submit() {
    // Add your submit logic here
    console.log('Keldi');

    try {
      this.crudService.CreateCategory(this.name).subscribe((res) => {
        if (res.isSuccess) {
          alert('Succesful');
        } else {
          alert('Unsuccesful');
        }
        console.log(res);
      });
      this.name = '';
    } catch (error) {
      console.log(error);
      alert('error');
    }
  }
}
