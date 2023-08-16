import React, {useState,useContext,useEffect} from 'react';
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
import EditProfile from '../pages/User/SeviceProvider/EditProfile';
import ChatApp from '../pages/Chat/ChatApp';
import { AuthenticationContext } from './../../ContextFiles/Authentication/AuthenticationContextProvider';
import { useLocation } from "react-router-dom";
import Cookies from 'js-cookie';
import AddReviewandRating from '../pages/User/Customer/AddReviewandRating';

function ServiceProviderHeader() {

    const location = useLocation()
    const { logout, userDetailsAfterAuthentication, authenticated, contentVisible } = useContext(AuthenticationContext)
    const [modalShow, setModalShow] = React.useState(false);
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
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="me-auto">
                        <Nav.Link href="/ServiceProvider/ViewJobs" className='fw-bold navLink'>Jobs</Nav.Link>
                        <Nav.Link href="/ServiceProvider/ViewVacancies" className='fw-bold navLink'>Vacancies</Nav.Link>
                        <Nav.Link href="#Riviews" className="fw-bold navLink d-lg-inline d-sm-none d-md-none d-none" onClick={() => setShowAddReview(true)}> <i className="fas fa-star-half-alt"></i></Nav.Link>
                        <AddReviewandRating
                        show={showAddReview}
                        onHide={() => setShowAddReview(false)}
                        />
                        <Nav.Link href="#notifications" className='fw-bold navLink d-lg-inline d-sm-none d-md-none d-none'><i className="bi bi-bell-fill"></i></Nav.Link>
                        <Nav.Link href="#chat" as={Link} to="/ServiceProvider/Chat" className='fw-bold navLink d-lg-inline d-sm-none d-md-none d-none'><i className="bi bi-chat-fill"></i></Nav.Link>

                        <Nav.Link href="#notifications" className="fw-bold navLink d-sm-inline d-md-inline d-lg-none ">Notifications</Nav.Link>
                        <Nav.Link href="#chat" className="fw-bold navLink d-sm-inline d-md-inline d-lg-none ">Chat</Nav.Link> 

                        <NavDropdown title={userName} className='fw-bold' id="basic-nav-dropdown">
                            <NavDropdown.Item href="#"  onClick={() => setModalShow(true)} className="fw-bold no-hover">View Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} onClick={logout} className="fw-bold no-hover">Logout</NavDropdown.Item>
                        </NavDropdown>

                        <EditProfile show={modalShow} onHide={() => setModalShow(false)}/>
                        <img src={profileIcon} alt="Profile" className="profileIcon" />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ServiceProviderHeader;
