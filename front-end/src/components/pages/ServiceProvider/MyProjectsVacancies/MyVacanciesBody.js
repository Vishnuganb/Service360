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
    
    //Vacancy objects with properties
    const MyProjectsVacanciesData = [
        {
            profile: UserImg,
            id: 1,
            vacancyTitle: 'Electronics Technician',
            Posted: '2 days ago',
            dueDate: '2023-09-29',
            serviceName: 'Electrical Wiring',
            location: 'Battaramulla',
            customerName: 'Aptinex',
            status:'Invite',
        },
        {
            profile: UserImg,
            id: 2,
            vacancyTitle: 'Cleaning Staff',
            Posted: '5 days ago',
            dueDate: '2023-09-07',
            serviceName: 'Sofa Cleaning',
            location: 'Colombo',
            customerName: 'Hayleys',
            status:'Ongoing',
        },
        {
            profile: UserImg,
            id: 3,
            vacancyTitle: 'Security Staff',
            Posted: '21 days ago',
            dueDate: '2023-09-12',
            serviceName: 'CCTV Systems Repair',
            location: 'Mount Lavinia',
            customerName: 'Emerald',
            status:'Invite',
        },
        {
            profile: UserImg,
            id: 4,
            vacancyTitle: 'Masonry Worker',
            Posted: '29 days ago',
            dueDate: '2023-09-10',
            serviceName: 'Masonry',
            location: 'Dehiwala',
            customerName: 'Arinos',
            status:'Rejected',
        },
        {
            profile: UserImg,
            id: 5,
            vacancyTitle: 'Wooden furniture cleaner',
            Posted: '1 month ago',
            dueDate: '2023-08-15',
            serviceName: 'Carpentry',
            location: 'Nugegoda',
            customerName: 'Payzy',
            status:'Invite',
        },
        {
            profile: UserImg,
            id: 6,
            vacancyTitle: 'Electronics Technician',
            Posted: '2 month ago',
            dueDate: '2023-08-11',
            serviceName: 'Ac Repair',
            location: 'Rajagiriya',
            customerName: 'Veracity',
            status:'Completed',
        },
        {
            profile: UserImg,
            id: 7,
            vacancyTitle: 'Plumber',
            Posted: '2 month ago ago',
            dueDate: '2023-08-27',
            serviceName: 'Plumbing',
            location: 'Battaramulla',
            customerName: 'Wallspan',
            status:'Ongoing',
        },
        {
            profile: UserImg,
            id: 8,
            vacancyTitle: 'Security Assistant Staff',
            Posted: '21 days ago',
            dueDate: '2023-09-09',
            serviceName: 'CCTV Systems Repair',
            location: 'Mount Lavinia',
            customerName: 'Emerald',
            status:'Rejected',
        },
        {
            profile: UserImg,
            id: 9,
            vacancyTitle: 'Civil Engineer',
            Posted: '29 days ago',
            dueDate: '2023-09-30',
            serviceName: 'Masonry',
            location: 'Mannar',
            customerName: 'Arinos',
            status:'Rejected',
        },
        {
            profile: UserImg,
            id: 10,
            vacancyTitle: 'Furniture Polishing',
            Posted: '2 month ago',
            dueDate: '2023-08-15',
            serviceName: 'Carpentry',
            location: 'Rathmalana',
            customerName: 'Payzy',
            status:'Completed',
        },
        {
            profile: UserImg,
            id: 11,
            vacancyTitle: 'AC Wiring Technician',
            Posted: '1 month ago',
            dueDate: '2023-08-11',
            serviceName: 'Ac Repair',
            location: 'Galle',
            customerName: 'Veracity',
            status:'Rejected',
        },
        {
            profile: UserImg,
            id: 12,
            vacancyTitle: 'Plumber',
            Posted: '1 month ago ago',
            dueDate: '2023-10-12',
            serviceName: 'Plumbing',
            location: 'Jaffna',
            customerName: 'IBC',
            status:'Invite',
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
    const filteredCards = MyProjectsVacanciesData.filter((card) => {
        return (
        ( !filterCategoryTerm || card.serviceName === filterCategoryTerm) &&
           (card.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.vacancyTitle.toLowerCase().includes(searchTerm.toLowerCase()))
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
            <span className="ms-4 align-self-start" style={{fontSize:"28px",fontWeight:"600"}}>My Vacancies</span>

            {/* Nav Bar */}
            <div className="mt-4 ms-lg-4">
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
            
            {/* only display ongoing, completed, rejected vacancies */}
            {activeTab !== 'Invite' && displayedCards.filter((vacancy) => vacancy.status === 'Ongoing'|| vacancy.status === 'Completed'|| vacancy.status ==='Rejected').map((vacancy) => (
                <div className="single-vacancy-card mx-auto mt-3">
                    <div className="vacancy-card-header">
                        <div className='vacancy-card-header-inner-container d-flex flex-row flex-wrap'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img
                                            src={vacancy.profile}
                                            alt="avatar"
                                            className="rounded-circle my-projects-vacancies-rounded-circle"
                                            style={{ width: "42px", height: "42px" }}
                                />
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='ms-sm-3'>
                                    <span className="job-card-title">{vacancy.vacancyTitle}</span>
                                </div>
                                <div className='ms-sm-3 d-flex'>
                                    <span className="job-card-date">{vacancy.customerName}</span>
                                </div>
                                <div className='ms-sm-3 d-flex'>
                                    <span className="job-card-date">{vacancy.Posted}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-vacancy-card-body">
                        <div className="my-vacancy-card-body-left d-flex flex-column">
                            <div>
                                <span className="sinlge-my-vacancy-sub-info">{vacancy.dueDate} | {vacancy.serviceName}</span>
                            </div>
                            <div>
                                <span className="my-vacancy-location-info">
                                    <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: {vacancy.location}
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-vacancy-card-footer d-flex flex-row">
                        <span
                            className="btn btn-default my-vacancy-card-footer-btn"
                            id="my-vacancy-card-footer-btn-view"
                        >
                            <i className="bi bi-eye h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ position: "relative", bottom: "1.5px" }}>View</span>
                        </span>
                    </div>
                </div>
            ))}


               {/* only display vacancy invites for me */}
               {activeTab === 'Invite' && displayedCards.filter((vacancy) => vacancy.status === 'Invite').map((vacancy) => (
                <div className="single-vacancy-card mx-auto mt-3">
                    <div className="vacancy-card-header">
                        <div className='vacancy-card-header-inner-container d-flex flex-row flex-wrap'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img
                                            src={vacancy.profile}
                                            alt="avatar"
                                            className="rounded-circle"
                                            style={{ width: "42px", height: "42px" }}
                                />
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='ms-sm-3'>
                                    <span className="job-card-title">{vacancy.vacancyTitle}</span>
                                </div>
                                <div className='ms-sm-3 d-flex'>
                                    <span className="job-card-date">{vacancy.customerName}</span>
                                </div>
                                <div className='ms-sm-3 d-flex'>
                                    <span className="job-card-date">{vacancy.Posted}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-vacancy-card-body">
                        <div className="my-vacancy-card-body-left d-flex flex-column">
                            <div>
                                <span className="sinlge-my-vacancy-sub-info">{vacancy.dueDate} | {vacancy.serviceName}</span>
                            </div>
                            <div>
                                <span className="my-vacancy-location-info">
                                    <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: {vacancy.location}
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-vacancy-card-footer d-flex flex-row">
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