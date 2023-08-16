import React, { useState, useContext,useEffect } from "react";
import "../../style/Admin/AdminHeader.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/images/header/Frame 2.png";
import profileIcon from "../../assets/images/header/user.jpg";
import { Link } from 'react-router-dom';
import AdvertiserEditProfile from "../pages/advertiser/EditProfile/AdvertiserEditProfile";
import { AuthenticationContext } from './../../ContextFiles/Authentication/AuthenticationContextProvider';
import { useLocation } from "react-router-dom";
import AddReviewandRating from "../pages/User/Customer/AddReviewandRating";
import Cookies from 'js-cookie';

function AdvertiserHeader() {
  const location = useLocation()
  const [showEditProfile, setShowEditProfile] = useState(false);
  const { logout, userDetailsAfterAuthentication, authenticated, contentVisible } = useContext(AuthenticationContext)
  const [showAddReview, setShowAddReview] = useState(false);
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const savedUserName = Cookies.get('FirstName');
    if (savedUserName) {
      setUserName(savedUserName);
    }
  }, []);

  return (
    <Navbar expand="lg" bg="light" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Service 360 Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link
              href="#Riviews"
              className="fw-bold navLink d-lg-inline d-sm-none d-md-none d-none"
              onClick={() => setShowAddReview(true)}
            >
              <i className="fas fa-star-half-alt"></i>
            </Nav.Link>
            <AddReviewandRating
              show={showAddReview}
              onHide={() => setShowAddReview(false)}
            />

            <Nav.Link
              href="#notifications"
              className="fw-bold navLink d-lg-inline d-sm-none d-md-none d-none"
            >
              <i className="bi bi-bell-fill"></i>
            </Nav.Link>
            <Nav.Link
              href="#chat"
              as={Link}
              to="/Advertiser/Chat"
              className="fw-bold navLink d-lg-inline d-sm-none d-md-none d-none"
            >
              <i className="bi bi-chat-fill"></i>
            </Nav.Link>

            <Nav.Link
              href="#notifications"
              className="fw-bold navLink d-sm-inline d-md-inline d-lg-none "
            >
              Notifications
            </Nav.Link>
            <Nav.Link href="#chat" className="fw-bold navLink d-sm-inline d-md-inline d-lg-none">
              Chat
            </Nav.Link>

            <NavDropdown
              title={userName}
              className="fw-bold"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item
                href="#"
                className="fw-bold no-hover"
                onClick={() => setShowEditProfile(true)}
              >
                View Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <AdvertiserEditProfile
                show={showEditProfile}
                onHide={() => setShowEditProfile(false)}
              />
              <NavDropdown.Item as={Link} onClick={logout} className="fw-bold no-hover">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            <img src={profileIcon} alt="Profile" className="profileIcon" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdvertiserHeader;
