import React from "react";
import powerImage from '../../../../assets/images/ServiceProvider/power.jpg';

function trainingCard(){
    return(
        <div className="single-my-training-card">
            <div className="row">
                <div className="col-md-5 col-12 my-training-card-body-left d-flex justify-content-center justify-content-md-start">
                    <img className="view-training-image" src={powerImage} alt="Power" />
                </div>
                <div className="col-md-7 col-12 my-training-card-body-right">
                    <span className="single-my-training-info">Basic Electricity for the Non-Electrician Skills Training</span>
                    <br />
                    <span className="my-training-location-info">
                        <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: Cinnamon Grand Colombo
                    </span>
                    <br />
                    <span className="single-my-training-time">
                        <i className="bi bi-clock-fill"></i>&nbsp; Saturday, 15-08-2023 At 10.00 am
                    </span>
                    <br/>
                    <div className="single-traning-guests border border-dark mt-2 mb-4 col">
                        <div className="custom-training-row row align-itmes-center">
                            <span className="single-my-training-guests border border-primary col-12">Guests</span>
                        </div>
                        <div className="custom-training-row row">
                            <span className="single-my-training-intrested border border-primary col-6">11 intrested</span>
                            <span className="single-my-training-going border border-primary col-6">15 going</span>
                        </div>
                    </div>
                    <hr />
                    <div className="my-training-card-footer d-flex flex-row">
                        <span
                            className="btn btn-default my-training-card-footer-btn"
                            id="my-training-card-footer-btn-view"
                        >
                            <i className="bi bi-star h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ position: "relative", bottom: "1.5px" }}>Intrested</span>
                        </span>
                        <span
                            className="btn btn-default my-training-card-footer-btn"
                            id="my-training-card-footer-btn-view"
                        >
                            <i className="bi bi-credit-card h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ position: "relative", bottom: "1.5px" }}>Register</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default trainingCard;