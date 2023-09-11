import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import ViewAd from "./ViewAd";

import "../../../../../style/advertiser/AdIndex.css";

import profileIcon from "./../../../../../assets/images/advertiser/Adam.jpg";
import adImage from "./../../../../../assets/images/advertiser/41CKlQ1b08S.jpg";


const PendingCont = ({
  key,
  profileIcon,
  proName,
  adImage,
  adName,
  price,
  location,
  openModal,
}) => {
  return (
    <Col className="adCont" key={key}>
      <div className="AdSampleCont">
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
              <p>{proName}</p>
            </div>
          </Col>
        </Row>

        <Row>
          <h3 className="adname">{adName}</h3>
        </Row>

        <Row className="d-flex justify-content-center">
          <Image
            src={adImage}
            fluid
            alt="Item"
            style={{ maxHeight: "10em", maxWidth: "20em" }}
          />
      
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

const YetToVerifyAds = () => {

  
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null); // To store the selected ad

  const openModal = (ad) => {
    setSelectedAd(ad); // Set the selected ad
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const [ads, setAds] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const apiUrl = "http://localhost:8080/auth/getAds";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setAds(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    if (ads.length > 0) {
     const imageUrlsPromises = ads.map((ad) => {
         const adId = `http://localhost:8080/auth/getAdImages/${ad.adsId}`;
       return fetch(adId)
         .then((response) => {
           if (!response.ok) {
             throw new Error(
               `Error fetching image for ad ${ad.id}: ${response.status}`
             );
           }

           return response.blob(); // Fetch image as a blob
         })
         .then((imageBlob) => {
           const imageUrl = URL.createObjectURL(imageBlob);
           console.log(imageUrl);
           return imageUrl;
         })
         .catch((error) => {
           console.error(`Error fetching image for ad ${ad.id}:`, error);
           return null;
         });
     });
     
      Promise.all(imageUrlsPromises).then((urls) => setImageUrls(urls));
    }
  }, [ads]);

  console.log(imageUrls);
  



  

  return (
    <Container>
   
      <h2 className="AdPageHeading">Verified Ads</h2>
      <Row>
        <div className="AdsRow">
          {ads.map((ad, index) => (
            <PendingCont
              key={ad.adsId}
              profileIcon={profileIcon}
              proName="Karththi"
              // adImage={getAdImages(ad.adsId)}
              adImage={imageUrls[index]}
              adName={ad.adsName}
              price={ad.price}
              location={ad.area}
              openModal={() => openModal(ad)}
            />
          ))}
        </div>

        {selectedAd && (
          <ViewAd
            id={selectedAd.adsId}
            modalVisible={modalVisible}
            closeModal={closeModal}
          />
        )}
      </Row>
    </Container>
  );
};

export default YetToVerifyAds;
