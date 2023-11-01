import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthenticationContext } from './ContextFiles/Authentication/AuthenticationContextProvider';

const PrivateRoute = ({ redirectPath = '/login', children }) => {
    const authenticated = localStorage.getItem('authenticated');

    if (!authenticated) {
        return <Navigate to={redirectPath} />;
    }

    return (
        <>
            {children || <Outlet />}
        </>
    );
};

export default PrivateRoute;
