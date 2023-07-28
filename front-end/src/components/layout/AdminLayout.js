import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader';
import AppFooter from './footer';
import AdminSidebar from './AdminSidebar';
import '../../style/ServiceProvider/SpLayout.css'

const AdminLayout = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <AdminHeader />
                <div style={{ flex: 1, display: 'flex' }}>
                    <AdminSidebar />
                    <div className="classoutlet" style={{ flex: 1 }}>
                        <Outlet />
                    </div>
                </div>
                <AppFooter />
            </div>
        </>
    )
}

export default AdminLayout