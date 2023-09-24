import Card from "react-bootstrap/Card";
import { Col, Container, Row } from 'react-bootstrap';
import '../../../../style/ServiceProvider/Dashboard.css'
import { useState, useEffect } from "react";
import axios from "axios";

function Overview() {
    const response = sessionStorage.getItem('authenticatedUser');
    const userData = JSON.parse(response);
    const userId = userData.userid;

       // Send the userId to the backend using Axios
    useEffect(() => {
       axios
            .post('http://localhost:8080/auth/recieveLoggedInServiceProviderId', { userId })
            .then((response) => {
                console.log('UserId sent to backend successfully : ', response.data);
            })
            .catch((error) => {
                console.error('Error sending userId to backend', error);
            });
    }, []);


    return (
        <div className="dashboard-top-cards-container d-flex flex-row mt-3 ms-lg-4 me-lg-4">
            <Card className="card-sp-dashboard dashboard-button-1 col-3">
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="card-sp-dashboard-title">24</Card.Title>
                    <Card.Text className="card-body-container d-flex flex-row">
                        <span>Jobs Completed</span>
                        <i className="bi bi-tools ms-lg-auto"></i>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card-sp-dashboard dashboard-button-2 col-3">
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="card-sp-dashboard-title">3</Card.Title>
                    <Card.Text className="card-body-container d-flex flex-row">
                        <span>Ongoing job</span>
                        <i className="bi bi-rocket-takeoff ms-lg-auto"></i>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card-sp-dashboard dashboard-button-3 col-3">
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="card-sp-dashboard-title">2</Card.Title>
                    <Card.Text className="card-body-container d-flex flex-row">
                        <span>Pending Jobs</span>
                        <i className="bi bi-hourglass-top ms-lg-auto"></i>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card-sp-dashboard dashboard-button-4 col-3">
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="card-sp-dashboard-title">3.5 (28)</Card.Title>
                    <Card.Text className="card-body-container d-flex flex-row">
                        <span>Ratings</span>
                        <i className="bi bi-pass ms-lg-auto"></i>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Overview;