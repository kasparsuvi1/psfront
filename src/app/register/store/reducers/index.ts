import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {registerReducer, RegisterState} from './register.reducers';

export interface RegisterViewState {
  register: RegisterState;
}

export const reducers: ActionReducerMap<RegisterViewState> = {
  register: registerReducer
};

export const getRegisterViewsState = createFeatureSelector<RegisterViewState>('register');
