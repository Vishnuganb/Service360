import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";

import ViewSingleAd from "./ViewAd";

import "../../../style/advertiser/AdIndex.css";

import adImage from "./../../../assets/images/advertiser/Ad.png";
import backgroundImage from "../../../assets/images/header/Background.png";

import AdImg1 from "../../../assets/images/advertiser/Ads/Drill1.png";
import AdImg2 from "../../../assets/images/advertiser/Ads/Drill2.png";
import AdImg3 from "../../../assets/images/advertiser/Ads/Driller3.png";

import AdG1_1 from "../../../assets/images/advertiser/Ads/AdG1.png";
import AdG1_2 from "../../../assets/images/advertiser/Ads/AdG2.png";
import AdG1_3 from "../../../assets/images/advertiser/Ads/AdG3.png";

import AdP_1 from "../../../assets/images/advertiser/Ads/AdP1.png";
import AdP_2 from "../../../assets/images/advertiser/Ads/AdP2.png";
import AdP_3 from "../../../assets/images/advertiser/Ads/AdP3.png";

import f1 from "../../../assets/images/advertiser/Ads/F1.png";
import f2 from "../../../assets/images/advertiser/Ads/F2.png";
import f3 from "../../../assets/images/advertiser/Ads/F3.png";

import profileIcon from "./../../../assets/images/advertiser/Adam.jpg";

const AdSlide = () => {
  const [ViewSlideAdmodalVisible, setSlideViewAdModalVisible] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);
  const OpenSlideViewAdModal = (ad) => {
    setSelectedAd(ad);
    setSlideViewAdModalVisible(true);
  };
  const viewSlideColosedModel = () => {
    setSlideViewAdModalVisible(false);
  };

  const adsData = [
    {
      id: 1,
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [AdImg1, AdImg2, AdImg3],
      adName: "Power Driller",
      price: 22000,
      location: "Colombo",
    },
    {
      id: 2,
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [adImage],
      adName: "Ideal Driller",
      price: 16000,
      location: "Colombo",
    },

    {
      id: 4,
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [AdG1_1, AdG1_2, AdG1_3],
      adName: "Grinder",
      price: 22000,
      location: "Colombo",
    },

    {
      id: 5,
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [f1, f2, f3],
      adName: "Usha Fan",
      price: 12500,
      location: "Colombo",
    },
  ];

  return (
    <div>
      <div className="AdSlideDiv">
        <Carousel>
          {adsData.map((ad, index) => (
            <Carousel.Item key={index}>
              <div
                className="AdSlide"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              >
                <div className="AdLeftCol">
                  <Image src={ad.adImages[0]} alt="Item" className="rounded" />
                </div>
                <div className="AdRightCol">
                  <div>
                    <h1 className="AdSlideHeading">{ad.adName}</h1>
                  </div>

                  <br />
                  <br />
                  <div>
                    <h1 className="AdPrice">{ad.price} LKR</h1>
                  </div>
                  <div className="mt-3">
                    <button
                      className="AdSlideButton"
                      onClick={() => OpenSlideViewAdModal(ad)}
                    >
                      View
                    </button>
                  </div>
                  <div className="d-flex gap-2 p-3">
                    <div>
                      <i className="fa-solid fa-truck-front"></i>
                    </div>
                    <h4>Free Delivery</h4>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-end gap-1 m-3">
                <div>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="d-flex align-items-center">
                  <h4>{ad.location}</h4>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
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
          modalVisible={ViewSlideAdmodalVisible}
          closeModal={viewSlideColosedModel}
        />
      )}
    </div>
  );
};

export default AdSlide;