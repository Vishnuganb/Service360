import React from 'react';
import '../../../style/Home.css'
import AppServices from './Services';
import AnimationRevealPage from '../../../helpers/AnimationRevealPage';
import AppBanner from './Banner';
import AppContact from './Contact';
import AppAbout from './About';

function Index() {
    return (
        <>

            <AnimationRevealPage>
                <AppBanner />
                <AppServices />
                <AppAbout />
                <AppContact />
            </AnimationRevealPage>

        </>
    );
}

export default Index;