import React, { useState, useContext, useEffect } from 'react';
import '../../style/ServiceProvider/ServiceProviderHeader.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/header/Frame 2.png';
import bell from '../../assets/images/header/bell.png';
import chat from '../../assets/images/header/chat.png';
import profileIcon from '../../assets/images/header/user.jpg';
import { Link } from 'react-router-dom';
import AdminEditProfile from '../pages/Admin/AdminEditProfile/AdminEditProfile';
import { AuthenticationContext } from './../../ContextFiles/Authentication/AuthenticationContextProvider';
import { useLocation } from "react-router-dom";
import AddReviewandRating from '../pages/User/Customer/AddReviewandRating';


function CustomerHeader() {

    const location = useLocation()
    const [showEditProfile, setShowEditProfile] = useState(false);
    const { logout } = useContext(AuthenticationContext);
    const [showAddReview, setShowAddReview] = useState(false);

    const response = sessionStorage.getItem('authenticatedUser');
    const userDetail = JSON.parse(response);

    console.log(userDetail);

    return (
        <Navbar expand="lg" bg="light" className="navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Service 360 Logo" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="me-auto">
                        <Nav.Link href="#Riviews" className="fw-bold navLink d-lg-inline d-sm-none d-md-none d-none" onClick={() => setShowAddReview(true)}> <i className="fas fa-star-half-alt"></i></Nav.Link>
                        <AddReviewandRating
                            show={showAddReview}
                            onHide={() => setShowAddReview(false)}
                        />
                        <Nav.Link href="#notifications" className='fw-bold navLink d-lg-inline d-sm-none d-md-none d-none'><i className="bi bi-bell-fill"></i></Nav.Link>
                        <Nav.Link href="#chat" as={Link} to="/Customer/Chat" className='fw-bold navLink d-lg-inline d-sm-none d-md-none d-none'><i className="bi bi-chat-fill"></i></Nav.Link>

                        <Nav.Link href="#History" className="fw-bold navLink d-sm-inline d-md-inline d-lg-none ">History</Nav.Link>
                        <Nav.Link href="#notifications" className="fw-bold navLink d-sm-inline d-md-inline d-lg-none ">Notifications</Nav.Link>
                        <Nav.Link href="#chat" className="fw-bold navLink d-sm-inline d-md-inline d-lg-none ">Chat</Nav.Link>

                        <NavDropdown title={userDetail.firstname} className='fw-bold' id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => setShowEditProfile(true)} className="fw-bold no-hover">View Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} onClick={logout} className="fw-bold no-hover">Logout</NavDropdown.Item>
                        </NavDropdown>
                        <AdminEditProfile show={showEditProfile} onHide={() => setShowEditProfile(false)} />
                        <img src={profileIcon} alt="Profile" className="profileIcon" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomerHeader;