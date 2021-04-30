import { createAction, props } from '@ngrx/store';
import { Contact } from './../_models/contact.model';

export const unSetContact = createAction('[Contact] unSetContact');

export const setContact = createAction('[Contact] setContact',
    props< { contact: Contact[] } >()
);