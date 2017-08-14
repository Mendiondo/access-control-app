import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../user/user';
import { AppRoutingModule } from '../app-routing.module';
import { LoginService } from './login.service';
import { SessionDTO } from './sessionDTO';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService, AlertService]
})
export class LoginComponent implements OnInit {
    user: User = new User();
    sessionDTO: SessionDTO = new SessionDTO();

    constructor(
      private loginService: LoginService,
      private router: Router,
      public alertService: AlertService) { }

    ngOnInit() {
        this.loginService.logout();
    }

    login() {
      console.log(this.user);

      this.loginService
          .login(this.user)
          .then(sessionDTO => {
            this.sessionDTO = sessionDTO;
            console.log(this.sessionDTO);
            if (this.sessionDTO != null) {
              //console.log(this.sessionDTO);
              localStorage.setItem('currentUserName', this.sessionDTO['userName']);
              localStorage.setItem('jwtToken', this.sessionDTO['jwtToken']);
              this.router.navigate(['/home']);
            } else {
              this.alertService.openDialog("Wrong User Name / Password");
            }
          });
    }

}
