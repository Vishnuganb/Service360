import React from "react";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";

import "../../../style/advertiser/AdIndex.css";

import backgroundImage from "../../../assets/images/header/Background.png";

const Subscribtion = () => {
  const plans = [
    {
      title: "Bronze",
      points: [
        "Limited Ads Posting",
        "10 Ads Allowed",
        "Basic Ad Verification",
      ],
    },
    {
      title: "Gold",
      points: [
        "Unlimited Ad Posting",
        "Verified Badge by Admin",
        "Premium Ad Verification",
      ],
    },
    {
      title: "Platinum",
      points: [
        "Unlimited Ad Posting",
        "Verified Badge by Admin",
        "Random Ads in Slide",
        "Enhanced Ad Visibility",
      ],
    },
  ];
  return (
    <Container
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="py-4 mb-3"
    >
      <div>
        <div className="p-3">
          <h1>Discover Our Subscription Plans</h1>
        </div>
        <div className="px-5 py-3">
          <p>
            Unlock a world of convenience and exclusive benefits with our
            subscription plans. Choose the plan that best suits your needs and
            enjoy seamless access to premium services, enhanced features, and
            priority support. Whether you're a service provider looking to
            expand your reach or a customer seeking top-notch services, our
            subscription plans are designed to elevate your experience. Explore
            the options below and take your journey with us to the next level.
          </p>
        </div>
      </div>

      {/* <div className="d-flex gap-4 justify-content-center MainAdSubDiv">
        {plans.map((plan, index) => (
          <div key={index} className="AdSubDiv p-3">
            <div>
              <h1 className="text-center AdsubH">{plan.title}</h1>
            </div>
            <div>
              <p className="text-muted AdMP">What You Will Get</p>
            </div>
            {plan.points.map((point, index) => (
              <div key={index} className="d-flex align-items-center gap-2 py-3">
                <i className="fa-solid fa-feather-pointed"></i>
                <p className="SubP">{point}</p>
              </div>
            ))}
            <div className="py-4 px-3">
              <hr />
            </div>

            <div className="d-flex align-items-end hv-100">
              <button>Choose</button>
            </div>
          </div>
        ))}
      </div> */}

      <div className={`d-flex gap-4 justify-content-center MainAdSubDiv`}>
        {plans.map((plan, index) => (
          <Card key={index} className="AdSubDiv">
            <Card.Body>
              <Card.Title className="text-center ">
                <h2 className="AdsubH">{plan.title}</h2>
              </Card.Title>
              <Card.Text className=" AdMP">What You Will Get</Card.Text>
              {plan.points.map((point, index) => (
                <div
                  key={index}
                  className={`d-flex align-items-center gap-2 py-3`}
                >
                  <i className="fa-solid fa-feather-pointed"></i>
                  <p className="SubP">{point}</p>
                </div>
              ))}
            </Card.Body>{" "}
            {plan.title !== "Bronze" && (
              <Card.Footer className="AdSubCarFoot">
                <div className={` d-flex justify-content-center`}>
                  <button className="ChooseSubBut py-1 px-3">Choose</button>
                </div>
              </Card.Footer>
            )}
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Subscribtion;



