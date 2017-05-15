import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { SessionDTO } from '../login/sessionDTO';
import { LoginService } from '../login/login.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService, LoginService]
})
export class HomeComponent {
  sessionDTO: SessionDTO = new SessionDTO();
  isValidSession: boolean;

  constructor(
    private userService: UserService,
    private loginService: LoginService) { }

  validateSession(): void {
    this.sessionDTO['userName'] = localStorage.getItem('currentUserName');
    this.sessionDTO['jwtToken'] =localStorage.getItem('jwtToken');
    console.log(this.sessionDTO);

    this.loginService
        .validateSession(this.sessionDTO)
        .then(isValidSession => {
          this.isValidSession = isValidSession;
          console.log(this.sessionDTO)
    });
  }

}
