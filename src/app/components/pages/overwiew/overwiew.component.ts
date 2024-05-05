import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/CRUDs/user.service';

@Component({
  selector: 'app-overwiew',
  templateUrl: './overwiew.component.html',
  styleUrl: './overwiew.component.scss'
})
export class OverwiewComponent implements OnInit{
topStudents: any;

  constructor(private userService: UserService) { 

  }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(res => {
      console.log(res);
      this.topStudents = res.slice(0, 5);
    })

  }

  



  


}
