import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import "../../../style/advertiser/AdIndex.css";

import adImage from "./../../../assets/images/advertiser/Ad.png";

const AdSlide = () => {
  return (
    <div className="AdSlideDiv">
      <Carousel>
        <Carousel.Item>
          <div className="AdSlide">
            <div className="AdLeftCol">
              <img src={adImage} rounded />
            </div>
            <div className="AdRightCol">
              <div>
                <h1 className="AdSlideHeading">Power Driller</h1>
              </div>
              <br />
              <br />

              <div>
                <button className="AdSlideButton">View</button>
              </div>

              <br />
              <br />
              <div>
                <h1 className="AdPrice">16000 LKR</h1>
              </div>
              <div>
                <h4>Free Delivery</h4>
              </div>
            </div>
          </div>

          <div>
            <h4 className="SlideAdArea">Colombo</h4>
          </div>
        </Carousel.Item>

        
        <Carousel.Item>
          <div className="AdSlide">
            <div className="AdLeftCol">
              <img src={adImage} rounded />
            </div>
            <div className="AdRightCol">
              <div>
                <h1 className="AdSlideHeading">Power Driller</h1>
              </div>
              <br />
              <br />

              <div>
                <button className="AdSlideButton">View</button>
              </div>

              <br />
              <br />
              <div>
                <h1 className="AdPrice">16000 LKR</h1>
              </div>
              <div>
                <h4>Free Delivery</h4>
              </div>
            </div>
          </div>

          <div>
            <h4 className="SlideAdArea">Colombo</h4>
          </div>
        </Carousel.Item>


        <Carousel.Item>
          <div className="AdSlide">
            <div className="AdLeftCol">
              <img src={adImage} rounded />
            </div>
            <div className="AdRightCol">
              <div>
                <h1 className="AdSlideHeading">Power Driller</h1>
              </div>
              <br />
              <br />

              <div>
                <button className="AdSlideButton">View</button>
              </div>

              <br />
              <br />
              <div>
                <h1 className="AdPrice">16000 LKR</h1>
              </div>
              <div>
                <h4>Free Delivery</h4>
              </div>
            </div>
          </div>

          <div>
            <h4 className="SlideAdArea">Colombo</h4>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AdSlide;
