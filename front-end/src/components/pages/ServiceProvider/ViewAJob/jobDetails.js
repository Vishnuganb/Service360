import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserImg from "../../../../assets/images/header/user.jpg";
import customerimage from "../../../../assets/images/ServiceProvider/customer1.jpg";
import printer1 from "../../../../assets/images/ServiceProvider/printer1.jpg";
import printer2 from "../../../../assets/images/ServiceProvider/printer2.jpg";
import tiles1 from "../../../../assets/images/ServiceProvider/tiles1.jpg";
import tiles2 from "../../../../assets/images/ServiceProvider/tiles2.jpg";
import tiles3 from "../../../../assets/images/ServiceProvider/tiles3.jpg";
import Button from "react-bootstrap/Button";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import axios from "axios";

function JobDetails() {
  const [viewJobData, setViewJobData] = useState(null);
  const [singleJobReplies, setSingleJobReplies]=useState(null);

  const [addReplyData, setAddReplyData] = useState({
    replymessage: "",
  });

  const jobimages =[tiles1, tiles2, tiles3]

  const { id } = useParams();
  const jobId = parseInt(id, 10);
 
  useEffect(() => {
    axios.get(`http://localhost:8080/auth/viewNewJobs/${jobId}`).then((res) => {
        console.log(res.data);
        setViewJobData(res.data);
    });

    axios.get(`http://localhost:8080/auth/viewJobReplies/${jobId}`).then((res) => {
      console.log(res.data);
      setSingleJobReplies(res.data);
    });
  }, []);

  if (!viewJobData) return 'No training sessions found!';

  const handleAddReply = () => {
    axios
        .post(`http://localhost:8080/auth/AddJobReply/${jobId}`, addReplyData)
        .then((response) => {
            console.log('Reply Added successfully:', response.data);
            setAddReplyData({ replymessage: "" });      // Clear the input field by resetting addReplyData

            // Update singleJobReplies with the newly added comment
            setSingleJobReplies([...singleJobReplies, response.data]);
        })
        .catch((error) => {
            console.error('Error Adding Reply:', error);
        });
};

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddReplyData({
        ...addReplyData,
        [name]: value,
    });
};

  return (
    <>
    <Row className="JobDetails-Col-container">
      <Col className="jobDetails-img-container col-12 col-lg-2 d-flex flex-column align-items-center">
        <div className="jobDetails-avatar-container mb-2">
            <img
            src={customerimage}
            alt="avatar"
            className="jobDetails-avatar rounded-circle"
            style={{ width: "50px", height: "50px" }}
            />
        </div>
        <div
          className="jobDetails-username mb-1"
          style={{ fontSize:"18px",fontFamily: "'Rubik', sans-serif" }}
        >
          {viewJobData.customer.firstname}
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
            new
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
          {jobimages.map((image) => (
            <div className="col-6 col-md-4 col-lg-3">
              <img
                src={image}
                alt={'job detail image'}
                className="jobDetails-images-value-img"
              />
            </div>
          ))}
          </div>
        </div>
      </Col>
    </Row>
    <div className="d-flex flex-column col-12  justify-content-center align-items-center">
            <Col className="commentSection-col-container col-12 col-lg-10 col-md-10 col-sm-11 mt-3">
                <Row className="my-3 me-lg-1 ms-lg-1">
                  <Form className="mt-4" onSubmit={(e) => {
                      e.preventDefault(); 
                      handleAddReply(); 
                  }}>
                      <Form.Group className="mb-3" controlId="formBasicTitle">
                          <Form.Control 
                              type="text" 
                              name="replymessage" 
                              className="commentSection-comment-input" 
                              placeholder="Write a comment ..." 
                              value={addReplyData.replymessage}
                              onChange={handleInputChange}
                              style={{borderRadius:"10px",border:"1px solid black"}}
                              required
                          />
                      </Form.Group>
                      <div className="d-flex">
                          <Button className="commentSection-comment-btn btn-ServiceProvider-2 ms-auto" type="submit">Post</Button>
                      </div>
                  </Form>
                </Row>
                
                <Row>
                    <Col className="d-flex flex-column align-items-start">
                        <span className="commentSection-comment-title" style={{fontWeight:"650"}}>Comments</span>
                    </Col>
                    <Col className="commentSection-comment-count-container d-flex flex-column align-items-end">
                        <span className="commentSection-comment-count" style={{fontWeight:"650"}}>{singleJobReplies !== null ? singleJobReplies.length + ' comments' : 'Loading...'}</span>
                    </Col>
                </Row>

                {singleJobReplies !== null ? (
                    singleJobReplies.map((comment) => (
                    <Row key={comment.replyid}>
                        <div className="commentSection-comment-container mt-3 p-3" style={{border:"1px solid black",borderRadius:"15px"}}>
                            <div className="commentSection-comment-header d-flex flex-row">
                                <div className="commentSection-avatar-container">
                                    <img
                                    src={comment.serviceproviders.profile}
                                    alt=""
                                    className="commentSection-avatar rounded-circle"
                                    style={{ width: "40px", height: "40px" }}
                                    />
                                </div>
                                <div className="commentSection-username-container ms-3">
                                    <span className="commentSection-username" style={{fontWeight:"650"}}>{comment.serviceproviders.firstname}</span>
                                </div>
                                <div className="commentSection-comment-date-container ms-auto ">
                                <span className="commentSection-comment-date" style={{fontWeight:"650"}}>{comment.replydate}</span>
                                </div>
                            </div>
                            <div className="commentSection-body mt-2">
                                <span className="commentSection-comment-body-text" style={{fontWeight:"500"}}>{comment.replymessage}</span>
                            </div>
                        </div>
                    </Row>
                  ))
                ):(
                  <div>0 comments</div>
                )}
            </Col>         
        </div>
    </>
  );
}

export default JobDetails;