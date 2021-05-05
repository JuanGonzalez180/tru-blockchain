import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {
  constructor() { }

  static validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config: { [unit: string]: string } = {
      required: 'Este campo es requerido',
      invalidCreditCard: 'Is invalid credit card number',
      invalidEmailAddress: 'No es un correo electrónico válido',
      invalidPassword: 'Contraseña invalida. La contraseña debe tener al menos 6 caracteres y contener un número.',
      notSame: 'Las contraseñas no coinciden',
      minlength: `Mínimo de caracteres ${validatorValue.requiredLength}`,
      invalidNumeric: `El campo permite solo números`,
      invalidUrl: `No es una url válida`
    };
    return config[validatorName];
  }

  static emailValidator(control: any) {
    // RFC 2822 compliant regex
    if (
      control && control.value && control.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  static numericValidator(control: any){
    if (
      control.value.match(
        /^[0-9]*$/
      )
    ) {
      return null;
    } else {
      return { invalidNumeric: true };
    }
  }

  static urlValidator(control: any){
    if (
      control.value.match(
        '^(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
      )
    ) {
      return null;
    } else if( !control.value ){
      return null;
    }else {
      return { invalidUrl: true };
    }
  }

  static passwordValidator(control: any) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }

  static passwordValidatorConfirm(control: any ) {
    if( control.parent && control.parent.controls && control.parent.controls['password'] ){
      const passwordConfirm = control.parent.controls['password'].value;
      if( control.value === passwordConfirm ){
        return null;
      }else{
        return { notSame: true };
      }
    }else{
      return null;
    }
  }
}
