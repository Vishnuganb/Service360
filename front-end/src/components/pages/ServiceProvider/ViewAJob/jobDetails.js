import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserImg from "../../../../assets/images/header/user.jpg";
import printer1 from "../../../../assets/images/ServiceProvider/printer1.jpg";
import printer2 from "../../../../assets/images/ServiceProvider/printer2.jpg";
import Button from "react-bootstrap/Button";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

// {profile,id,customerName,lastSeen,jobTitle,dueDate,serviceName,jobStatus,description,location,posted,images,jobsCount,jobCommentId}
function JobDetails() {

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

  const params = useParams();
  const Id=params.id-1;
  const singleJobData = viewJobsData[Id];
  if (!singleJobData) {
    return <div>Job not found.</div>;
  }

  return (
    <Row className="JobDetails-Col-container">
      <Col className="jobDetails-img-container col-12 col-lg-2 d-flex flex-column align-items-center">
        <div className="jobDetails-avatar-container mb-2">
            <img
            src={singleJobData.profile}
            alt="avatar"
            className="jobDetails-avatar rounded-circle"
            style={{ width: "50px", height: "50px" }}
            />
        </div>
        <div
          className="jobDetails-username mb-1"
          style={{ fontSize:"18px",fontFamily: "'Rubik', sans-serif" }}
        >
          {singleJobData.customerName}
        </div>
        <div>
          {/* <Link to="/ServiceProvider/AcceptedJob"> */}
            <Button
              className="jobDetails-apply-btn btn-ServiceProvider-1 mt-2 mb-4"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              Apply
            </Button>
          {/* </Link> */}
          </div>

      </Col>
      <Col className="jobDetails-details-container col-12 col-lg-10 d-flex flex-column">
        <div className="jobDetails-status-container mb-2">
          <span className="jobDetails-status" id="job-status" style={{fontSize:"16px",fontWeight:"400",padding:"4px 6px",border:"2px solid rgb(37, 199, 37)",borderRadius:"8px"}}>
            {singleJobData.jobStatus}
          </span>
        </div>
        <div className="jobDetails-title-container mb-2">
          <span className="jobDetails-title" style={{fontWeight:"650"}}>{singleJobData.jobTitle}</span>
        </div>
        <div className="jobDetails-category-container mb-2 d-flex flex-column">
          <span className="jobDetails-category" style={{fontWeight:"650"}}>Category</span>
          <span className="jobDetails-category-value">{singleJobData.serviceName}</span>
        </div>
        <div className="jobDetails-location-container mb-2 d-flex flex-column">
          <span className="jobDetails-location" style={{fontWeight:"650"}}>Location</span>
          <span className="jobDetails-location-value">{singleJobData.location}</span>
        </div>
        <div className="jobDetails-dueDate-container mb-2 d-flex flex-row">
          <div>
            <span className="jobDetails-dueDate" style={{fontWeight:"650"}}>Due Date</span>
            <br />
            <span className="jobDetails-dueDate-value">{singleJobData.dueDate}</span>
          </div>
          <div className="mx-4">
            <span className="jobDetails-posted" style={{fontWeight:"650"}}>Posted</span>
            <br />
            <span className="jobDetails-posted-value">{singleJobData.posted}</span>
          </div>
        </div>
        <div className="jobDetails-description-container d-flex flex-column mb-2">
          <span className="jobDetails-description" style={{fontWeight:"650"}}>Description</span>
          <span className="jobDetails-description-value">
          {singleJobData.description}
          </span>
        </div>
        <div className="jobDetails-images-container">
          <span className="jobDetails-images" style={{fontWeight:"650"}}>Images</span>
          
          
          <div className="jobDetails-images-container-box row mt-2">
           
            
          {/* {viewJobData.images.map((image, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3">
              <img
                src={image}
                alt={`job detail image ${index}`}
                className="jobDetails-images-value-img"
              />
            </div>
          ))} */}


          </div>
        </div>
      </Col>
    </Row>
  );
}

export default JobDetails;
