import { Component, Input } from '@angular/core';
import { CrudService } from '../../../../../services/CRUDs/crud.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  inputValue: string = '';
  isFocused: boolean = false;
  placeholder: string = 'Category name';
  categoryId: string = '';
  values: any;
  @Input() items: { name: string, id: string }[] = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void { 
    this.crudService.GetAllCategorys().subscribe(res => {
      this.values = res;

    })
    this.values.find((item: any) => {
      if (item.name === this.inputValue) {
        this.items.push({ name: item.name, id: item.id })
        this.categoryId = item.id;
      }
    })
  }
  onInputFocus() {
    this.isFocused = true;
  }

  onInputBlur() {
    if (!this.inputValue) {
      this.isFocused = false;
    }
  }

  Delete() {
    this.crudService.DeleteCategory(this.categoryId).subscribe(res => {
      if (res.isSuccess) {
        alert('Succesful')
      } else {
        alert('Unsuccesful')
      }
      console.log(res)
    })
  }
}
