import UserModel from '../../models/localapi/user.model';

// TYPE CONSTANTS
export const GET_USER_DETAILS = 'GET_USER_DETAILS';
export const GET_USER_DETAILS_SUCCESS = 'GET_USER_DETAILS_SUCCESS';
export const GET_USER_DETAILS_FAILURE = 'GET_USER_DETAILS_FAILURE';

// ACTION INTERFACES
// START GetUserDetailsAction
export interface GetUserDetailsAction {
    type: typeof GET_USER_DETAILS;
}

export interface GetUserDetailsActionSuccess {
    type: typeof GET_USER_DETAILS_SUCCESS;
    payload: {
        data: UserModel;
    };
}

export interface GetUserDetailsActionFaliure {
    type: typeof GET_USER_DETAILS_FAILURE;
    payload: {
        error: any;
    };
}
// END GetUserDetailsAction

// ACTION TYPES
export type UserActionTypes =
  | GetUserDetailsAction
  | GetUserDetailsActionSuccess
  | GetUserDetailsActionFaliure;
