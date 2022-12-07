import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidationsService } from '../services/custon-validations/custom-validations.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formRegister!: FormGroup;

  constructor(private customValidations:CustomValidationsService, private router: Router) {}

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      name: new FormControl ('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      surname: new FormControl(),
      bornDate: new FormControl(),
      phone: new FormControl(),
      username: new FormControl(),

      email: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.email
      ])
    })
  }

  register (){
    this.router.navigate(['/home']);
  }

  get nameValid(){
    return this.formRegister.controls["name"].errors === null;
  }

  public evaluateFieldRequiredValid(field : string){
    return !this.formRegister.controls[field].hasError("required");
  }

  public evaluateFieldMinLengthValid(field : string){
    return !this.formRegister.controls[field].hasError("minlength");
  }
  /*
  get nameRequiredValid(){
    return !this.formRegister.controls["name"].hasError("required");
  }

  get nameMinLength(){
    return !this.formRegister.controls["name"].hasError("minLength");
  }
*/
  get emailValid(){
    return this.formRegister.controls["email"].errors === null;
  }
/*
  get emailRequiredValid(){
    return !this.formRegister.controls["email"].hasError("required");
  }

  get emailMinLength(){
    return !this.formRegister.controls["email"].hasError("minlength");
  }
*/
  get emailValidateStructure(){
    return !this.formRegister.controls["email"].hasError("email");
  }

  get f(){
    return this.formRegister.controls;
  }

  public isDirty(field: string): boolean {
    return this.formRegister.controls[field].dirty;
  }

  public isTouched(field: string): boolean {
    return this.formRegister.controls[field].touched;
  }

  get email(){
    return this.formRegister.get('email');
  }

}
