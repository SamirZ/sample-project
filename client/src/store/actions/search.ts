import { SearchActionTypes, SET_SEARCH } from "../types";

export const setSearchAction = (search: string): SearchActionTypes => ({
  type: SET_SEARCH,
  payload: {
    search
  }
});
