import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { RegularExpressions } from './regular-expressions';

@Injectable({
  providedIn: 'root'
})

export class CustomValidationsService {
  

  constructor() { }

  private passwordValidatorsRegEx(regex: RegExp, error: ValidationErrors): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        if(!control.value){
            return null;
        }
        const valid = regex.test(control.value);
        return valid ? null : error;
    }
  }

  public valitatorsNumbersValid (): ValidatorFn{
    return this.passwordValidatorsRegEx(RegularExpressions.atLeastANumber, {requiresDigit: true});
  }
  
  public valitatorsUpperCaseValid (): ValidatorFn{
    return (this.passwordValidatorsRegEx(RegularExpressions.atLeastAUpperCase, {requiresUppercase: true}));
  }

  public validatorsLowerCaseValid (): ValidatorFn{
    return this.passwordValidatorsRegEx(RegularExpressions.atLeastALowerCase, {requiresLowercase: true});
  }

  public validatorsSpecialCharacter(): ValidatorFn {
    return this.passwordValidatorsRegEx(RegularExpressions.atLeastASpecialCharacter, {requiresSpecialChars: true});
  }

}