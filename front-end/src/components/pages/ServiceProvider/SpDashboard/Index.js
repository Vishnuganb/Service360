import React from 'react';
import Cards from './cards.js';
import Analysis from './Analysis.js'
import Overview from './overview.js';

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