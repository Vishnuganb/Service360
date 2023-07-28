import React, { useState } from "react";
import { Container, Row, Col, Image, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


import AdImg1 from "../../../assets/images/advertiser/Ads/Drill1.jpg";
import AdImg2 from "../../../assets/images/advertiser/Ads/Drill2.jpg";
import AdImg3 from "../../../assets/images/advertiser/Ads/Driller3.jpg";
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
      <div className="shadow-lg p-3 mb-5 bg-white rounded">
        <div className="AdHeader">
          <div>
            <img
              src={profileIcon}
              alt="Profile"
              roundedCircle
              className="AdProfilePic"
            />
          </div>
          <div className="namediv">
            <p>Adam</p>
            <p className="AdVrifiedP"> Verified</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <h1 className="AdSlideHeading">Ideal Driller</h1>
        </div>

        <div className="d-flex justify-content-center" style={{ gap: "1em" }}>
          <div className="w-25 p-3">
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
                      onClick={() => handleImageClick(image)}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </div>

          <div className="w-50 p-3">
            <p>
              The New Listing Digital Drill Angle Machine Cordless Hammer Set
              Electric Specification 24V Cordless Power Drills
            </p>
            <hr />
            <p> category: Electrical</p>
            <p> Warranty: 12 Months</p>
            <p> Delivery: Free Delivery</p>
            <h1 className="AdPrice text-center">32000 LKR</h1>
            <div className="d-flex justify-content-center">
              {/* <button className="AdSlideButton">Order Now</button> */}
            </div>
          </div>

          <div className="shadow p-3 mb-5 bg-white rounded ">
            <h2 className="text-center">Emereld Electrical</h2>

            <div className="d-flex justify-content-center border-bottom">
              <Col className="col-4">Owner Name </Col>
              <Col className="col-6">Adam Robert</Col>
            </div>
            <br />
            <div className="d-flex justify-content-center border-bottom">
              <Col className="col-4">Mobile No </Col>
              <Col className="col-6">0778964983</Col>
            </div>
            <br />
            <div className="d-flex justify-content-center border-bottom">
              <Col className="col-4 align-self-center">Address </Col>
              <Col className="col-6">
                No 132, Marain Drive, Bambalapittiya, Colombo
              </Col>
            </div>
            <br />
            <br />

            <div className="d-flex justify-content-center">
              <button className="AdSlideButton">Chat</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>Related Ads</h1>
      </div>
    </Container>
  );
};

export default ViewAd;
