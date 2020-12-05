import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { LoginForm } from './LoginForm';

interface Props extends RouteComponentProps {
}

const Login: React.FC<Props> = (props) => {
    return (
        <LoginForm routerProps={props} />
    );
};

export default Login;
