import React, { useState } from "react";
import { Container, Row, Col, Image ,Modal, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import backgroundImage from "../../../assets/images/header/Background.png";

import AdImg1 from "../../../assets/images/advertiser/Ads/Drill1.png";
import AdImg2 from "../../../assets/images/advertiser/Ads/Drill2.png";
import AdImg3 from "../../../assets/images/advertiser/Ads/Driller3.png";
import profileIcon from "./../../../assets/images/advertiser/Adam.jpg";

import "../../../style/advertiser/AdIndex.css";

const ShopDetailsModal = ({ show, onHide, shopData }) => {
  console.log(shopData);
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ backgroundColor: "#292D32", color: "#ffffff" }}
      >
        <Modal.Title>{shopData.shopName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="d-flex justify-content-center border-bottom">
          <Col className="col-4">Owner Name</Col>
          <Col className="col-6">{shopData.ownerName}</Col>
        </Row>
        <br />
        <Row className="d-flex justify-content-center border-bottom">
          <Col className="col-4">Mobile No</Col>
          <Col className="col-6">{shopData.mobileNo}</Col>
        </Row>
        <br />
        <Row className="d-flex justify-content-center border-bottom">
          <Col className="col-4 align-self-center">Address</Col>
          <Col className="col-6">{shopData.address}</Col>
        </Row>
        <br />

        <Row className="d-flex justify-content-center">
          <button className="AdSlideButton">Chat</button>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

const ViewAd = () => {

   const [showShopDetails, setShowShopDetails] = useState(false);
   const [selectedShop, setSelectedShop] = useState(null);

   const openShopDetailsModal = (shopData) => {
     setSelectedShop(shopData);
     setShowShopDetails(true);
   };

   const closeShopDetailsModal = () => {
     setShowShopDetails(false);
     setSelectedShop(null);
   };

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
const shopData = {
  shopName: "Emereld Electrical",
  ownerName: "Adam Robert",
  mobileNo: "0778964983",
  address: "No 132, Marain Drive, Bambalapittiya, Colombo",
};
  return (
    <Container>
      <div
        className="shadow-lg p-3 bg-white border rounded "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div>
          <div md="auto" className="d-flex align-items-center ">
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
          </div>
        </div>

        <div className="d-flex align-items-center AdsViewCont">
          <div>
            <div className="AdViewImage">
              <Image
                src={selectedImage}
                alt="Main image"
                fluid
                onClick={() => handleImageClick(images[0])}
              />

              <div className="py-3 ">
                <div className="d-flex justify-content-center AdsRowImg">
                  {images.map((image, index) => (
                    <div key={index} className="m-3 AdsColImg">
                      <Image
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        thumbnail
                        fluid
                        onClick={() => handleImageClick(image)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="d-flex justify-content-center">
              <h1 className="AdSlideHeading">Ideal Driller</h1>
            </div>
            <div>
              <p>
                The New Listing Digital Drill Angle Machine Cordless Hammer Set
                Electric Specification 24V Cordless Power Drills
              </p>
              <hr />
              <p> category: Electrical</p>
              <p> Warranty: 12 Months</p>
              <p> Delivery: Free Delivery</p>
              <h1 className="AdPrice text-center">32000 LKR</h1>
            </div>
            <div className="d-flex justify-content-center">
              <Button
                className="AdSlideButton"
                onClick={() => openShopDetailsModal(shopData)}
              >
                {" "}
                Shop Details
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ShopDetailsModal
        show={showShopDetails}
        onHide={closeShopDetailsModal}
        shopData={shopData}
      />

      {/* <Col>
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
      </Col> */}

      <div>
        <h1>Related Ads</h1>
      </div>
    </Container>
  );
};

export default ViewAd;
