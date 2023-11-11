import { CanActivateFn, Router } from '@angular/router';
import { AuthentificationService } from '../authentification.service';
import { inject } from '@angular/core';
import { tap } from 'rxjs';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService : AuthentificationService = inject(AuthentificationService)
  const router : Router = inject(Router);

  return authService.loggedIn$.pipe(
    tap(
      (isLogged)=> { if (!isLogged) router.navigate(['cv'])}
    )
  )
};
