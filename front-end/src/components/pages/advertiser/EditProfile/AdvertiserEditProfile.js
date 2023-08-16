import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import profileIcon from "../../../../assets/images/header/user.jpg";
import styled from "styled-components";
import BgImage from '../../../../assets/images/header/Background.png';
import validator from "validator";

const AdvertiserEditProfile = (props) => {
  const [data, setdata] = useState({
    email: "",
    firstName: "",
    lastName: "",
    nicNumber: "",
    contactNumber: "",
    address: "",
    password: "",
    confirmPassword: "",
    confirmPasswordErrorMessage: "",
    emailStatus: false,
    passwordType: "password",
    isPasswordHidden: true,
    errorMessageStatus: false,
    confirmPasswordStatus: false,
    emailErrorMessage: "",
    firstNameErrorMessage: "",
    lastNameErrorMessage: "",
    nicNumberErrorMessage: "",
    contactNumberErrorMessage: "",
    addressErrorMessage: "",
    firstNameErrorMessage: "",
    lastNameErrorMessage: "",
    nicNumberErrorMessage: "",
    contactNumberErrorMessage: "",
    addressErrorMessage: "",
    passwordErrorMessage: "",
    showMore: false,
    isEditMode: false,
    imageSrc: profileIcon,
  });

  const showHidePassword = () => {
    if (data.isPasswordHidden) {
      setdata({ ...data, passwordType: "text", isPasswordHidden: false });
    } else {
      setdata({ ...data, passwordType: "password", isPasswordHidden: true });
    }
  };

  const validatePassword = (passwordInputValue) => {
    if (
      validator.isStrongPassword(passwordInputValue, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setdata({
        ...data,
        password: passwordInputValue,
        errorMessageStatus: false,
      });
    } else {
      setdata({
        ...data,
        password: passwordInputValue,
        errorMessageStatus: true,
      });
    }
  };

  const validateEmail = (emailInputValue) => {
    if (validator.isEmail(emailInputValue)) {
      setdata({
        ...data,
        email: emailInputValue,
        emailStatus: true,
        emailErrorMessage: "",
      });
    } else {
      setdata({
        ...data,
        email: emailInputValue,
        emailStatus: false,
        emailErrorMessage: "Invalid email",
      });
    }
  };

  const toggleEditMode = () => {
    setdata({ ...data, isEditMode: !data.isEditMode });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setdata({ ...data, imageSrc: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleFileInputClick = (e) => {
    e.preventDefault();
    document.getElementById("fileInput").click();
  };

  const handleSave = () => {
    toggleEditMode();
  };

  return (
    <Container>
      <Modal {...props} centered>
        <Modal.Header
          closeButton
          style={{ background: "#282b3d", color: "#fff" }}
        >
          <Modal.Title id="contained-modal-title-vcenter">
            {" "}
            My Profile
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          className="d-flex"
          style={{ backgroundImage: `url(${BgImage})` }}
        >
          <div>
            <Form className="my-2 mx-4">
              <div className="d-flex justify-content-center mb-3">
                <img
                  src={profileIcon}
                  alt="Profile"
                  style={{
                    width: "auto",
                    height: "100px",
                    borderRadius: "100%",
                  }}
                />
                <div className="d-flex justify-content-end align-items-end align-self-end">
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                  />
                  <label htmlFor="fileInput">
                    <i
                      className="bi bi-plus-circle-fill fs-5"
                      onClick={handleFileInputClick}
                      style={{ cursor: "pointer" }}
                    ></i>
                  </label>
                </div>
              </div>

              <div className="justify-content-between mb-3 d-flex">
                <div className="me-0 col-sm-6">
                  <p className="mb-0 align-items-end">First Name</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    value={data.firstName}
                    onChange={(e) =>
                      data.isEditMode
                        ? setdata({ ...data, firstName: e.target.value })
                        : null
                    }
                    readOnly={!data.isEditMode}
                    required
                  />
                  {data.firstNameErrorMessage && (
                    <p className="text-danger p-0 m-0">
                      {data.firstNameErrorMessage}
                    </p>
                  )}
                </div>

                <div className="col-sm-5">
                  <p className="mb-0">Last Name</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    value={data.lastName}
                    onChange={(e) =>
                      data.isEditMode
                        ? setdata({ ...data, lastName: e.target.value })
                        : null
                    }
                    readOnly={!data.isEditMode}
                    required
                  />
                  {data.lastNameErrorMessage && (
                    <p className="text-danger p-0 m-0">
                      {data.lastNameErrorMessage}
                    </p>
                  )}
                </div>
              </div>

              <div className="justify-content-between mb-3 d-flex">
                <div className="me-0 col-sm-6">
                  <p className="mb-0 align-items-end">Shop Name</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Shop Name"
                    value={data.firstName}
                    onChange={(e) =>
                      data.isEditMode
                        ? setdata({ ...data, firstName: e.target.value })
                        : null
                    }
                    readOnly={!data.isEditMode}
                    required
                  />
                  {data.firstNameErrorMessage && (
                    <p className="text-danger p-0 m-0">
                      {data.firstNameErrorMessage}
                    </p>
                  )}
                </div>

                <div className="col-sm-5">
                  <p className="mb-0">Shop Address</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Shop Address"
                    value={data.lastName}
                    onChange={(e) =>
                      data.isEditMode
                        ? setdata({ ...data, lastName: e.target.value })
                        : null
                    }
                    readOnly={!data.isEditMode}
                    required
                  />
                  {data.lastNameErrorMessage && (
                    <p className="text-danger p-0 m-0">
                      {data.lastNameErrorMessage}
                    </p>
                  )}
                </div>
              </div>

              <div className="justify-content-between mb-3 d-flex">
                <div className="me-0 col-sm-6">
                  <p className="mb-0 align-self-start">Email</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Service360@gmail.com"
                    value={data.email}
                    required
                  />
                  {data.emailErrorMessage && (
                    <p className="text-danger p-0 m-0">
                      {data.emailErrorMessage}
                    </p>
                  )}
                </div>

                <div className="col-sm-5">
                  <p className="mb-0">Contact Number</p>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0771234567"
                    value={data.contactNumber}
                    onChange={(e) =>
                      data.isEditMode
                        ? setdata({ ...data, contactNumber: e.target.value })
                        : null
                    }
                    readOnly={!data.isEditMode}
                    required
                  />
                  {data.contactNumberErrorMessage && (
                    <p className="text-danger p-0 m-0">
                      {data.contactNumberErrorMessage}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <p className="mb-0">Enter your Residential Address</p>
                <div className="align-items-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="No-06, Nelson Place, Colombo, Sri Lanka"
                    value={data.address}
                    onChange={(e) =>
                      data.isEditMode
                        ? setdata({ ...data, address: e.target.value })
                        : null
                    }
                    readOnly={!data.isEditMode}
                    required
                  />
                  {data.addressErrorMessage && (
                    <p className="text-danger p-0 m-0">
                      {data.addressErrorMessage}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-3">
                <p className="mb-0">Current Password</p>
                <div className="input-group">
                  <input
                    type={data.passwordType}
                    className="form-control"
                    placeholder="Enter password"
                    value={data.password}
                    onChange={(e) => validatePassword(e.target.value)}
                    required
                  />
                  <span className="input-group-text">
                    <button
                      className="btn btn-outline-dark border-0"
                      type="button"
                      id="button-addon1"
                      onClick={showHidePassword}
                    >
                      {data.isPasswordHidden ? (
                        <i className="bi bi-eye-slash-fill"></i>
                      ) : (
                        <i className="bi bi-eye-fill"></i>
                      )}
                    </button>
                  </span>
                </div>
                {data.passwordErrorMessage && (
                  <p className="text-danger p-0 m-0">
                    {data.passwordErrorMessage}
                  </p>
                )}
              </div>

              <>
                <div className="mt-3">
                  {data.showMore && (
                    <>
                      <div className="mb-3">
                        <p className="mb-0">New Password</p>
                        <div className="input-group">
                          <input
                            type={data.passwordType}
                            className="form-control"
                            placeholder="Enter a new password"
                            value={data.password}
                            onChange={(e) => validatePassword(e.target.value)}
                            required
                          />
                          <span className="input-group-text">
                            <button
                              className="btn btn-outline-dark border-0"
                              type="button"
                              id="button-addon1"
                              onClick={showHidePassword}
                            >
                              {data.isPasswordHidden ? (
                                <i className="bi bi-eye-slash-fill"></i>
                              ) : (
                                <i className="bi bi-eye-fill"></i>
                              )}
                            </button>
                          </span>
                        </div>
                        {data.passwordErrorMessage && (
                          <p className="text-danger p-0 m-0">
                            {data.passwordErrorMessage}
                          </p>
                        )}
                      </div>

                      <div className="mb-3">
                        <p className="mb-0">Confirm Password</p>
                        <div className="input-group">
                          <input
                            type={data.passwordType}
                            className="form-control"
                            placeholder="Enter a confirm password"
                            value={data.password}
                            onChange={(e) => validatePassword(e.target.value)}
                            required
                          />
                          <span className="input-group-text">
                            <button
                              className="btn btn-outline-dark border-0"
                              type="button"
                              id="button-addon1"
                              onClick={showHidePassword}
                            >
                              {data.isPasswordHidden ? (
                                <i className="bi bi-eye-slash-fill"></i>
                              ) : (
                                <i className="bi bi-eye-fill"></i>
                              )}
                            </button>
                          </span>
                        </div>
                        {data.passwordErrorMessage && (
                          <p className="text-danger p-0 m-0">
                            {data.passwordErrorMessage}
                          </p>
                        )}
                      </div>
                    </>
                  )}

                  <div className="mt-3">
                    <Button
                      className="btn-effect3"
                      type="button"
                      onClick={() =>
                        setdata({ ...data, showMore: !data.showMore })
                      }
                      style={{ width: "auto" }}
                    >
                      {data.showMore ? "Show Less" : "Change Password"}
                    </Button>
                  </div>
                </div>
              </>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="col-sm-6 d-flex justify-content-end align-items-end m-0">
            <Button
              className="btn-effect me-2"
              type="button"
              onClick={data.isEditMode ? handleSave : toggleEditMode}
            >
              {data.isEditMode ? "Save" : "Edit"}
            </Button>
            <Button className="btn-effect2 me-1" type="button">
              Cancel
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdvertiserEditProfile;
