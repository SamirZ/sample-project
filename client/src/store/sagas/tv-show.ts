import {
    call,
    put,
    takeEvery,
    delay,
    select,
    takeLatest,
} from 'redux-saga/effects';

import {
    getTvShowDetails,
    getTvShowList,
    searchTvShowList,
    getTvShowVideo,
} from '../../api/movieDbRequest';
import {
    GetTvShowListAction,
    GetTvShowDetailsAction,
    GET_TV_SHOW_DETAILS,
    GET_TV_SHOWS_LIST,
    GET_TV_SHOWS_LIST_LOADING,
} from '../types';
import {
    getTvShowDetailsActionSuccess,
    getTvShowDetailsActionFailure,
    getTvShowListLoadingAction,
    getTvShowListActionSuccess,
    getTvShowListActionFailure,
} from '../actions';
import { selectMovieListPage, selectSearchTerm } from '../selctors';

import ApiList from '../../models/moviedb/api-list.model';
import TvShowDetails from '../../models/moviedb/tv-show-details.model';
import TvShowListResult from '../../models/moviedb/tv-show-list-result.model';
import VideosList from '../../models/moviedb/videos-list.model';
import {
    VideoSites,
    VideoTypes,
} from '../../models/moviedb/video-result.enums';
import { postMyData } from '../../api/apiRequest';

function* getTvShowDetailsWatcher(action: GetTvShowDetailsAction) {
    try {
        const data: TvShowDetails = yield call(
            getTvShowDetails,
            action.payload.id
        );

        const videoList: VideosList = yield call(
            getTvShowVideo,
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
        yield put(getTvShowDetailsActionSuccess(data, video));
    } catch (e) {
        yield put(getTvShowDetailsActionFailure(e));
    }
}

export function* getTvShowDetailsSaga() {
    yield takeEvery(GET_TV_SHOW_DETAILS, getTvShowDetailsWatcher);
}

function* getTvShowListWatcher(action: GetTvShowListAction) {
    try {
        const search = yield select(selectSearchTerm);
        const movie = yield select(selectMovieListPage);
        const data: ApiList<TvShowListResult> =
            search.length > 2
                ? yield call(searchTvShowList, search, action.payload.page)
                : yield call(getTvShowList, action.payload.page);
        yield call(postMyData, {
            tvShow: action.payload.page,
            movie,
            search,
        });

        yield put(getTvShowListActionSuccess(data));
    } catch (e) {
        yield put(getTvShowListActionFailure(e));
    }
}

export function* getTvShowListSaga() {
    yield takeEvery(GET_TV_SHOWS_LIST_LOADING, getTvShowListWatcher);
}

function* getTvShowListLoadingWatcher(action: GetTvShowListAction) {
    const search = yield select(selectSearchTerm);
    if (search.length > 2) {
        yield delay(1000);
    }
    yield put(getTvShowListLoadingAction(action.payload.page));
}

export function* getTvShowListLoadingSaga() {
    yield takeLatest(GET_TV_SHOWS_LIST, getTvShowListLoadingWatcher);
}
