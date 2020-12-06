import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../store/actions';
import { RouteComponentProps } from 'react-router-dom';

export interface RegistrationFormData {
    email: string;
    name: string;
    password: string;
    passwordConfirmation: string;
  }

export const useRegistrationForm = (routerProps: RouteComponentProps) => {
    const { register, errors, watch, handleSubmit } = useForm<RegistrationFormData>();
    const dispatch = useDispatch()
    const onSubmit = useCallback(({email, name, password, passwordConfirmation}: RegistrationFormData) => {
        dispatch(registerAction(email, name, password, passwordConfirmation, routerProps));
    }, [dispatch, routerProps]);

    return {
        register,
        errors,
        watch,
        onSubmit: handleSubmit(onSubmit)
    }
}