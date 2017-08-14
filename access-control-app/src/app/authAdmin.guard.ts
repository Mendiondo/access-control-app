import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from './user/user';
import { LoginService } from './login/login.service';
import { SessionDTO } from './login/sessionDTO';
import { AlertService } from './alert/alert.service';

@Injectable()
export class AuthAdminGuard implements CanActivate {
    isValidSession: boolean;
    sessionDTO: SessionDTO = new SessionDTO();

    constructor(
      private router: Router,
      private loginService: LoginService,
      private alertService: AlertService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

      this.sessionDTO['userName'] = localStorage.getItem('currentUserName');
      this.sessionDTO['jwtToken'] =localStorage.getItem('jwtToken');
      console.log("dto");
      console.log(this.sessionDTO);

      this.loginService
          .validateSessionAsAdmin(this.sessionDTO)
          .then(isValidSession => {
            this.isValidSession = isValidSession;
            console.log(isValidSession);

            if (!this.isValidSession) {
              this.alertService.openDialog("Admin access only!");
              this.router.navigate(['/home']);
              console.log("false" + localStorage.getItem('currentUserName'));
              return false;
            }
          });
      return true;
    }
}
