import { combineReducers } from "redux";

import { auth } from "./auth";
import { home } from "./home";
import { movie } from "./movie";
import { search } from "./search";
import { tvShow } from "./tv-show";

export const rootReducer = combineReducers({
  auth,
  home,
  movie,
  search,
  tvShow
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
