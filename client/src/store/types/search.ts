// TYPE CONSTANTS
export const SET_SEARCH = "SET_SEARCH";

// ACTION INTERFACES
// START SetSearchAction
export interface SetSearchAction {
  type: typeof SET_SEARCH;
  payload: {
    search: string;
  };
}
// END SetSearchAction

// ACTION TYPES
export type SearchActionTypes = SetSearchAction;
