import React from 'react'
import { Outlet } from 'react-router-dom'
import ServiceProviderHeader from './ServiceProviderHeader';
import AppFooter from './footer';
import CustomerSideBar from './CustomerSidebar';
import CustomerHeader from './CustomerHeader';


const CustomerLayout = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <CustomerHeader />
                <div style={{ flex: 1, display: 'flex' }}>
                    <CustomerSideBar />
                    <div className="classoutlet" style={{ flex: 1 }}>
                        <Outlet />
                    </div>
                </div>
                <AppFooter />
            </div>

        </>
    )
}

export default CustomerLayout