import React from 'react';
import '../../../style/Home.css'
import GetYourService from './GetYourService';
import AppServices from './Services';
import AnimationRevealPage from '../../../helpers/AnimationRevealPage';
import AppBlog from './Blog';
import AppBanner from './Banner';
import AppContact from './Contact';
import AppAbout from './About';

function Index() {
    return (
        <>

            <AnimationRevealPage>
                <AppBanner />
                <GetYourService />
                <AppServices />
                <AppBlog />
                <AppAbout />
                <AppContact />
            </AnimationRevealPage>

        </>
    );
}

export default Index;