import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserImg from "../../../../assets/images/header/user.jpg";
import customerimage from "../../../../assets/images/ServiceProvider/customer2.jpg";
import printer1 from "../../../../assets/images/ServiceProvider/printer1.jpg";
import printer2 from "../../../../assets/images/ServiceProvider/printer2.jpg";
import tiles1 from "../../../../assets/images/ServiceProvider/tiles1.jpg";
import tiles2 from "../../../../assets/images/ServiceProvider/tiles2.jpg";
import tiles3 from "../../../../assets/images/ServiceProvider/tiles3.jpg";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';


function AcceptedJobDetails() {
  const [viewJobData, setViewJobData] = useState(null);

  const jobimages = [tiles1, tiles2, tiles3]

  const { id } = useParams();
  const jobId = parseInt(id, 10);

  useEffect(() => {
    axios.get(`http://localhost:8080/auth/viewNewJobs/${jobId}`).then((res) => {
      console.log(res.data);
      setViewJobData(res.data);
    });
  }, []);

  if (!viewJobData) return 'No jobs found!';

  return (
    <div>
      <Row className="AcceptedJobDetails-Col-container mb-4">
        <Col className="AcceptedJobDetails-img-container col-12 col-lg-2 d-flex flex-column align-items-center">
          <div className="AcceptedJobDetails-avatar-container mb-2">
            <img
              src={customerimage}
              alt="avatar"
              className="AcceptedJobDetails-avatar rounded-circle"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div
            className="AcceptedJobDetails-username mb-1"
            style={{ fontSize: "18px", fontFamily: "'Rubik', sans-serif" }}
          >
            {viewJobData.customername}
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
        <div className="vacancyDetails-status-container mb-2">
          <span className="vacancyDetails-status me-2" id="vacancy-status" style={{ fontSize: "16px", fontWeight: "400", padding: "4px 6px", border: "2px solid rgb(37, 199, 37)", borderRadius: "8px" }}>
            ongoing
          </span>
        </div>
          <div className="AcceptedJobDetails-title-container mb-2">
            <span className="AcceptedJobDetails-title" style={{ fontWeight: "650" }}>{viewJobData.jobtitle}</span>
          </div>
          <div className="AcceptedJobDetails-category-container mb-2 d-flex flex-column">
            <span className="AcceptedJobDetails-category" style={{ fontWeight: "650" }}>Category</span>
            <span className="AcceptedJobDetails-category-value">{viewJobData.servicename}</span>
          </div>
          <div className="AcceptedJobDetails-location-container mb-2 d-flex flex-column">
            <span className="AcceptedJobDetails-location" style={{ fontWeight: "650" }}>Location</span>
            <span className="AcceptedJobDetails-location-value">{viewJobData.joblocation}</span>
          </div>
          <div className="AcceptedJobDetails-dueDate-container mb-2 d-flex flex-row">
            <div>
              <span className="AcceptedJobDetails-dueDate" style={{ fontWeight: "650" }}>Due Date</span>
              <br />
              <span className="AcceptedJobDetails-dueDate-value">{viewJobData.duedate}</span>
            </div>
            <div className="mx-4">
              <span className="AcceptedJobDetails-posted" style={{ fontWeight: "650" }}>Posted</span>
              <br />
              <span className="AcceptedJobDetails-posted-value">{viewJobData.posteddate}</span>
            </div>
          </div>
          <div className="AcceptedJobDetails-description-container d-flex flex-column mb-2">
            <span className="AcceptedJobDetails-description" style={{ fontWeight: "650" }}>Description</span>
            <span className="AcceptedJobDetails-description-value">
              {viewJobData.jobdescription}
            </span>
          </div>
          <div className="AcceptedJobDetails-images-container">
            <span className="AcceptedJobDetails-images" style={{ fontWeight: "650" }}>Images</span>

            {/* LOOP WILL COME HERE */}

            <div className="AcceptedJobDetails-images-container-box row mt-2">
              {jobimages.map((image) => (
                <div className="col-6 col-md-4 col-lg-3">
                  <img
                    src={image}
                    alt={'job detail image'}
                    className="jobDetails-images-value-img"
                  />
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <div className="AcceptedJobDetails-button-container mt-2 d-flex flex-row">
        <Link className="d-flex ms-auto" to={`../ToDoList/${jobId}`}>
          <Button className="btn-ServiceProvider-2 AcceptedJobDetails-start ms-auto">View Todo List</Button>
        </Link>
      </div>
      <hr />
      <div className="AcceptedJobDetails-button-container mt-2 d-flex flex-row">
        <Link className="ms-auto" to="../StartJob">
          <Button className="btn-ServiceProvider-3 AcceptedJobDetails-start ms-auto">Start Job</Button>
        </Link>
      </div>

    </div>
  );
}

export default AcceptedJobDetails;