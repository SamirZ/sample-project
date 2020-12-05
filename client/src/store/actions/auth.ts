import { RouteComponentProps } from 'react-router-dom';
import {
    AuthActionTypes,
    LOGIN,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER,
    REGISTER_FAILURE,
    REGISTER_SUCCESS,
} from '../types';

// LOGIN ACTIONS START
export const loginAction = (email: string, password: string, routerProps: RouteComponentProps): AuthActionTypes => ({
    type: LOGIN,
    payload: {
        email,
        password,
        routerProps,
    },
});

export const loginActionSuccess = (data: string): AuthActionTypes => ({
    type: LOGIN_SUCCESS,
    payload: {
        data,
    },
});

export const loginActionFailure = (error: any): AuthActionTypes => ({
    type: LOGIN_FAILURE,
    payload: {
        error,
    },
});
// LOGIN ACTIONS END

// REGISTER ACTIONS START
export const registerAction = (email: string, name: string, password: string, passwordConfirmation: string, routerProps: RouteComponentProps): AuthActionTypes => ({
    type: REGISTER,
    payload: {
        email,
        name,
        password,
        passwordConfirmation,
        routerProps,
    },
});

export const registerActionSuccess = (data: string): AuthActionTypes => ({
    type: REGISTER_SUCCESS,
    payload: {
        data,
    },
});

export const registerActionFailure = (error: any): AuthActionTypes => ({
    type: REGISTER_FAILURE,
    payload: {
        error,
    },
});
// REGISTER ACTIONS END

// REGISTER ACTIONS START
export const logoutAction = (): AuthActionTypes => ({
    type: LOGOUT,
});
// REGISTER ACTIONS END