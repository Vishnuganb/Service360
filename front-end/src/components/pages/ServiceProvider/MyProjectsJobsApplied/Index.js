import React from 'react';
import MyProjectsNav from './MyProjectsNav';
import MyProjectsBody from './MyProjectsBody';
import '../../../../style/ServiceProvider/MyProjectsJobs.css';

function Index(){
    return(
        <>
            <MyProjectsNav/>
            <MyProjectsBody/>
        </>
    );
}

export default Index;