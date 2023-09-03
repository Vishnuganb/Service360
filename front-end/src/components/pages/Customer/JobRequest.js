import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import '../../../style/Customer/JobRequestform.css';
import BgImage from '../../../assets/images/header/Background.png';
import { BsCloudUpload } from 'react-icons/bs';

function Quotation() {
    return (
        <div className='card2' style={{ backgroundImage: `url(${BgImage})` }}>
            <p> <a href="#" className='fw-bold navLink d-lg-inline d-sm-none d-md-none d-none'><i className="bi bi-arrow-left-circle-fill"></i></a>
                &nbsp;&nbsp;Back</p>
            <div className="VacancyForm-container">

                <h3>Request for Job</h3>
                <br></br>
                <form className="vacancy-form">
                    <div className="vacancy-form-group">
                        <Row><Col className="col-4">
                            <label for="title">Title <span style={{ color: "red" }}>&nbsp;*</span> </label></Col>
                            <Col className="col-6"><input type="text" name="title" className="form-control" id="title" placeholder="Enter the title" /></Col>
                        </Row>
                    </div>
                    <div className="vacancy-form-group">
                        <label for="description">Description <span style={{ color: "red" }}>&nbsp;*</span> </label>
                        <input type="text" name="description" className="form-control" id="description" placeholder="Enter your job details here" />
                    </div>

                    <div className="vacancy-form-group">
                        <Row>
                            <Col className="col-4">
                                <label htmlFor="Service_name"> Location <span style={{ color: "red" }}>*</span></label>
                            </Col>
                            <Col className="col-6">
                                <Form.Group className="mb-3">
                                    <Form.Select id="disabledSelect" className="select-small-text" defaultValue="">
                                        <option value="" disabled>Select a location</option>
                                        <option value="Ampara">Ampara</option>
                                        <option value="Anuradhapura">Anuradhapura</option>
                                        <option value="Badulla">Badulla</option>
                                        <option value="Batticaloa">Batticaloa</option>
                                        <option value="Colombo">Colombo</option>
                                        <option value="Galle">Galle</option>
                                        <option value="Gampaha">Gampaha</option>
                                        <option value="Hambantota">Hambantota</option>
                                        <option value="Jaffna">Jaffna</option>
                                        <option value="Kalutara">Kalutara</option>
                                        <option value="Kandy">Kandy</option>
                                        <option value="Kegalle">Kegalle</option>
                                        <option value="Kilinochchi">Kilinochchi</option>
                                        <option value="Kurunegala">Kurunegala</option>
                                        <option value="Mannar">Mannar</option>
                                        <option value="Matale">Matale</option>
                                        <option value="Matara">Matara</option>
                                        <option value="Monaragala">Monaragala</option>
                                        <option value="Mullaitivu">Mullaitivu</option>
                                        <option value="Nuwara Eliya">Nuwara Eliya</option>
                                        <option value="Polonnaruwa">Polonnaruwa</option>
                                        <option value="Puttalam">Puttalam</option>
                                        <option value="Ratnapura">Ratnapura</option>
                                        <option value="Trincomalee">Trincomalee</option>
                                        <option value="Vavuniya">Vavuniya</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>

                    <div className="vacancy-form-group">
                        <Row>
                            <Col className="col-4">
                                <label htmlFor="Service_name"> Service <span style={{ color: "red" }}>*</span></label>
                            </Col>
                            <Col className="col-6">
                                <Form.Group className="mb-3">
                                    <Form.Select id="disabledSelect" className="select-small-text" defaultValue="">
                                        <option value="" disabled>Select a service</option>
                                        <option value="Carpentry">Carpentry</option>
                                        <option value="Painting">Painting</option>
                                        <option value="AC_Repair">AC Repair</option>
                                        <option value="Electrical_Wiring">Electrical Wiring</option>
                                        <option value="Plumbing">Plumbing</option>
                                        <option value="Masonry">Masonry</option>
                                        <option value="Tiles_Fitting">Tiles Fitting</option>
                                        <option value="Iron_Works">Iron Works</option>
                                        <option value="Glass_Aluminum">Glass Aluminum</option>
                                        <option value="CCTV_Repair">CCTV Repair</option>
                                        <option value="Fire_Alarm">Fire Alarm</option>
                                        <option value="Video_Surveillance">Video Surveillance</option>
                                        <option value="Sofa_cleaning">Sofa cleaning</option>
                                        <option value="Carpet_cleaning">Carpet cleaning</option>
                                        <option value="none">None</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>

                    <div className="vacancy-form-group">
                        <label for="file" >Upload image of need</label>
                        <input type="file" name="file" className="form-control" id="file" />
                    </div>

                    <Row className="vacancy-form-group-buttons mt-3">
                        <Col>
                            <a id="send-link" href="#"><button> Send </button></a>
                        </Col>
                        <Col>
                            <a id="cancelbtn-link" href="#"><button>Cancel</button></a>
                        </Col>
                    </Row>
                </form>
            </div></div>
    );



};

export default Quotation;


