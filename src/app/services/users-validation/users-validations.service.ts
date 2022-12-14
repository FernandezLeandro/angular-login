import { User } from '../../model/User';
import { Injectable } from '@angular/core';
import { USERS } from 'src/app/model/mock-users';

@Injectable({
  providedIn: 'root'
})
export class UsersValidationsService {

  constructor() { }

  existUser(email: string) {
    return USERS.some((obj) => {
      return (obj.email === email)
    });
  }

  validateLoggin(email: string, password: string) {
    return USERS.some((obj) => {
      return (obj.email === email) && (obj.password === password)
    });
  }

  registerUser(email: string, password: string) {
    if (!this.existUser(email)) {
      USERS.push({ email, password });
      return true;
    } else
      return false;
  }
}
