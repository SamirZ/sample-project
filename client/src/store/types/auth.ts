import { RouteComponentProps } from 'react-router-dom';

// TYPE CONSTANTS
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGOUT = 'LOGOUT';

// ACTION INTERFACES
// START LoginAction
export interface LoginAction {
    type: typeof LOGIN;
    payload: {
        email: string;
        password: string;
        routerProps: RouteComponentProps;
    };
}

export interface LoginActionSuccess {
    type: typeof LOGIN_SUCCESS;
    payload: {
        data: string;
    };
}

export interface LoginActionFaliure {
    type: typeof LOGIN_FAILURE;
    payload: {
        error: any;
    };
}
// END LoginAction

// START RegisterAction
export interface RegisterAction {
    type: typeof REGISTER;
    payload: {
        email: string;
        name: string;
        password: string;
        passwordConfirmation: string;
        routerProps: RouteComponentProps;
    };
}

export interface RegisterActionSuccess {
    type: typeof REGISTER_SUCCESS;
    payload: {
        data: string;
    };
}

export interface RegisterActionFaliure {
    type: typeof REGISTER_FAILURE;
    payload: {
        error: any;
    };
}
// END RegisterAction

// START LogoutAction
export interface LogoutAction {
    type: typeof LOGOUT;
}
// END LogoutAction

// ACTION TYPES
export type AuthActionTypes =
    | LoginAction
    | LoginActionSuccess
    | LoginActionFaliure
    | RegisterAction
    | RegisterActionSuccess
    | RegisterActionFaliure
    | LogoutAction;
