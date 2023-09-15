// import React, {useState} from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";

// import ViewAd from "./ViewAd";

// import "../../../../../style/advertiser/AdIndex.css";

// import profileIcon from "./../../../../../assets/images/advertiser/Adam.jpg";
// import adImage from "./../../../../../assets/images/advertiser/41CKlQ1b08S.jpg";


// const AdSampleCont = ({ profileIcon,proName, adImage, adName, price, location, openModal }) => {
//   return (
//     <div className="AdSampleCont">
//       <Row>
//         <Col md="auto" className="d-flex align-items-center ">
//           <div>
//             <img
//               src={profileIcon}
//               alt="Profile of Advertiser"
//               roundedCircle
//               className="AdProfilePic"
//             />
//           </div>
//           <div className="namediv">
//             <p>{proName}</p>
//           </div>
//         </Col>
//       </Row>

//       <Row>
//         <h3 className="adname">{adName}</h3>
//       </Row>

//       <Row className="d-flex justify-content-center">
//         <Image src={adImage} fluid alt="Item" />
//       </Row>

//       <Row>
//         <h3 className="Adprice ">{price} LKR</h3>
//       </Row>
//       <Row>
//         <Col sm={4} className="d-flex gap-1">
//           <div>
//             <i className="fa-solid fa-location-dot"></i>
//           </div>

//           <p>{location}</p>
//         </Col>
//         <Col sm={8} className="d-flex justify-content-end gap-1">
//           <div>
//             <i className="fa-solid fa-truck-front"></i>
//           </div>
//           <p>Free Delivery</p>
//         </Col>
//       </Row>
//       <Row className="d-flex justify-content-center mb-3">
//         <button className="AdViewButton" onClick={openModal}>
//           View
//         </button>
//       </Row>
//     </div>
//   );
// };



// const YetToVerifyAds = () => {

//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedAd, setSelectedAd] = useState(null); // To store the selected ad

//   const openModal = (ad) => {
//     setSelectedAd(ad); // Set the selected ad
//     setModalVisible(true);
//   };

//   const closeModal = () => {
//     setModalVisible(false);
//   };

//   const notVerifyadsData = [
//     {
//       proName: "Adam",
//       profileIcon: profileIcon,
//       adImage: adImage,
//       adName: "Ideal Driller",
//       price: 16000,
//       location: "Colombo",
//     },
//     {
//       proName: "Adam",
//       profileIcon: profileIcon,
//       adImage: adImage,
//       adName: "Ideal Driller",
//       price: 16000,
//       location: "Colombo",
//     },
//     {
//       proName: "Adam",
//       profileIcon: profileIcon,
//       adImage: adImage,
//       adName: "Ideal Driller",
//       price: 16000,
//       location: "Colombo",
//     },
//     {
//       proName: "Adam",
//       profileIcon: profileIcon,
//       adImage: adImage,
//       adName: "Ideal Driller",
//       price: 16000,
//       location: "Colombo",
//     },
//     {
//       proName: "Adam",
//       profileIcon: profileIcon,
//       adImage: adImage,
//       adName: "Ideal Driller",
//       price: 16000,
//       location: "Colombo",
//     },
//     {
//       proName: "Adam",
//       profileIcon: profileIcon,
//       adImage: adImage,
//       adName: "Ideal Driller",
//       price: 16000,
//       location: "Colombo",
//     },
//   ];

//   return (
//     <Container>
//       <h2 className="AdPageHeading">Yet to Verified Ads</h2>
//       <Row>
//         <div className="AdsRow">
//           {notVerifyadsData.map((ad, index) => (
//             <AdSampleCont
//               key={index}
//               profileIcon={ad.profileIcon}
//               proName={ad.proName}
//               adImage={ad.adImage}
//               adName={ad.adName}
//               price={ad.price}
//               location={ad.location}
//               openModal={() => openModal(ad)}
//             />
//           ))}
//         </div>
//       </Row>

