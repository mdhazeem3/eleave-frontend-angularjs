import { inject } from '@angular/core';
import { CanActivateFn, Router, ResolveFn } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  // authService.currentUser.pipe
  if(authService.currentUserValue){
    return true
  }else{
    return router.navigate(['/login'])
  
  }
};