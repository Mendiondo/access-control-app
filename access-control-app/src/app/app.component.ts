import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import {MdDialog, MdDialogRef, MdSnackBar, MdSidenav, MdDialogConfig} from '@angular/material';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService]
})
export class AppComponent {

  constructor(private loginService: LoginService) { }

  logout() {
    this.loginService.logout();
  }
}
