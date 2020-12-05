import { RootState } from "../reducers";
import { getMoviesListAction } from "../../store/actions";

export const selectMovie = (state: RootState) => state.movie;
export const selectMovieListPage = (state: RootState) => state.movie.moviesList.page;
export const selectMovieList = (state: RootState) => ({
  ...state.movie.moviesList,
  isLoading: state.movie.isLoading,
  getListAction: getMoviesListAction,
});
