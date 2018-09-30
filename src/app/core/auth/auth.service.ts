import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { User } from './entity/user';
import { UserDto } from './entity/user.dto';
import { UserCredentials } from './entity/user-credentials';
import { UserStore } from '../storage/user-store';

const userDto = {
  firstName: 'Vasya',
  lastName: 'Vasilich',
  authToken: 'ASDFGGASDASDASD',
  skill: "java",
  contactInfo: "09988776654"
};

@Injectable()
export class AuthService {

  constructor(
    // private http: HttpClient
    private userStore: UserStore
  ) {}


  login(creds: UserCredentials): Observable<User> {
    // this.http.get<UserDto>('login', creds)
    return of(userDto).pipe(
      map((response: UserDto) => new User(
        response.firstName,
        response.lastName,
        response.authToken,
        response.skill,
        response.contactInfo
      )),
      tap((user: User) => this.userStore.update(user))
    );
  }
}
