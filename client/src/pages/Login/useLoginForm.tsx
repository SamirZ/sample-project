import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../store/actions';
import { RouteComponentProps } from 'react-router-dom';

export interface LoginFormData {
    email: string;
    password: string;
}

export const useLoginForm = (routerProps: RouteComponentProps) => {
    const { register, errors, handleSubmit } = useForm<LoginFormData>();
    const dispatch = useDispatch();
    const onSubmit = useCallback(({ email, password }: LoginFormData) => {
        dispatch(loginAction(email, password, routerProps));
    }, [dispatch, routerProps]);

    return {
        register,
        errors,
        onSubmit: handleSubmit(onSubmit),
    };
};
