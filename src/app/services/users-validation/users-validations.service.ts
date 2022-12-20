import { FormGroup } from '@angular/forms';
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

  public fieldValue(form: FormGroup, field: string) {
    return form.get(field)?.value;
  }

  registerUser(form: FormGroup) {
    if (!this.existUser(form.get('email')?.value)) {
      let name= this.fieldValue(form,'name');
      let surname = form.get('surname')?.value;
      let phone = form.get('phone')?.value;
      let email = form.get('email')?.value;
      let password = form.get('password')?.value;
      USERS.push({name, surname, phone, email, password});  
      return true;
    } else
      return false;
  }

  
}
