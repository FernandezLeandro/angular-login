import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class CustomValidationsService {

  constructor() { }

  public passwordValidatorsRegEx(regex: RegExp, error: ValidationErrors): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        if(!control.value){
            return null;
        }
        const valid = regex.test(control.value);
        return valid ? null : error;
    }
}
}
