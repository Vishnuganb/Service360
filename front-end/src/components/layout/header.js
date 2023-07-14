import React from 'react';
import '../../style/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/header/Frame 1.png'

function AppHeader1() {
    return (
        <Navbar expand="lg" className="navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Service 360 Logo" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navLink">
                        <Nav.Link href="#job">Job</Nav.Link>
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <NavDropdown title="Signup" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#Customer">Customer</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#serviceProvider">Service Provider</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppHeader1;