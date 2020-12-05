import { call, put, takeLatest } from 'redux-saga/effects';

import { login, logout, register } from '../../api/apiRequest';
import { LOGIN, LoginAction, LOGOUT, REGISTER, RegisterAction } from '../types';
import {
    loginActionSuccess,
    loginActionFailure,
    registerActionSuccess,
    registerActionFailure,
    getUserDetailsAction,
} from '../actions';
import { AuthResponseModel } from '../../models/localapi/auth-response.model';

function* loginWatcher(action: LoginAction) {
    try {
        const {
            payload: { email, password, routerProps },
        } = action;
        const data: AuthResponseModel = yield call(login, email, password);
        yield put(loginActionSuccess(data.message));
        yield put(getUserDetailsAction());
        routerProps.history.replace('/');
    } catch (e) {
        console.error(e);
        yield put(loginActionFailure(e.message));
    }
}

export function* loginSaga() {
    yield takeLatest(LOGIN, loginWatcher);
}

function* registerWatcher(action: RegisterAction) {
    try {
        const {
            payload: { email, name, password, passwordConfirmation, routerProps },
        } = action;
        const data: AuthResponseModel = yield call(
            register,
            email,
            name,
            password,
            passwordConfirmation
        );
        yield put(registerActionSuccess(data.message));
        yield put(getUserDetailsAction());
        routerProps.history.replace('/');
    } catch (e) {
        console.error(e);
        yield put(registerActionFailure(e.message));
    }
}

export function* registerSaga() {
    yield takeLatest(REGISTER, registerWatcher);
}

function* logoutWatcher() {
    try {
        yield call(logout);
    } catch (e) {
        console.error(e);
    }
}

export function* logoutSaga() {
    yield takeLatest(LOGOUT, logoutWatcher);
}
