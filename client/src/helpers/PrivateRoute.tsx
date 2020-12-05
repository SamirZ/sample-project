import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { isUserAuthenticated } from '../store/selctors';

export interface PrivateRouteProps extends RouteProps {
    redirectPath?: string;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ redirectPath = "/login", ...props }) => {
    const isAuthenticated = useSelector(isUserAuthenticated);

    if (!isAuthenticated) {
        const renderComponent = () => (<Redirect to={{ pathname: redirectPath }} />);
        return <Route {...props} component={renderComponent} />;
    } else {
        return <Route {...props} />;
    }
}
