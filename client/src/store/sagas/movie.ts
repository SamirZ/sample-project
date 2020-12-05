import {
    call,
    put,
    takeEvery,
    delay,
    takeLatest,
    select,
} from 'redux-saga/effects';

import {
    getMovieDetails,
    getMoviesList,
    searchMoviesList,
    getMovieVideo,
} from '../../api/movieDbRequest';
import {
    GetMoviesListAction,
    GetMovieDetailsAction,
    GET_MOVIE_DETAILS,
    GET_MOVIES_LIST,
    GET_MOVIES_LIST_LOADING,
} from '../types';
import {
    getMovieDetailsActionSuccess,
    getMovieDetailsActionFailure,
    getMoviesListLoadingAction,
    getMoviesListActionSuccess,
    getMoviesListActionFailure,
} from '../actions';
import { selectSearchTerm, selectTvShowListPage } from '../selctors';

import ApiList from '../../models/moviedb/api-list.model';
import MovieDetails from '../../models/moviedb/move-details.model.ts';
import MovieListResult from '../../models/moviedb/movie-list-result.model';
import VideosList from '../../models/moviedb/videos-list.model';
import {
    VideoSites,
    VideoTypes,
} from '../../models/moviedb/video-result.enums';
import { postMyData } from '../../api/apiRequest';

function* getMovieDetailsWatcher(action: GetMovieDetailsAction) {
    try {
        const data: MovieDetails = yield call(
            getMovieDetails,
            action.payload.id
        );

        const videoList: VideosList = yield call(
            getMovieVideo,
            action.payload.id
        );
        let video;
        if (videoList.results.length) {
            video = videoList.results.filter(
                (res) =>
                    res.site === VideoSites.YouTube &&
                    res.type === VideoTypes.Trailer
            )[0];
        }

        yield put(getMovieDetailsActionSuccess(data, video));
    } catch (e) {
        yield put(getMovieDetailsActionFailure(e));
    }
}

export function* getMovieDetailsSaga() {
    yield takeEvery(GET_MOVIE_DETAILS, getMovieDetailsWatcher);
}

function* getMoviesListLoadingWatcher(action: GetMoviesListAction) {
    try {
        const search = yield select(selectSearchTerm);
        const tvShow = yield select(selectTvShowListPage);
        const data: ApiList<MovieListResult> =
            search.length > 2
                ? yield call(searchMoviesList, search, action.payload.page)
                : yield call(getMoviesList, action.payload.page);
        yield call(postMyData, {
            movie: action.payload.page,
            tvShow,
            search,
        });

        yield put(getMoviesListActionSuccess(data));
    } catch (e) {
        yield put(getMoviesListActionFailure(e));
    }
}

export function* getMoviesListLoadingSaga() {
    yield takeLatest(GET_MOVIES_LIST_LOADING, getMoviesListLoadingWatcher);
}

function* getMoviesListWatcher(action: GetMoviesListAction) {
    const search = yield select(selectSearchTerm);
    if (search.length > 2) {
        yield delay(1000);
    }
    yield put(getMoviesListLoadingAction(action.payload.page));
}

export function* getMoviesListSaga() {
    yield takeLatest(GET_MOVIES_LIST, getMoviesListWatcher);
}
