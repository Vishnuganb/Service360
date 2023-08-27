import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function MyProjectsBody(){
    const [MyProjectsJobsData, setMyProjectsJobsData] = useState(null);
    const [MyProjectsVacanciesData, setMyProjectsVacanciesData] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategoryTerm, setFilterCategoryTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState(''); 

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialActiveTab = queryParams.get('tab') || 'defaultTab'; // 'defaultTab' is the fallback

    useEffect(() => {
        setActiveTab(initialActiveTab);
    }, [initialActiveTab]);

    useEffect(() => {
        setCurrentPage(1);
        setSearchTerm('');  // Reset search term when active tab changes
        setFilterCategoryTerm('');  // Reset category filter when active tab changes
    }, [activeTab]);
    
    const MyServices= [
        "Electrical Wiring",
        "Masonry",
        "Sofa Cleaning",
        "Tiles Fitting",
    ];

    useEffect(() => {
        axios.get('http://localhost:8080/auth/viewJobs').then((res) => {
            console.log(res.data);
            setMyProjectsJobsData(res.data);
        });

        axios.get('http://localhost:8080/auth/viewVacancies').then((res) => {
            console.log(res.data);
            setMyProjectsVacanciesData(res.data);
        });
    },[]);

    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab, searchTerm]);

    if (!MyProjectsJobsData || !MyProjectsVacanciesData) return 'No jobs found!';

    const handleAccept = (jobId, isQuotation) => {
        const newStatus = isQuotation ? 'pending' : 'ongoing';
        const apiUrl = isQuotation
          ? `http://localhost:8080/auth/updateJobStatusInviteToPending/${jobId}`
          : `http://localhost:8080/auth/updateJobStatusInviteToOngoing/${jobId}`;
    
        axios.put(apiUrl)
          .then((res) => {
            // Update the state or trigger a reload of the component if necessary
          })
          .catch((error) => {
            // Handle errors
          });

          setMyProjectsJobsData(prevData => prevData.filter(job => job.jobid !== jobId));           //PAGE REFRESH
    };

    const handleReject = (jobId) => {
    const apiUrl = `http://localhost:8080/auth/updateJobStatusInviteToRejected/${jobId}`;

    axios.put(apiUrl)
        .then((res) => {
        // Update the state or trigger a reload of the component if necessary
        })
        .catch((error) => {
        // Handle errors
        });
        setMyProjectsJobsData(prevData => prevData.filter(job => job.jobid !== jobId));
        
    };

    const allCards = [...MyProjectsJobsData, ...MyProjectsVacanciesData];

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

    const filteredAndSortedCards = filteredCards.filter((card) => {
        if (card.jobstatus) {
            return card.jobstatus === activeTab; // Check job status
        } else if (card.vacancystatus) {
            return card.vacancystatus === activeTab; // Check vacancy status
        }
        return false; // Exclude cards without valid status
    });

    const cardsPerPage = 3;
    
    // Calculate the total number of pages based on the filtered and sorted cards
    const totalNumPages = Math.ceil(filteredAndSortedCards.length / cardsPerPage);

    // Create an array of page numbers from 1 to totalNumPages
    const pageNumbers = Array.from({ length: totalNumPages }, (_, index) => index + 1);

    // Calculate the start and end indices of the displayed training sessions for the current page
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    // Create a subset of training sessions to be displayed on the current page
    const displayedCards = filteredAndSortedCards.slice(startIndex, endIndex);
    
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

    return(
        <div>
            
            {/* Page Title*/}
            <span className="ms-4 align-self-start" style={{fontSize:"28px",fontWeight:"600"}}>My Jobs</span>

            {/* Nav Bar */}
            <div className="mt-4 ms-lg-4 me-md-4">
                <Navbar className="MyProjects-top-nav me-lg-4" expand="lg md sm">
                    <Nav className="ms-3">
                        <Nav.Link 
                            active={activeTab === 'invite'} 
                            onClick={() => setActiveTab('invite')}
                        >
                            Invites
                        </Nav.Link>
                        <Nav.Link 
                            active={activeTab === 'pending'} 
                            onClick={() => setActiveTab('pending')} 
                        >
                            Pending
                        </Nav.Link>
                        <Nav.Link 
                            active={activeTab === 'ongoing'} 
                            onClick={() => setActiveTab('ongoing')} 
                        >
                            Ongoing
                        </Nav.Link>
                        <Nav.Link 
                            active={activeTab === 'rejected'} 
                            onClick={() => setActiveTab('rejected')} 
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
            
            {/* only display pending, ongoing, rejected jobs */}
            <div className="row my-projects-jobs-row-wrap">
                {activeTab !== 'invite' && displayedCards.filter((job) => job.jobstatus === 'pending' || job.jobstatus === 'ongoing' || job.jobstatus === 'rejected').map((job) => (
                    <div className="single-my-job-card mx-auto mt-3">
                        <div className="ms-sm-3">
                            <div className='d-flex flex-column'>
                                <div>
                                    <span className="job-card-title">{job.jobtitle}</span>
                                </div>
                                <div className='d-flex'>
                                    <span className="my-job-card-customer-name">By {job.customername}</span>
                                </div>
                                <div>
                                    <span className="my-job-location-info">
                                        <i className="bi bi-geo-alt-fill"></i>&nbsp;&nbsp; {job.joblocation}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr style={{margin:"0.5rem"}} />
                        <div className="my-job-card-footer d-flex flex-row mb-sm-2 mx-auto mt-md-0 mt-1 mb-2">
                            {job.jobstatus === 'pending' && (
                            <Link to={`../PendingJob/${job.jobid}`} className="btn btn-default my-job-card-footer-btn-ongoing" id="my-job-card-footer-btn-view">
                              <button type="button" class="btn view-jobs-page-btn-labeled my-job-card-footer-btn" id="job-card-footer-btn-view" style={{color:"white",backgroundColor:"rgb(11, 133, 160)"}}>
                                  <span class="my-jobs-page-btn-label">
                                  <i class="bi bi-eye"></i>
                                  </span>
                                  View
                              </button>
                            </Link>  
                            )}
                            {job.jobstatus === 'ongoing' && (
                            <Link to={`../OngoingJob/${job.jobid}`} className="btn btn-default my-job-card-footer-btn-ongoing" id="my-job-card-footer-btn-view">
                                <button type="button" class="btn view-jobs-page-btn-labeled my-job-card-footer-btn" id="job-card-footer-btn-view" style={{color:"white",backgroundColor:"rgb(11, 133, 160)"}}>
                                    <span class="my-jobs-page-btn-label">
                                    <i class="bi bi-eye"></i>
                                    </span>
                                    View
                                </button>
                            </Link>
                                                   
                            )}
                            {job.jobstatus === 'rejected' && (
                            <Link to={`../ViewAJob/${job.jobid}`} className="btn btn-default my-job-card-footer-btn-ongoing" id="my-job-card-footer-btn-view">
                                <button type="button" class="btn view-jobs-page-btn-labeled my-job-card-footer-btn" id="job-card-footer-btn-view" style={{color:"white",backgroundColor:"rgb(11, 133, 160)"}}>
                                    <span class="my-jobs-page-btn-label">
                                    <i class="bi bi-eye"></i>
                                    </span>
                                    View
                                </button>
                            </Link>
                            )}
                        </div>
                    </div>
                ))}

                {/* only display ongoing, rejected vacancies */}
                {activeTab !== 'invite' && displayedCards.filter((vacancy) => vacancy.vacancystatus === 'ongoing' || vacancy.vacancystatus === 'rejected').map((vacancy) => (
                    <div className="single-my-vacancy-card mx-auto mt-3">
                        <div className="ms-sm-3">
                                <div className='d-flex flex-column'>
                                    <div >
                                        <span className="job-card-title">{vacancy.vacancytitle}</span>
                                    </div>
                                    <div className='d-flex'>
                                        <span className="job-card-date">By {vacancy.customername}</span>
                                    </div>
                                    <div>
                                        <span className="my-job-location-info">
                                            <i className="bi bi-geo-alt-fill"></i>&nbsp;&nbsp; {vacancy.vacancylocation}
                                        </span>
                                        <span className="my-job-location-info ms-4">
                                            <i class="fa-regular fa-clock"></i>&nbsp;&nbsp; {vacancy.vacancytype}
                                        </span>
                                    </div>
                                </div>
                        </div>
                        <hr style={{margin:"0.5rem"}} />
                        <div className="my-job-card-footer d-flex flex-row mb-sm-2 mx-auto mt-md-0 mt-1 mb-2">
                            {vacancy.vacancystatus === 'ongoing' && (
                            <Link to={`../OngoingVacancy/${vacancy.vacancyid}`} className="btn btn-default my-vacancy-card-footer-btn-ongoing" id="my-vacancy-card-footer-btn-view">
                                <button type="button" class="btn view-jobs-page-btn-labeled my-job-card-footer-btn" id="job-card-footer-btn-view" style={{color:"white",backgroundColor:"rgb(11, 133, 160)"}}>
                                    <span class="my-jobs-page-btn-label">
                                    <i class="bi bi-eye"></i>
                                    </span>
                                    View
                                </button>
                            </Link>
                            )}
                            {vacancy.vacancystatus === 'rejected' && (
                            <Link to={`../ViewAVacancy/${vacancy.vacancyid}`} className="btn btn-default my-vacancy-card-footer-btn-ongoing" id="my-vacancy-card-footer-btn-view">
                                <button type="button" class="btn view-jobs-page-btn-labeled my-job-card-footer-btn" id="job-card-footer-btn-view" style={{color:"white",backgroundColor:"rgb(11, 133, 160)"}}>
                                    <span class="my-jobs-page-btn-label">
                                    <i class="bi bi-eye"></i>
                                    </span>
                                    View
                                </button>
                            </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* only display job invites for me */}
            {activeTab === 'invite' && displayedCards.filter((job) => job.jobstatus === 'invite').map((job) => (
                <div className="single-job-card mx-auto mt-3">
                    <div className="">
                        <div className='d-flex flex-column ms-sm-3'>
                            <div className="invite-header-container d-flex flex-row">
                                <div>
                                    <span className="my-job-card-title">{job.jobtitle}</span>
                                </div>
                                
                                <div className="isquatation d-flex flex-row ms-auto me-sm-3">
                                    {job.isquotation === 'quotation' && (
                                        <span className="single-job-status" id="job-status">Quotation</span>
                                    )}
                                    <span className="single-job-status ms-2" id="job-status">Short-Term</span>
                                </div>

                            </div>
                            <div className='d-flex'>
                                <span className="my-job-card-customer-name">By {job.customername}</span>
                            </div>
                            <div className='mt-1'>
                                <span className="single-job-description">
                                    {job.jobdescription}
                                </span>
                            </div>
                            <div className='mt-1'>
                                <span className="sinlge-my-job-sub-info"><i className="bi bi-calendar-event"></i>&nbsp;&nbsp; Due Date - {job.duedate}</span>
                            </div>
                            <div className='mt-1'>
                                <span className="my-job-location-info">
                                    <i className="bi bi-geo-alt-fill"></i>&nbsp;&nbsp; {job.joblocation}
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr style={{margin:"0.5rem"}} />
                    <div className="my-job-card-footer d-flex flex-row justify-content-between mx-md-4 mb-sm-2 mt-md-0 mt-4">
                        <button type="button" class="btn view-jobs-page-btn-labeled my-job-card-footer-btn" id="my-job-card-footer-btn-view" style={{color:"white",backgroundColor:"rgb(11, 133, 160)"}}>
                            <span class="view-jobs-page-btn-label" onClick={() => handleAccept(job.jobid, job.isquotation === 'quotation')}>
                                <i class="bi bi-check-circle"></i>
                            </span>
                            Accept
                        </button>

                        <button type="button" class="btn view-jobs-page-btn-labeled my-job-card-footer-btn mt-md-0 mt-1" id="my-job-card-footer-btn-view" style={{color:"white",backgroundColor:"rgb(182, 14, 14)"}}>
                            <span class="view-jobs-page-btn-label" onClick={() => handleReject(job.jobid)}>
                                    <i class="bi bi-x-circle"></i>
                            </span>
                            Reject
                        </button>
                    </div>
                </div>
            ))}

            {/* only display vacancy invites for me */}
            {activeTab === 'invite' && displayedCards.filter((vacancy) => vacancy.vacancystatus === 'invite').map((vacancy) => (
            <div className="single-vacancy-card mx-auto mt-3">
                <div className="">
                    <div className="d-flex flex-column ms-sm-3">
                        <div className="invite-header-container d-flex flex-row">
                            <div>
                                <span className="my-job-card-title">{vacancy.vacancytitle}</span>
                            </div>
                            <div className="isquatation ms-auto me-sm-3">
                                    <span className="single-job-status ms-2" id="job-status">Long-Term</span>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <span className="job-card-date">By {vacancy.customername}</span>
                        </div>
                        <div className='mt-1'>
                            <span className="single-job-description">
                                {vacancy.vacancydescription}
                            </span>
                        </div>
                        <div className='mt-1'>
                            <span className="sinlge-my-job-sub-info"><i className="bi bi-calendar-event"></i>&nbsp;&nbsp; Due Date - {vacancy.duedate}</span>
                        </div>
                        <div className='mt-1'>
                            <span className="my-vacancy-location-info">
                                <i className="bi bi-geo-alt-fill"></i>&nbsp;&nbsp; Location: {vacancy.vacancylocation}
                            </span>
                            <span className="my-job-location-info ms-4">
                                <i class="fa-regular fa-clock"></i>&nbsp;&nbsp; {vacancy.vacancytype}
                            </span>
                        </div>
                    </div>
                </div>
                <hr style={{margin:"0.5rem"}} />
                <div className="my-job-card-footer d-flex flex-row justify-content-between mx-md-4 mb-sm-2 mt-md-0 mt-4">
                    <button type="button" class="btn view-jobs-page-btn-labeled my-job-card-footer-btn" id="my-job-card-footer-btn-view" style={{color:"white",backgroundColor:"rgb(11, 133, 160)"}}>
                        <span class="view-jobs-page-btn-label" onClick="">
                            <i class="bi bi-check-circle"></i>
                        </span>
                        Accept
                    </button>

                    <button type="button" class="btn view-jobs-page-btn-labeled my-job-card-footer-btn mt-md-0 mt-1" id="my-job-card-footer-btn-view" style={{color:"white",backgroundColor:"rgb(182, 14, 14)"}}>
                        <span class="view-jobs-page-btn-label" onClick="">
                                <i class="bi bi-x-circle"></i>
                        </span>
                        Reject
                    </button>
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