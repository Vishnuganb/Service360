import React from "react";
import TrainingSessionBody from './bodyPage';
import TrainingSessionNav from './bodyNav';
import '../../../../style/ServiceProvider/ViewTrainingSessions.css';

function Index(){
    return(
        <>
            <TrainingSessionNav/>
            <TrainingSessionBody/>
        </>
    );
}

export default Index;