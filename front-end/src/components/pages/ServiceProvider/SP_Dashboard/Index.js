import React from 'react';
import SP_Header from '../../../layout/ServiceProviderHeader.js'
import AppFooter from '../../../layout/footer.js';
import SP_Sidebar from '../../../layout/ServiceProviderSidebar.js';

function Index(){
    return(
        <>
           <SP_Header/>
           <SP_Sidebar/>
           <AppFooter/>
        </>
    );
}

export default Index;