import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthService } from '../services/user-auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private userAuthService:UserAuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //To allow only login API// Always REMEM.
    if(request.headers.get('No-Auth')==='True'){
      return next.handle(request.clone());
    }
    const token=this.userAuthService.getToken();
    request=request.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    })
    return next.handle(request);
  }
}
