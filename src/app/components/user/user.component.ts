import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  
  message: any;
  constructor(private userService:UserService){
    this.forUser();
  }

  forUser(){
    this.userService.forUser().subscribe(
      (res:any)=>{
        console.log(res);
        this.message=res;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
