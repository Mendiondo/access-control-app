import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../user/user';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService, AlertService]
})
export class RegisterComponent {
  user: User = new User();

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertService) { }

  register(): void {
    console.log('test:')
    console.log(this.user);
    this.userService.create(this.user)
      .then(user => {
        this.alertService.openDialog("User registered with success!");
        this.user = user;
        this.router.navigate(['/home']);
      });
  }

}
