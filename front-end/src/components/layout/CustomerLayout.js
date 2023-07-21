import React from 'react'
import { Outlet } from 'react-router-dom'
import ServiceProviderHeader from './ServiceProviderHeader';
import { Container } from 'react-bootstrap';
import AppFooter from './footer';
import CustomerSideBar from './CustomerSidebar';

const CustomerLayout = () => {
    return (
        <>
            <ServiceProviderHeader />
            <CustomerSideBar />
            <Outlet />
            <AppFooter />
        </>
    )
}

export default CustomerLayout