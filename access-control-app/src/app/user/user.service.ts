import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { User } from './user';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  private userApiUrl = 'http://localhost:8080/access-control-service/users';

  constructor(private http: Http) { }

  create(user: User): Promise<User> {
    return this.http
              .post(this.userApiUrl, user, this.options)
              .toPromise()
              .then(res => res.json().data as User)
              .catch(this.handleError);
  }

  getUsers(): Observable<User[]> {
    return this.http.get(this.userApiUrl)
             .map(response => response.json() as User[]);
  }

  search(term: string): Observable<User[]> {
    return this.http
             .get(this.userApiUrl + `/search/?term=${term}`)
             .map(response => response.json() as User[]);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
