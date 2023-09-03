import React from 'react'
import { Outlet } from 'react-router-dom'
import ServiceProviderHeader from './ServiceProviderHeader';
import AppFooter from './footer';
import ServiceProviderSideBar from './ServiceProviderSidebar';
import '../../style/ServiceProvider/SpLayout.css'

const SpLayout = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <ServiceProviderHeader />
                <div style={{ flex: 1, display: 'flex' }}>
                    <ServiceProviderSideBar />
                    <div className="classoutlet" style={{ flex: 1,overflow:'auto' }}>
                    <Outlet />
                    </div>
                </div>
                <AppFooter />
            </div>
        </>
    )
}

export default SpLayout