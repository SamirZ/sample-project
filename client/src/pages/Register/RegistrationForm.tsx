import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input, ErrorMessage } from '../../components/Input';
import { getRegisterError } from '../../store/selctors';
import { Form } from '../../styles/Form.styles';
import { useRegistrationForm } from './useRegistrationForm';

interface Props {
    routerProps: RouteComponentProps
}

export const RegistrationForm: React.FC<Props> = ({ routerProps }) => {
    const { register, errors, onSubmit, watch } = useRegistrationForm(routerProps);
    const registerError = useSelector(getRegisterError);
    const password = useRef({});
    password.current = watch("password", "");
    return (
        <Form onSubmit={onSubmit}>
            <Input placeholder="Email" name='email' type='email' ref={register({
                required: "You must specify an email", pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please provide a valid email address"
                }
            })} />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            <Input placeholder="Name" name='name' type='text' ref={register({
                required: "You must specify a name", maxLength: {
                    value: 60,
                    message: "The name you have entered is too long"
                }
            })} />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
            <Input placeholder="Password" name='password' type='password' ref={register({
                required: "You must specify a password",
                minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters"
                }
            })} />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            <Input placeholder="Confirm Password" name='passwordConfirmation' type='password' ref={register({
                validate: value =>
                    value === password.current || "The passwords do not match"
            })} />
            {errors.passwordConfirmation && <ErrorMessage>{errors.passwordConfirmation.message}</ErrorMessage>}
            <br />
            <Button type='submit'>Submit</Button>
            <br />
            {
                registerError && <ErrorMessage noMarginTop>{registerError}</ErrorMessage>
            }
        </Form>
    );
};
