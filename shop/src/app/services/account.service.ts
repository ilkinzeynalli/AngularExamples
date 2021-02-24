import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }

  isLoggedIn: boolean = false;

  logIn(user: User): boolean {
    if (user.email == "ilkin@gmail.com" && user.password == "12345") {
      this.isLoggedIn = true;
      localStorage.setItem("userName", user.email);

      return true;
    }

    this.isLoggedIn = false;
    return false;
  }

  logOut(){
    this.isLoggedIn = false;
    localStorage.removeItem("userName");
  }

  checkIsLogedIn(): boolean{
    return this.isLoggedIn;
  }

}
