//import { PasswordValidators } from './../password-validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidationsService } from '../services/custon-validations/custom-validations.service';
import { UsersValidationsService } from '../services/users-validation/users-validations.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  public formLogin!: FormGroup;

  constructor(private router:Router, private customValidations:CustomValidationsService,
    private usersValidation: UsersValidationsService) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup ({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        //Validators.minLength(6),     
        //this.customValidations.valitatorsNumbersValid(),
        //this.customValidations.valitatorsUpperCaseValid(),
        //this.customValidations.validatorsLowerCaseValid(),
        //this.customValidations.validatorsSpecialCharacter()
      ])
    })
    
  }

  loggin(){
    if(this.validateLoggin(this.emailValue, this.passwordValue)){
      this.usersValidation.showUsers();
      this.router.navigate(['/home'])
    }else
      alert('User or Password incorrect');
  }

  validateLoggin(email: string, password: string):boolean{
    return this.usersValidation.validateLoggin(email, password);
  }
  get email(){
    return this.formLogin.get('email');
  }

  get emailValue(){
    return this.formLogin.get('email')?.value;
  }

  get passwordValue(){
    return this.formLogin.get('password')?.value;
  }

  get passwordValid(){
    return this.formLogin.controls["password"].errors === null;
  }

  get requiredValid(){
    return !this.formLogin.controls["password"].hasError("required");
  }

  get minLengthValid(){
    return !this.formLogin.controls["password"].hasError("minlength");
  }

  get requiresDigitValid(){
    return !this.formLogin.controls["password"].hasError("requiresDigit");
  }

  get requiresUpperCaseValid(){
    return !this.formLogin.controls["password"].hasError("requiresUppercase");
  }

  get requiresLowerCaseValid(){
    return !this.formLogin.controls["password"].hasError("requiresLowercase");
  }

  get requiresSpecialCharsValid(){
    return !this.formLogin.controls["password"].hasError("requiresSpecialChars");
  }

  public isDirty(field: string): boolean {
    return this.formLogin.controls[field].dirty;
  }

  public isTouched(field: string): boolean {
    return this.formLogin.controls[field].touched;
  }

}
