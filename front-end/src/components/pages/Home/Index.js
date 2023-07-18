import React from 'react';
import '../../../style/Home.css'
import GetYourService from './GetYourService';
import AppServices from './Services';
import AnimationRevealPage from '../../../helpers/AnimationRevealPage';
import AppBlog from './Blog';
import AppBanner from './Banner';
import AppContact from './Contact';

function Index() {
    return (
        <>

            <AnimationRevealPage>
                <AppBanner />
                <GetYourService />
                <AppServices />
                <AppBlog />
                <AppContact />
            </AnimationRevealPage>

        </>
    );
}

export default Index;