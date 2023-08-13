import '../../../../style/ServiceProvider/ViewJobs.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserImg from '../../../../assets/images/header/user.jpg';
import printer1 from "../../../../assets/images/ServiceProvider/printer1.jpg";
import printer2 from "../../../../assets/images/ServiceProvider/printer2.jpg";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import JobDetails from '../ViewAJob/jobDetails';

function JobsBodyPage() {

    const viewJobsData = [
        {
        profile: UserImg,
        id: 1,
        customerName: 'Viyaasan',
        lastSeen: '2 days ago',
        jobTitle: 'Tv Repair',
        dueDate: '2023-08-29',
        serviceName: 'Electrical Wiring',
        jobStatus: 'new',
        description: 'As a printer repair technician, your primary responsibility is to diagnose, troubleshoot, and repair a wide range of printer issues. You will be the go-to expert for resolving technical problems, ensuring that printers operate at peak performance. From laser printers to inkjet models, you will handle various makes and models, addressing both hardware and software-related concerns.',
        location: 'Wellawatte',
        posted: '2023-08-02',
        images:[printer1,printer2,printer1,printer2,printer1,printer2],
        stars:3,
        jobsCount:6,
        jobCommentId:1,
        },
        {
        profile: UserImg,
        id: 2,
        customerName: 'Pranavan',
        lastSeen: '1 day ago',
        jobTitle: 'tiles fitting at House',
        dueDate: '2023-08-28',
        serviceName: 'Tiles Fitting',
        jobStatus: 'new',
        description: 'Fit tiles for full house. Ensure precise alignment and create a visually appealing pattern. Use high-quality adhesive to ensure long-lasting results. Experience with different types of tiles and materials is preferred.',
        location: 'Colombo',
        images:[printer1,printer2,printer1,printer2,printer1,printer2],
        stars:4,
        jobsCount:13,
        jobCommentId:2,
        },
        {
        profile: UserImg,
        id: 3,
        customerName: 'Kavin',
        lastSeen: '3 days ago',
        jobTitle: 'Build Wall',
        dueDate: '2023-08-30',
        serviceName: 'Masonry',
        jobStatus: 'new',
        description: 'Construct a concrete wall around the house. Ensure strong foundation and proper alignment. Use high-quality materials for durability. Experience in bricklaying and mortar mixing is required.',
        location: 'Mount Lavinia',
        images:[printer1,printer2,printer1,printer2,printer1,printer2],
        stars:2,
        jobsCount:1,
        jobCommentId:3,
        },
        {
        profile: UserImg,
        id: 4,
        customerName: 'Tharun',
        lastSeen: '1 week ago',
        jobTitle: 'House Cleaning',
        dueDate: '2023-08-25',
        serviceName: 'Cleaning',
        jobStatus: 'new',
        description: 'Perform thorough cleaning of the entire house. Focus on areas such as kitchen, bathrooms, living spaces, and bedrooms. Use eco-friendly cleaning products for a safe and healthy environment. Pay attention to details and ensure a spotless finish',
        location: 'Dehiwala',
        images:[printer1,printer2,printer1,printer2,printer1,printer2],
        stars:3,
        jobsCount:7,
        jobCommentId:4,
        },
        {
        profile: UserImg,
        id: 5,
        customerName: 'Umai vanan',
        lastSeen: '4 days ago',
        jobTitle: 'Build House',
        dueDate: '2023-08-27',
        serviceName: 'Masonry',
        jobStatus: 'completed',
        description: 'Undertake the construction of a multi-room house within a strict timeline. Coordinate with other professionals, including architects and engineers, to ensure smooth execution. Monitor construction progress and address any issues that may arise',
        location: 'Nugegoda',
        images:[printer1,printer2,printer1,printer2,printer1,printer2],
        stars:4,
        jobsCount:19,
        jobCommentId:5,
        },
        {
        profile: UserImg,
        id: 6,
        customerName: 'Vithakan',
        lastSeen: '2 weeks ago',
        jobTitle: 'Ground Cleaning',
        dueDate: '2023-08-24',
        serviceName: 'Cleaning',
        jobStatus: 'completed',
        description: 'Perform deep cleaning of a cricket ground. Remove debris, litter, and dirt from the field. Ensure the ground is safe and ready for matches. Use appropriate cleaning equipment and techniques to achieve desired results',
        location: 'Rajagiriya',
        images:[printer1,printer2,printer1,printer2,printer1,printer2],
        stars:5,
        jobsCount:21,
        jobCommentId:6,
        },
        {
        profile: UserImg,
        id: 7,
        customerName: 'Vathusan',
        lastSeen: '5 days ago',
        jobTitle: 'Fix Fridge',
        dueDate: '2023-08-26',
        serviceName: 'Electrical Wiring',
        jobStatus: 'completed',
        description: 'Diagnose and repair a broken refrigerator. Identify faulty components and replace them with genuine parts. Ensure the fridge is functioning optimally and maintains the desired temperature. Perform thorough testing before completing the job',
        location: 'Battaramulla',
        images:[printer1,printer2,printer1,printer2,printer1,printer2],
        stars:3,
        jobsCount:10,
        jobCommentId:7,
        },
    ];

    const comment = [
        {
          profile: UserImg,
          customerName: 'Viyaasan',
          id: 1,
          description: 'A great job!',
          date: '2021-08-01',
        },
        {
          profile: UserImg,
          customerName: 'Pranavan',
          id: 2,
          description: 'Very satisfied with the service!',
          date: '2021-08-02',
        },
        {
          profile: UserImg,
          customerName: 'Kavin',
          id: 3,
          description: 'Professional and efficient.',
          date: '2021-08-03',
        },
        {
          profile: UserImg,
          customerName: 'Tharun',
          id: 4,
          description: 'Highly recommended!',
          date: '2021-08-04',
        },
        {
          profile: UserImg,
          customerName: 'Umai vanan',
          id: 5,
          description: 'Excellent work!',
          date: '2021-08-05',
        },
    ];

    const MyServices= [
        "Electrical Wiring",
        "Masonry",
        "Cleaning",
        "Tiles Fitting",
    ];

    //to store the selected job
    const [selectedJob, setSelectedJob] = useState(null);    

    // Function to handle viewing job details
    const handleSelectAJob = (job) => {
        setSelectedJob(job);
    };

    // Number of cards to display per page
    const cardsPerPage = 5;

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
    const filteredCards = viewJobsData.filter((card) => {
        return (
        (!filterCategoryTerm || card.serviceName === filterCategoryTerm) &&
            (card.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            card.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    // Calculate the start and end indices of the displayed training sessions for the current page
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    // Create a subset of training sessions to be displayed on the current page
    const displayedCards = filteredCards.slice(startIndex, endIndex);


    
    return (
        <div>

            {/* Page Title*/}
            <span className="ms-4 align-self-start" style={{fontSize:"28px",fontWeight:"600"}}>View Jobs</span>

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

            {/* Job Cards */}

            {displayedCards.map((job) => (      
                
                
                
                    <div className="single-job-card mx-auto mt-3"> 


                        <div className="job-card-header">
                            <div className='job-card-header-inner-container d-flex flex-row flex-wrap'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    {/* <img src={job.profile} alt="avatar" className="job-card-avatar" /> */}
                                    <img
                                            src={job.profile}
                                            alt="avatar"
                                            className="rounded-circle view-jobs-rounded-circle"
                                            style={{ width: "42px", height: "42px" }}
                                    />
                                </div>
                                <div className='d-flex flex-column'>
                                    <div className='ms-sm-3'>
                                        <span className="job-card-title">{job.customerName}</span>
                                    </div>
                                    <div className='ms-sm-3 d-flex'>
                                        <span className="job-card-date">{job.lastSeen}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="job-card-body">
                            <div className="job-card-body-left d-flex flex-column">
                                <div>
                                    <span className="single-job-status" id="job-status">{job.jobStatus}</span>
                                </div>
                                <div>
                                    <span className="single-job-title">{job.jobTitle}</span>
                                </div>
                                <div>
                                    <span className="sinlge-job-sub-info">{job.dueDate} | {job.serviceName}</span>
                                </div>
                                <div>
                                    <span className="single-job-description">
                                        {job.description.split(' ').slice(0, 14).join(' ')}
                                        {job.description.split(' ').length > 14 ? ' ...' : ''}
                                    </span>
                                </div>
                                <div>
                                    <span className="job-location-info">
                                        <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: {job.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="view-jobs-card-footer  mt-sm-0 mt-4">
                            
                            <Link to={`../ViewAJob/${job.id}` }
                                className="btn btn-default job-card-footer-btn"
                                id="job-card-footer-btn-view" 
                                // onClick={handleSelectAJob}
                            >
                                <i className="bi bi-eye h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span style={{ position: "relative", bottom: "1.5px" }}>View</span>
                            </Link>                                
                            

                            <span
                                className="btn btn-default job-card-footer-btn"
                                id="job-card-footer-btn-comment"
                            >
                                <i className="bi bi-chat-square-dots h5"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <span style={{ position: "relative", bottom: "1.5px" }}>
                                Comment
                                </span>
                            </span>
                            <span
                                className="btn btn-default job-card-footer-btn"
                                id="job-card-footer-btn-share"
                            >
                                <i className="bi bi-share h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span style={{ position: "relative", bottom: "1.5px" }}>Share</span>
                            </span>
                        </div>
                    </div>
            ))}

            {/* {selectedJob && (
                <JobDetails  
                    profile={selectedJob.profile}
                    id={selectedJob.id} 
                    customerName={selectedJob.customerName}
                    lastSeen={selectedJob.lastSeen}
                    jobTitle={selectedJob.jobTitle}
                    dueDate={selectedJob.dueDate}
                    serviceName={selectedJob.serviceName}
                    jobStatus={selectedJob.jobStatus}
                    description={selectedJob.description}
                    location={selectedJob.location}
                    images={selectedJob.images}
                    jobsCount={selectedJob.jobsCount}
                    jobsCommentId={selectedJob.jobsCommentId}
                />
            )} */}


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

export default JobsBodyPage;