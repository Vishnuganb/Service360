import React from 'react';
import JobDetails from './jobDetails.js';
import CommentSection from './commentSection.js';
import '../../../../style/ServiceProvider/ViewAJob.css';

function Index(){
    return(
        <div className='index-container ms-lg-4 me-lg-5 p-sm-5 p-3 border rounded'>
            <JobDetails/>
            <CommentSection/>
        </div>
    );
}

export default Index;