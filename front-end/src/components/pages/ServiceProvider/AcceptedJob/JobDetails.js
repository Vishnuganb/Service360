import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserImg from "../../../../assets/images/header/user.jpg";
import printer1 from "../../../../assets/images/ServiceProvider/printer1.jpg";
import printer2 from "../../../../assets/images/ServiceProvider/printer2.jpg";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function AcceptedJobDetails() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Row className="AcceptedJobDetails-Col-container mb-4">
            <Col className="AcceptedJobDetails-img-container col-12 col-lg-2 d-flex flex-column align-items-center">
                <div className="AcceptedJobDetails-avatar-container mb-2">
                    <img
                    src={UserImg}
                    alt="avatar"
                    className="AcceptedJobDetails-avatar rounded-circle"
                    style={{ width: "50px", height: "50px" }}
                    />
                </div>
                <div
                className="AcceptedJobDetails-username mb-1"
                style={{ fontSize:"18px",fontFamily: "'Rubik', sans-serif" }}
                >
                Umai Vanan
                </div>
                <div
                className="AcceptedJobDetails-ratings mb-1"
                style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                </div>
                <div
                className="AcceptedJobDetails-ratings-count"
                style={{ fontFamily: "'Rubik', sans-serif" }}
                >
                (for 5 jobs)
                </div>
                <div className="d-flex flex-row">
                    <div className="me-3">
                        <i class="bi bi-telephone-fill"></i>
                    </div>
                    <div>
                        <i class="bi bi-chat-fill"></i>
                    </div>
                </div>
            </Col>

            <Col className="AcceptedJobDetails-details-container mt-lg-0 mt-2 col-12 col-lg-10 d-flex flex-column">
                <div className="AcceptedJobDetails-title-container mb-2">
                <span className="AcceptedJobDetails-title" style={{fontWeight:"650"}}>Printer Repair Technician</span>
                </div>
                <div className="AcceptedJobDetails-category-container mb-2 d-flex flex-column">
                <span className="AcceptedJobDetails-category" style={{fontWeight:"650"}}>Category</span>
                <span className="AcceptedJobDetails-category-value">Electricians</span>
                </div>
                <div className="AcceptedJobDetails-location-container mb-2 d-flex flex-column">
                <span className="AcceptedJobDetails-location" style={{fontWeight:"650"}}>Location</span>
                <span className="AcceptedJobDetails-location-value">Wellawatte</span>
                </div>
                <div className="AcceptedJobDetails-dueDate-container mb-2 d-flex flex-row">
                <div>
                    <span className="AcceptedJobDetails-dueDate" style={{fontWeight:"650"}}>Due Date</span>
                    <br />
                    <span className="AcceptedJobDetails-dueDate-value">Urgent</span>
                </div>
                <div className="mx-4">
                    <span className="AcceptedJobDetails-posted" style={{fontWeight:"650"}}>Posted</span>
                    <br />
                    <span className="AcceptedJobDetails-posted-value">06-07-2023</span>
                </div>
                </div>
                <div className="AcceptedJobDetails-description-container d-flex flex-column mb-2">
                <span className="AcceptedJobDetails-description" style={{fontWeight:"650"}}>Description</span>
                <span className="AcceptedJobDetails-description-value">
                As a printer repair technician, your primary responsibility is to diagnose, troubleshoot, and repair a wide range of printer issues. You will be the go-to expert for resolving technical problems, ensuring that printers operate at peak performance. From laser printers to inkjet models, you will handle various makes and models, addressing both hardware and software-related concerns.
                </span>
                </div>
                <div className="AcceptedJobDetails-images-container">
                <span className="AcceptedJobDetails-images" style={{fontWeight:"650"}}>Images</span>
                
                {/* LOOP WILL COME HERE */}
                
                <div className="AcceptedJobDetails-images-container-box row mt-2">
                    <div className="col-6 col-md-4 col-lg-3">
                    <img
                    src={printer1}
                    alt="job detail image"
                    className="AcceptedJobDetails-images-value-img"
                    />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                    <img
                    src={printer2}
                    alt="job detail image"
                    className="AcceptedJobDetails-images-value-img"
                    />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                    <img
                    src={printer1}
                    alt="job detail image"
                    className="AcceptedJobDetails-images-value-img"
                    />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                    <img
                    src={printer2}
                    alt="job detail image"
                    className="AcceptedJobDetails-images-value-img"
                    />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                    <img
                    src={printer1}
                    alt="job detail image"
                    className="AcceptedJobDetails-images-value-img"
                    />
                    </div>
                    <div className="col-6 col-md-4 col-lg-3">
                    <img
                    src={printer2}
                    alt="job detail image"
                    className="AcceptedJobDetails-images-value-img"
                    />
                    </div>
                </div>
                </div>
            </Col>
        </Row>
        <span>Todo List</span>
        <div className="AcceptedJobDetails-button-container mt-2 d-flex flex-row">
                <Button className="btn-ServiceProvider-1">Start Todo List</Button>
                <Button className="btn-ServiceProvider-2 AcceptedJobDetails-start ms-auto">View Todo List</Button>
        </div>
        <hr/>
        <span>Quatation</span>
        <div className="mt-2 d-flex flex-column">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Control type="file" placeholder="Password" /> 
                    </Form.Group>
                    <Form.Text className="text-muted d-block mb-3">
                      Visit the <a href="https://vyaparapp.in/tools/free-online-quotation-maker#generate-online">quotation website</a> to create a quotation.
                    </Form.Text>
                    <Button className="btn-ServiceProvider-2 AcceptedJobDetails-start" variant="primary" type="submit">
                        Send Quotation
                    </Button>
                </Form>
        </div>
        <hr/>
        <div className="AcceptedJobDetails-button-container mt-2 d-flex flex-row">
                <Button className="btn-ServiceProvider-1" onClick={handleShow}>Schedule Visitation</Button>
                <Button className="btn-ServiceProvider-3 AcceptedJobDetails-start ms-auto">Start Job</Button>
        </div>


        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff'}}>
          <Modal.Title>Schedule Visitation</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Date</Form.Label>
              <Form.Control className='mb-2' type="date" placeholder="" autoFocus />

              <Form.Label>Start Time</Form.Label>
              <Form.Control className='mb-2' type="time" placeholder="" autoFocus/>
              
              <Form.Label>End Time</Form.Label>
              <Form.Control className='mb-2' type="time" placeholder="" autoFocus/>

              <Form.Label>Description</Form.Label>
              <Form.Control className='mb-2' type="text" placeholder="" autoFocus/>

            </Form.Group>

          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button className='btn-ServiceProvider-2' onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn-ServiceProvider-1' onClick={handleClose}>
            Schedule
          </Button>
        </Modal.Footer>
      </Modal>


      
    </div>
  );
}

export default AcceptedJobDetails;
