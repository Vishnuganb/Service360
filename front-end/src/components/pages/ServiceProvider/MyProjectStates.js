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
    completedJobs: {
        image: Pending,
        title: "Completed Jobs",
    },
    rejectedJobs: {
        image: Pending,
        title: "Rejected Jobs",
    },
    VacancyInvites: {
        image: Pending,
        title: "Vacancy Invites",
    },
    pendingVacancies: {
        image: Pending,
        title: "Pending Vacancies",
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
                <Row className='mb-3 ms-lg-2 me-lg-2'>
                    <span className="ms-1 align-self-start" style={{fontSize:"24px",fontWeight:"600"}}>Jobs</span>
                </Row>
                <Row className='MyProjectsStates-Job-Container d-flex flex-row ms-lg-2 me-lg-2'>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="/ServiceProvider/MyProjectsJobs?tab=Invite">
                        <Card className="MyProjectsStates-card mb-3" >
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.jobInvites.image} />
                            <Card.Body>
                                <span >{serviceCategories.jobInvites.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="/ServiceProvider/MyProjectsJobs?tab=Pending">
                        <Card className="MyProjectsStates-card mb-3" >
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.pendingJobs.image} />
                            <Card.Body>
                                <span >{serviceCategories.pendingJobs.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="/ServiceProvider/MyProjectsJobs?tab=Ongoing">
                        <Card className="MyProjectsStates-card mb-3">
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.processingJobs.image} />
                            <Card.Body>
                                <span >{serviceCategories.processingJobs.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="/ServiceProvider/MyProjectsJobs?tab=Completed">
                        <Card className="MyProjectsStates-card mb-3">
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.completedJobs.image} />
                            <Card.Body>
                                <span >{serviceCategories.completedJobs.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="/ServiceProvider/MyProjectsJobs?tab=Rejected">
                        <Card className="MyProjectsStates-card">
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.rejectedJobs.image} />
                            <Card.Body>
                                <span >{serviceCategories.rejectedJobs.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                </Row>


                <Row className='mb-3 mt-xs-4 mt-3'>
                    <span className="ms-lg-4 align-self-start" style={{fontSize:"24px",fontWeight:"600"}}>Vacancies</span>
                </Row>
                <Row className='MyProjectsStates-Vacancy-Container d-flex flex-row ms-lg-2 me-lg-2'>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="/ServiceProvider/MyprojectsVacancies?tab=Invite">
                        <Card className="MyProjectsStates-card mb-3" >
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.VacancyInvites.image} />
                            <Card.Body>
                                <span >{serviceCategories.VacancyInvites.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="/ServiceProvider/MyprojectsVacancies?tab=Pending">
                        <Card className="MyProjectsStates-card mb-3" >
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.pendingVacancies.image} />
                            <Card.Body>
                                <span >{serviceCategories.pendingVacancies.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="/ServiceProvider/MyprojectsVacancies?tab=Ongoing">
                        <Card className="MyProjectsStates-card mb-3">
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.processingVacancies.image} />
                            <Card.Body>
                                <span >{serviceCategories.processingVacancies.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="/ServiceProvider/MyprojectsVacancies?tab=Completed">
                        <Card className="MyProjectsStates-card mb-3">
                            <Card.Img className="MyProjectsStates-card-img" src={serviceCategories.completedVacancies.image} />
                            <Card.Body>
                                <span >{serviceCategories.completedVacancies.title}</span>
                            </Card.Body>
                        </Card>
                        </Link>
                    </div>
                    <div className='col-lg-3 col-sm-6 col-12'>
                        <Link to="/ServiceProvider/MyprojectsVacancies?tab=Rejected">
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