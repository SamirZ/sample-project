import axios, { AxiosResponse } from 'axios';
import { AuthResponseModel, PageReadResponseModel , PageModifyResponseModel, Page } from '../models/localapi/auth-response.model';
import UserModel from '../models/localapi/user.model';

const baseURL = process.env.BASE_URL || 'http://localhost:4000';
const instance = axios.create({ baseURL, withCredentials: true });

const extractData = <T, >(res: AxiosResponse<T>) => res.data;

export const getUserDetails = async () => {
    return await instance.get<UserModel>(`/me`).then(extractData);
};

export const login = async (email: string, password: string) => {
    return await instance.post<AuthResponseModel>(`/login`, {
        email,
        password,
    }).then(extractData);
};

export const register = async (
    email: string,
    name: string,
    password: string,
    passwordConfirmation: string
) => {
    return await instance.post<AuthResponseModel>(`/register`, {
        email,
        name,
        password,
        passwordConfirmation,
    }).then(extractData);
};

export const logout = async () => {
    return await instance.post<AuthResponseModel>(`/logout`).then(extractData);
};

export const getMyData = async () => {
    return await instance.get<PageReadResponseModel>(`/read/my-data`).then(extractData);
};

export const postMyData = async (page: Page) => {
    return await instance.post<PageModifyResponseModel>(`/save/my-data`, { page }).then(extractData);
};

export const deleteMyData = async () => {
    return await instance.get<PageModifyResponseModel>(`/delete/my-data`).then(extractData);
};