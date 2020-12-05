import axios, { AxiosResponse } from 'axios';

import ApiList from '../models/moviedb/api-list.model';
import MovieDetails from '../models/moviedb/move-details.model.ts';
import MovieListResult from '../models/moviedb/movie-list-result.model';
import TvShowDetails from '../models/moviedb/tv-show-details.model';
import TvShowListResult from '../models/moviedb/tv-show-list-result.model';
import VideosList from '../models/moviedb/videos-list.model';

const baseURL = 'https://api.themoviedb.org/3';
const instance = axios.create({ baseURL });

instance.interceptors.request.use((req) => ({
    ...req,
    params: { ...req.params, api_key: process.env.REACT_APP_API_KEY },
}));

const extractData = ({ data }: AxiosResponse) => data;

export const getMovieDetails = async (id: string) => {
    return await instance.get<MovieDetails>(`/movie/${id}`).then(extractData);
};

export const getTvShowDetails = async (id: string) => {
    return await instance.get<TvShowDetails>(`/tv/${id}`).then(extractData);
};

export const getMoviesList = async (page: number = 1) => {
    return await instance
        .get<ApiList<MovieListResult>>(`/movie/top_rated`, {
            params: {
                page,
            },
        })
        .then(extractData);
};

export const getTvShowList = async (page: number = 1) => {
    return await instance
        .get<ApiList<TvShowListResult>>(`/tv/top_rated`, {
            params: {
                page,
            },
        })
        .then(extractData);
};

export const searchMoviesList = async (query: string, page: number = 1) => {
    return await instance
        .get<ApiList<MovieListResult>>(`/search/movie`, {
            params: {
                query,
                page,
            },
        })
        .then(extractData);
};

export const searchTvShowList = async (query: string, page: number = 1) => {
    return await instance
        .get<ApiList<TvShowListResult>>(`/search/tv`, {
            params: {
                query,
                page,
            },
        })
        .then(extractData);
};

export const getMovieVideo = async (id: string) => {
    return await instance
        .get<VideosList>(`/movie/${id}/videos`)
        .then(extractData);
};

export const getTvShowVideo = async (id: string) => {
    return await instance.get<VideosList>(`/tv/${id}/videos`).then(extractData);
};
