import React, { useState } from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import '../../../style/ServiceProvider/MyProjectStates.css';
import { Link } from 'react-router-dom';

import Pending from '../../../assets/images/ServiceProvider/pending2.jpg';

const serviceCategories = {
    pendingJobs: {
        image: Pending,
        title: "Job Invites",
    },
    processingJobs: {
        image: Pending,
        title: "On Going Jobs",
    },
    completedJobs: {
        image: Pending,
        title: "Completed Jobs",
    },
    rejectedJobs: {
        image: Pending,
        title: "Rejected Jobs",
    },
    pendingVacancies: {
        image: Pending,
        title: "Vacancy Invites",
    },
    processingVacancies: {
        image: Pending,
        title: "On Going Vacancies",
    },
    completedVacancies: {
        image: Pending,
        title: "Completed Vacancies",
    },
    rejectedVacancies: {
        image: Pending,
        title: "Rejected Vacancies",
    },
};

function MyProjectsJobsStates() {
    return (
        <div className='MyProjectsStates-Container index-container ms-lg-4 me-lg-5 p-sm-5 p-3 border rounded'>
                <Row className='mb-1'>
                        <h3 className='fw-bold'>Jobs</h3>
                </Row>
                <Row className='MyProjectsStates-Job-Container d-flex flex-row'>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="#">
                        <Card className="MyProjectsStates-card mb-3" >
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.pendingJobs.image} />
                            <Card.Body>
                                <span >{serviceCategories.pendingJobs.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="#">
                        <Card className="MyProjectsStates-card mb-3">
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.processingJobs.image} />
                            <Card.Body>
                                <span >{serviceCategories.processingJobs.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="#">
                        <Card className="MyProjectsStates-card mb-3">
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.completedJobs.image} />
                            <Card.Body>
                                <span >{serviceCategories.completedJobs.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="#">
                        <Card className="MyProjectsStates-card">
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.rejectedJobs.image} />
                            <Card.Body>
                                <span >{serviceCategories.rejectedJobs.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                </Row>


                <Row className='mb-1 mt-xs-4 mt-3'>
                        <h3 className='fw-bold'>Vacancies</h3>
                </Row>
                <Row className='MyProjectsStates-Vacancy-Container d-flex flex-row'>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="#">
                        <Card className="MyProjectsStates-card mb-3" >
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.pendingVacancies.image} />
                            <Card.Body>
                                <span >{serviceCategories.pendingVacancies.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="#">
                        <Card className="MyProjectsStates-card mb-3">
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.processingVacancies.image} />
                            <Card.Body>
                                <span >{serviceCategories.processingVacancies.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="#">
                        <Card className="MyProjectsStates-card mb-3">
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.completedVacancies.image} />
                            <Card.Body>
                                <span >{serviceCategories.completedVacancies.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="#">
                        <Card className="MyProjectsStates-card">
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.rejectedVacancies.image} />
                            <Card.Body>
                                <span >{serviceCategories.rejectedVacancies.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                </Row>
        </div>
    );
}

export default MyProjectsJobsStates;