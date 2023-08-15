import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../../../style/advertiser/AdIndex.css";

import profileIcon from "./../../../../assets/images/advertiser/Adam.jpg";
import adImage from "./../../../../assets/images/advertiser/41CKlQ1b08S.jpg";

import backgroundImage from "../../../../assets/images/header/Background.png";

import AdImg1 from "../../../../assets/images/advertiser/Ads/Drill1.png";
import AdImg2 from "../../../../assets/images/advertiser/Ads/Drill2.png";
import AdImg3 from "../../../../assets/images/advertiser/Ads/Driller3.png";
import Ad2_1 from "../../../../assets/images/admin/ads/Screw_1.jpeg";
import Ad2_2 from "../../../../assets/images/admin/ads/Screw_2.jpeg";
import Ad2_3 from "../../../../assets/images/admin/ads/Screw_3.jpeg";
import Ad3_1 from "../../../../assets/images/admin/ads/Grinder_1.jpeg";
import Ad3_2 from "../../../../assets/images/admin/ads/Grinder_2.jpeg";
import Ad3_3 from "../../../../assets/images/admin/ads/Grinder_3.jpeg";
import Ad4_1 from "../../../../assets/images/admin/ads/drills_2.jpeg";
import Ad4_2 from "../../../../assets/images/admin/ads/drills_1.jpeg";
import Ad4_3 from "../../../../assets/images/admin/ads/drills_3.jpeg";
import Ad5_1 from "../../../../assets/images/admin/ads/handsaw_1.jpeg";
import Ad5_2 from "../../../../assets/images/admin/ads/handsaw_2.jpeg";
import Ad5_3 from "../../../../assets/images/admin/ads/handsaw_3.jpeg";

