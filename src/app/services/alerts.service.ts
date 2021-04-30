import { Injectable } from '@angular/core';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() {

  }

  messageSuccess = ( title: string, message: string, confirmButtonText: string ) => {
    Swal.fire({
      title: title,
      html: message,
      icon: 'success',
      confirmButtonText: confirmButtonText
    });
  }

  messageError = ( title: string, message: string, confirmButtonText: string ) => {
    Swal.fire({
      title: title,
      html: message,
      icon: 'error',
      confirmButtonText: confirmButtonText
    });
  }
}
