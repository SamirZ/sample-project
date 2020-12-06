import { LOGIN_FAILURE, REGISTER_FAILURE, AuthActionTypes } from '../types';

export interface AuthState {
    loginError?: string;
    registerError?: string;
}

const initialState: AuthState = {
    loginError: undefined,
    registerError: undefined,
};

export const auth = (
    state = initialState,
    action: AuthActionTypes
): AuthState => {
    switch (action.type) {
        case LOGIN_FAILURE:
            return {
                ...state,
                loginError: action.payload.error,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                registerError: action.payload.error,
            };
        default:
            return state;
    }
};
