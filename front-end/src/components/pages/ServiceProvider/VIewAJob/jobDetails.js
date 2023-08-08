import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserImg from "../../../../assets/images/header/user.jpg";
import printer1 from "../../../../assets/images/ServiceProvider/printer1.jpg";
import printer2 from "../../../../assets/images/ServiceProvider/printer2.jpg";
import Button from "react-bootstrap/Button";

function jobDetails() {
  return (
    <Row className="JobDetails-Col-container">
      <Col className="jobDetails-img-container col-12 col-lg-2 d-flex flex-column align-items-center">
        <div className="jobDetails-avatar-container mb-2">
            <img
            src={UserImg}
            alt="avatar"
            className="jobDetails-avatar rounded-circle"
            style={{ width: "50px", height: "50px" }}
            />
        </div>
        <div
          className="jobDetails-username mb-1"
          style={{ fontSize:"18px",fontFamily: "'Rubik', sans-serif" }}
        >
          Umai Vanan
        </div>
        <div
          className="jobDetails-ratings mb-1"
          style={{ fontFamily: "'Rubik', sans-serif" }}
        >
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
        </div>
        <div
          className="jobDetails-ratings-count"
          style={{ fontFamily: "'Rubik', sans-serif" }}
        >
          (for 5 jobs)
        </div>

        <div>
            <Button
              className="jobDetails-apply-btn btn-ServiceProvider-1 mt-2 mb-4"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              Apply
            </Button>
          </div>

      </Col>
      <Col className="jobDetails-details-container col-12 col-lg-10 d-flex flex-column">
        <div className="jobDetails-status-container mb-2">
          <span className="jobDetails-status" id="job-status" style={{fontSize:"16px",fontWeight:"400",padding:"4px 6px",border:"2px solid rgb(37, 199, 37)",borderRadius:"8px"}}>
            New
          </span>
        </div>
        <div className="jobDetails-title-container mb-2">
          <span className="jobDetails-title" style={{fontWeight:"650"}}>Printer Repair Technician</span>
        </div>
        <div className="jobDetails-category-container mb-2 d-flex flex-column">
          <span className="jobDetails-category" style={{fontWeight:"650"}}>Category</span>
          <span className="jobDetails-category-value">Electricians</span>
        </div>
        <div className="jobDetails-location-container mb-2 d-flex flex-column">
          <span className="jobDetails-location" style={{fontWeight:"650"}}>Location</span>
          <span className="jobDetails-location-value">Wellawatte</span>
        </div>
        <div className="jobDetails-dueDate-container mb-2 d-flex flex-row">
          <div>
            <span className="jobDetails-dueDate" style={{fontWeight:"650"}}>Due Date</span>
            <br />
            <span className="jobDetails-dueDate-value">Urgent</span>
          </div>
          <div className="mx-4">
            <span className="jobDetails-posted" style={{fontWeight:"650"}}>Posted</span>
            <br />
            <span className="jobDetails-posted-value">06-07-2023</span>
          </div>
        </div>
        <div className="jobDetails-description-container d-flex flex-column mb-2">
          <span className="jobDetails-description" style={{fontWeight:"650"}}>Description</span>
          <span className="jobDetails-description-value">
          As a printer repair technician, your primary responsibility is to diagnose, troubleshoot, and repair a wide range of printer issues. You will be the go-to expert for resolving technical problems, ensuring that printers operate at peak performance. From laser printers to inkjet models, you will handle various makes and models, addressing both hardware and software-related concerns.
          </span>
        </div>
        <div className="jobDetails-images-container">
          <span className="jobDetails-images" style={{fontWeight:"650"}}>Images</span>
          
          {/* LOOP WILL COME HERE */}
          
          <div className="jobDetails-images-container-box row mt-2">
            <div className="col-6 col-md-4 col-lg-3">
            <img
              src={printer1}
              alt="job detail image"
              className="jobDetails-images-value-img"
            />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
            <img
              src={printer2}
              alt="job detail image"
              className="jobDetails-images-value-img"
            />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
            <img
              src={printer1}
              alt="job detail image"
              className="jobDetails-images-value-img"
            />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
            <img
              src={printer2}
              alt="job detail image"
              className="jobDetails-images-value-img"
            />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
            <img
              src={printer1}
              alt="job detail image"
              className="jobDetails-images-value-img"
            />
            </div>
            <div className="col-6 col-md-4 col-lg-3">
            <img
              src={printer2}
              alt="job detail image"
              className="jobDetails-images-value-img"
            />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default jobDetails;
