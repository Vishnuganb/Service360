import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "bootstrap/dist/css/bootstrap.min.css";

import "../../../style/advertiser/AdIndex.css";

import profileIcon from "./../../../assets/images/advertiser/Adam.jpg";
import adImage from "./../../../assets/images/advertiser/Ad.png";
import backgroundImage from "../../../assets/images/header/Background.png";

import SlideShow from "./AdSlide";
import PageNumber from "./../Forum/PageNumber.js";

const AdSampleCont = ({ profileIcon, adImage, adName, price, location }) => {
  return (
    <div
      className="AdSampleCont"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Row>
        <Col md="auto" className="d-flex align-items-center ">
          <div>
            <img
              src={profileIcon}
              alt="Profile of Advertiser"
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
      <Row className="d-flex justify-content-center mb-3">
        <button className="AdViewButton">View</button>
      </Row>
    </div>
  );
};

const AdsPage = () => {
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
      <div>
        <SlideShow />

        <Form>
          <fieldset>
            <Row className="AdsSearchRow">
              <h1>Search</h1>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Control id="disabledTextInput" placeholder="Search" />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Select>
                    <option>Select Category</option>
                    <option>Electician</option>
                    <option>Plumber</option>
                    <option>Mechanic</option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Select>
                    <option>Price Order</option>
                    <option>Lowest</option>
                    <option>Highest</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </fieldset>
        </Form>

        <hr className="AdHr" />

        <Row>
          <div className="AdsRow mt-3">
            {adsData.map((ad, index) => (
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
        <div className="d-flex justify-content-center mt-3">
          <PageNumber />
        </div>
      </div>
    </Container>
  );
};

export default AdsPage;
