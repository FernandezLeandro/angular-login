import { User } from './User';
import { Injectable } from '@angular/core';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UsersValidationsService {
  

  constructor() { }

  existUserAndPassword(email: string, password:string){
    let exist = false;
    for(let user of USERS){
      if ((user.email == email) && (user.password== password)){
        exist = true;
      }
    }
    return exist;
  }

  existUser(email: string){
    let exist = false;
    for(let user of USERS){
      if ((user.email == email)){
        exist = true;
      }
    }
    return exist;
  }

  validateLoggin(email: string, password: string) {
    return this.existUserAndPassword(email, password);
  }

  registerUser(email: string, password: string){
    if(!this.existUser(email)){
      USERS.push({email, password});
      return true;
    } else
        return false;
  }

  showUsers(){
    for(let user of USERS){
      console.log(user.email);
      console.log(user.password);
    }
  }

}