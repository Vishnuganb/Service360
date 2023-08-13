import React from "react";
import powerImage from '../../../../assets/images/ServiceProvider/power.jpg';

function trainingSession(){
    return(
        <div className="ms-lg-4 me-lg-4">
            <div className="ViewATraining-image-container d-flex justify-content-center mb-3">
                <img src={powerImage} alt="power" width="50%" height="50%" style={{textAlign:"center"}}/>

            </div>

            <div className="d-flex flex-column mb-3 mt-3">
                <span className="ViewATraining-title h3">Power of React</span>
                <span className="ViewATraining-sub-title h6">Are you interested in understanding the fascinating world of electricity without the need for prior electrical knowledge? Look no further! Our "Basic Electricity for the Non-Electrician Skills Training" event is designed just for you. This comprehensive training aims to demystify the complexities of electricity, catering to beginners and enthusiasts from all backgrounds. Led by experienced professionals, the workshop will cover essential topics such as electrical circuits, voltage, current, resistance, and safety precautions.</span>
            </div>

            <div className="ViewATraining-details border rounded px-4 py-2">
                <span className="ViewATraining-details-title h5">Details</span>
                <div className="ViewATraining-details-body-left mt-2 d-flex flex-row flex-wrap">
                    <div className="col-lg-4 col-md-6 col-12">
                        <i className="bi bi-calendar2-event-fill"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">2021-09-20</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12  d-lg-flex justify-content-center">
                        <i className="bi bi-clock-fill"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">10 am - 12 am</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-lg-flex justify-content-end">
                        <i className="bi bi-hourglass-top"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">2 hours</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <i className="bi bi-geo-alt-fill"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">Cinnamon Grand</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-lg-flex justify-content-center">
                        <i className="bi bi-person-fill"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">S. Pranavan</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-lg-flex justify-content-end">
                        <i className="bi bi-cash"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">Rs. 1000</span>
                    </div>
                </div>
            </div>
            <div className="border rounded px-4 py-2 mt-2">
                <span className="ViewATraining-details-title h5">Guests</span>
                <div className="ViewATraining-details-body-left mt-2 d-flex flex-row flex-wrap">
                    <div className="col-lg-4 col-md-6 col-12">
                        <span>interested</span>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">24</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-lg-flex justify-content-center">
                        <span>on going</span>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">22</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default trainingSession;