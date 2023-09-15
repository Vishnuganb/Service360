import '../../../../style/ServiceProvider/ViewJobs.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function JobsBodyPage() {
    const [viewJobsData, setViewJobsData] = useState(null);
    const [viewVacanciesData, setViewVacanciesData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategoryTerm, setFilterCategoryTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState(''); 

    const MyServices= [
        "Electrical Wiring",
        "Masonry",
        "Cleaning",
        "Tiles Fitting",
    ];

    useEffect(() => {
        axios.get('http://localhost:8080/auth/viewNewJobs').then((res) => {
            console.log(res.data);
            setViewJobsData(res.data);
        });

        axios.get('http://localhost:8080/auth/viewNewVacancies').then((res) => {
            console.log(res.data);
            setViewVacanciesData(res.data);
        });
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab, searchTerm]);

    if (!viewJobsData || !viewVacanciesData) return 'Loading...';

    const allCards = [...viewJobsData, ...viewVacanciesData];

    const filteredCards = allCards.filter((card) => {
        const serviceMatch = !filterCategoryTerm || card.servicename === filterCategoryTerm;
        const searchTermMatch = (
            card.servicename?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.joblocation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.jobdescription?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.jobtitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.vacancylocation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.vacancydescription?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.vacancytitle?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.customername?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        return serviceMatch && searchTermMatch;
    });

    // Calculate the number of cards to display per page based on active tab
    const cardsPerPage = 5;
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    
    // Filtered and paginated cards
    let displayedCards = [];
    if (activeTab === 'shortterm') {
        displayedCards = filteredCards.filter(card => card.hasOwnProperty('jobtitle')).slice(startIndex, endIndex);
    } else if (activeTab === 'longterm') {
        displayedCards = filteredCards.filter(card => card.hasOwnProperty('vacancytitle')).slice(startIndex, endIndex);
    } else{
        displayedCards = filteredCards.slice(startIndex, endIndex);
    }
    
    const jobCards = displayedCards.filter(card => card.hasOwnProperty('jobid'));
    const vacancyCards = displayedCards.filter(card => card.hasOwnProperty('vacancyid'));

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
        setCurrentPage(1); // Reset current page to 1 when search term changes
    };

    // Handle filter by category changes
    const handleFilterCategoryChange = (category) => {
        setFilterCategoryTerm(category);
        setCurrentPage(1); // Reset current page to 1 when filter category changes
    };

    return (
        <div>
            {/* Page Title*/}
            <span className="ms-4 align-self-start" style={{fontSize:"28px",fontWeight:"600"}}>View Jobs</span>

            {/* Nav Bar */}
            <div className="mt-4 ms-lg-4">
            <Navbar className="MyProjects-top-nav me-lg-4" expand="lg md sm">
                <Nav className="ms-3">
                    <Nav.Link 
                        active={activeTab === 'shortterm'} 
                        onClick={() => setActiveTab('shortterm')}
                    >
                        Short-Term
                    </Nav.Link>
                    <Nav.Link 
                        active={activeTab === 'longterm'} 
                        onClick={() => setActiveTab('longterm')} 
                    >
                        Long-Term
                    </Nav.Link>
                </Nav>
            </Navbar>
            <Navbar className='mt-2 mb-3 me-lg-4'>
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
                        <NavDropdown title="Select Job Category" id="navbarScrollingDropdown" onSelect={handleFilterCategoryChange}>
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
            </div>

            {/* Job Cards */}

            {(!activeTab || activeTab === 'shortterm') && displayedCards.filter(card => card.hasOwnProperty('jobtitle')).map((job) => (
                
                    <div className="single-job-card mx-auto mt-3">

                        <div className="job-card-header">
                            <div className='job-card-header-inner-container d-flex flex-row flex-wrap'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    {/* <img src={job.profile} alt="avatar" className="job-card-avatar" /> */}
                                    <img
                                            src=""
                                            alt="avatar"
                                            className="rounded-circle view-jobs-rounded-circle"
                                            style={{ width: "42px", height: "42px" }}
                                    />
                                </div>
                                <div className='d-flex flex-column'>
                                    <div className='ms-sm-3'>
                                        <span className="job-card-title">{job.customer.firstname}</span>
                                    </div>
                                    <div className='ms-sm-3 d-flex'>
                                        <span className="job-card-date">{job.lastseen}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="job-card-body">
                            <div className="job-card-body-left d-flex flex-column">
                                <div>
                                    <span className='vacancy-job me-2' id='vacancy-status'>Short-Term</span>
                                </div>
                                <div className='mt-2'>
                                    <span className="single-job-title">{job.jobtitle}</span>
                                </div>
                                <div >
                                    <span className="single-job-description">
                                        {job.jobdescription.split(' ').slice(0, 14).join(' ')}
                                        {job.jobdescription.split(' ').length > 14 ? ' ...' : ''}
                                    </span>
                                </div>
                                <div className='mt-1'>
                                    <span className="sinlge-job-sub-info"><i className="bi bi-calendar-event"></i>&nbsp;&nbsp; Due Date - {job.duedate}</span>
                                    {/* <span className="sinlge-job-sub-info">Due Date - {job.duedate} | {job.servicename}</span> */}
                                </div>
                                <div className='mt-1'>
                                    <span className="job-location-info">
                                        <i className="bi bi-geo-alt-fill"></i>&nbsp;&nbsp; Location - {job.joblocation}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr style={{margin:"0.5rem"}} />
                        <div className="view-jobs-card-footer d-flex flex-row justify-content-between mx-sm-2 mb-sm-2 mt-md-0 mt-4">
                            
                            <Link to={`../ViewAJob/${job.jobid}` }>
                                <button type="button" class="btn view-jobs-page-btn-labeled job-card-footer-btn" id="job-card-footer-btn-view" style={{color:"white",backgroundColor:"rgb(11, 133, 160)"}}>
                                    <span class="view-jobs-page-btn-label">
                                    <i class="bi bi-eye"></i>
                                    </span>
                                    View
                                </button>
                            </Link>                            
                                
                            <Link to="">
                                <button type="button" class="btn view-jobs-page-btn-labeled job-card-footer-btn" id="job-card-footer-btn-view" style={{color:"white",backgroundColor:"rgb(13, 100, 69)"}}>
                                    <span class="view-jobs-page-btn-label">
                                    <i class="bi bi-chat-square-dots"></i>
                                    </span>
                                    Comment
                                </button>
                            </Link>    

                            <Link to="">
                                <button type="button" class="btn view-jobs-page-btn-labeled job-card-footer-btn" id="job-card-footer-btn-view" style={{color:"white",backgroundColor:"rgb(182, 14, 14)"}}>
                                    <span class="view-jobs-page-btn-label">
                                    <i class="bi bi-share"></i>
                                    </span>
                                    Share
                                </button>
                            </Link>  

                        </div>
                    </div>
            ))}

            {/* Vacancy Cards */}

            {(!activeTab || activeTab === 'longterm') && displayedCards.filter(card => card.hasOwnProperty('vacancytitle')).map((vacancy) => (
                <div className='single-vacancy-card mx-auto mt-3' >
                    <div className='vacancy-card-header'>
                        <div className='job-card-header-inner-container d-flex flex-row flex-wrap'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img
                                        src=""
                                        alt="avatar"
                                        className="rounded-circle"
                                        style={{ width: "42px", height: "42px" }}
                                />
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='ms-sm-3'>
                                    <span className='vacancy-card-title'>{vacancy.customer.firstname}</span>
                                </div>
                                <div className='ms-sm-3 d-flex'>
                                    <span className='vacancy-card-date'>{vacancy.lastseen}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='vacancy-card-body'>
                        <div className='vacancy-card-body-left d-flex flex-column'>
                            <div className='vacancy-card-tag-container d-flex flex-row'>
                                <span className='vacancy-job me-2' id='vacancy-status'>Long-Term</span>
                                <span className='single-vacancy-type mt-1 mt-sm-0' id='vacancy-status'>{vacancy.vacancytype}</span>
                            </div>
                            <div className='vacancy-card-body-inner-flex d-flex flex-row mt-2'>
                                <div>
                                    <span className='single-vacancy-title '>{vacancy.vacancytitle}</span>&nbsp;&nbsp;
                                </div>
                            </div>
                            <div>
                                <span className="single-vacancy-description">
                                        {vacancy.vacancydescription.split(' ').slice(0, 14).join(' ')}
                                        {vacancy.vacancydescription.split(' ').length > 14 ? ' ...' : ''}
                                    </span>
                            </div>
                            <div className='mt-1'>
                                <span className='sinlge-vacancy-expiry-info'><i className="bi bi-calendar-event"></i>&nbsp;&nbsp; Due Date - {vacancy.duedate}</span>
                                {/* <span className='sinlge-vacancy-expiry-info'>Due Date - {vacancy.duedate} | {vacancy.servicename}</span> */}
                            </div>
                            <div className='mt-1'>
                                <span className='vacancy-location-info'>
                                    <i className="bi bi-geo-alt-fill"></i>&nbsp;
                                    Location - {vacancy.vacancylocation}
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr style={{margin:"0.5rem"}} />
                    <div className='vacancy-card-footer d-flex flex-row justify-content-between mb-sm-2 mx-auto mt-md-0 mt-1 mb-2'>

                        <Link to={`../ViewAVacancy/${vacancy.vacancyid}` }>
                            <button type="button" class="btn view-jobs-page-btn-labeled vacancy-card-footer-btn" id="vacancy-card-footer-btn-view" style={{color:"white",backgroundColor:"rgb(13, 100, 69)"}}>
                                <span class="view-jobs-page-btn-label">
                                <i class="bi bi-file-earmark-plus"></i>
                                </span>
                                Apply for Job
                            </button>
                        </Link>  

                    </div>
                </div>
            ))}

            {/* Pagination */}
            {displayedCards.length > 0 && (
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
            )}

        </div>
    );

}

export default JobsBodyPage;