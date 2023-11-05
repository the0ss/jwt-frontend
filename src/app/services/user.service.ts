import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_PATH="http://localhost:8080"
  requestHeader=new HttpHeaders(
    {"No-Auth":"True"}
  );
  constructor(private http:HttpClient,private userAuthService:UserAuthService) { }

  public login(loginObj:any){
    return this.http.post(this.API_PATH+"/api/v1/auth/authen",loginObj,{headers:this.requestHeader});
  }
  public forUser(){
    return this.http.get(this.API_PATH+"/api/forUser",{responseType:"text"})
  }
  public roleMatch(allowedRoles:any){
    let isMatch=false;
    const userRoles:any =this.userAuthService.getRoles();
    if(userRoles!=null&&userRoles){
      if(userRoles===allowedRoles){
        isMatch=true;
        return isMatch;
      }else{
        return isMatch;
      }
    }
    return false;
  }
}
