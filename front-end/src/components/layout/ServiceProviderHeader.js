import React from 'react';
import '../../style/ServiceProvider/ServiceProviderHeader.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/header/Frame 2.png';
import bell from '../../assets/images/header/bell.png';
import chat from '../../assets/images/header/chat.png';
import profileIcon from '../../assets/images/header/user.jpg';

function ServiceProviderHeader() {
    return (
        <Navbar expand="lg" bg="light" className="navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Service 360 Logo" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/job">Jobs</Nav.Link>
                        <Nav.Link href="#service">Vacancies</Nav.Link>
                        <Nav.Link href="#contact">Blogs</Nav.Link>
                        <Nav.Link href="#contact"><img src={bell} alt="Notifications" className='bell' /></Nav.Link>
                        <Nav.Link href="#contact"><img src={chat} alt="Chat" className='chat' /></Nav.Link>
                        <NavDropdown title="Pranavan" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#" className="no-hover">View Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#advertiser" className="no-hover">FAQ</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#advertiser" className="no-hover">Logout</NavDropdown.Item>
                        </NavDropdown>
                        <img src={profileIcon} alt="Profile" className="profileIcon" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ServiceProviderHeader;
