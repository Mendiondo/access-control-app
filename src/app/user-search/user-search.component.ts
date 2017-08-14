import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { AppRoutingModule } from '../app-routing.module';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [UserService]
})
export class UserSearchComponent implements OnInit {

  users: Observable<User[]>;
  private searchTerms = new Subject<string>();
  isSearchActive: boolean = false;
  dis: any

  constructor(private userService: UserService) {}
  search(term: string): void {
    if (term.length < 2) {
      this.getUsers();
    } else {
      this.activateSearch();
      this.searchTerms.next(term);
    }

  }

  getUsers(): void {
    this.dis = this.userService
        .getUsers()
        .subscribe(users => this.users = Observable.of<User[]>(users),
                error => {
                    console.log(error);
                });
  }

  activateSearch(): void {
    if (this.isSearchActive == false) {
      this.searchTerms
        .debounceTime(300)        // wait 300ms after each keystroke before considering the term
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time the term changes
          // return the http search observable
          ? this.userService.search(term)
          // or the observable of empty heroes if there was no search term
          : Observable.of<User[]>([]))
        .subscribe(users => this.users = Observable.of<User[]>(users));
      this.isSearchActive = true;
    } else {
      this.searchTerms.subscribe();
      this.isSearchActive = true;
    }
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
