import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserImg from "../../../../assets/images/header/user.jpg";
import printer1 from "../../../../assets/images/ServiceProvider/printer1.jpg";
import printer2 from "../../../../assets/images/ServiceProvider/printer2.jpg";
import Button from "react-bootstrap/Button";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function JobDetails() {
  const [viewJobData, setViewJobData] = useState(null);

  const jobcomments = [
    {
      profile: UserImg,
      customername: 'Pranavan',
      commentid: 1,
      description: 'Very satisfied with the service!',
      dateposted: '2021-08-02',
    },
    {
      profile: UserImg,
      customername: 'Kavin',
      commentid: 2,
      description: 'Professional and efficient.',
      dateposted: '2021-08-03',
    },
    {
      profile: UserImg,
      customername: 'Tharun',
      commentid: 3,
      description: 'Highly recommended!',
      dateposted: '2021-08-04',
    },
];

  const { id } = useParams();
  const jobId = parseInt(id, 10);
 
  useEffect(() => {
    axios.get(`http://localhost:8080/auth/viewJobs/${jobId}`).then((res) => {
        console.log(res.data);
        setViewJobData(res.data);
    });
  }   , []);

  if (!viewJobData) return 'No training sessions found!';

  return (
    <>
    <Row className="JobDetails-Col-container">
      <Col className="jobDetails-img-container col-12 col-lg-2 d-flex flex-column align-items-center">
        <div className="jobDetails-avatar-container mb-2">
            <img
            src={viewJobData.profile}
            alt="avatar"
            className="jobDetails-avatar rounded-circle"
            style={{ width: "50px", height: "50px" }}
            />
        </div>
        <div
          className="jobDetails-username mb-1"
          style={{ fontSize:"18px",fontFamily: "'Rubik', sans-serif" }}
        >
          {viewJobData.customername}
        </div>
        <div>
          {/* <Link to="/ServiceProvider/AcceptedJob"> */}
            {/* <Button
              className="jobDetails-apply-btn btn-ServiceProvider-1 mt-2 mb-4"
              style={{ fontFamily: "'Rubik', sans-serif" }}
            >
              Apply
            </Button> */}
          {/* </Link> */}
          </div>

      </Col>
      <Col className="jobDetails-details-container col-12 col-lg-10 d-flex flex-column">
        <div className="jobDetails-status-container mb-2">
          <span className="jobDetails-status" id="job-status" style={{fontSize:"16px",fontWeight:"400",padding:"4px 6px",border:"2px solid rgb(37, 199, 37)",borderRadius:"8px"}}>
            {viewJobData.jobstatus}
          </span>
        </div>
        <div className="jobDetails-title-container mb-2">
          <span className="jobDetails-title" style={{fontWeight:"650"}}>{viewJobData.jobtitle}</span>
        </div>
        <div className="jobDetails-category-container mb-2 d-flex flex-column">
          <span className="jobDetails-category" style={{fontWeight:"650"}}>Category</span>
          <span className="jobDetails-category-value">{viewJobData.servicename}</span>
        </div>
        <div className="jobDetails-location-container mb-2 d-flex flex-column">
          <span className="jobDetails-location" style={{fontWeight:"650"}}>Location</span>
          <span className="jobDetails-location-value">{viewJobData.joblocation}</span>
        </div>
        <div className="jobDetails-dueDate-container mb-2 d-flex flex-row">
          <div>
            <span className="jobDetails-dueDate" style={{fontWeight:"650"}}>Due Date</span>
            <br />
            <span className="jobDetails-dueDate-value">{viewJobData.duedate}</span>
          </div>
          <div className="mx-4">
            <span className="jobDetails-posted" style={{fontWeight:"650"}}>Posted</span>
            <br />
            <span className="jobDetails-posted-value">{viewJobData.posteddate}</span>
          </div>
        </div>
        <div className="jobDetails-description-container d-flex flex-column mb-2">
          <span className="jobDetails-description" style={{fontWeight:"650"}}>Description</span>
          <span className="jobDetails-description-value">
          {viewJobData.jobdescription}
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
    <div className="d-flex flex-column col-12  justify-content-center align-items-center">
            <Col className="commentSection-col-container col-12 col-lg-10 col-md-10 col-sm-11 mt-3">
                <Row className="my-3">
                    <input type="text" className="commentSection-comment-input" placeholder="Write a comment ..." style={{borderRadius:"10px",border:"1px solid black"}}/>
                    <Button className="commentSection-comment-btn btn-ServiceProvider-2 col-md-1 col-3 mt-2 ms-auto me-1" >Post</Button>
                </Row>
                
                <Row>
                    <Col className="d-flex flex-column align-items-start">
                        <span className="commentSection-comment-title" style={{fontWeight:"650"}}>Comments</span>
                    </Col>
                    <Col className="commentSection-comment-count-container d-flex flex-column align-items-end">
                        <span className="commentSection-comment-count" style={{fontWeight:"650"}}>3 comments</span>
                    </Col>
                </Row>

                {jobcomments.map((comment) => (
                <Row>
                    <div className="commentSection-comment-container mt-3 p-3" style={{border:"1px solid black",borderRadius:"15px"}}>
                        <div className="commentSection-comment-header d-flex flex-row">
                            <div className="commentSection-avatar-container">
                                <img
                                src={comment.profile}
                                alt="avatar"
                                className="commentSection-avatar rounded-circle"
                                style={{ width: "40px", height: "40px" }}
                                />
                            </div>
                            <div className="commentSection-username-container ms-3">
                                <span className="commentSection-username" style={{fontWeight:"650"}}>{comment.customername}</span>
                            </div>
                            <div className="commentSection-comment-date-container ms-auto ">
                            <span className="commentSection-comment-date" style={{fontWeight:"650"}}>{comment.dateposted}</span>
                            </div>
                        </div>
                        <div className="commentSection-body mt-2">
                            <span className="commentSection-comment-body-text" style={{fontWeight:"500"}}>{comment.description}</span>
                        </div>
                    </div>
                </Row>
              ))}
            </Col>         
        </div>
    </>
  );
}

export default JobDetails;
