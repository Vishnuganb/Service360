import React from "react";
import powerImage from '../../../../assets/images/ServiceProvider/power.jpg';
import { useParams } from "react-router";
import {useState, useEffect} from "react";
import axios from "axios";

function TrainingSession(){
    const [viewTrainingSessionData, setviewTrainingSessionData] = useState(null);

    const { id } = useParams();
    const trainingsessionId = parseInt(id, 10);
   
    useEffect(() => {
      axios.get(`http://localhost:8080/auth/viewTrainingSessions/${trainingsessionId}`).then((res) => {
          console.log(res.data);
          setviewTrainingSessionData(res.data);
      });
    }   , []);
  
    if (!viewTrainingSessionData) return 'No training session found!';

    return(
        <div className="ms-lg-4 me-lg-4">
            <div className="ViewATraining-image-container d-flex justify-content-center mb-3">
                <img src={powerImage} alt="power" width="50%" height="50%" style={{textAlign:"center"}}/>

            </div>

            <div className="d-flex flex-column mb-3 mt-3">
                <span className="ViewATraining-title h3">{viewTrainingSessionData.trainingtitle}</span>
                <span className="ViewATraining-sub-title h6">{viewTrainingSessionData.trainingdescription}.</span>
            </div>

            <div className="ViewATraining-details border rounded px-4 py-2">
                <span className="ViewATraining-details-title h5">Details</span>
                <div className="ViewATraining-details-body-left mt-2 d-flex flex-row flex-wrap">
                    <div className="col-lg-4 col-md-6 col-12">
                        <i className="bi bi-calendar2-event-fill"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">{viewTrainingSessionData.trainingdate}</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12  d-lg-flex justify-content-center">
                        <i className="bi bi-clock-fill"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">{viewTrainingSessionData.trainingtime}</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-lg-flex justify-content-end">
                        <i className="bi bi-hourglass-top"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">{viewTrainingSessionData.trainingduration}</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <i className="bi bi-geo-alt-fill"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">{viewTrainingSessionData.traininglocation}</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-lg-flex justify-content-center">
                        <i className="bi bi-person-fill"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">{viewTrainingSessionData.serviceprovidername}</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-lg-flex justify-content-end">
                        <i className="bi bi-cash"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">{viewTrainingSessionData.trainingcost}</span>
                    </div>
                </div>
            </div>
            <div className="border rounded px-4 py-2 mt-2">
                <span className="ViewATraining-details-title h5">Guests</span>
                <div className="ViewATraining-details-body-left mt-2 d-flex flex-row flex-wrap">
                    <div className="col-lg-4 col-md-6 col-12">
                        <span>interested</span>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">{viewTrainingSessionData.guests}</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-lg-flex justify-content-center">
                        <span>on going</span>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">{viewTrainingSessionData.going}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainingSession;