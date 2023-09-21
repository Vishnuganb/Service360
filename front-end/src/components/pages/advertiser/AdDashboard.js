import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";


import "../../../style/advertiser/AdIndex.css";




const AdDashbord = () => {
  
  return (
    <Container>
      <h1 className="AdPageHeading">Your Ads</h1>

      <Row className="adDashCountDiv">
        <Col className="AdCountCol">
          <p className="AdTotal">Total</p>
          <p className="adNo">10</p>
        </Col>

        <Col className="AdCountCol">
          <p className="AdTotal">Verified</p>
          <p className="adNo">9</p>
        </Col>

        <Col className="AdCountlast">
          <p className="AdTotal">Rejected</p>
          <p className="adRejNo">1</p>
        </Col>
      </Row>
      <div className="adCenterCont">
        <Link to="/advertiser/CreateAd" className="PostAd">
          <button className="PostAd">Post New Ad</button>
        </Link>
      </div>
      <hr className="AdHr" />
    </Container>
  );
};

export default AdDashbord;