//       {selectedAd && (
//         <ViewAd
//           adName={selectedAd.adName}
//           proName={selectedAd.proName}
//           price={selectedAd.price}
//           profileIcon={selectedAd.profileIcon}
//           adImage={selectedAd.adImage}
//           location={selectedAd.location}
//           modalVisible={modalVisible}
//           closeModal={closeModal}
//         />
//       )}
//     </Container>
//   );
// };

// export default YetToVerifyAds;


import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import ViewAd from "./ViewAd";

import "../../../../../style/advertiser/AdIndex.css";



import profileIcon from "./../../../../../assets/images/advertiser/Adam.jpg";
import adImage from "./../../../../../assets/images/advertiser/41CKlQ1b08S.jpg";

import AdImg1 from "../../../../../assets/images/advertiser/Ads/Drill1.png";
import AdImg2 from "../../../../../assets/images/advertiser/Ads/Drill2.png";
import AdImg3 from "../../../../../assets/images/advertiser/Ads/Driller3.png";

import Ad2_1 from "../../../../../assets/images/admin/ads/Screw_1.jpeg";
import Ad2_2 from "../../../../../assets/images/admin/ads/Screw_2.jpeg";
import Ad2_3 from "../../../../../assets/images/admin/ads/Screw_3.jpeg";
import Ad3_1 from "../../../../../assets/images/admin/ads/Grinder_1.jpeg";
import Ad3_2 from "../../../../../assets/images/admin/ads/Grinder_2.jpeg";
import Ad3_3 from "../../../../../assets/images/admin/ads/Grinder_3.jpeg";
import Ad4_1 from "../../../../../assets/images/admin/ads/drills_2.jpeg";
import Ad4_2 from "../../../../../assets/images/admin/ads/drills_1.jpeg";
import Ad4_3 from "../../../../../assets/images/admin/ads/drills_3.jpeg";
import Ad5_1 from "../../../../../assets/images/admin/ads/handsaw_1.jpeg";
import Ad5_2 from "../../../../../assets/images/admin/ads/handsaw_2.jpeg";
import Ad5_3 from "../../../../../assets/images/admin/ads/handsaw_3.jpeg";



const PendingCont = ({
  profileIcon,
  proName,
  adImage,
  adName,
  price,
  location,
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

  const adsData = [
    {
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [AdImg1, AdImg2, AdImg3],
      adName: "Power Driller",
      price: 22000,
      location: "Colombo",
    },
    {
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [adImage],
      adName: "Ideal Driller",
      price: 16000,
      location: "Colombo",
    },

    {
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [Ad2_1, Ad2_2, Ad2_3],
      adName: "Screw Driver",
      price: 600,
      location: "Colombo",
    },

    {
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [Ad3_1, Ad3_2, Ad3_3],
      adName: "Grinder",
      price: 22000,
      location: "Colombo",
    },

    {
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [Ad4_1, Ad4_2, Ad4_3],
      adName: "Drills",
      price: 200,
      location: "Colombo",
    },

    {
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [Ad5_1, Ad5_2, Ad5_3],
      adName: "Handsaw",
      price: 4500,
      location: "Colombo",
    },
  ];

  return (
    <Container>
      <h2 className="AdPageHeading">Verified Ads</h2>
      <Row>
        <div className="AdsRow">
          {adsData.map((ad, index) => (
            <PendingCont
              key={index}
              profileIcon={ad.profileIcon}
              proName={ad.proName}
              adImage={ad.adImages[0]}
              adName={ad.adName}
              price={ad.price}
              location={ad.location}
              openModal={() => openModal(ad)}
            />
          ))}
        </div>

        {selectedAd && (
          <ViewAd
            adName={selectedAd.adName}
            proName={selectedAd.proName}
            price={selectedAd.price}
            profileIcon={selectedAd.profileIcon}
            adImages={selectedAd.adImages}
            location={selectedAd.location}
            modalVisible={modalVisible}
            closeModal={closeModal}
          />
        )}
      </Row>
    </Container>
  );
};

export default YetToVerifyAds;