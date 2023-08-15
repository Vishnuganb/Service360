import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import ViewAd from "./ViewAd";

import "../../../../../style/advertiser/AdIndex.css";

import profileIcon from "./../../../../../assets/images/advertiser/Adam.jpg";

import soapImage from "./../../../../../assets/images/advertiser/soap.jpg";


const RejectedAdCont = ({
  profileIcon,
  proName,
  adImage,
  adName,
  price,
  location,
  openModal,
}) => {
  return (
    <Col className="adCont">
      <div className="AdSampleCont">
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
              <p>{proName}</p>
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-end">
            <div className="namediv float-right">
              <p className="AdrejectP  "> Rejected</p>
            </div>
          </Col>
        </Row>

        <Row>
          <h3 className="adname">{adName}</h3>
        </Row>

        <Row className="d-flex justify-content-center">
          <Image src={adImage} fluid alt="Item" style={{ maxHeight: "10em" }} />
        </Row>

        <Row>
          <h3 className="Adprice mt-3">{price} LKR</h3>
        </Row>

        <Row>
          <Col sm={4} className="d-flex gap-1">
            <div>
              <i className="fa-solid fa-location-dot"></i>
            </div>

            <p>{location}</p>
          </Col>
          <Col sm={8} className="d-flex justify-content-end gap-1">
            <div>
              <i className="fa-solid fa-truck-front"></i>
            </div>
            <p>Free Delivery</p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center ">
          <button className="AdViewButton mb-3" onClick={openModal}>
            View
          </button>
        </Row>
      </div>
    </Col>
  );
};

const RejectedAds = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null); // To store the selected ad

  const openModal = (ad) => {
    setSelectedAd(ad); // Set the selected ad
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const adsData = [
      {
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [soapImage],
      adName: "Lifebuoy Soap",
      price: 160,
      location: "Colombo",
      Reason: "This Ad Not Relevant For Our System",
    },
  ];

  return (
    <Container >
      <h2 className="AdPageHeading">Rejected Ads</h2>
      <Row>
        <div className="AdsRow">
          {adsData.map((ad, index) => (
            <RejectedAdCont
              key={index}
              profileIcon={ad.profileIcon}
              proName={ad.proName}
              adImage={ad.adImages[0]}
              adName={ad.adName}
              price={ad.price}
              location={ad.location}
              openModal={() => openModal(ad)}
            />
          ))}
        </div>

        {selectedAd && (
          <ViewAd
            adName={selectedAd.adName}
            proName={selectedAd.proName}
            price={selectedAd.price}
            profileIcon={selectedAd.profileIcon}
            adImages={selectedAd.adImages}
            location={selectedAd.location}
            Reason={selectedAd.Reason}
            modalVisible={modalVisible}
            closeModal={closeModal}
          />
        )}
      </Row>
    </Container>
  );
};

export default RejectedAds;
