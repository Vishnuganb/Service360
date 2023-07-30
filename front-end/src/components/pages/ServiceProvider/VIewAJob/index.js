import React from 'react';
import JobDetails from './jobDetails.js';
import CommentSection from './commentSection.js';
import '../../../../style/ServiceProvider/ViewAJob.css';

function Index(){
    return(
        <>
            <JobDetails/>
            <CommentSection/>
        </>
    );
}

export default Index;