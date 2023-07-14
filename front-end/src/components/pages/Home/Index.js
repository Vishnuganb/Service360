import React from 'react';
import '../../../style/Home.scss'
import GetYourService from './GetYourService';
import JoinServices from './JoinServices';
import NeedToBeDone from './NeedToBeDone';

function Index() {
    return (
        <>
            <GetYourService />
            <JoinServices />
            <NeedToBeDone />
        </>
    );
}

export default Index;