import {
    MovieActionTypes,
    GET_MOVIE_DETAILS,
    GET_MOVIE_DETAILS_SUCCESS,
    GET_MOVIE_DETAILS_FAILURE,
    GET_MOVIES_LIST,
    GET_MOVIES_LIST_LOADING,
    GET_MOVIES_LIST_SUCCESS,
    GET_MOVIES_LIST_FAILURE,
    SET_MOVIES_LIST_PAGE,
} from '../types';
import ApiList from '../../models/moviedb/api-list.model';
import ApiErrorModel from '../../models/moviedb/api-error.model';
import MovieDetails from '../../models/moviedb/move-details.model.ts';
import MovieListResult from '../../models/moviedb/movie-list-result.model';
import VideoResult from '../../models/moviedb/video-result.model';

export const getMovieDetailsAction = (id: string): MovieActionTypes => ({
    type: GET_MOVIE_DETAILS,
    payload: {
        id,
    },
});

export const getMovieDetailsActionSuccess = (
    data: MovieDetails,
    video?: VideoResult
): MovieActionTypes => ({
    type: GET_MOVIE_DETAILS_SUCCESS,
    payload: {
        data,
        video,
    },
});

export const getMovieDetailsActionFailure = (
    error: ApiErrorModel
): MovieActionTypes => ({
    type: GET_MOVIE_DETAILS_FAILURE,
    payload: {
        error,
    },
});

export const setMoviesListPageAction = (page: number): MovieActionTypes => ({
    type: SET_MOVIES_LIST_PAGE,
    payload: {
        page,
    },
});

export const getMoviesListAction = (page: number): MovieActionTypes => ({
    type: GET_MOVIES_LIST,
    payload: {
        page,
    },
});

export const getMoviesListLoadingAction = (
    page: number
): MovieActionTypes => ({
    type: GET_MOVIES_LIST_LOADING,
    payload: {
        page,
    },
});

export const getMoviesListActionSuccess = (
    data: ApiList<MovieListResult>
): MovieActionTypes => ({
    type: GET_MOVIES_LIST_SUCCESS,
    payload: {
        data,
    },
});

export const getMoviesListActionFailure = (
    error: ApiErrorModel
): MovieActionTypes => ({
    type: GET_MOVIES_LIST_FAILURE,
    payload: {
        error,
    },
});
