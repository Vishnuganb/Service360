import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserImg from "../../../../assets/images/header/user.jpg";
import printer1 from "../../../../assets/images/ServiceProvider/printer1.jpg";
import printer2 from "../../../../assets/images/ServiceProvider/printer2.jpg";
import customer1 from "../../../../assets/images/ServiceProvider/customer1.jpg";
import tiles1 from "../../../../assets/images/ServiceProvider/tiles1.jpg";
import tiles2 from "../../../../assets/images/ServiceProvider/tiles2.jpg";
import tiles3 from "../../../../assets/images/ServiceProvider/tiles3.jpg";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';


function PendingJobDetails() {
    const [viewJobData, setViewJobData] = useState(null);

    const jobimages = [tiles1, tiles2, tiles3]

    const { id } = useParams();
    const jobId = parseInt(id, 10);

    //   const viewJobsData = [
    //     {
    //     profile: UserImg,
    //     id: 1,
    //     customerName: 'Viyaasan',
    //     lastSeen: '2 days ago',
    //     jobTitle: 'Tv Repair',
    //     dueDate: '2023-08-29',
    //     serviceName: 'Electrical Wiring',
    //     jobStatus: 'new',
    //     description: 'As a printer repair technician, your primary responsibility is to diagnose, troubleshoot, and repair a wide range of printer issues. You will be the go-to expert for resolving technical problems, ensuring that printers operate at peak performance. From laser printers to inkjet models, you will handle various makes and models, addressing both hardware and software-related concerns.',
    //     location: 'Wellawatte',
    //     posted: '2023-08-02',
    //     images:[printer1,printer2,printer1,printer2,printer1,printer2],
    //     jobsCount:6,
    //     jobCommentId:1,
    //     },
    //     {
    //     profile: UserImg,
    //     id: 2,
    //     customerName: 'Pranavan',
    //     lastSeen: '1 day ago',
    //     jobTitle: 'tiles fitting at House',
    //     dueDate: '2023-08-28',
    //     serviceName: 'Tiles Fitting',
    //     jobStatus: 'new',
    //     description: 'Fit tiles for full house. Ensure precise alignment and create a visually appealing pattern. Use high-quality adhesive to ensure long-lasting results. Experience with different types of tiles and materials is preferred.',
    //     location: 'Colombo',
    //     images:[printer1,printer2,printer1,printer2,printer1,printer2],
    //     jobsCount:13,
    //     jobCommentId:2,
    //     },
    //     {
    //     profile: UserImg,
    //     id: 3,
    //     customerName: 'Kavin',
    //     lastSeen: '3 days ago',
    //     jobTitle: 'Build Wall',
    //     dueDate: '2023-08-30',
    //     serviceName: 'Masonry',
    //     jobStatus: 'new',
    //     description: 'Construct a concrete wall around the house. Ensure strong foundation and proper alignment. Use high-quality materials for durability. Experience in bricklaying and mortar mixing is required.',
    //     location: 'Mount Lavinia',
    //     images:[printer1,printer2,printer1,printer2,printer1,printer2],
    //     jobsCount:1,
    //     jobCommentId:3,
    //     },
    //     {
    //     profile: UserImg,
    //     id: 4,
    //     customerName: 'Tharun',
    //     lastSeen: '1 week ago',
    //     jobTitle: 'House Cleaning',
    //     dueDate: '2023-08-25',
    //     serviceName: 'Cleaning',
    //     jobStatus: 'new',
    //     description: 'Perform thorough cleaning of the entire house. Focus on areas such as kitchen, bathrooms, living spaces, and bedrooms. Use eco-friendly cleaning products for a safe and healthy environment. Pay attention to details and ensure a spotless finish',
    //     location: 'Dehiwala',
    //     images:[printer1,printer2,printer1,printer2,printer1,printer2],
    //     jobsCount:7,
    //     jobCommentId:4,
    //     },
    //     {
    //     profile: UserImg,
    //     id: 5,
    //     customerName: 'Umai vanan',
    //     lastSeen: '4 days ago',
    //     jobTitle: 'Build House',
    //     dueDate: '2023-08-27',
    //     serviceName: 'Masonry',
    //     jobStatus: 'completed',
    //     description: 'Undertake the construction of a multi-room house within a strict timeline. Coordinate with other professionals, including architects and engineers, to ensure smooth execution. Monitor construction progress and address any issues that may arise',
    //     location: 'Nugegoda',
    //     images:[printer1,printer2,printer1,printer2,printer1,printer2],
    //     jobsCount:19,
    //     jobCommentId:5,
    //     },
    //     {
    //     profile: UserImg,
    //     id: 6,
    //     customerName: 'Vithakan',
    //     lastSeen: '2 weeks ago',
    //     jobTitle: 'Ground Cleaning',
    //     dueDate: '2023-08-24',
    //     serviceName: 'Cleaning',
    //     jobStatus: 'completed',
    //     description: 'Perform deep cleaning of a cricket ground. Remove debris, litter, and dirt from the field. Ensure the ground is safe and ready for matches. Use appropriate cleaning equipment and techniques to achieve desired results',
    //     location: 'Rajagiriya',
    //     images:[printer1,printer2,printer1,printer2,printer1,printer2],
    //     jobsCount:21,
    //     jobCommentId:6,
    //     },
    //     {
    //     profile: UserImg,
    //     id: 7,
    //     customerName: 'Vathusan',
    //     lastSeen: '5 days ago',
    //     jobTitle: 'Fix Fridge',
    //     dueDate: '2023-08-26',
    //     serviceName: 'Electrical Wiring',
    //     jobStatus: 'completed',
    //     description: 'Diagnose and repair a broken refrigerator. Identify faulty components and replace them with genuine parts. Ensure the fridge is functioning optimally and maintains the desired temperature. Perform thorough testing before completing the job',
    //     location: 'Battaramulla',
    //     images:[printer1,printer2,printer1,printer2,printer1,printer2],
    //     jobsCount:10,
    //     jobCommentId:7,
    //     },
    // ];

    useEffect(() => {
        axios.get(`http://localhost:8080/auth/viewJobs/${jobId}`).then((res) => {
            console.log(res.data);
            setViewJobData(res.data);
        });
    }, []);

    if (!viewJobData) return 'No jobs found!';

    return (
        <div>
            <Row className="AcceptedJobDetails-Col-container mb-4">
                <Col className="AcceptedJobDetails-img-container col-12 col-lg-2 d-flex flex-column align-items-center">
                    <div className="AcceptedJobDetails-avatar-container mb-2">
                        <img
                            src={customer1}
                            alt="avatar"
                            className="AcceptedJobDetails-avatar rounded-circle"
                            style={{ width: "50px", height: "50px" }}
                        />
                    </div>
                    <div
                        className="AcceptedJobDetails-username mb-1"
                        style={{ fontSize: "18px", fontFamily: "'Rubik', sans-serif" }}
                    >
                        {viewJobData.customername}
                    </div>
                    <div className="d-flex flex-row">
                        <div className="me-3">
                            <i class="bi bi-telephone-fill"></i>
                        </div>
                        <div>
                            <i class="bi bi-chat-fill"></i>
                        </div>
                    </div>
                </Col>

                <Col className="AcceptedJobDetails-details-container mt-lg-0 mt-2 col-12 col-lg-10 d-flex flex-column">
                    <div className="AcceptedJobDetails-title-container mb-2">
                        <span className="AcceptedJobDetails-title" style={{ fontWeight: "650" }}>{viewJobData.jobtitle}</span>
                    </div>
                    <div className="AcceptedJobDetails-category-container mb-2 d-flex flex-column">
                        <span className="AcceptedJobDetails-category" style={{ fontWeight: "650" }}>Category</span>
                        <span className="AcceptedJobDetails-category-value">{viewJobData.servicename}</span>
                    </div>
                    <div className="AcceptedJobDetails-location-container mb-2 d-flex flex-column">
                        <span className="AcceptedJobDetails-location" style={{ fontWeight: "650" }}>Location</span>
                        <span className="AcceptedJobDetails-location-value">{viewJobData.joblocation}</span>
                    </div>
                    <div className="AcceptedJobDetails-dueDate-container mb-2 d-flex flex-row">
                        <div>
                            <span className="AcceptedJobDetails-dueDate" style={{ fontWeight: "650" }}>Due Date</span>
                            <br />
                            <span className="AcceptedJobDetails-dueDate-value">{viewJobData.duedate}</span>
                        </div>
                        <div className="mx-4">
                            <span className="AcceptedJobDetails-posted" style={{ fontWeight: "650" }}>Posted</span>
                            <br />
                            <span className="AcceptedJobDetails-posted-value">{viewJobData.posteddate}</span>
                        </div>
                    </div>
                    <div className="AcceptedJobDetails-description-container d-flex flex-column mb-2">
                        <span className="AcceptedJobDetails-description" style={{ fontWeight: "650" }}>Description</span>
                        <span className="AcceptedJobDetails-description-value">
                            {viewJobData.jobdescription}
                        </span>
                    </div>
                    <div className="AcceptedJobDetails-images-container">
                        <span className="AcceptedJobDetails-images" style={{ fontWeight: "650" }}>Images</span>

                        {/* LOOP WILL COME HERE */}

                        <div className="AcceptedJobDetails-images-container-box row mt-2">
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
            <span>Quotation</span>
            <div className="mt-2 d-flex flex-column">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Control type="file" placeholder="Password" />
                    </Form.Group>
                    <Form.Text className="text-muted d-block mb-3">
                        Visit the <a href="https://vyaparapp.in/tools/free-online-quotation-maker#generate-online">quotation website</a> to create a quotation.
                    </Form.Text>
                    <Link to="../CreateQuotation">
                        <Button className="btn-ServiceProvider-2 AcceptedJobDetails-start" variant="primary" type="submit">
                            Create Quotation
                        </Button>
                    </Link>
                </Form>
            </div>
        </div>
    );
}

export default PendingJobDetails;