import React, { useEffect, useState } from "react";
import { Image, Row, Col, Carousel } from "react-bootstrap";

import "./../../../../style/User/AboutUs/About.css";

import ABoutBgImg from "./../../../../assets/images/About/BGPic1.jpg";
import backgroundImage from "../../../../assets/images/header/Background.png";

import MissonImg from "./../../../../assets/images/About/misson.jpg";
import OfferImg from "./../../../../assets/images/About/Offer.jpg";

import { Link } from "react-router-dom";


const About = () => {
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    // Set a timeout to mark the typing animation as done
    setTimeout(() => setIsTypingDone(true), 3000);
  }, []);

  return (
    <div>
      <div id="" className="about-block ">
        <Carousel className="hide-navigation-icons">
          <Carousel.Item>
            <img className="d-block w-100" src={ABoutBgImg} alt={"bacground"} />
            <Carousel.Caption>
              <div className="d-flex justify-content-center align-items-center flex-column p-3">
                <p
                  className={`typewriter ${isTypingDone ? "typing-done" : ""}`}
                  id="AboutUsP"
                >
                  About Us
                </p>
                <p className="AboutDisP m-5">
                  Welcome to{" "}
                  <b>
                    Service
                    <span className="P360" style={{ color: "#9F390D" }}>
                      360
                    </span>
                  </b>
                  ! We are a user-friendly platform that aims to address the
                  challenges faced by service providers and customers by
                  bringing together a wide range of selected services under one
                  roof. Our mission is to create a seamless experience for both
                  service providers and customers, making it effortless to find
                  and hire the best services or showcase their skills.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* <Row className="hero-block">
        <div
          className="d-flex align-items-center justify-content-center  "
          style={{
            backgroundColor: "rgba(0, 0, 0.5)",
            backgroundImage: `url(${ABoutBgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <div className="d-flex justify-content-center align-items-center flex-column p-3">
            <p
              className={`typewriter ${isTypingDone ? "typing-done" : ""}`}
              id="AboutUsP"
            >
              About Us
            </p>
            <p className="AboutDisP m-5">
              Welcome to <b>Service360</b>! We are a user-friendly platform that
              aims to address the challenges faced by service providers and
              customers by bringing together a wide range of selected services
              under one roof. Our mission is to create a seamless experience for
              both service providers and customers, making it effortless to find
              and hire the best services or showcase their skills.
            </p>
          </div>
        </div>
      </Row> */}
      <div className="d-flex p-3">
        <div
          className="d-flex align-items-center flex-column justify-content-center AboutContentContainer"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div>
            <h1>Our Misson And Visson</h1>
          </div>
          <div className="p-5 d-flex align-items-center gap-2">
            <i className="fa-solid fa-wrench fa-xl" />
            <p className="AboutPoinsP">
              To simplify the process of connecting customers with top-notch
              service providers, offering a platform that promotes efficiency,
              reliability, and transparency.
            </p>
          </div>

          <div className="p-5 d-flex align-items-center gap-2">
            <i className="fa-solid fa-wrench fa-xl" />
            <p className="AboutPoinsP">
              We envision a world where customers can easily find and hire the
              services they need while empowering service providers to grow
              their businesses and find new opportunities.
            </p>
          </div>
        </div>
        <div className="AboutImageContainer">
          <Image src={MissonImg} className="AboutTitleImg" />
        </div>
      </div>

      <div className="d-flex p-3">
        <div className="AboutImageContainer">
          <Image src={OfferImg} className="AboutTitleImg" />
        </div>
        <div
          className="d-flex align-items-center flex-column justify-content-center AboutContentContainer"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div>
            <h1>What We Offer</h1>
          </div>
          <div className="p-5 d-flex align-items-center gap-2">
            <p className="AboutPoinsP">
              we offer an extensive array of services that cater to diverse
              needs. Our platform is a one-stop solution for customers looking
              to find and hire service providers based on service charges,
              ratings, and locations. Likewise, service providers can showcase
              their talents and skills, expanding their reach and securing new
              work opportunities.
            </p>
          </div>

          <div className="p-5 d-flex align-items-center gap-2">
            <Link to="/services">
              <button className="AboutSBut">View Services</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
