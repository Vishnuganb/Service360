import React from 'react';
import '../../style/Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/images/header/Frame 2.png';

function AppHeader1() {
    return (
        <Navbar expand="lg" bg="light" className="navbar">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Service 360 Logo" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end '>
                    <Nav>
                        <Nav.Link href="/" className='fw-bold navLink'>Home</Nav.Link>
                        <Nav.Link href="/job" className='fw-bold navLink'>Job</Nav.Link>
                        <Nav.Link href="#service" className='fw-bold navLink'>Services</Nav.Link>
                        <Nav.Link href="/about" className='fw-bold navLink'>About</Nav.Link>
                        <Nav.Link href="#blog" className='fw-bold navLink'>Blog</Nav.Link>
                        <Nav.Link href="#contact" className='fw-bold navLink'>Contact</Nav.Link>
                        <Nav.Link href="/login" className='fw-bold navLink'>Login</Nav.Link>
                        <NavDropdown className='fw-bold' title="Signup" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/customer" className="fw-bold">Customer</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/serviceProvider" className="fw-bold">Service Provider</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/advertiser" className="fw-bold">Advertiser</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppHeader1;




