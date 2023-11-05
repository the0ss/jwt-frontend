import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj:any ={
    "email":"",
    "password":""
  }
  constructor(private userService:UserService,private router:Router,private userAuthService:UserAuthService) {

    document.addEventListener('DOMContentLoaded', () => {
      this.initializeButtons();
    });
  }

  initializeButtons() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    } else {
      console.error('One or more elements not found.');
    }
  }
  onLogIn(){
    console.log("Form Submitted.")
    this.userService.login(this.loginObj).subscribe((res:any)=>{
      debugger;
      console.log(res);
      this.userAuthService.setRoles(res.role);
      this.userAuthService.setToken(res.token);
      if(res.role==='ADMIN'){
        this.router.navigateByUrl("/admin");
      }else{
        this.router.navigateByUrl("/user");
      }
    })
  }
}

