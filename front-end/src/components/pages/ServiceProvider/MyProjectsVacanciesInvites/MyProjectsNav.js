import React from "react";
import { Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function MyProjectsNav(){
    return(
        <div className="ms-lg-1 me-lg-5">
            <Row className="MyProjectsNav-Row mb-1">
                <Navbar className="MyProjects-top-nav" expand="lg md sm">
                    <Nav className="ms-3">
                        <Nav.Link href="#link1">Applied by me</Nav.Link>
                        <Nav.Link href="#link2">Invites for me</Nav.Link>
                    </Nav>
                </Navbar>
            </Row>
            <Row className="MyProjectsNav-Row">
                <Navbar className="d-flex" expand="lg md sm">
                    <Form className="d-flex MyProjectsSearch">
                        <Form.Control className="MyProjectsNav-search" type="search" aria-label="Search"/>
                        <Button className="MyProjectsNav-button">Search</Button>
                    </Form>
                    <Nav
                        className="mx-3"
                        style={{ maxHeight: '100px'}}
                        id="nav-filter"
                    >
                        <NavDropdown title="Vacancy State">
                            <NavDropdown.Item href="#action3">New</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Accepted</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Completed</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </Row>
        </div>
    );
}

export default MyProjectsNav;