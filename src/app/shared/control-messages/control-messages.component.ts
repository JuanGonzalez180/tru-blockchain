import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ValidationsService } from './../../services';

@Component({
  selector: 'control-messages',
  template: `<small class="message-error" *ngIf="errorMessage !== null">{{errorMessage}}</small>`
})
export class ControlMessagesComponent {
  @Input() control: FormControl = new FormControl;
  constructor() { }

  get errorMessage() {
    if( this.control && this.control.errors ){
      for (let propertyName in this.control.errors) {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
          return ValidationsService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        }
      }
    }

    return null;
  }
}