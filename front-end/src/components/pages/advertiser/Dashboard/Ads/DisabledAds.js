import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import DisabledAdPopUp from "./DisabledAdPopUp";

import "../../../../../style/advertiser/AdIndex.css";

import profileIcon from "./../../../../../assets/images/advertiser/Adam.jpg";



import Ad6_1 from "../../../../../assets/images/admin/hammer_1.jpeg";
import Ad6_2 from "../../../../../assets/images/admin/hammer_2.jpeg";
import Ad6_3 from "../../../../../assets/images/admin/hammer_3.jpeg";
import Ad7_1 from "../../../../../assets/images/admin/disk_2.jpeg";
import Ad7_2 from "../../../../../assets/images/admin/disk_1.jpeg";
import Ad7_3 from "../../../../../assets/images/admin/disk_3.jpeg";
import Ad8_1 from "../../../../../assets/images/admin/plier_1.jpeg";
import Ad8_2 from "../../../../../assets/images/admin/plier_2.jpeg";
import Ad8_3 from "../../../../../assets/images/admin/plier_3.jpeg";


const VerifiedAdCont = ({
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
              <p className="AdVrifiedP  "> Verified</p>
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

const VerifiedAds = () => {
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
      adImages: [Ad6_1, Ad6_2, Ad6_3],
      adName: "Hammer",
      price: 850,
      location: "Colombo",
    },
    {
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [Ad7_1, Ad7_2, Ad7_3],
      adName: "Disk",
      price: 1200,
      location: "Colombo",
    },

    {
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [Ad8_1, Ad8_2, Ad8_3],
      adName: "Pliers",
      price: 600,
      location: "Colombo",
    },
  ];

  return (
    <Container >
      <h2 className="AdPageHeading">Disabled Ads</h2>
      <Row>
        <div className="AdsRow">
          {adsData.map((ad, index) => (
            <VerifiedAdCont
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
          <DisabledAdPopUp
            adName={selectedAd.adName}
            proName={selectedAd.proName}
            price={selectedAd.price}
            profileIcon={selectedAd.profileIcon}
            adImages={selectedAd.adImages}
            location={selectedAd.location}
            modalVisible={modalVisible}
            closeModal={closeModal}
          />
        )}
      </Row>
    </Container>
  );
};

export default VerifiedAds;