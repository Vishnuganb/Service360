import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import trainingsessionimage from '../../../../assets/images/ServiceProvider/TrainingSession/default.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function SessionsBodyPage() {
    const [viewTrainingSessionsData, setviewTrainingSessionsData] = useState(null);

    const MyServices = [
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
    }, []);

    if (!viewTrainingSessionsData) {
        return <FontAwesomeIcon icon={faSpinner} className='fa-spin-trainingsession-sp'/>;
    }

    function convertTo12HourFormat(time24) {
        const [hour, minute] = time24.split(":");
        const hourInt = parseInt(hour);
        const amPm = hourInt >= 12 ? "PM" : "AM";
        const hour12 = hourInt > 12 ? hourInt - 12 : hourInt === 0 ? 12 : hourInt;
      
        return `${hour12}:${minute} ${amPm}`;
    }

    // Filter training sessions based on search term and selected date
    const filteredCards = viewTrainingSessionsData.trainingsessions.filter((card) => {
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


    // Get all images from the training sessions
    const trainingSessionImagesArray = viewTrainingSessionsData.trainingsessionimages;
    
    // Initialize an empty array to store all images
    const allImages = [];

    // Iterate through trainingSessionImagesArray
    trainingSessionImagesArray.forEach((sessionImages) => {
    // Check if the current object has an 'images' property
    if (sessionImages.hasOwnProperty('images') && Array.isArray(sessionImages.images)) {
        // Concatenate the 'images' array to the 'allImages' array
        allImages.push(...sessionImages.images);
    }
    });

    console.log(allImages);

    return (
        <div>

            {/* Page Title*/}
            <span className="ms-4 align-self-start" style={{ fontSize: "28px", fontWeight: "600" }}>View Training Sessions</span>

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
            {displayedCards.map((TrainingSession, index) => {
                // Find the matching training session images
                const matchingSessionImages = trainingSessionImagesArray.find(sessionImages => sessionImages.id === TrainingSession.trainingid);

                // Extract the images array if found, or provide an empty array as a default value
                const imagesArray = matchingSessionImages ? matchingSessionImages.images : [];

                return(
                    //TrainingSession.trainingid gives the id
                    <div className="single-my-training-card mx-auto mt-3" key={index}>
                        <div className="row">
                            <div className="col-md-5 col-12 my-training-card-body-left d-flex justify-content-center justify-content-md-start" style={{ maxHeight: '400px', overflow: 'hidden'}}>
                                <img
                                    className="view-training-image"
                                    src={imagesArray.length > 0 ? `data:image/jpg;base64,${imagesArray[0]}` : trainingsessionimage}
                                    alt={`Training Session ${index}`} 
                                    style={{
                                        height: '200px',
                                        width: '100%',
                                        objectFit: 'contain',
                                        backgroundColor:"#e9e9e9" 
                                    }}
                                />
                            </div>
                            <div className="col-md-7 col-12 my-training-card-body-right">
                                <span className="single-my-training-info">{TrainingSession.trainingtitle}</span>
                                <br />
                                <span className="my-training-location-info">
                                    <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: {TrainingSession.traininglocation}
                                </span>
                                <br />
                                <span className="single-my-training-time">
                                    <i className="bi bi-clock-fill"></i>&nbsp; {TrainingSession.trainingdate} At {convertTo12HourFormat(TrainingSession.trainingstarttime)} - {convertTo12HourFormat(TrainingSession.trainingendtime)}
                                </span>
                                <br />
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
                );
            })}

            {/* Pagination */}
            <div className="pagination justify-content-center">
                {/* Create pagination buttons for each page */}
                {Array.from({ length: Math.ceil(filteredCards.length / cardsPerPage) }, (_, index) => (
                    <button
                        key={index + 1}
                        className={`page-link ${currentPage === index + 1 ? 'active' : ''
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