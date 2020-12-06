import { RootState } from '../reducers';

export const getLoginError = (state: RootState) => state.auth.loginError;
export const getRegisterError = (state: RootState) => state.auth.registerError;
