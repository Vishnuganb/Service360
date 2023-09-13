import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "bootstrap/dist/css/bootstrap.min.css";

import "../../../style/advertiser/AdIndex.css";

import profileIcon from "./../../../assets/images/advertiser/Adam.jpg";
import adImage from "./../../../assets/images/advertiser/Ad.png";

import SlideShow from "./AdSlide";
import PageNumber from "./../Forum/PageNumber.js";
import ViewSingleAd from "./ViewAd";

import AdImg1 from "../../../assets/images/advertiser/Ads/Drill1.png";
import AdImg2 from "../../../assets/images/advertiser/Ads/Drill2.png";
import AdImg3 from "../../../assets/images/advertiser/Ads/Driller3.png";
import Ad2_1 from "../../../assets/images/admin/ads/Screw_1.jpeg";
import Ad2_2 from "../../../assets/images/admin/ads/Screw_2.jpeg";
import Ad2_3 from "../../../assets/images/admin/ads/Screw_3.jpeg";
import Ad3_1 from "../../../assets/images/admin/ads/Grinder_1.jpeg";
import Ad3_2 from "../../../assets/images/admin/ads/Grinder_2.jpeg";
import Ad3_3 from "../../../assets/images/admin/ads/Grinder_3.jpeg";
import Ad4_1 from "../../../assets/images/admin/ads/drills_2.jpeg";
import Ad4_2 from "../../../assets/images/admin/ads/drills_1.jpeg";
import Ad4_3 from "../../../assets/images/admin/ads/drills_3.jpeg";
import Ad5_1 from "../../../assets/images/admin/ads/handsaw_1.jpeg";
import Ad5_2 from "../../../assets/images/admin/ads/handsaw_2.jpeg";
import Ad5_3 from "../../../assets/images/admin/ads/handsaw_3.jpeg";


const AdSampleCont = ({
  proName,
  profileIcon,
  adImage,
  adName,
  price,
  location,
  status,
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
          {status === 1 && (
            <Col className="d-flex align-items-center justify-content-end">
              <div className="namediv float-right">
                <p className="AdVrifiedP  "> Verified</p>
              </div>
            </Col>
          )}
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

const AdsPage = () => {
  const adsData = [
    {
      id: 1,
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [AdImg1, AdImg2, AdImg3],
      adName: "Power Driller",
      price: 22000,
      location: "Colombo",
      status: 1,
    },
    {
      id: 2,
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [adImage],
      adName: "Ideal Driller",
      price: 16000,
      location: "Colombo",
      status: 1,
    },

    {
      id: 3,
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [Ad2_1, Ad2_2, Ad2_3],
      adName: "Screw Driver",
      price: 600,
      location: "Colombo",
      status: 1,
    },

    {
      id: 4,
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [Ad3_1, Ad3_2, Ad3_3],
      adName: "Grinder",
      price: 22000,
      location: "Colombo",
      status: 0,
    },

    {
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [Ad4_1, Ad4_2, Ad4_3],
      adName: "Drills",
      price: 200,
      location: "Colombo",
      status: 1,
    },

    {
      id: 5,
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [Ad5_1, Ad5_2, Ad5_3],
      adName: "Handsaw",
      price: 4500,
      location: "Colombo",
      status: 0,
    },
  ];



  const [ViewAdmodalVisible, setViewAdModalVisible] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null); // To store the selected ad

  const ViewAdopenModal = (ad) => {
    setSelectedAd(ad); // Set the selected ad
    setViewAdModalVisible(true);
  };

  const viewColosedModel = () => {
    setViewAdModalVisible(false);
  };

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
                proName={ad.proName}
                profileIcon={ad.profileIcon}
                adImage={ad.adImages[0]}
                adName={ad.adName}
                price={ad.price}
                location={ad.location}
                status={ad.status}
                openModal={() => ViewAdopenModal(ad)}
              />
            ))}
          </div>
          {selectedAd && (
            <ViewSingleAd
              key={selectedAd.id}
              id={selectedAd.id}
              adName={selectedAd.adName}
              proName={selectedAd.proName}
              price={selectedAd.price}
              profileIcon={selectedAd.profileIcon}
              adImages={selectedAd.adImages}
              location={selectedAd.location}
              modalVisible={ViewAdmodalVisible}
              closeModal={viewColosedModel}
            />
          )}
        </Row>
        <div className="d-flex justify-content-center mt-3">
          <PageNumber />
        </div>
      </div>
    </Container>
  );
};

export default AdsPage;