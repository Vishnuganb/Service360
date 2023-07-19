import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import AppHeader1 from './header';
import AppFooter from './footer';

const RootLayout = () => {
    return (
        <>
            <AppHeader1 />
            <Outlet />
            <AppFooter />
        </>
    )
}

export default RootLayout