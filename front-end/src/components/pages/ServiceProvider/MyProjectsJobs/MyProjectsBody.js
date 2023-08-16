import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserImg from '../../../../assets/images/header/user.jpg';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import customer1 from '../../../../assets/images/ServiceProvider/customer1.jpg';
import customer2 from '../../../../assets/images/ServiceProvider/customer2.jpg';
import customer3 from '../../../../assets/images/ServiceProvider/customer3.jpg';
import customer4 from '../../../../assets/images/ServiceProvider/customer4.jpg';
import customer5 from '../../../../assets/images/ServiceProvider/customer5.jpg';
import customer6 from '../../../../assets/images/ServiceProvider/customer6.jpg';
import customer7 from '../../../../assets/images/ServiceProvider/customer7.jpg';

function MyProjectsBody(){
    const [MyProjectsJobsData, setMyProjectsJobsData] = useState(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialActiveTab = queryParams.get('tab') || 'defaultTab'; // 'defaultTab' is the fallback

    const MyServices= [
        "Electrical Wiring",
        "Masonry",
        "Sofa Cleaning",
        "Tiles Fitting",
    ];

    const CustomersImages= [
        customer1,
        customer2,
        customer3,
        customer4,
        customer5,
        customer6,
        customer7,
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

    useEffect(() => {
        axios.get('http://localhost:8080/auth/viewJobs').then((res) => {
            console.log(res.data);
            setMyProjectsJobsData(res.data);
        });
    }   , []);

    if (!MyProjectsJobsData) return 'No jobs found!';


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
    };


    // Filter training sessions based on search term and selected date
    const filteredCards = MyProjectsJobsData.filter((card) => {
        return (
        ( !filterCategoryTerm || card.servicename === filterCategoryTerm) &&
           (card.servicename.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.joblocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.jobtitle.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    // Filter training sessions based on the active tab's status
    const filteredAndSortedCards = filteredCards.filter((job) => job.jobstatus === activeTab);

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
            
            {/* only display pending jobs */}
            {activeTab !== 'invite' && displayedCards.filter((job) => job.jobstatus === 'pending').map((job) => (
                <div className="single-job-card mx-auto mt-3">
                    <div className="job-card-header">
                        <div className='job-card-header-inner-container d-flex flex-row flex-wrap'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img
                                            src={CustomersImages[displayedCards.indexOf(job) % CustomersImages.length]}
                                            alt="avatar"
                                            className="rounded-circle"
                                            style={{ width: "42px", height: "42px" }}
                                />
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='ms-sm-3'>
                                    <span className="job-card-title">{job.jobtitle}</span>
                                </div>
                                <div className='ms-sm-3 d-flex'>
                                    <span className="job-card-date">{job.posteddate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-job-card-body">
                        <div className="my-job-card-body-left d-flex flex-column">
                            <div>
                                <span className="sinlge-my-job-sub-info">{job.duedate} | {job.servicename}</span>
                            </div>
                            <div>
                                <span className="my-job-location-info">
                                    <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: {job.joblocation}
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-job-card-footer d-flex flex-row">
                        <Link to={`../PendingJob/${job.jobid}` }
                            className="btn btn-default my-job-card-footer-btn"
                            id="my-job-card-footer-btn-view"
                        >
                            <i className="bi bi-eye h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ position: "relative", bottom: "1.5px" }}>View</span>
                        </Link>
                    </div>
                </div>
            ))}

            {/* only display ongoing jobs */}
            {activeTab !== 'invite' && displayedCards.filter((job) => job.jobstatus === 'ongoing').map((job) => (
            <div className="single-job-card mx-auto mt-3">
                <div className="job-card-header">
                    <div className='job-card-header-inner-container d-flex flex-row flex-wrap'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img
                                        src={CustomersImages[displayedCards.indexOf(job) % CustomersImages.length]}
                                        alt="avatar"
                                        className="rounded-circle"
                                        style={{ width: "42px", height: "42px" }}
                            />
                        </div>
                        <div className='d-flex flex-column'>
                            <div className='ms-sm-3'>
                                <span className="job-card-title">{job.jobtitle}</span>
                            </div>
                            <div className='ms-sm-3 d-flex'>
                                <span className="job-card-date">{job.posteddate}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-job-card-body">
                    <div className="my-job-card-body-left d-flex flex-column">
                        <div>
                            <span className="sinlge-my-job-sub-info">{job.duedate} | {job.servicename}</span>
                        </div>
                        <div>
                            <span className="my-job-location-info">
                                <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: {job.joblocation}
                            </span>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="my-job-card-footer d-flex flex-row">
                    <Link to={`../OngoingJob/${job.jobid}` }
                        className="btn btn-default my-job-card-footer-btn"
                        id="my-job-card-footer-btn-view"
                    >
                        <i className="bi bi-eye h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span style={{ position: "relative", bottom: "1.5px" }}>View</span>
                    </Link>
                </div>
            </div>
        ))}


            {/* only display rejected jobs */}
            {activeTab !== 'invite' && displayedCards.filter((job) => job.jobstatus ==='rejected').map((job) => (
            <div className="single-job-card mx-auto mt-3">
                <div className="job-card-header">
                    <div className='job-card-header-inner-container d-flex flex-row flex-wrap'>
                        <div className='d-flex justify-content-center align-items-center'>
                            <img
                                        src={CustomersImages[displayedCards.indexOf(job) % CustomersImages.length]}
                                        alt="avatar"
                                        className="rounded-circle"
                                        style={{ width: "42px", height: "42px" }}
                            />
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='ms-sm-3'>
                                    <span className="job-card-title">{job.jobtitle}</span>
                                </div>
                                <div className='ms-sm-3 d-flex'>
                                    <span className="job-card-date">{job.posteddate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-job-card-body">
                        <div className="my-job-card-body-left d-flex flex-column">
                            <div>
                                <span className="sinlge-my-job-sub-info">{job.duedate} | {job.servicename}</span>
                            </div>
                            <div>
                                <span className="my-job-location-info">
                                    <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: {job.joblocation}
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-job-card-footer d-flex flex-row">
                        <Link to={`../ViewAJob/${job.jobid}` }
                            className="btn btn-default my-job-card-footer-btn"
                            id="my-job-card-footer-btn-view"
                        >
                            <i className="bi bi-eye h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ position: "relative", bottom: "1.5px" }}>View</span>
                        </Link>
                    </div>
                </div>
            ))}


            {/* only display job invites for me */}
            {activeTab === 'invite' && displayedCards.filter((job) => job.jobstatus === 'invite').map((job) => (
                <div className="single-job-card mx-auto mt-3">
                    <div className="job-card-header">
                        <div className='job-card-header-inner-container d-flex flex-row flex-wrap'>
                            <div className='d-flex justify-content-center align-items-center'>
                                <img
                                            src={CustomersImages[displayedCards.indexOf(job) % CustomersImages.length]}
                                            alt="avatar"
                                            className="rounded-circle my-projects-jobs-rounded-circle"
                                            style={{ width: "42px", height: "42px" }}
                                />
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='ms-sm-3'>
                                    <span className="job-card-title">{job.jobtitle}</span>
                                </div>
                                <div className='ms-sm-3 d-flex'>
                                    <span className="job-card-date">{job.posteddate}</span>
                                </div>
                            </div>
                            {job.isquotation === 'quotation' && (
                            <div className="isquatation ms-3 mt-2">
                                <span className="single-job-status" id="job-status">Quotation</span>
                            </div>
                            )}
                        </div>
                    </div>
                    <div className="my-job-card-body">
                        <div className="my-job-card-body-left d-flex flex-column">
                            <div>
                                <span className="single-job-description">
                                    {job.jobdescription.split(' ').slice(0, 14).join(' ')}
                                    {job.jobdescription.split(' ').length > 14 ? ' ...' : ''}
                                </span>
                            </div>
                            <div>
                                <span className="sinlge-my-job-sub-info">{job.duedate} | {job.servicename}</span>
                            </div>
                            <div>
                                <span className="my-job-location-info">
                                    <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: {job.joblocation}
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="my-job-card-footer d-flex flex-row">
                        <span
                            className="btn btn-default my-job-card-footer-btn"
                            id="my-job-card-footer-btn-view" 
                            onClick={() => handleAccept(job.jobid, job.isquotation === 'quotation')}
                        >
                            <i className="bi bi-check-circle h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span style={{ position: "relative", bottom: "1.5px" }}>Accept</span>
                        </span>
                        <span
                            className="btn btn-default my-job-card-footer-btn"
                            id="my-job-card-footer-btn-view" 
                            onClick={() => handleReject(job.jobid)}
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