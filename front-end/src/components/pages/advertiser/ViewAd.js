import React, { useState } from "react";
import { Container, Row, Col, Image, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import backgroundImage from "../../../assets/images/header/Background.png";

import AdImg1 from "../../../assets/images/advertiser/Ads/Drill1.png";
import AdImg2 from "../../../assets/images/advertiser/Ads/Drill2.png";
import AdImg3 from "../../../assets/images/advertiser/Ads/Driller3.png";
import profileIcon from "./../../../assets/images/advertiser/Adam.jpg";


import "../../../style/advertiser/AdIndex.css";

const ViewAd = () => {
  const images = [AdImg1, AdImg2, AdImg3];

  const [, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  return (
    <Container>
      <Row
        className="shadow-lg p-3 mb-5 bg-white border rounded"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Row>
          <Col md="auto" className="d-flex align-items-center ">
            <div>
              <img
                src={profileIcon}
                alt="Profile of Advertiser"
                roundedCircle
                className="AdProfilePic"
              />
            </div>
            <div className="namediv">
              <p>Adam</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center">
            <h1 className="AdSlideHeading">Ideal Driller</h1>
          </Col>
        </Row>

        <Row className="AdsViewCont">
          <Col className="AdViewImage">
            <Image
              src={selectedImage}
              alt="Main image"
              fluid
              onClick={() => handleImageClick(images[0])}
            />

            <Container className="py-3">
              <Row className="d-flex justify-content-center">
                {images.map((image, index) => (
                  <Col key={index} xs={6} sm={4} md={3} lg={3} className="mb-3">
                    <Image
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      thumbnail
                      fluid
                      onClick={() => handleImageClick(image)}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </Col>
          <Col>
            <p>
              The New Listing Digital Drill Angle Machine Cordless Hammer Set
              Electric Specification 24V Cordless Power Drills
            </p>
            <hr />
            <p> category: Electrical</p>
            <p> Warranty: 12 Months</p>
            <p> Delivery: Free Delivery</p>
            <h1 className="AdPrice text-center">32000 LKR</h1>
          </Col>
          <Col>
            <Col className="shadow p-3 mb-5 bg-white border rounded ">
              <div style={{ backgroundImage: `url(${backgroundImage})` }}>
                <h2 className="text-center">Emereld Electrical</h2>

                <Row className="d-flex justify-content-center border-bottom">
                  <Col className="col-4">Owner Name </Col>
                  <Col className="col-6">Adam Robert</Col>
                </Row>
                <br />
                <Row className="d-flex justify-content-center border-bottom">
                  <Col className="col-4">Mobile No </Col>
                  <Col className="col-6">0778964983</Col>
                </Row>
                <br />
                <Row className="d-flex justify-content-center border-bottom">
                  <Col className="col-4 align-self-center">Address </Col>
                  <Col className="col-6">
                    No 132, Marain Drive, Bambalapittiya, Colombo
                  </Col>
                </Row>
                <br />
                <br />

                <Row className="d-flex justify-content-center">
                  <button className="AdSlideButton">Chat</button>
                </Row>
              </div>
            </Col>
          </Col>
        </Row>
      </Row>

      <Row>
        <h1>Related Ads</h1>
      </Row>
    </Container>
  );
};

export default ViewAd;
