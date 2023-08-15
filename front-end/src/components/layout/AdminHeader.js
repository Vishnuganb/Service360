import React, { useState, useContext } from 'react';
import '../../style/ServiceProvider/ServiceProviderHeader.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/header/Frame 2.png';
import profileIcon from '../../assets/images/header/user.jpg';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from "../../ContextFiles/Authentication/AuthenticationContextProvider";

import AdminEditProfile from '../pages/Admin/AdminEditProfile/AdminEditProfile';

function AdminHeader() {
    const [showEditProfile, setShowEditProfile] = useState(false);
    const { logout } = useContext(AuthenticationContext)

    return (
        <Navbar expand="lg" bg="light" className="navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Service 360 Logo" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="me-auto">

                        <Nav.Link href="#notifications" className='fw-bold navLink d-lg-inline d-sm-none d-md-none d-none'><i className="bi bi-bell-fill"></i></Nav.Link>
                        <Nav.Link as={Link} to="/admin/chat" className='fw-bold navLink d-lg-inline d-sm-none d-md-none d-none'><i className="bi bi-chat-fill"></i></Nav.Link>

                        <Nav.Link href="#notifications" className="fw-bold navLink d-sm-inline d-md-inline d-lg-none ">Notifications</Nav.Link>
                        <Nav.Link href="#chat" className="fw-bold navLink d-sm-inline d-md-inline d-lg-none " >Chat</Nav.Link>
                       
                        <NavDropdown title="Vishnugan" className='fw-bold' id="basic-nav-dropdown">
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

export default AdminHeader;
