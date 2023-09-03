import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect } from 'react';
import axios from 'axios';
import SessionImg from '../../../../assets/images/ServiceProvider/power.jpg';
import { Link } from "react-router-dom";

function SessionsBodyPage(){
    const [viewTrainingSessionsData, setviewTrainingSessionsData] = useState(null);

    //Training Session objects with properties
    // const viewTrainingSessionsData = [
    // {
    //     sessionImage: SessionImg,
    //     id: 1,
    //     sessionTitle: 'Basic Electricity for the Non-Electrician Skills Training',
    //     serviceName: 'Electrical Wiring',
    //     location: 'Cinnamon Grand Colombo',
    //     date: '2023-09-29',
    //     time: '10.00 am',
    //     intrested: 19,
    //     going: 12,
    // },
    // {
    //     sessionImage: SessionImg,
    //     id: 2,
    //     sessionTitle: 'Introduction to Masonry Techniques',
    //     serviceName: 'Masonry',
    //     location: 'Hilton Colombo',
    //     date: '2023-10-15',
    //     time: '2.00 pm',
    //     intrested: 8,
    //     going: 5,
    // },
    // {
    //     sessionImage: SessionImg,
    //     id: 3,
    //     sessionTitle: 'Plumbing Essentials Workshop',
    //     serviceName: 'Plumbing',
    //     location: 'Galadari Hotel Colombo',
    //     date: '2023-11-05',
    //     time: '9.30 am',
    //     intrested: 14,
    //     going: 9,
    // },
    // {
    //     sessionImage: SessionImg,
    //     id: 4,
    //     sessionTitle: 'Carpentry Fundamentals: Building Strong Foundations',
    //     serviceName: 'Carpentry',
    //     location: 'Taj Samudra Colombo',
    //     date: '2023-12-20',
    //     time: '11.00 am',
    //     intrested: 22,
    //     going: 18,
    // },
    // {
    //     sessionImage: SessionImg,
    //     id: 5,
    //     sessionTitle: 'Advanced Electrical Wiring Techniques',
    //     serviceName: 'Electrical Wiring',
    //     location: 'Shangri-La Colombo',
    //     date: '2023-09-30',
    //     time: '1.30 pm',
    //     intrested: 25,
    //     going: 15,
    // },
    // {
    //     sessionImage: SessionImg,
    //     id: 6,
    //     sessionTitle: 'Mastering Masonry: From Basics to Artistry',
    //     serviceName: 'Masonry',
    //     location: 'The Kingsbury Colombo',
    //     date: '2023-10-10',
    //     time: '3.30 pm',
    //     intrested: 12,
    //     going: 7,
    // },
    // {
    //     sessionImage: SessionImg,
    //     id: 7,
    //     sessionTitle: 'Essential Carpentry Tools and Techniques',
    //     serviceName: 'Carpentry',
    //     location: 'Hilton Colombo',
    //     date: '2023-11-18',
    //     time: '10.00 am',
    //     intrested: 18,
    //     going: 11,
    // },
    // ];  

    const MyServices= [
        "Electrical Wiring",
        "Masonry",
        "Cleaning",
        "Tiles Fitting",
    ];

    // Number of cards (training sessions) to display per page
    const cardsPerPage = 3;

    // State to keep track of the current page number
    const [currentPage, setCurrentPage] = useState(1);

    // State to store the search term
    const [searchTerm, setSearchTerm] = useState(''); 

    // State to store the filter by category
    const [filterCategoryTerm, setFilterCategoryTerm] = useState('');

    // Function to handle page change when the user clicks on pagination buttons
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Function to handle search input change
    const handleSearchChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
        setCurrentPage(1);   // Reset current page to 1 when search term changes
    };
    
    // Function to handle filter by category changes
    const handlefilterCategoryChange = (category) => {
        setFilterCategoryTerm(category);
        setCurrentPage(1); // Reset current page to 1 when date changes
    };

    useEffect(() => {
        axios.get('http://localhost:8080/auth/viewTrainingSessions').then((res) => {
            console.log(res.data);
            setviewTrainingSessionsData(res.data);
        });
    }   , []);

    if (!viewTrainingSessionsData) return 'No jobs found!';

    // Filter training sessions based on search term and selected date
    const filteredCards = viewTrainingSessionsData.filter((card) => {
        return (
        (!filterCategoryTerm || card.serviceName === filterCategoryTerm) &&
            (card.servicename.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.trainingtitle.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    // Calculate the start and end indices of the displayed training sessions for the current page
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    // Create a subset of training sessions to be displayed on the current page
    const displayedCards = filteredCards.slice(startIndex, endIndex);

    return(
        <div>

            {/* Page Title*/}
            <span className="ms-4 align-self-start" style={{fontSize:"28px",fontWeight:"600"}}>View Training Sessions</span>

            {/* Nav Bar */}
            <Navbar className='mt-4 mb-3 ms-lg-4 me-md-4'>
                <div className="body-nav-container d-flex flex-row col-12">
                    <div className="d-flex flex-row">
                        <input
                            type="text"
                            className="form-control training-nav-input"
                            placeholder="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <span className="input-group-text training-nav-input">
                            <i class="fas fa-search"></i>
                        </span>
                    </div>
                    <Nav
                        className="body-nav-filter-container d-flex ms-auto flex-row justify-content-center"
                        style={{ maxHeight: '100px' }}
                        id="nav-filter"
                    >
                        <NavDropdown title="Select Job Category" id="navbarScrollingDropdown" onSelect={handlefilterCategoryChange}>
                            {/* Loop MyServices */}
                            {MyServices.map((service) => (          
                                <NavDropdown.Item key={service} eventKey={service}>{service}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <NavDropdown title="Filter by Location" id="navbarScrollingDropdown" className='me-lg-4'>
                            <NavDropdown.Item href="#action3">All Island</NavDropdown.Item>
                            <NavDropdown.Item >or</NavDropdown.Item>
                            &nbsp; &nbsp;
                            <input type="range" name="distance" min="1km" max="50km" />               {/*ADD LOCATION PART IS REMAINING*/}
                        </NavDropdown>
                    </Nav>
                </div>
            </Navbar>

            {/* Training Session Cards */}

            {displayedCards.map((TrainingSession) => (
                <div className="single-my-training-card mx-auto mt-3">
                    <div className="row">
                        <div className="col-md-5 col-12 my-training-card-body-left d-flex justify-content-center justify-content-md-start">
                            <img className="view-training-image" src={TrainingSession.trainingimage} alt="Power" />
                        </div>
                        <div className="col-md-7 col-12 my-training-card-body-right">
                            <span className="single-my-training-info">{TrainingSession.trainingtitle}</span>
                            <br />
                            <span className="my-training-location-info">
                                <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: {TrainingSession.traininglocation}
                            </span>
                            <br />
                            <span className="single-my-training-time">
                                <i className="bi bi-clock-fill"></i>&nbsp; {TrainingSession.trainingdate} At {TrainingSession.trainingtime}
                            </span>
                            <br/>
                            <div className="single-traning-guests border border-dark mt-2 mb-4 col">
                                <div className="custom-training-row row align-itmes-center">
                                    <span className="single-my-training-guests border border-primary col-12">Guests</span>
                                </div>
                                <div className="custom-training-row row">
                                    <span className="single-my-training-intrested border border-primary col-6">{TrainingSession.interested} intrested</span>
                                    <span className="single-my-training-going border border-primary col-6">{TrainingSession.going} going</span>
                                </div>
                            </div>
                            <hr />
                            <div className="my-training-card-footer d-flex flex-row">
                                <Link to={`/ServiceProvider/ViewATrainingSession/${TrainingSession.trainingid}`}
                                    className="btn btn-default my-training-card-footer-btn"
                                    id="my-training-card-footer-btn-view"
                                >
                                    <i className="bi bi-eye h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{ position: "relative", bottom: "1.5px" }}>View</span>
                                </Link>
                                <span
                                    className="btn btn-default my-training-card-footer-btn"
                                    id="my-training-card-footer-btn-view"
                                >
                                    <i className="bi bi-credit-card h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span style={{ position: "relative", bottom: "1.5px" }}>Register</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Pagination */}
            <div className="pagination justify-content-center">
                {/* Create pagination buttons for each page */}
                {Array.from({ length: Math.ceil(filteredCards.length / cardsPerPage) }, (_, index) => (
                <button
                    key={index + 1}
                    className={`page-link ${
                    currentPage === index + 1 ? 'active' : ''
                    }`}
                    style={{ backgroundColor: '#292D32', color: '#fff', width: '35px', height: '35px', fontSize: '16px' }}
                    onClick={() => handlePageChange(index + 1)}
                >
                    {index + 1}
                </button>
                ))}
            </div>

        </div>
    );
}

export default SessionsBodyPage;