import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserImg from '../../../../assets/images/header/user.jpg';
import { useLocation } from 'react-router-dom';

function MyProjectsBody(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialActiveTab = queryParams.get('tab') || 'defaultTab'; // 'defaultTab' is the fallback


    //Job objects with properties
    const MyProjectsJobsData = [
        {
        profile: UserImg,
        id: 1,
        jobTitle: 'Tv Repair',
        Posted: '4 days ago',
        dueDate: '2023-09-12',
        serviceName: 'Electrical Wiring',
        location: 'Wellawatte',
        status:'Invite',
        },
        {
        profile: UserImg,
        id: 2,
        jobTitle: 'Tiles fitting at House',
        Posted:'12 days ago',
        dueDate: '2023-08-28',
        serviceName: 'Tiles Fitting',
        location: 'Colombo',
        status:'Completed',
        },
        {
        profile: UserImg,
        id: 3,
        jobTitle: 'Build Wall',
        Posted: '26 days ago',
        dueDate: '2023-08-30',
        serviceName: 'Masonry',
        location: 'Mount Lavinia',
        status:'Invite',
        },
        {
        profile: UserImg,
        id: 4,
        jobTitle: 'House Cleaning',
        Posted: '1 month ago',
        dueDate: '2023-08-25',
        serviceName: 'Carpet Cleaning',
        location: 'Dehiwala',
        status:'Rejected',
        },
        {
        profile: UserImg,
        id: 5,
        jobTitle: 'Build House',
        Posted: '1 month ago',
        dueDate: '2023-08-27',
        serviceName: 'Masonry',
        location: 'Nugegoda',
        status:'Invite',
        },
        {
        profile: UserImg,
        id: 6,
        jobTitle: 'Office Cleaning',
        Posted:'2 month ago',
        dueDate: '2023-08-24',
        serviceName: 'Sofa Cleaning',
        location: 'Rajagiriya',
        status:'Ongoing',
        },
        {
        profile: UserImg,
        id: 7,
        jobTitle: 'Fix Fridge',
        Posted:'2 month ago',
        dueDate: '2023-08-26',
        serviceName: 'Electrical Wiring',
        location: 'Battaramulla',
        status:'Completed',
        },
        {
        profile: UserImg,
        id: 8,
        jobTitle: 'Build Bridge',
        Posted: '26 days ago',
        dueDate: '2023-08-30',
        serviceName: 'Masonry',
        location: 'Jaffna',
        status:'Ongoing',
        },
        {
        profile: UserImg,
        id: 9,
        jobTitle: 'School Cleaning',
        Posted: '1 month ago',
        dueDate: '2023-08-25',
        serviceName: 'Carpet Cleaning',
        location: 'Kilinochi',
        status:'Rejected',
        },
        {
        profile: UserImg,
        id: 10,
        jobTitle: 'Build Apartment',
        Posted: '2 month ago',
        dueDate: '2023-08-27',
        serviceName: 'Masonry',
        location: 'Bambalapitiya',
        status:'Ongoing',
        },
        {
        profile: UserImg,
        id: 11,
        jobTitle: 'Home Cleaning',
        Posted:'1 month ago',
        dueDate: '2023-08-24',
        serviceName: 'Carpet Cleaning',
        location: 'Rajagiriya',
        status:'Invite',
        },
        {
        profile: UserImg,
        id: 12,
        jobTitle: 'Fix Power Supply',
        Posted:'1 month ago',
        dueDate: '2023-08-26',
        serviceName: 'Electrical Wiring',
        location: 'Battaramulla',
        status:'Ongoing',
        },
    ];

    const MyServices= [
        "Electrical Wiring",
        "Masonry",
        "Sofa Cleaning",
        "Tiles Fitting",
    ];

    // Number of cards (training sessions) to display per page
    const cardsPerPage = 5;

    // To keep track of the active tab
    const [activeTab, setActiveTab] = useState(initialActiveTab); 

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

    // Filter training sessions based on search term and selected date
    const filteredCards = MyProjectsJobsData.filter((card) => {
        return (
        ( !filterCategoryTerm || card.serviceName === filterCategoryTerm) &&
           (card.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    // Filter training sessions based on the active tab's status
    const filteredAndSortedCards = filteredCards.filter((job) => job.status === activeTab);

    // Calculate the total number of pages based on the filtered and sorted cards
    const totalNumPages = Math.ceil(filteredAndSortedCards.length / cardsPerPage);

    // Create an array of page numbers from 1 to totalNumPages
    const pageNumbers = Array.from({ length: totalNumPages }, (_, index) => index + 1);

    // Calculate the start and end indices of the displayed training sessions for the current page
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    // Create a subset of training sessions to be displayed on the current page
    const displayedCards = filteredAndSortedCards.slice(startIndex, endIndex);
    
    return(
        <div>
            
            {/* Page Title*/}
            <span className="ms-4 align-self-start" style={{fontSize:"28px",fontWeight:"600"}}>My Jobs</span>

            {/* Nav Bar */}
            <div className="mt-4 ms-lg-4 me-md-4'">
                <Navbar className="MyProjects-top-nav me-lg-4" expand="lg md sm">
                    <Nav className="ms-3">
                        <Nav.Link 
                            active={activeTab === 'Invite'} 
                            onClick={() => setActiveTab('Invite')}
                        >
                            Invites
                        </Nav.Link>
                        <Nav.Link 
                            active={activeTab === 'Ongoing'} 
                            onClick={() => setActiveTab('Ongoing')} 
                        >
                            Ongoing
                        </Nav.Link>
                        <Nav.Link 
                            active={activeTab === 'Completed'} 
                            onClick={() => setActiveTab('Completed')}
                        >
                            Completed
                        </Nav.Link>
                        <Nav.Link 
                            active={activeTab === 'Rejected'} 
                            onClick={() => setActiveTab('Rejected')} 
                        >
                            Rejected
                        </Nav.Link>
                    </Nav>
                </Navbar>
                <Navbar className='MyProjects-bottom-nav mt-2 mb-3 me-lg-4 d-flex flex-row'>
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
                </Navbar>
            </div>
            
            {/* only display ongoing, completed, rejected jobs */}
            {activeTab !== 'Invite' && displayedCards.filter((job) => job.status === 'Ongoing'|| job.status === 'Completed'|| job.status ==='Rejected').map((job) => (
                <div className="single-job-card mx-auto mt-3">
                    <div className="job-card-header">
                        <div className='job-card-header-inner-container d-flex flex-row flex-wrap'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img
                                            src={job.profile}
                                            alt="avatar"
                                            className="rounded-circle"
                                            style={{ width: "42px", height: "42px" }}
                                />
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='ms-sm-3'>
                                    <span className="job-card-title">{job.jobTitle}</span>
                                </div>
                                <div className='ms-sm-3 d-flex'>
                                    <span className="job-card-date">{job.Posted}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-job-card-body">
                        <div className="my-job-card-body-left d-flex flex-column">
                            <div>
                                <span className="sinlge-my-job-sub-info">{job.dueDate} | {job.serviceName}</span>
                            </div>
                            <div>
                                <span className="my-job-location-info">
                                    <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: {job.location}
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-job-card-footer d-flex flex-row">
                        <span
                            className="btn btn-default my-job-card-footer-btn"
                            id="my-job-card-footer-btn-view"
                        >
                            <i className="bi bi-eye h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ position: "relative", bottom: "1.5px" }}>View</span>
                        </span>
                    </div>
                </div>
            ))}


            {/* only display job invites for me */}
            {activeTab === 'Invite' && displayedCards.filter((job) => job.status === 'Invite').map((job) => (
                <div className="single-job-card mx-auto mt-3">
                    <div className="job-card-header">
                        <div className='job-card-header-inner-container d-flex flex-row flex-wrap'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img
                                            src={job.profile}
                                            alt="avatar"
                                            className="rounded-circle my-projects-jobs-rounded-circle"
                                            style={{ width: "42px", height: "42px" }}
                                />
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='ms-sm-3'>
                                    <span className="job-card-title">{job.jobTitle}</span>
                                </div>
                                <div className='ms-sm-3 d-flex'>
                                    <span className="job-card-date">{job.Posted}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-job-card-body">
                        <div className="my-job-card-body-left d-flex flex-column">
                            <div>
                                <span className="sinlge-my-job-sub-info">{job.dueDate} | {job.serviceName}</span>
                            </div>
                            <div>
                                <span className="my-job-location-info">
                                    <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: {job.location}
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-job-card-footer d-flex flex-row">
                        <span
                            className="btn btn-default my-job-card-footer-btn"
                            id="my-job-card-footer-btn-view"
                        >
                            <i className="bi bi-check-circle h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ position: "relative", bottom: "1.5px" }}>Accept</span>
                        </span>
                        <span
                            className="btn btn-default my-job-card-footer-btn"
                            id="my-job-card-footer-btn-view"
                        >
                            <i className="bi bi-x-circle h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ position: "relative", bottom: "1.5px" }}>Reject</span>
                        </span>
                    </div>
                </div>
            ))}


            {/* Pagination */}
            <div className="pagination justify-content-center">
                {/* Create pagination buttons for each page */}
                {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={`page-link ${currentPage === pageNumber ? 'active' : ''}`}
                    style={{ backgroundColor: '#292D32', color: '#fff', width: '35px', height: '35px', fontSize: '16px' }}
                    onClick={() => handlePageChange(pageNumber)}
                >
                    {pageNumber}
                </button>
                ))}
            </div>
        </div>
    );
}

export default MyProjectsBody;