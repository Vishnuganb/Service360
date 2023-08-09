import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "../../../../style/advertiser/AdIndex.css";

import profileIcon from "./../../../../assets/images/advertiser/Adam.jpg";
import soapImage from "./../../../../assets/images/advertiser/soap.jpg";



const RejectAdCont = ({ profileIcon, adImage, adName, price, location, Reason }) => {
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
        <Row className="d-flex justify-content-center">
          <button className="AdViewButton mb-3">View</button>
        </Row>
        <Row ><p className="rejectP">{Reason}</p></Row>
      </div>
    </Col>
  );
};

const RejectedAds = () => {
  const RejectedadsData = [
    {
      profileIcon: profileIcon,
      adImage: soapImage,
      adName: "Lifebuoy Soap",
      price: 160,
      location: "Colombo",
      Reason: "Your Ad Not Relevent For Our System",
    },
    {
      profileIcon: profileIcon,
      adImage: soapImage,
      adName: "Lifebuoy Soap",
      price: 160,
      location: "Colombo",
      Reason: "Your Ad Not Relevent For Our System",
    },
    {
      profileIcon: profileIcon,
      adImage: soapImage,
      adName: "Lifebuoy Soap",
      price: 160,
      location: "Colombo",
      Reason: "Your Ad Not Relevent For Our System",
    },
  ];

  return (
    <Container>
      <h2 className="AdPageHeading">Rejected Ads</h2>

      <Row>
        <div className="AdsRow">
          {RejectedadsData.map((ad, index) => (
            <RejectAdCont
              key={index}
              profileIcon={ad.profileIcon}
              adImage={ad.adImage}
              adName={ad.adName}
              price={ad.price}
              location={ad.location}
               Reason ={ad.Reason}
            />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default RejectedAds;
