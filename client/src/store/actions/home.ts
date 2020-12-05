import UserModel from '../../models/localapi/user.model';
import {
    UserActionTypes,
    GET_USER_DETAILS,
    GET_USER_DETAILS_FAILURE,
    GET_USER_DETAILS_SUCCESS,
} from '../types';

export const getUserDetailsAction = (): UserActionTypes => ({
    type: GET_USER_DETAILS,
});

export const getUserDetailsActionSuccess = (data: UserModel): UserActionTypes => ({
    type: GET_USER_DETAILS_SUCCESS,
    payload: {
        data,
    },
});

export const getUserDetailsActionFailure = (error: any): UserActionTypes => ({
    type: GET_USER_DETAILS_FAILURE,
    payload: {
        error,
    },
});
