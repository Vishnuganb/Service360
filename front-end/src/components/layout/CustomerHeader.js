import React, {useState} from 'react';
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

import ChatApp from '../pages/Chat/ChatApp';

  
function CustomerHeader() {
    
    const [showChatApp, setShowChatApp] = useState(false);
    const HideChatApp = () => {
      setShowChatApp(false);
    };

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
                        <Nav.Link href="#chat" className='fw-bold navLink d-lg-inline d-sm-none d-md-none d-none'  onClick={() => setShowChatApp(true)}><i className="bi bi-chat-fill"></i></Nav.Link>
                        <ChatApp show={showChatApp} onHide={HideChatApp} />
                        <Nav.Link href="#History" className="fw-bold navLink d-sm-inline d-md-inline d-lg-none ">History</Nav.Link> 
                        <Nav.Link href="#notifications" className="fw-bold navLink d-sm-inline d-md-inline d-lg-none ">Notifications</Nav.Link>
                        <Nav.Link href="#chat" className="fw-bold navLink d-sm-inline d-md-inline d-lg-none ">Chat</Nav.Link> 

                        <NavDropdown title="Tharsana" className='fw-bold' id="basic-nav-dropdown">
                            <NavDropdown.Item href="#" className="fw-bold no-hover">View Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="#" className="fw-bold no-hover">Logout</NavDropdown.Item>
                        </NavDropdown>
                        <img src={profileIcon} alt="Profile" className="profileIcon" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomerHeader;
