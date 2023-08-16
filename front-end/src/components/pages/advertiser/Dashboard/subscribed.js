import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import HistoryModal from "./subscriptionHistory";

import backgroundImage from "../../../../assets/images/header/Background.png";

const Subscriped = () => {
// History Modal
  const subscriptionHistory = [
    {
      planName: "Bronze",
      amount: "0 LKR",
      paymentDate: "2023-01-15",
      startDate: "2023-01-15",
      expirationDate: "2023-02-15",
    },
    {
      planName: "Gold",
      amount: "299 LKR",
      paymentDate: "2023-02-15",
      startDate: "2023-02-15",
      expirationDate: "2023-03-15",
    },
    {
      planName: "Platinum",
      amount: "499 LKR",
      paymentDate: "2023-03-15",
      startDate: "2023-08-15",
      expirationDate: "2023-04-15",
    },
 
    {
      planName: "Bronze",
      amount: "0 LKR",
      paymentDate: "2023-04-16",
      startDate: "2023-04-16",
      expirationDate: "2023-05-16",
    },
    {
      planName: "Gold",
      amount: "299 LKR",
      paymentDate: "2023-05-16",
      startDate: "2023-05-16",
      expirationDate: "2023-06-16",
    },
    {
      planName: "Platinum",
      amount: "499 LKR",
      paymentDate: "2023-06-16",
      startDate: "2023-06-16",
      expirationDate: "2023-07-16",
    },
    {
      planName: "Bronze",
      amount: "0 LKR",
      paymentDate: "2023-07-17",
      startDate: "2023-07-17",
      expirationDate: "2023-08-17",
    },
    {
      planName: "Gold",
      amount: "299 LKR",
      paymentDate: "2023-08-17",
      startDate: "2023-08-17",
      expirationDate: "2023-09-17",
    },
    {
      planName: "Platinum",
      amount: "499 LKR",
      paymentDate: "2023-09-17",
      startDate: "2023-09-17",
      expirationDate: "2023-10-17",
    },
    {
      planName: "Bronze",
      amount: "0 LKR",
      paymentDate: "2023-10-18",
      startDate: "2023-10-18",
      expirationDate: "2023-11-18",
    },
  ];
 const [historyModal, setHistoryModal] = React.useState(false);

 const openHistoryModal = () => {
   setHistoryModal(true);
 };

 const closeHistoryModal = () => {
   setHistoryModal(false);
 };


  const plans = [
    {
      id: 0,
      title: "Bronze",
      points: [
        "Limited Ads Posting",
        "10 Ads Allowed",
        "Basic Ad Verification",
      ],
      price: "0 LKR",
      duration: 0,
    },
    {
      id: 1,
      title: "Gold",
      points: [
        "Unlimited Ad Posting",
        "Verified Badge by Admin",
        "Premium Ad Verification",
      ],
      price: "299 LKR",
      duration: 1,
    },
    {
      id: 2,
      title: "Platinum",
      points: [
        "Unlimited Ad Posting",
        "Verified Badge by Admin",
        "Random Ads in Slide",
        "Enhanced Ad Visibility",
      ],
      price: "499 LKR",
      duration: 1,
    },
  ];
  const { subId } = useParams();
  console.log("ID : " + subId);
  const subData = plans.find((plan) => plan.id === parseInt(subId));

  if (!subData) {
    return <div>Subscription plan not found</div>;
  }

  

  return (
    <Container
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="py-4 mb-3"
    >
      <div className="d-flex justify-content-between">
        <h2>Your Plan</h2>
        <button
          className="ChooseSubBut py-2  px-4"
          style={{ height: "fit-content" }}
          onClick={openHistoryModal}
        >
          History
        </button>
      </div>
      <HistoryModal
        show={historyModal}
        onHide={closeHistoryModal}
        subscriptionHistory={subscriptionHistory}
      />

      <div className="d-flex gap-3 justify-content-center">
        {" "}
        <div
          style={{ width: "fit-content" }}
          className="shadow p-5 bg-white rounded border d-flex flex-column align-items-center gap-3"
        >
          <div className="text-center">
            <h4 className="text-center">Your Plan</h4>
          </div>
          <div className="d-flex align-items-center">
            {subData.id === 0 && (
              <i className="fa-solid fa-chess-knight fa-2xl">{subData.title}</i>
            )}
            {subData.id === 1 && (
              <i className="fa-solid fa-chess-king fa-2xl">{subData.title}</i>
            )}
            {subData.id === 2 && (
              <i className="fa-solid fa-chess-queen fa-2xl">{subData.title}</i>
            )}
          </div>
        </div>
        <div
          style={{ width: "fit-content" }}
          className="shadow p-5 bg-white rounded border d-flex flex-column align-items-center gap-3"
        >
          <div>
            <h4 className="text-center">Start Date</h4>
          </div>
          <div className="d-flex  gap-3">
            <div style={{ height: "fit-content" }}>
              <h3 className="GreenDate">Thu Aug 10 2023</h3>
            </div>
          </div>
        </div>
        <div
          style={{ width: "fit-content" }}
          className="shadow p-5 bg-white rounded border d-flex flex-column align-items-center gap-3"
        >
          <div>
            <h4 className="text-center">End Date</h4>
          </div>
          <div className="d-flex align-items-center gap-3">
            <h3 className="redDate"> Sun Sep 10 2023</h3>
          </div>
        </div>
        <div
          style={{ width: "fit-content" }}
          className="shadow p-5 bg-white rounded border d-flex flex-column align-items-center gap-3"
        >
          <div>
            <h4 className="text-center">Remaining Days</h4>
          </div>
          <div className="d-flex  gap-3">
            <div style={{ height: "fit-content" }}>
              <h3 className="GreenDate">15 Days</h3>
            </div>
          </div>
        </div>
      </div>

      {subData.id === 0 && (
        <div className="px-5 mt-3">
          <h4 className="text-center">
            Your current plan is set to automatically renew at 0LKR. For a more
            enhanced experience and the ability to post more than 10 ads,
            consider exploring our other plans.
          </h4>
        </div>
      )}

      <div className="p-3 mt-5">
        <h3 className="text-center">
          Elevate Your Advertising Experience: Upgrade or Renew Your Plan for
          Continued Success.
        </h3>

        <div className={` d-flex justify-content-center`}>
          <Link to="/advertiser/Subscribtion">
            <button className="ChooseSubBut py-2 px-4">Upgrade</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Subscriped;
