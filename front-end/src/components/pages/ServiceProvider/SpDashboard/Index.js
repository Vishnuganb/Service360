import React from 'react';
import Cards from './cards.js';
import Analysis from './analysis.js'
import Overview from './overview.js';
import SpSidebar from '../../../layout/ServiceProviderSidebar.js';

function Index(){
    return(
        <>
            <Overview/>
            <Analysis/>
            <Cards/>
        </>
    );
}

export default Index;