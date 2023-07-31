import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";

import "../../../style/advertiser/AdIndex.css";

import profileIcon from "./../../../assets/images/advertiser/Adam.jpg";
import adImage from "./../../../assets/images/advertiser/41CKlQ1b08S.jpg";

const CreateAd = () => {
  return (
    <Container>
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
                        roundedCircle
                        className="AdProfilePic"
                      />
                    </div>
                    <div className="namediv">
                      <p>Adam</p>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <h3 className="adname">Ideal Driller</h3>
                </Row>

                <Row className="d-flex justify-content-center">
                  <Image src={adImage} fluid alt="Item" />
                </Row>

                <Row>
                  <h3 className="Adprice ">16000 LKR</h3>
                </Row>

                <Row className="d-flex justify-content-center">
                  <button className="AdViewButton">View</button>
                </Row>

                <Row>
                  <Col>
                    <p>Colombo</p>
                  </Col>
                  <Col>
                    <p className="AdRgtAln">Free Delivery</p>
                  </Col>
                </Row>
              </div>
            </Row>
        </Col>

        <Col className="AdsHome-right-cont">
          <Form>
            <fieldset>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">
                  Select Item Image
                </Form.Label>
                <br />
                <div className="adCenterCont">
                  <button className="AdBrowseBut">Browse</button>
                </div>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">Ad Name</Form.Label>
                <Form.Control id="disabledTextInput" placeholder="Ad Name" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select>
                  <option>Electician</option>
                  <option>Plumber</option>
                  <option>Mechanic</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput">Price</Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Price in LKR"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Are you providing Warranty?</Form.Label>
                <Form.Select>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Warranty Months</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter warranty months"
                />
              </Form.Group>

              {/* Description */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Description/Specification</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              {/* Area */}
              <Form.Group className="mb-3">
                <Form.Label htmlFor="area">Area</Form.Label>
                <Form.Select id="disabledSelect">
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
                <Form.Label>Delivery Option</Form.Label>
                <Form.Select>
                  <option>Free Delivery</option>
                  <option>Need to pay for Delivery</option>
                  <option>Not Available</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  type="checkbox"
                  id="disabledFieldsetCheck"
                  label="I accept the policy"
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button className="d-grid" type="submit">
                  Submit
                </Button>
              </div>
            </fieldset>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateAd;
