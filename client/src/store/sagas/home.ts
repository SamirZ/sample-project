import { call, put, takeEvery } from 'redux-saga/effects';

import { getUserDetails, getMyData } from '../../api/apiRequest';
import { GET_USER_DETAILS } from '../types';
import {
    getUserDetailsActionSuccess,
    getUserDetailsActionFailure,
    setMoviesListPageAction,
    setTvShowListPageAction,
    setSearchAction,
} from '../actions';
import { PageReadResponseModel } from '../../models/localapi/auth-response.model';
import UserModel from '../../models/localapi/user.model';

function* getUserDetailsWatcher() {
    try {
        const data: UserModel = yield call(getUserDetails);
        const {
            page: {
                movie: moviePage,
                tvShow: tvShowPage,
                search
            } = {
                movie: 1,
                tvShow: 1,
                search: '',
            }
        }: PageReadResponseModel = yield call(getMyData);
        yield put(getUserDetailsActionSuccess(data));
        yield put(setSearchAction(search));
        yield put(setMoviesListPageAction(moviePage));
        yield put(setTvShowListPageAction(tvShowPage));
    } catch (e) {
        yield put(getUserDetailsActionFailure(e.message));
    }
}

export function* getUserDetailsSaga() {
    yield takeEvery(GET_USER_DETAILS, getUserDetailsWatcher);
}
