import React from 'react';
import Card from "react-bootstrap/Card";
import { Row } from 'react-bootstrap';
import '../../../../style/Customer/CustomerDashboard.css'
import ResponsiveCalendar from '../../../layout/ResponsiveCalendar';
import profile_img_2 from '../../../../assets/images/Customer/projects.jpg'

const CustomerDashboard = () => {
    return (
        <div className="row">

            <div className="col-8">
                <h4>Welcome back, Tharsana!</h4>
                    <Row>
                        <Card className="card-cus-dashboard dashboard-button-1 ">
                            <Card.Body>
                                <Card.Title>8</Card.Title>
                                <Card.Text className="card-body-container">
                                    Pending responded Vacancy
                                    <i className="bi bi-rocket-takeoff"></i>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-cus-dashboard dashboard-button-2">
                            <Card.Body>
                                <Card.Title>3</Card.Title>
                                <Card.Text className="card-body-container">
                                    New Quotation
                                    <i className="bi bi-file-post-fill"></i>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Row>
                    <div className="col-sm" >
                        <div className="d-none d-sm-flex d-md-flex d-lg-flex col-2 col-md-2 col-lg-1 responsiveCalendar_cus" >
                            <ResponsiveCalendar />
                        </div>
                    </div>
                    <div className='Onpro'> <h3>Ongoing Projects</h3></div>
                    <Row>
                        <Card className="dashboard-pages">
                            <img className="card-img-top" src={profile_img_2} alt="my profile" />
                            <Card.Body>
                                <Card.Text>
                                    Tiles fitting
                                    {/* <p>Due date: 20/08/2023</p> */}
                                    <a href="#Tiles fitting"><i className="bi bi-arrow-right-circle h3 text-dark"></i></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="dashboard-pages">
                            <img className="card-img-top" src={profile_img_2} alt="my profile" />
                            <Card.Body>
                                <Card.Text>
                                    Plumbing
                                    <a href="Plumbing"><i className="bi bi-arrow-right-circle h3 text-dark"></i></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="dashboard-pages">
                            <img className="card-img-top" src={profile_img_2} alt="my profile" />
                            <Card.Body>
                                <Card.Text>
                                    Ac Repair
                                    <a href="#Ac Repair"><i className="bi bi-arrow-right-circle h3 text-dark"></i></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="dashboard-pages">
                            <img className="card-img-top" src={profile_img_2} alt="my profile" />
                            <Card.Body>
                                <Card.Text>
                                    Capentry
                                    <a href="#Capentry"><i className="bi bi-arrow-right-circle h3 text-dark"></i></a>
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </Row>

                </div>


                <br></br>
            </div>

    );
};

export default CustomerDashboard;
