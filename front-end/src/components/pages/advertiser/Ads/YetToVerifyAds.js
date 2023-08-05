import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "../../../../style/advertiser/AdIndex.css";

import profileIcon from "./../../../../assets/images/advertiser/Adam.jpg";
import adImage from "./../../../../assets/images/advertiser/41CKlQ1b08S.jpg";


const AdSampleCont = ({ profileIcon, adImage, adName, price, location }) => {
  return (
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
            <p>Adam</p>
          </div>
        </Col>
      </Row>

      <Row>
        <h3 className="adname">{adName}</h3>
      </Row>

      <Row className="d-flex justify-content-center">
        <Image src={adImage} fluid alt="Item" />
      </Row>

      <Row>
        <h3 className="Adprice ">{price} LKR</h3>
      </Row>

      <Row className="d-flex justify-content-center">
        <button className="AdViewButton">View</button>
      </Row>

      <Row>
        <Col>
          <p>{location}</p>
        </Col>
        <Col>
          <p className="AdRgtAln">Free Delivery</p>
        </Col>
      </Row>
    </div>
  );
};



const YetToVerifyAds = () => {
  const notVerifyadsData = [
    {
      profileIcon: profileIcon,
      adImage: adImage,
      adName: "Ideal Driller",
      price: 16000,
      location: "Colombo",
    },
    {
      profileIcon: profileIcon,
      adImage: adImage,
      adName: "Ideal Driller",
      price: 16000,
      location: "Colombo",
    },
    {
      profileIcon: profileIcon,
      adImage: adImage,
      adName: "Ideal Driller",
      price: 16000,
      location: "Colombo",
    },
    {
      profileIcon: profileIcon,
      adImage: adImage,
      adName: "Ideal Driller",
      price: 16000,
      location: "Colombo",
    },
    {
      profileIcon: profileIcon,
      adImage: adImage,
      adName: "Ideal Driller",
      price: 16000,
      location: "Colombo",
    },
    {
      profileIcon: profileIcon,
      adImage: adImage,
      adName: "Ideal Driller",
      price: 16000,
      location: "Colombo",
    },
  ];

  return (
    <Container>
      <h2 className="AdPageHeading">Yet to Verified Ads</h2>
      <Row>
        <div className="AdsRow">
          {notVerifyadsData.map((ad, index) => (
            <AdSampleCont
              key={index}
              profileIcon={ad.profileIcon}
              adImage={ad.adImage}
              adName={ad.adName}
              price={ad.price}
              location={ad.location}
            />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default YetToVerifyAds;