const EditAd = () => {
  // Get Id from parameter

  const { id } = useParams();

  // ........................

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
      id: 3,
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [Ad2_1, Ad2_2, Ad2_3],
      adName: "Screw Driver",
      price: 600,
      location: "Colombo",
    },

    {
      id: 4,
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
      id: 5,
      proName: "Adam",
      profileIcon: profileIcon,
      adImages: [Ad5_1, Ad5_2, Ad5_3],
      adName: "Handsaw",
      price: 4500,
      location: "Colombo",
    },
  ];

  const getDataById = (id) => {
    const editAdData = adsData.find((ad) => ad.id === id);
    return editAdData;
  };

  const editAdData = getDataById(id);
  console.log(editAdData);


  // ................................................................................................
  
  const [adName, setAdName] = useState("");
  const handleAdNameChange = (event) => {
    setAdName(event.target.value);
  };

  const [adPrice, setAdPrice] = useState("");
  const handleAdPriceChange = (event) => {
    setAdPrice(event.target.value);
  };

  const [adLocation, setAdLocation] = useState("");
  const handleAdLocationChange = (event) => {
    setAdLocation(event.target.value);
  };

  const [adDelivery, setAdDelivery] = useState("");
  const handleAdDeliveryChange = (event) => {
    setAdDelivery(event.target.value);
  };

  // Ad Image useState

  const [selectedAdImages, setSelectedAdImages] = useState([]);
  const [previewImage, setPreviewImage] = useState(editAdData.adImages[0]);

  // console.log("adImages:" + adImages);
  console.log("selectedAdImages:" + selectedAdImages);
  // console.log("previewImage:"+previewImage);

  //Validation UseState
  const [AdImageInputErr, setAdImageInputErr] = useState(false);

  // Ad Image

  const PreviewAdImage = (selectedImages) => {
    // setAdImages(selectedImages);

    if (selectedAdImages.length === 0 && selectedImages.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(selectedImages[0]);
    }
  };

  const handleAdimages = (event) => {
    const selectedImages = Array.from(event.target.files);

    if (selectedAdImages.length + selectedImages.length <= 3) {
      setSelectedAdImages((prevSelectedAdImages) => [
        ...prevSelectedAdImages,
        ...selectedImages,
      ]);
      PreviewAdImage([...selectedAdImages, ...selectedImages]);
    } else {
      alert("You can only select up to 3 files.");
    }
  };

  const handleRemoveAdImages = (index) => {
    const updatedAdImages = selectedAdImages.filter((_, i) => i !== index);
    setSelectedAdImages(updatedAdImages);
    setPreviewImage(updatedAdImages.length > 0 ? selectedAdImages[0] : adImage);
  };

  // Validation

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedAdImages.length === 0) {
      setAdImageInputErr(true);
      return;
    }
  };

  return (
    <Container>
      <h2>Edit Your Ad</h2>
      <Row className="AdsHome-mainCont">
        <Col className="AdsHome-left-cont d-flex justify-content-center align-items-center">
          <Row>
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
                    <p>Adam</p>
                  </div>
                </Col>
              </Row>

              <Row>
                <h3 className="adname"> {adName ? adName : "Ad Name"}</h3>
              </Row>

              <Row className="d-flex justify-content-center">
                <Image src={previewImage} fluid alt="Item" />
              </Row>

              <Row>
                <h3 className="Adprice "> {adPrice ? adPrice : "16000"} LKR</h3>
              </Row>

              <Row>
                <Col sm={4} className="d-flex gap-1">
                  <div>
                    <i className="fa-solid fa-location-dot"></i>
                  </div>

                  <p>{adLocation ? adLocation : "Colombo"}</p>
                </Col>
                <Col sm={8} className="d-flex justify-content-end gap-1">
                  <div>
                    <i className="fa-solid fa-truck-front"></i>
                  </div>
                  <p>{adDelivery ? adDelivery : "Free Delivery"}</p>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center ">
                <button className="AdViewButton mb-3">View</button>
              </Row>
            </div>
          </Row>
        </Col>

        <Col
          className="AdsHome-right-cont"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <Form>
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">
                  Ad Name{" "}
                  <sup>
                    <i className="fa-solid fa-asterisk fa-sm AdAstric"></i>
                  </sup>
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  className="CreateAdInput"
                  placeholder="Ad Name"
                  value={adName}
                  onChange={handleAdNameChange}
                />
              </Form.Group>

              <div className="mb-3">
                <p className="mb-0">
                  Upload Item Images (Maximum 3 Images){" "}
                  <sup>
                    <i className="fa-solid fa-asterisk fa-sm AdAstric"></i>
                  </sup>
                </p>

                <input
                  type="file"
                  onChange={handleAdimages}
                  multiple
                  accept=".jpg, .jpeg, .png"
                  className="BrowseImageInput form-control"
                />

                {AdImageInputErr && (
                  <p className="px-3 text-danger">
                    Please select one or more files.
                  </p>
                )}

                {selectedAdImages.length > 0 && (
                  <div className="p-3 d-flex gap-3">
                    <p>Selected Files:</p>
                    <ul>
                      {selectedAdImages.map((file, index) => (
                        <div className="d-flex align-items-center justify-content-between gap-3">
                          <li key={index}>{file.name}</li>
                          <i
                            className="fa-solid fa-trash fa-lg AddeleteImg"
                            onClick={() => handleRemoveAdImages(index)}
                          ></i>
                        </div>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Form.Group className="mb-3">
                <Form.Label>
                  Category{" "}
                  <sup>
                    <i className="fa-solid fa-asterisk fa-sm AdAstric"></i>
                  </sup>
                </Form.Label>
                <Form.Select className="CreateAdInput">
                  <option defaultValue disabled selected>
                    Select Category
                  </option>
                  <option>Tools</option>
                  <option>Spare Parts</option>
                  <option>Equipment</option>
                  <option>Others</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">
                  Price{" "}
                  <sup>
                    <i className="fa-solid fa-asterisk fa-sm AdAstric"></i>
                  </sup>
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Price in LKR"
                  className="CreateAdInput"
                  type="number"
                  value={adPrice}
                  onChange={handleAdPriceChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  Are you providing Warranty?{" "}
                  <sup>
                    <i className="fa-solid fa-asterisk fa-sm AdAstric"></i>
                  </sup>
                </Form.Label>
                <Form.Select className="CreateAdInput">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Warranty Months</Form.Label>
                <Form.Control
                  type="number"
                  className="CreateAdInput"
                  placeholder="Enter warranty months"
                />
              </Form.Group>

              {/* Description */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description/Specification</Form.Label>
                <Form.Control
                  className="CreateAdInput"
                  as="textarea"
                  rows={3}
                />
              </Form.Group>

              {/* Area */}
              <Form.Group className="mb-3">
                <Form.Label htmlFor="area">
                  Area{" "}
                  <sup>
                    <i className="fa-solid fa-asterisk fa-sm AdAstric"></i>
                  </sup>
                </Form.Label>
                <Form.Select
                  className="CreateAdInput"
                  value={adLocation}
                  onChange={handleAdLocationChange}
                >
                  <option defaultValue selected disabled>
                    Select Area
                  </option>
                  <option value="Ampara">Ampara</option>
                  <option value="Anuradhapura">Anuradhapura</option>
                  <option value="Badulla">Badulla</option>
                  <option value="Batticaloa">Batticaloa</option>
                  <option value="Colombo">Colombo</option>
                  <option value="Galle">Galle</option>
                  <option value="Gampaha">Gampaha</option>
                  <option value="Hambantota">Hambantota</option>
                  <option value="Jaffna">Jaffna</option>
                  <option value="Kalutara">Kalutara</option>
                  <option value="Kandy">Kandy</option>
                  <option value="Kegalle">Kegalle</option>
                  <option value="Kilinochchi">Kilinochchi</option>
                  <option value="Kurunegala">Kurunegala</option>
                  <option value="Mannar">Mannar</option>
                  <option value="Matale">Matale</option>
                  <option value="Matara">Matara</option>
                  <option value="Monaragala">Monaragala</option>
                  <option value="Mullaitivu">Mullaitivu</option>
                  <option value="Nuwara Eliya">Nuwara Eliya</option>
                  <option value="Polonnaruwa">Polonnaruwa</option>
                  <option value="Puttalam">Puttalam</option>
                  <option value="Ratnapura">Ratnapura</option>
                  <option value="Trincomalee">Trincomalee</option>
                  <option value="Vavuniya">Vavuniya</option>
                </Form.Select>
              </Form.Group>

              {/* Delivery Option */}
              <Form.Group className="mb-3">
                <Form.Label>
                  Delivery Option{" "}
                  <sup>
                    <i className="fa-solid fa-asterisk fa-sm AdAstric"></i>
                  </sup>
                </Form.Label>
                <Form.Select
                  className="CreateAdInput"
                  value={adDelivery}
                  onChange={handleAdDeliveryChange}
                >
                  <option defaultValue selected disabled>
                    Select Delivery Option
                  </option>
                  <option value="Free Delivery">Free Delivery</option>
                  <option value="Need To Pay">Need to pay for Delivery</option>
                  <option value="Not Available">Not Available</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  label="I accept the policy"
                />
              </Form.Group>
             
             
                <Row className="d-flex justify-content-center ">
                  <button className="AdViewButton mb-3" onClick={handleSubmit}>
                    Update
                  </button>
                </Row>
             
            </fieldset>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EditAd;
