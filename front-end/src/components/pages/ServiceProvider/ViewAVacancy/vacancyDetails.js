import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserImg from "../../../../assets/images/header/user.jpg";

function vacancyDetails() {
    return (
      <Row className="vacancyDetails-Col-container">
        <Col className="vacancyDetails-img-container col-12 col-lg-2 d-flex flex-column align-items-center">
          <div className="vacancyDetails-avatar-container mb-2">
              <img
              src={UserImg}
              alt="avatar"
              className="vacancyDetails-avatar rounded-circle"
              style={{ width: "50px", height: "50px" }}
              />
          </div>
          <div
            className="vacancyDetails-username mb-1"
            style={{ fontSize:"18px",fontFamily: "'Montserrat', sans-serif" }}
          >
            Aptinex
          </div>
          <div
            className="vacancyDetails-ratings mb-1"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <div
            className="vacancyDetails-ratings-count"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            (for 8 vacancies)
          </div>

          <div>
            <button
              className="vacancyDetails-apply-btn mt-2 mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Apply
            </button>
          </div>
        </Col>

        <Col className="vacancyDetails-details-container col-12 col-lg-10 d-flex flex-column">
          <div className="vacancyDetails-status-container mb-2">
            <span className="vacancyDetails-status me-2" id="vacancy-status" style={{fontSize:"16px",fontWeight:"400",padding:"4px 6px",border:"2px solid rgb(37, 199, 37)",borderRadius:"8px"}}>
              New
            </span>
            <span className="vacancyDetails-status" id="vacancy-status" style={{fontSize:"16px",fontWeight:"400",padding:"4px 6px",border:"2px solid rgb(37, 199, 37)",borderRadius:"8px"}}>
              Full-time
            </span>
          </div>
          <div className="vacancyDetails-title-container mb-2">
            <span className="jobDetails-title" style={{fontWeight:"650"}}>Electronics Technician</span>
          </div>
          <div className="vacancyDetails-category-container mb-2 d-flex flex-column">
            <span className="jobDetails-category" style={{fontWeight:"650"}}>Category</span>
            <span className="jobDetails-category-value">Electricians</span>
          </div>
          <div className="vacancyDetails-location-container mb-2 d-flex flex-column">
            <span className="jobDetails-location" style={{fontWeight:"650"}}>Location</span>
            <span className="jobDetails-location-value">Wellawatte</span>
          </div>
          <div className="vacancyDetails-dueDate-container mb-2 d-flex flex-row">
            <div>
              <span className="vacancyDetails-dueDate" style={{fontWeight:"650"}}>Due Date</span>
              <br />
              <span className="vacancyDetails-dueDate-value">Urgent</span>
            </div>
            <div className="mx-4">
              <span className="vacancyDetails-posted" style={{fontWeight:"650"}}>Posted</span>
              <br />
              <span className="vacancyDetails-posted-value">06-07-2023</span>
            </div>
          </div>
          <div className="vacancyDetails-skills-container d-flex flex-column mb-2">
            <span className="vacancyDetails-skills" style={{fontWeight:"650"}}>Skills & Qualifications</span>
            <span className="vacancyDetails-skills-value">
                Candidates with a minimum of 1 year and above work experience and trainees. <br/>
                Basic knowledge of laying the wiring using conduit and casing. <br/>
                Good communication skills <br/>
                Valid riding/ driving license will be a value-added qualification.
            </span>
          </div>
          <div className="vacancyDetails-responsibility-container d-flex flex-column mb-2">
            <span className="vacancyDetails-responsibility" style={{fontWeight:"650"}}>Skills & Qualifications</span>
            <span className="vacancyDetails-responsibility-value">
                Perform routine maintenance and troubleshooting of electronic equipment.  <br/>
                Identify and resolve electronic equipment malfunctions or failures by conducting diagnostic tests, analyzing circuitry.  <br/>
                Assist in designing and modifying electronic circuits, including PCB layout, component selection, and soldering.  <br/>
                Maintain accurate records of equipment maintenance, repair activities, and component inventory.
            </span>
          </div>
          <div className="vacancyDetails-place-container d-flex flex-column mb-2">
            <span className="vacancyDetails-place-value text-success" style={{fontWeight:"650", fontSize:"19px"}}>
                Aptinex <br/>
                No: 44, T13, T14, Dedicated Economic Center Kirimandala Mawatha, Colombo -5
            </span>
          </div>
          <div className="vacancyDetails-place-container d-flex flex-column mt-3 mb-3">
            <span className="vacancyDetails-place-value" style={{fontWeight:"600", fontSize:"15px"}}>
                (Please Click Apply Button to Apply for this Vacancy)
            </span>
          </div>
        </Col>
      </Row>
    );
  }
  
  export default vacancyDetails;
  