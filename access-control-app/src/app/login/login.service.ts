import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { User } from '../user/user';
import { Router } from '@angular/router';
import { SessionDTO } from './sessionDTO';

@Injectable()
export class LoginService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  private loginApiUrl = 'http://localhost:8080/access-control-service/login/';

  constructor(private http: Http, private router: Router) { }

  login(user: User): Promise<SessionDTO> {
    return this.http
              .post(this.loginApiUrl, user, this.options)
              .toPromise()
              .then(response => response.json() as SessionDTO)
              .catch(this.handleError);
  }

  logout() {
      localStorage.removeItem('currentUserName');
      localStorage.removeItem('jwtToken');
      this.router.navigate(['/login']);
  }

  validateSession(sessionDTO: SessionDTO): Promise<boolean> {
    return this.http
              .post(this.loginApiUrl + "validateSession", sessionDTO, this.options)
              .toPromise()
              .then(response => response.json() as boolean)
              .catch(this.handleError);
  }

  validateSessionAsAdmin(sessionDTO: SessionDTO): Promise<boolean> {
    return this.http
              .post(this.loginApiUrl + "validateSessionAsAdmin", sessionDTO, this.options)
              .toPromise()
              .then(response => response.json() as boolean)
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
