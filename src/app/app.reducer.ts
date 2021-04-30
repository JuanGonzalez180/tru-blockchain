import { ActionReducerMap } from '@ngrx/store';
import * as contact from './core/contact/_reducers/contact.reducers';

export interface AppState{
    contact: contact.State
}

export const appReducers: ActionReducerMap<AppState> = {
    contact: contact.contactReducer,
}