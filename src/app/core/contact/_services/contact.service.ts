import { Injectable } from '@angular/core';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';
// 
// Store
import { Store } from '@ngrx/store';
import { AppState } from './../../../app.reducer';

import { HttpService, AlertsService } from './../../../services';
// Environments
import { environment } from './../../../../environments/environment';

import * as contactStore from '../_actions/contact.actions';
import { Contact } from '../_models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
    constructor(
      private _http: HttpService,
      private _alerts: AlertsService,
      private store: Store<AppState>,
    ) {

    }

    errorsResponse = (errors:HttpErrorResponse) => {
        this._alerts.messageError(
            'Error', 
            'Ha ocurrido un error en el servidor al momento de enviar la información',
            'Entendido'
        );

        return throwError('');
    }

    requestContact = ( name:string, email: string, message: string ) => {
        const params = new HttpParams()
          .set('name', name)
          .set('email', email )
          .set('message', message );
        
        // Use Redux
        let contactData = new Contact(name,email,message);
        this.setContact([contactData]);

        return this._http.sendPostRequest( `${environment.endpoints.api}${environment.endpoints.contact}` , params )
                        .pipe(catchError( this.errorsResponse ));
    }

    setContact = ( contactData: Contact[] ) => {
        // Save Redux
        this.store.dispatch( contactStore.setContact({ contact: contactData })  );
    }
}