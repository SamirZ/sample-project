import { RootState } from "../reducers";

export const selectSearchTerm = (state: RootState) => state.search.searchTerm;
