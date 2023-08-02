import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "../../../style/advertiser/AdIndex.css";

import profileIcon from "./../../../assets/images/advertiser/Adam.jpg";
import adImage from "./../../../assets/images/advertiser/41CKlQ1b08S.jpg";
import soapImage from "./../../../assets/images/advertiser/soap.jpg";

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

const VerifiedAdCont = ({ profileIcon, adImage, adName, price, location }) => {
  return (
    <Col className="adCont">
      <div className="AdSampleCont">
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
            <p>Adam </p>
            <p className="AdVrifiedP"> Verified</p>
          </div>
        </div>

        <div>
          <h3 className="adname">{adName}</h3>
        </div>

        <div>
          <img src={adImage} alt="Item" rounded />
        </div>

        <div>
          <p className="Adprice">{price} LKR</p>
        </div>

        <div className="adCenterCont">
          <button className="AdViewButton">View</button>
        </div>

        <Row>
          <Col>
            <p>{location}</p>
          </Col>

          <Col>
            <p className="AdRgtAln">Free Delivery</p>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

const RejectAdCont = ({ profileIcon, adImage, adName, price, location }) => {
  return (
    <Col className="adCont">
      <div className="AdSampleCont">
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
          </div>
        </div>

        <div>
          <h3 className="adname">{adName}</h3>
        </div>

        <div>
          <img src={adImage} alt="Item " rounded />
        </div>

        <div>
          <p className="Adprice">{price} LKR</p>
        </div>

        <div className="adCenterCont">
          <p className="rejectP">
            REASON : YOUR AD IS NOT RELATED TO OUR SYSTEM
          </p>
        </div>

        <Row>
          <Col>
            <p>{location}</p>
          </Col>

          <Col>
            <p className="AdRgtAln">Free Delivery</p>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

const AdDashbord = () => {
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
  ];

  const adsData = [
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

  const RejectedadsData = [
    {
      profileIcon: profileIcon,
      adImage: soapImage,
      adName: "Lifebuoy Soap",
      price: 160,
      location: "Colombo",
    },
    {
      profileIcon: profileIcon,
      adImage: soapImage,
      adName: "Lifebuoy Soap",
      price: 160,
      location: "Colombo",
    },
    {
      profileIcon: profileIcon,
      adImage: soapImage,
      adName: "Lifebuoy Soap",
      price: 160,
      location: "Colombo",
    },
  ];

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
        <button className="PostAd">Post New Ad</button>
      </div>
      <hr className="AdHr" />

      <h2 className="AdPageHeading">Verified Ads</h2>
      <Row>
        <div className="AdsRow">
          {adsData.map((ad, index) => (
            <VerifiedAdCont
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
            />
          ))}
        </div>
      </Row>
    </Container>
  );
};

export default AdDashbord;
