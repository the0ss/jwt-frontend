import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn=inject(UserAuthService)
  const router = inject(Router);

  if(isLoggedIn.isLoggedIn()){
    return true;
    
  }else{
    router.navigateByUrl('/login');
    return false;
  }
};
