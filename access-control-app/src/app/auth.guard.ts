import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from './user/user';
import { LoginService } from './login/login.service';
import { SessionDTO } from './login/sessionDTO';

@Injectable()
export class AuthGuard implements CanActivate {
    isValidSession: boolean;
    sessionDTO: SessionDTO = new SessionDTO();

    constructor(
      private router: Router,
      private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.sessionDTO['userName'] = localStorage.getItem('currentUserName');
        this.sessionDTO['jwtToken'] =localStorage.getItem('jwtToken');

        this.loginService
            .validateSession(this.sessionDTO)
            .then(isValidSession => {
              this.isValidSession = isValidSession;

              if (!this.isValidSession) {
                this.router.navigate(['/login']);
                console.log("false" + localStorage.getItem('currentUserName'));
                return false;
              }
            });
        return true;
    }
}
