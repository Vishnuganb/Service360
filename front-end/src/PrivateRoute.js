import React, { useContext } from 'react';
import { Navigate, Route, Outlet } from 'react-router-dom';
import { AuthenticationContext } from './ContextFiles/Authentication/AuthenticationContextProvider';

const PrivateRoute = ({redirectPath = '/login', children }) => {
    const { login } = useContext(AuthenticationContext)
    console.log("hii" + login);
    if (false) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};

export default PrivateRoute;
