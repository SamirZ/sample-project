import React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ErrorMessage, Input } from '../../components/Input';
import { getLoginError } from '../../store/selctors';
import { Form } from '../../styles/Form.styles';
import { useLoginForm } from './useLoginForm';

interface Props {
    routerProps: RouteComponentProps
}

export const LoginForm: React.FC<Props> = ({routerProps}) => {
    const { register, errors, onSubmit } = useLoginForm(routerProps);
    const loginError = useSelector(getLoginError);

    return (
        <Form onSubmit={onSubmit}>
            <Input placeholder="Email" name='email' type='email' ref={register({
                required: "You must specify an email", pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please provide a valid email address"
                }
            })} />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            <Input placeholder="Password" name='password' type='password' ref={register({
                required: "You must specify a password",
                minLength: {
                    value: 8,
                    message: "Password must have at least 8 characters"
                }
            })} />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            <br />
            <Button type='submit'>Submit</Button>
            <br />
            {
                loginError && <ErrorMessage noMarginTop>{loginError}</ErrorMessage>
            }
        </Form>
    );
};
