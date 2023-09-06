import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserImg from "../../../assets/images/header/user.jpg";
import SofaCleaning from "../../../assets/images/Customer/SofaCleaning.jpg";
import SofaCleaning2 from "../../../assets/images/Customer/SofaCleaning2.jpg";
import SofaCleaning3 from "../../../assets/images/Customer/SofaCleaning3.jpeg";
import SofaCleaning4 from "../../../assets/images/Customer/SofaCleaning4.jpeg";
import Button from "react-bootstrap/Button";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import ViewPostedJobs2 from "./ViewPostedJobs2";


function ViewPostedJobs1() {
  const singleJobData = {
    profile: UserImg,
    jobTitle: 'Sofa Cleaning',
    dueDate: '2023-08-29',
    serviceName: 'Cleaning',
    description: 'As a professional sofa cleaning technician, your primary responsibility is to restore, rejuvenate, and transform a variety of sofas to their optimal condition. With a keen eye for detail and a passion for bringing back the beauty of furniture, you will tackle a diverse array of sofa-related challenges to ensure utmost client satisfaction.',
    location: 'Wellawatte',
    posted: '2023-08-02',
    images: [SofaCleaning, SofaCleaning2, SofaCleaning3, SofaCleaning4, SofaCleaning3, SofaCleaning4],
  };

  return (
    <Row className="JobDetails-Col-container">
      <Col className="jobDetails-img-container col-12 col-lg-2 d-flex flex-column align-items-center">
        <div className="jobDetails-avatar-container mb-2">

        </div>
        <div
          className="jobDetails-username mb-1"
          style={{ fontSize: "18px", fontFamily: "'Rubik', sans-serif" }}
        >
        </div>

      </Col>
      <Col className="jobDetails-details-container col-12 col-lg-10 d-flex flex-column">
        <div className="jobDetails-status-container mb-2">

        </div>
        <div className="jobDetails-title-container mb-2">
          <span className="jobDetails-title" style={{ fontWeight: "650" }}>{singleJobData.jobTitle}</span>
        </div>
        <div className="jobDetails-category-container mb-2 d-flex flex-column">
          <span className="jobDetails-category" style={{ fontWeight: "650" }}>Category</span>
          <span className="jobDetails-category-value">{singleJobData.serviceName}</span>
        </div>
        <div className="jobDetails-location-container mb-2 d-flex flex-column">
          <span className="jobDetails-location" style={{ fontWeight: "650" }}>Location</span>
          <span className="jobDetails-location-value">{singleJobData.location}</span>
        </div>
        <div className="jobDetails-dueDate-container mb-2 d-flex flex-row">
          <div>
            <span className="jobDetails-dueDate" style={{ fontWeight: "650" }}>Due Date</span>
            <br />
            <span className="jobDetails-dueDate-value">{singleJobData.dueDate}</span>
          </div>
          <div className="mx-4">
            <span className="jobDetails-posted" style={{ fontWeight: "650" }}>Posted</span>
            <br />
            <span className="jobDetails-posted-value">{singleJobData.posted}</span>
          </div>
        </div>
        <div className="jobDetails-description-container d-flex flex-column mb-2">
          <span className="jobDetails-description" style={{ fontWeight: "650" }}>Description</span>
          <span className="jobDetails-description-value">
            {singleJobData.description}
          </span>
        </div>
        <div className="jobDetails-images-container">
          <span className="jobDetails-images" style={{ fontWeight: "650" }}>Images</span>
          <div className="jobDetails-images-container-box row mt-2">
            {singleJobData.images && singleJobData.images.map((image, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <img
                  src={image}
                  alt={`job detail image ${index}`}
                  className="jobDetails-images-value-img"
                />
              </div>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ViewPostedJobs1;