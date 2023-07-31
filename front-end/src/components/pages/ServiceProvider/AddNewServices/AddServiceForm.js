import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddServiceForm(){
    return(
        <div className="AddServiceForm-container ms-lg-4 me-lg-5">
               <Row className="AddServiceForm-Head">
                    <Col className="col-xl-6 col-12 d-flex align-items-center mb-2">
                        <span className="AddServiceForm-Head-Title">
                            Add New Service(s)
                        </span>
                    </Col>
                    <Col className="col-xl-6 col-12 d-flex align-items-center">
                        <span className="AddServiceForm-Head-SubTitle p-2 ms-xl-auto">
                            Select your categories (maximum 5)
                        </span>
                    </Col>
               </Row>
               <Row className="AddServiceForm-Body">
                    <Form>                    
                        <Form.Group className="mt-4 mb-3 d-flex flex-wrap custom-checkbox" controlId="formBasicCheckbox">
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Carpentry" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Painting" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Ac Repair" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Masonry" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Tiles Fitting" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Glass & Aluminium" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Iron Works" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="CCTV Systems Repair" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Fire Alarm Systems Repair" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Video Surveillance Systems Repair" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Sofa Cleaning" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Carpet Cleaning" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="custom-font">Working Area</Form.Label>
                            <Form.Control className="custom-font" type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="custom-font">Description</Form.Label>
                            <Form.Control className="custom-font" type="text" placeholder="Describe your work" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="custom-font">Qualifications</Form.Label>
                            <Form.Control className="custom-font" type="text" placeholder="Ex : NVQ Level 1" />
                        </Form.Group>

                        <Form.Group className="mt-4 mb-3 d-flex flex-column custom-checkbox" controlId="formBasicCheckbox">
                            <Form.Label className="custom-font">Working day(s)</Form.Label>
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Monday" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Tuesday" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Wednessday" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Thursday" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Friday" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Saturday" />
                            <Form.Check className="me-3 custom-font" type="checkbox" label="Sunday" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="custom-font">Working Hours</Form.Label>
                            <Form.Control className="custom-font" type="text" placeholder="Ex : 8am - 5am" />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Label className="custom-font">Add Qualification Certificate</Form.Label>
                            <Form.Control className="custom-font" type="file" />
                        </Form.Group>

                        <div className="AddNewService-button-container d-flex flex-row">
                            <Button variant="primary" type="submit">Submit</Button>
                            <Button variant="primary" className="AddServiceForm-cancel ms-auto">Cancel</Button>
                        </div>
                    </Form>
               </Row>
        </div>
    );
}

export default AddServiceForm;