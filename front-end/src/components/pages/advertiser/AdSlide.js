import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "../../../style/advertiser/AdIndex.css";

import adImage from "./../../../assets/images/advertiser/Ad.png";

const AdSlide = () => {

  const advertisements = [
    {
      adImage: adImage,
      productName: "Power Driller",
      price: "16000 LKR",
      location: "Colombo",
    },
    {
      adImage: adImage,
      productName: "Power Driller",
      price: "25000 LKR",
      location: "Kandy",
    },
    {
      adImage: adImage,
      productName: "Power Driller",
      price: "16000 LKR",
      location: "Colombo",
    },
    {
      adImage: adImage,
      productName: "Power Driller",
      price: "25000 LKR",
      location: "Kandy",
    },
  ];

  return (
    <div className="AdSlideDiv">
      <Carousel>
        {advertisements.map((ad, index) => (
          <Carousel.Item key={index}>
            <div className="AdSlide">
              <div className="AdLeftCol">
                <img src={ad.adImage} alt="Item" rounded />
              </div>
              <div className="AdRightCol">
                <div>
                  <h1 className="AdSlideHeading">{ad.productName}</h1>
                </div>
                <br />
                <br />

                <div>
                  <button className="AdSlideButton">View</button>
                </div>

                <br />
                <br />
                <div>
                  <h1 className="AdPrice">{ad.price}</h1>
                </div>
                <div>
                  <h4>Free Delivery</h4>
                </div>
              </div>
            </div>

            <div>
              <h4 className="SlideAdArea">{ad.location}</h4>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default AdSlide;

