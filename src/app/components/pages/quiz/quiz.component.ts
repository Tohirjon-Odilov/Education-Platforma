import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {
  selected: string = "form-item"
  selected2: string = "form-item"
  selected3: string = "form-item"
  selected4: string = "form-item"
  selected5: string = "form-item"
  
  addClass(){
    this.selected = "form-item form-item-selected"
    this.selected2 = "form-item"
    this.selected3 = "form-item"
    this.selected4 = "form-item"
    this.selected5 = "form-item"
    
  }
  addClass2(){
    this.selected2 = "form-item form-item-selected"
    this.selected = "form-item"
    this.selected3 = "form-item"
    this.selected4 = "form-item"
    this.selected5 = "form-item"
  }
  addClass3(){
    this.selected3 = "form-item form-item-selected"
    this.selected = "form-item"
    this.selected2 = "form-item"
    this.selected4 = "form-item"
    this.selected5 = "form-item"
  }
  addClass4(){
    this.selected4 = "form-item form-item-selected"
    this.selected = "form-item"
    this.selected2 = "form-item"
    this.selected3 = "form-item"
    this.selected5 = "form-item"
  }
  addClass5(){
    this.selected5 = "form-item form-item-selected"
    this.selected = "form-item"
    this.selected2 = "form-item"
    this.selected3 = "form-item"
    this.selected4 = "form-item"
  }
}
