import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { RegistrationForm } from './RegistrationForm';

interface Props extends RouteComponentProps {
}


const Register: React.FC<Props> = (props) => {
    return (
        <RegistrationForm  routerProps={props}/>
    )
};

export default Register;
