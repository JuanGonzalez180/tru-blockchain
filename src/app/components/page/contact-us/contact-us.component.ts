import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidationsService, AlertsService } from './../../../services';
import { ContactService } from './../../../core/contact'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  // Formulario Contáctenos
  contactForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private _contactService: ContactService,
    private _alerts: AlertsService,
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, ValidationsService.emailValidator]],
      message: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }
  
  onSubmitContact = () => {

    if( this.contactForm.valid ){
      // Enviar formulario
      const { name, email, message } = this.contactForm.value;
      this._contactService.requestContact( name, email, message )
        .subscribe( result => {
          // console.log( result );
          this._alerts.messageSuccess(
            '¡Buen trabajo!', 
            '¡Se ha enviado el correo correctamente!',
            'Entendido'
          );
          this.contactForm.reset();
        })
    }else{
      // Validar los campos al dar clic en el botón
      ValidationsService.validateAllFormFields(this.contactForm);
    }
  }
}
