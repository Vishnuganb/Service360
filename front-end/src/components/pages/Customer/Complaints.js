import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../../style/Customer/PostVacancyForm.css';
import BgImage from '../../../assets/images/header/Background.png';
import { Link } from 'react-router-dom';

function CustomerComplaints() {
    return (
        <div className='card2'>
             <p> <Link to="/customer/CustomerComplaintPage" className='fw-bold navLink d-lg-inline d-sm-none d-md-none d-none'><i className="bi bi-arrow-left-circle-fill"></i></Link>
        &nbsp;&nbsp;Back</p>
               <h3>Complaints</h3>
            <div className="VacancyForm-container" style={{ backgroundImage: `url(${BgImage})` }}>

                <h3>Make Complaints</h3>
                <br></br>
                <form className="vacancy-form">
                    <div className="vacancy-form-group">
                        <Row><Col className="col-4">
                            <label for="name">Name <span style={{ color: "red" }}>&nbsp;*</span> </label></Col>
                            <Col className="col-6"><input type="text" name="name" className="form-control" id="title" placeholder="Enter your name" /></Col>
                        </Row>
                    </div>
                    <div className="vacancy-form-group">
                        <Row><Col className="col-4">
                            <label for="email">Email <span style={{ color: "red" }}>&nbsp;*</span> </label></Col>
                            <Col className="col-6"><input type="text" name="email" className="form-control" id="title" placeholder="Enter your email" /></Col>
                        </Row>
                    </div>
                    <div className="vacancy-form-group">
                        <Row><Col className="col-4">
                            <label for="category">Complaint category <span style={{ color: "red" }}>&nbsp;*</span> </label></Col>
                            <Col className="col-6"><input type="text" name="category" className="form-control" id="title" placeholder="Enter your Complaint category" /></Col>
                        </Row>
                    </div>
                    <div className="vacancy-form-group">
                        <label for="complaint">Complaint <span style={{ color: "red" }}>&nbsp;*</span> </label>
                        <input type="text" name="complaint" className="form-control" id="complaint" placeholder="Enter the complaint" />
                    </div>

                    <div className="vacancy-form-group">
                        <label for="file" >Upload document of need</label>
                        <input type="file" name="file" className="form-control" id="file" />
                    </div>
                    <Row className="vacancy-form-group-buttons mt-3">
                        <Col>
                            <input type="Submit" value="Submit" className="btn btn-vacancy-form-k" />
                        </Col>
                        <Col>
                            <a id="cancel-link" href="#"><button>Cancel</button></a>
                        </Col>
                    </Row>
                </form>
            </div></div>
    );




};

export default CustomerComplaints;


