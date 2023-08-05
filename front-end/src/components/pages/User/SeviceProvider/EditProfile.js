import React, { useState } from "react";
import { Row, Col, Form, Container, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

const EditProfile = (props) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [passwordType, setPasswordType] = useState("password");
  const [password, setPassword] = useState("");

  const showHidePassword = () => {
    if (isPasswordHidden) {
      setPasswordType("text");
      setIsPasswordHidden(false);
    } else {
      setPasswordType("password");
      setIsPasswordHidden(true);
    }
  };

  return (
    <Container>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}> 
          <Modal.Title id="contained-modal-title-vcenter">
            My Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form className="p-3 m-3">
              <div>
                <Row>
                  <Col>
                    <Form.Group >
                      <Form.Label>First Name</Form.Label>
                      <Form.Control placeholder="Sinnaththamby" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group >
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control placeholder="Mithilan" />
                    </Form.Group>
                  </Col>
                </Row>
              </div>

              <div>
                <Row>
                  <Form.Group >
                    <Form.Label>Residential Address</Form.Label>
                    <Form.Control placeholder="Kachchai South Kodikamam" />
                  </Form.Group>
                </Row>
              </div>

              <div>
                <Row>
                  <Form.Group >
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="tel" placeholder="+94 775794064" />
                  </Form.Group>
                </Row>
              </div>

              <div>
                <Row>
                  <Form.Group  controlId="formBasicEmail">
                    <Form.Label>Current Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="mithilan999@gmail.com"
                      readOnly
                    />
                  </Form.Group>
                </Row>
              </div>

              <div>
                <Row>
                  <div >
                    <p className="mb-0">Current Password</p>
                    <div className="input-group ">
                      <input
                        type={passwordType}
                        className="form-control"
                        placeholder="Enter Your Current Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <span className="input-group-text">
                        <Button
                          className="focus-visible"
                          type="button"
                          id="button-addon1"
                          onClick={showHidePassword}
                        >
                          {isPasswordHidden ? (
                            <i className="bi bi-eye-slash-fill"></i>
                          ) : (
                            <i className="bi bi-eye-fill"></i>
                          )}
                        </Button>
                      </span>
                    </div>
                  </div>
                </Row>
              </div>

              <div>
                <Row>
                  <div >
                    <p className="mb-0">New Password</p>
                    <div className="input-group ">
                      <input
                        type={passwordType}
                        className="form-control"
                        placeholder="Enter Your Current Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <span className="input-group-text">
                        <button
                          className="btn btn-outline-dark border-0 focus-visible"
                          type="button"
                          id="button-addon1"
                          onClick={showHidePassword}
                        >
                          {isPasswordHidden ? (
                            <i className="bi bi-eye-slash-fill"></i>
                          ) : (
                            <i className="bi bi-eye-fill"></i>
                          )}
                        </button>
                      </span>
                    </div>
                  </div>
                </Row>
              </div>

              <div>
                <Row>
                  <div >
                    <p className="mb-0">Confirm Password</p>
                    <div className="input-group ">
                      <input
                        type={passwordType}
                        className="form-control"
                        placeholder="Enter Your Current Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <span className="input-group-text">
                        <button
                          className="btn btn-outline-dark border-0 focus-visible"
                          type="button"
                          id="button-addon1"
                          onClick={showHidePassword}
                        >
                          {isPasswordHidden ? (
                            <i className="bi bi-eye-slash-fill"></i>
                          ) : (
                            <i className="bi bi-eye-fill"></i>
                          )}
                        </button>
                      </span>
                    </div>
                  </div>
                </Row>
              </div>

            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {/* <Button onClick={props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default EditProfile;
