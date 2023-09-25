import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserImg from "../../../../assets/images/header/user.jpg";
import companyimage from "../../../../assets/images/ServiceProvider/company3.jpg";
import Button from "react-bootstrap/Button";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function VacancyDetails() {
  const [viewVacancyData, setviewVacancyData] = useState(null);

  const { id } = useParams();
  const vacancyId = parseInt(id, 10);

  useEffect(() => {
    axios.get(`http://localhost:8080/auth/viewNewVacancies/${vacancyId}`).then((res) => {
      console.log(res.data);
      setviewVacancyData(res.data);
    });
  }, []);

  if (!viewVacancyData) return 'No Vacancy found!';


  return (
    <Row className="vacancyDetails-Col-container">
      <Col className="vacancyDetails-img-container col-12 col-lg-2 d-flex flex-column align-items-center">
        <div className="vacancyDetails-avatar-container mb-2">
          <img
            src={companyimage}
            alt="avatar"
            className="vacancyDetails-avatar rounded-circle"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <div
          className="vacancyDetails-username mb-1"
          style={{ fontSize: "18px", fontFamily: "'Rubik', sans-serif" }}
        >
          {viewVacancyData.customername}
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

      <Col className="vacancyDetails-details-container col-12 col-lg-10 d-flex flex-column">
        <div className="vacancyDetails-status-container mb-2">
          <span className="vacancyDetails-status me-2" id="vacancy-status" style={{ fontSize: "16px", fontWeight: "400", padding: "4px 6px", border: "2px solid rgb(37, 199, 37)", borderRadius: "8px" }}>
            ongoing
          </span>
          <span className="vacancyDetails-status" id="vacancy-status" style={{ fontSize: "16px", fontWeight: "400", padding: "4px 6px", border: "2px solid rgb(37, 199, 37)", borderRadius: "8px" }}>
            {viewVacancyData.vacancytype}
          </span>
        </div>
        <div className="vacancyDetails-title-container mb-2">
          <span className="jobDetails-title" style={{ fontWeight: "650" }}>{viewVacancyData.vacancytitle}</span>
        </div>
        <div className="vacancyDetails-category-container mb-2 d-flex flex-column">
          <span className="jobDetails-category" style={{ fontWeight: "650" }}>Category</span>
          <span className="jobDetails-category-value">{viewVacancyData.servicename}</span>
        </div>
        <div className="vacancyDetails-location-container mb-2 d-flex flex-column">
          <span className="jobDetails-location" style={{ fontWeight: "650" }}>Location</span>
          <span className="jobDetails-location-value">{viewVacancyData.vacancylocation}</span>
        </div>
        <div className="vacancyDetails-dueDate-container mb-2 d-flex flex-row">
          <div>
            <span className="vacancyDetails-dueDate" style={{ fontWeight: "650" }}>Due Date</span>
            <br />
            <span className="vacancyDetails-dueDate-value">{viewVacancyData.duedate}</span>
          </div>
          <div className="mx-4">
            <span className="vacancyDetails-posted" style={{ fontWeight: "650" }}>Posted</span>
            <br />
            <span className="vacancyDetails-posted-value">{viewVacancyData.posteddate}</span>
          </div>
        </div>
        <div className="vacancyDetails-skills-container d-flex flex-column mb-2">
          <span className="vacancyDetails-skills" style={{ fontWeight: "650" }}>Skills & Qualifications</span>
          <span className="vacancyDetails-skills-value">
            {viewVacancyData.qualifications}
          </span>
        </div>
        <div className="vacancyDetails-responsibility-container d-flex flex-column mb-2">
          <span className="vacancyDetails-responsibility" style={{ fontWeight: "650" }}>Responsibilities</span>
          <span className="vacancyDetails-responsibility-value">
            {viewVacancyData.responsibilities}
          </span>
        </div>
        <div className="vacancyDetails-place-container d-flex flex-column mb-2">
          <span className="vacancyDetails-place-value text-success" style={{ fontWeight: "650", fontSize: "19px" }}>
            {viewVacancyData.address}
          </span>
        </div>
        <hr />
        <div className="AcceptedJobDetails-button-container mt-2 d-flex flex-row">
          <Link className="ms-auto" to="#">
            <Button className="btn-ServiceProvider-2 AcceptedJobDetails-start ms-auto">Cancel Vacancy</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
}

export default VacancyDetails;
