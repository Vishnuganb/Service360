import React, { useState } from "react";
import { Container, Row, Col, Image, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../../../assets/images/header/Background.png";
import { Link, useLocation } from "react-router-dom";
import "../../../style/advertiser/AdIndex.css";

const ShopDetailsModal = ({ show, onHide, shopData }) => {
  const location = useLocation();

  const hasServiceProvider = location.pathname.includes("ServiceProvider");
  // console.log(shopData);
  return (
    <Modal
      show={show}
      onHide={onHide}
      // size="sm"
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

        {hasServiceProvider ? (
          <Link
            to="/ServiceProvider/Chat"
            className="d-flex justify-content-center"
          >
            <button className="AdSlideButton">Chat</button>
          </Link>
        ) : (
          <Link to="/Customer/Chat" className="d-flex justify-content-center">
            <button className="AdSlideButton">Chat</button>
          </Link>
        )}
      </Modal.Body>
    </Modal>
  );
};

const ViewSingleAd = ({
  id,
  profileIcon,
  proName,
  adName,
  adImages,
  price,
  location,
  Reason,
  modalVisible,
  closeModal,
}) => {
  //Show Shop details

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

  const [, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(adImages[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const shopData = {
    shopName: "Emereld Electrical",
    ownerName: "Adam Robert",
    mobileNo: "0778964983",
    address: "No 132, Marain Drive, Bambalapittiya, Colombo",
  };

  return (
    <div className="p-5">
      <Modal
        show={modalVisible}
        onHide={closeModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#292D32", color: "#ffffff" }}
        >
          <Modal.Title>View Ad</Modal.Title>
        </Modal.Header>
        <Container>
          <div style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="d-flex justify-content-between align-items-center">
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
                    onClick={() => handleImageClick(adImages[0])}
                  />

                  <div className="py-3 ">
                    <div className="d-flex justify-content-center AdsRowImg">
                      {adImages.map((image, index) => (
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
                  <h1 className="AdSlideHeading">{adName}</h1>
                </div>
                <div>
                  <p>
                    The New Listing Digital Drill Angle Machine Cordless Hammer
                    Set Electric Specification 24V Cordless Power Drills
                  </p>
                  <hr />
                  <p> category: Electrical</p>
                  <p> Warranty: 12 Months</p>
                  <p> Delivery: Free Delivery</p>
                  <h1 className="AdPrice text-center">{price} LKR</h1>
                </div>

                <div className="d-flex justify-content-center mb-3">
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
        </Container>
        <div> {Reason && <h3 className="AdrejectP p-4">{Reason}</h3>}</div>
      </Modal>
    </div>
  );
};

export default ViewSingleAd;