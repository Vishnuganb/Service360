import React from 'react'
import { Outlet } from 'react-router-dom'
import ServiceProviderHeader from './ServiceProviderHeader';
import AppFooter from './footer';

const AdvertiserLayout = () => {
    return (
        <>
            <ServiceProviderHeader />
            <Outlet />
            <AppFooter />
        </>
    )
}

export default AdvertiserLayout