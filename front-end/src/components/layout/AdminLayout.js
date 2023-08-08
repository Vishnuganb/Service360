import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import AppFooter from './footer';
import AdminSidebar from './AdminSidebar';
import '../../style/ServiceProvider/SpLayout.css';

const AdminLayout = () => {
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <AdminHeader />
                <div style={{ display: 'flex', flex: 1 }}>
                    <AdminSidebar />
                    <div className="classoutlet" style={{ flex: 1, overflow: 'auto' }}>
                        <Outlet />
                    </div>
                </div>
                <AppFooter />
            </div>
        </>
    );
};

export default AdminLayout;
