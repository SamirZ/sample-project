import { SearchActionTypes, SET_SEARCH } from "../types";

export interface SearchState {
  searchTerm: string;
}

const initialState: SearchState = {
  searchTerm: ""
};

export const search = (
  state = initialState,
  action: SearchActionTypes
): SearchState => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        searchTerm: action.payload.search
      };
    default:
      return state;
  }
};
