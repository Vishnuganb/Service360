import React from 'react'
import { Outlet } from 'react-router-dom'
import AdvertiserHeader from './AdvertiserHeader';
import AdvertiserSidebar from './AdvertiserSidebar';
import AppFooter from './footer';

const AdvertiserLayout = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <AdvertiserHeader />
          <div style={{ flex: 1, display: "flex" }}>
            <AdvertiserSidebar />
            <div className="classoutlet" style={{ flex: 1 }}>
              <Outlet />
            </div>
          </div>
          <AppFooter />
        </div>
      </>
    );
}

export default AdvertiserLayout