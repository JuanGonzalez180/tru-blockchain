import { createReducer, on } from '@ngrx/store';
import * as contact from './../_actions/contact.actions';
import { Contact } from '../_models/contact.model';

export interface State { contact: Contact[]; }
export const initialState: State = { contact: [] } 

const _contactReducer = createReducer(initialState,
    on(contact.setContact, (state, {contact}) => ({ ...state, contact: [...contact] })),
    on(contact.unSetContact, state => ({ ...state, contact: [] })),
);

export function contactReducer(state: any, action: any) {
    return _contactReducer(state, action);
}