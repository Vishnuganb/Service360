import React, { useState } from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import '../../../style/ServiceProvider/MyProjectStates.css';
import { Link } from 'react-router-dom';

import Pending from '../../../assets/images/ServiceProvider/pending2.jpg';

const serviceCategories = {
    jobInvites: {
        image: Pending,
        title: "Job Invites",
    },
    pendingJobs: {
        image: Pending,
        title: "Pending Jobs",
    },
    processingJobs: {
        image: Pending,
        title: "On Going Jobs",
    },
    rejectedJobs: {
        image: Pending,
        title: "Rejected Jobs",
    },
    VacancyInvites: {
        image: Pending,
        title: "Vacancy Invites",
    },
    processingVacancies: {
        image: Pending,
        title: "On Going Vacancies",
    },
    rejectedVacancies: {
        image: Pending,
        title: "Rejected Vacancies",
    },
};

function MyProjectsJobsStates() {
    return (
        <div className='MyProjectsStates-Container index-container ms-lg-4 me-lg-5 p-sm-5 p-3 border rounded'>
            <Row className='mb-3 ms-lg-2 me-lg-2'>
                <span className="ms-1 align-self-start" style={{ fontSize: "24px", fontWeight: "600" }}>Jobs</span>
            </Row>
            <Row className='MyProjectsStates-Job-Container d-flex flex-row ms-lg-2 me-lg-2'>
                <div className='col-lg-3 col-sm-6 col-12'>
                    <Link to="/ServiceProvider/MyProjectsJobs?tab=invite">
                        <Card className="MyProjectsStates-card mb-3" >
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.jobInvites.image} />
                            <Card.Body>
                                <span >{serviceCategories.jobInvites.title}</span>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className='col-lg-3 col-sm-6 col-12'>
                    <Link to="/ServiceProvider/MyProjectsJobs?tab=pending">
                        <Card className="MyProjectsStates-card mb-3" >
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.pendingJobs.image} />
                            <Card.Body>
                                <span >{serviceCategories.pendingJobs.title}</span>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className='col-lg-3 col-sm-6 col-12'>
                    <Link to="/ServiceProvider/MyProjectsJobs?tab=ongoing">
                        <Card className="MyProjectsStates-card mb-3">
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.processingJobs.image} />
                            <Card.Body>
                                <span >{serviceCategories.processingJobs.title}</span>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
                <div className='col-lg-3 col-sm-6 col-12'>
                    <Link to="/ServiceProvider/MyProjectsJobs?tab=rejected">
                        <Card className="MyProjectsStates-card">
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.rejectedJobs.image} />
                            <Card.Body>
                                <span >{serviceCategories.rejectedJobs.title}</span>
                            </Card.Body>
                        </Card>
                    </Link>
                </div>
            </Row>
        </div>
    );
}

export default MyProjectsJobsStates;