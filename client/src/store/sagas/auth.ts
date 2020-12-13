import { call, delay, put, takeLatest } from 'redux-saga/effects';

import { login, logout, register } from '../../api/apiRequest';
import {
    LOGIN,
    LOGIN_FAILURE,
    LoginAction,
    LoginActionFaliure,
    REGISTER,
    REGISTER_FAILURE,
    RegisterAction,
    RegisterActionFaliure,
    LOGOUT,
} from '../types';
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
        yield put(loginActionFailure('Login failed'));
    }
}

export function* loginSaga() {
    yield takeLatest(LOGIN, loginWatcher);
}

function* loginFailureWatcher(action: LoginActionFaliure) {
    try {
        if (action.payload.error) {
            yield delay(6000);
            yield put(loginActionFailure(undefined));
        }
    } catch (e) {
        console.error(e);
    }
}

export function* loginFailureSaga() {
    yield takeLatest(LOGIN_FAILURE, loginFailureWatcher);
}

function* registerWatcher(action: RegisterAction) {
    try {
        const {
            payload: {
                email,
                name,
                password,
                passwordConfirmation,
                routerProps,
            },
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
        yield put(registerActionFailure('Register failed'));
    }
}

export function* registerSaga() {
    yield takeLatest(REGISTER, registerWatcher);
}

function* registerFailureWatcher(action: RegisterActionFaliure) {
    try {
        if (action.payload.error) {
            yield delay(6000);
            yield put(registerActionFailure(undefined));
        }
    } catch (e) {
        console.error(e);
    }
}

export function* registerFailureSaga() {
    yield takeLatest(REGISTER_FAILURE, registerFailureWatcher);
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
