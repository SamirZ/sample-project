import {
    MovieActionTypes,
    GET_MOVIE_DETAILS,
    GET_MOVIE_DETAILS_FAILURE,
    GET_MOVIE_DETAILS_SUCCESS,
    GET_MOVIES_LIST,
    GET_MOVIES_LIST_SUCCESS,
    GET_MOVIES_LIST_FAILURE,
    SET_MOVIES_LIST_PAGE,
    SET_SEARCH,
    SearchActionTypes,
} from '../types';
import ApiList from '../../models/moviedb/api-list.model';
import ApiErrorModel from '../../models/moviedb/api-error.model';
import MovieDetails from '../../models/moviedb/move-details.model.ts';
import MovieListResult from '../../models/moviedb/movie-list-result.model';
import VideoResult from '../../models/moviedb/video-result.model';

export interface MovieDetailsState {
    isLoading: boolean;
    movieDetails?: MovieDetails;
    moviesList: ApiList<MovieListResult>;
    error?: ApiErrorModel;
    video?: VideoResult;
}

const initialState: MovieDetailsState = {
    isLoading: false,
    movieDetails: undefined,
    moviesList: {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0,
    },
    video: undefined,
    error: undefined,
};

export const movie = (
    state = initialState,
    action: MovieActionTypes | SearchActionTypes
): MovieDetailsState => {
    switch (action.type) {
        case GET_MOVIE_DETAILS:
            return {
                ...state,
                video: undefined,
                isLoading: true,
            };
        case GET_MOVIES_LIST:
            return {
                ...state,
                video: undefined,
                movieDetails: undefined,
                isLoading: true,
            };
        case GET_MOVIE_DETAILS_SUCCESS:
            return {
                ...state,
                movieDetails: action.payload.data,
                video: action.payload.video,
                isLoading: false,
            };
        case GET_MOVIES_LIST_SUCCESS:
            return {
                ...state,
                moviesList: action.payload.data,
                isLoading: false,
            };
        case GET_MOVIE_DETAILS_FAILURE:
        case GET_MOVIES_LIST_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                isLoading: false,
            };
        case SET_MOVIES_LIST_PAGE:
            return {
                ...state,
                moviesList: {
                    ...state.moviesList,
                    page: action.payload.page,
                },
            };
        case SET_SEARCH:
            return {
                ...state,
                moviesList: {
                    ...state.moviesList,
                    page: 1,
                },
            }
        default:
            return state;
    }
};
