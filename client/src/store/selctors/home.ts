import { RootState } from '../reducers';

export const selectUserDetails = (state: RootState) => state.home.userDetails;
export const isUserAuthenticated = (state: RootState) => state.home.userDetails !== undefined;
