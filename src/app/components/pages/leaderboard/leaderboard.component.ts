import { Component } from '@angular/core';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent {

  selected1: string = "Alltime"
  selected2: string = "Alltime"
  selected3: string = "Alltime"

  addClass(){
    this.selected1 = "weekly"
    this.selected2 = "Alltime"
    this.selected3 = "Alltime "
  }
  addClass2(){
    this.selected2 = "weekly"
    this.selected1 = "Alltime"
    this.selected3 = "Alltime "
  }
  addClass3(){
    this.selected3 = "weekly"
    this.selected2 = "Alltime"
    this.selected1 = "Alltime "
  }


}
