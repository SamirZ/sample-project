import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Form } from '../../styles/Form.styles';
import { useRegistrationForm } from './useRegistrationForm';

interface Props {
    routerProps: RouteComponentProps
}

export const RegistrationForm: React.FC<Props> = ({routerProps}) => {
    const { register, onSubmit } = useRegistrationForm(routerProps);

    return (
        <Form onSubmit={onSubmit}>
            <Input placeholder="Email" name='email' type='email' ref={register} />
            <Input placeholder="Name" name='name' type='text' ref={register} />
            <Input placeholder="Password" name='password' type='password' ref={register} />
            <Input placeholder="Confirm Password" name='passwordConfirmation' type='password' ref={register} />
            <Button type='submit'>Submit</Button>
        </Form>
    );
};
