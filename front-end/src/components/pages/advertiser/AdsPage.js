import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../../style/advertiser/CreateAd.css";
import "../../../style/advertiser/AdsPage.css";
import profileIcon from "./../../../assets/images/advertiser/Adam.jpg";
import adImage from "./../../../assets/images/advertiser/41CKlQ1b08S.jpg";
import SlideShow from "./AdSlide";

const AdSampleCont = ({ profileIcon, adImage, adName, price, location }) => {
  return (
    <Col className="adCont">
      <div className="AdSampleCont">
        <div className="AdHeader">
          <div>
            <img src={profileIcon} roundedCircle className="AdProfilePic" />
          </div>
          <div className="namediv">
            <p>Adam</p>
          </div>
        </div>

        <div>
          <h3 className="adname">{adName}</h3>
        </div>

        <div>
          <img src={adImage} rounded />
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

  
  ];

  return (
    <Container>
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
          </Row>
        </fieldset>
      </Form>

      <hr className="AdHr" />

      <Row className="AdsRow">
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
      </Row>
    </Container>
  );
};

export default AdsPage;
