import UserModel from '../../models/localapi/user.model';
import {
    GET_USER_DETAILS_FAILURE,
    GET_USER_DETAILS_SUCCESS,
    LOGOUT,
    LogoutAction,
    UserActionTypes,
} from '../types';

export interface UserDetailsState {
    userDetails?: UserModel;
}

const initialState: UserDetailsState = {
    userDetails: undefined,
};

export const home = (
    state = initialState,
    action: UserActionTypes | LogoutAction
): UserDetailsState => {
    switch (action.type) {
        case GET_USER_DETAILS_SUCCESS:
            return {
                ...state,
                userDetails: action.payload.data,
            };
        case GET_USER_DETAILS_FAILURE:
        case LOGOUT:
            return {
                ...state,
                userDetails: undefined,
            };
        default:
            return state;
    }
};
