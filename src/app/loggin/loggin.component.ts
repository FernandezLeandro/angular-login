import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from '../password-validators';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css']
})
export class LogginComponent implements OnInit {
  public formLogin!: FormGroup;

  submitted = false;
  isWorking = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email:['', 
      [
        Validators.required, 
        Validators.email
      ]
    ],
      password:['', 
      [
        Validators.required,
        Validators.minLength(8),
        //Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$')    
        PasswordValidators
      ]
    ]
    });
  }

  get email(){
    return this.formLogin.get('email');
  }

  get password(){
    return this.formLogin.get('password');
  }
  get f(){
    return this.formLogin.contains;
  }

  get passwordValid(){
    return this.formLogin.controls["password"].errors === null;
  }

  get requiredValid(){
    return !this.formLogin.controls["password"].hasError("required");
  }

  get requiredDigitValid() {
    return !this.formLogin.controls["password"].hasError("requiresDigit");  
  }

  verify(): any{
    this.submitted = true;

    if(this.formLogin.invalid){
      return;
    }

    this.isWorking = true;
    this.formLogin.disable;

    setTimeout(() => {
      this.isWorking = false;
      this.formLogin.enable();
    }, 1500);
  }
}
