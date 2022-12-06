import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { PasswordValidators } from '../password-validators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  public formLogin!: FormGroup;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup ({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        PasswordValidators.passwordValidatorsRegEx(new RegExp("(?=.*[0-9])"), {
          requiresDigit: true
        }),
        PasswordValidators.passwordValidatorsRegEx(new RegExp("(?=.*[A-Z])"), {
          requiresUppercase: true
        }),
        PasswordValidators.passwordValidatorsRegEx(new RegExp("(?=.*[a-z])"), {
          requiresLowercase: true
        }),
        PasswordValidators.passwordValidatorsRegEx(new RegExp("(?=.*[$@^!%*?&])"), {
          requiresSpecialChars: true
        })
      ])
    })
  }

  submit(){
    this.router.navigate(['/home']);
  }

  get email(){
    return this.formLogin.get('email');
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
