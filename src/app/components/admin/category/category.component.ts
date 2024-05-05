import { Component } from '@angular/core';
import { CrudService } from '../../../services/CRUDs/crud.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  name = '';
  constructor(private crudService: CrudService) {
    
  }
  submit() {
    // Add your submit logic here
    console.log('Keldi');
    
    try {
      this.crudService.CreateCategory(this.name).subscribe(res => {
        if(res.isSuccess){
          alert('Succesful')
        }
        else{
          alert('Unsuccesful')
        }
        console.log(res)
      });
      this.name = '';
    }
    catch (error) {
      console.log(error);
      alert('error');
    }
  }
}
