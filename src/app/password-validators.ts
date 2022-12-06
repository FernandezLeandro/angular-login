import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordValidators{
constructor(){}

    static passwordValidatorsRegEx(regex: RegExp, error: ValidationErrors): ValidatorFn{
        return (control: AbstractControl): ValidationErrors | null => {
            if(!control.value){
                return null;
            }
            const valid = regex.test(control.value);
            return valid ? null : error;
        }
    }
}