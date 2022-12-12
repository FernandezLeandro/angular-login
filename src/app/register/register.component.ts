import { Component, OnInit, Sanitizer } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidationsService } from '../services/custon-validations/custom-validations.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public preview?: string;
  public formRegister!: FormGroup;

  constructor(private customValidations:CustomValidationsService, private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.formRegister = new FormGroup({
      name: new FormControl ('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      bornDate: new FormControl('', [
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.min(999999999)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        this.customValidations.valitatorsNumbersValid(),
        this.customValidations.valitatorsUpperCaseValid(),
        this.customValidations.validatorsLowerCaseValid(),
        this.customValidations.validatorsSpecialCharacter()
      ]),
      avatar: new FormControl('', [
        Validators.required
      ]),
      terms: new FormControl (false, [
        Validators.required,
        Validators.requiredTrue
      ])
    })
  }

  register (){
    this.router.navigate(['/home']);   
  }

  public fieldValid(field: string){
    return this.formRegister.controls[field].errors === null;
  }

  public evaluateFieldRequiredValid(field : string){
    return !this.formRegister.controls[field].hasError("required");
  }

  public evaluateFieldRequiredTrueValid(field : string){
    return !this.formRegister.controls[field].hasError('required', 'terms');
  }

  public evaluateFieldMinLengthValid(field : string){
    return !this.formRegister.controls[field].hasError("minlength");
  }

  get emailValidateStructure(){
    return !this.formRegister.controls["email"].hasError("email");
  }

  get min(){
    return !this.formRegister.controls["phone"].hasError("min");
  }

  get passwordValid(){
    return this.formRegister.controls["password"].errors === null;
  }

  get requiredValid(){
    return !this.formRegister.controls["password"].hasError("required");
  }

  get minLengthValid(){
    return !this.formRegister.controls["password"].hasError("minlength");
  }

  get requiresDigitValid(){
    return !this.formRegister.controls["password"].hasError("requiresDigit");
  }

  get requiresUpperCaseValid(){
    return !this.formRegister.controls["password"].hasError("requiresUppercase");
  }

  get requiresLowerCaseValid(){
    return !this.formRegister.controls["password"].hasError("requiresLowercase");
  }

  get requiresSpecialCharsValid(){
    return !this.formRegister.controls["password"].hasError("requiresSpecialChars");
  }

  public isDirty(field: string): boolean {
    return this.formRegister.controls[field].dirty;
  }

  public isTouched(field: string): boolean {
    return this.formRegister.controls[field].touched;
  }

  captureFile(event: any){
    const fileCapturated = event.target.files[0];
    this.extraerBase64(fileCapturated).then((imagen: any) => {
      this.preview = imagen.base;
      console.log(imagen);

    })

  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })
}
