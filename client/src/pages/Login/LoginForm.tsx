import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Form } from '../../styles/Form.styles';
import { useLoginForm } from './useLoginForm';

interface Props {
    routerProps: RouteComponentProps
}

export const LoginForm: React.FC<Props> = ({routerProps}) => {
    const { register, onSubmit } = useLoginForm(routerProps);

    return (
        <Form onSubmit={onSubmit}>
            <Input placeholder="Email" name='email' type='email' ref={register} />
            <Input placeholder="Password" name='password' type='password' ref={register} />
            <Button type='submit'>Submit</Button>
        </Form>
    );
};
