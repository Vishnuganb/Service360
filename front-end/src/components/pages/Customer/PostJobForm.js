import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import '../../../style/Customer/PostVacancyForm.css';
import BgImage from '../../../assets/images/header/Background.png';
import { BsCloudUpload } from 'react-icons/bs';
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import places from '../../loginForm/cities-by-district.json'; //location import

const response = sessionStorage.getItem('authenticatedUser');
const userData = JSON.parse(response);


function PostJobForm() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };
    const [selectedDuration, setSelectedDuration] = useState('');

    const handleDurationChange = (event) => {
        setSelectedDuration(event.target.value);

        // Capture the selected location and update jobData
        if (event.target.name === "joblocation") {
            inputJobdata(event.target.name, event.target.value);
        }
        if (event.target.name === "servicename") {
            inputJobdata(event.target.name, event.target.value);
        }
    };

    const [isSubmitted, setIsSubmitted] = useState(false); // State to manage the alert

    const apiBaseUrl = "http://localhost:8080";

    const axiosInstance = axios.create({
        baseURL: apiBaseUrl,
        timeout: 10000,
    });

    const inputJobdata = (name, value) => {
        setJobData((prev) => ({ ...prev, [name]: value }));
    };

    const [jobData, setJobData] = useState({
        jobtitle: "",
        duedate: "",
        posteddate: new Date().toISOString().split("T")[0],
        servicename: "",
        jobstatus: "",
        jobdescription: "",
        joblocation: "",
        vacancytype: "",
        qualifications: "",
        responsibilities: "",
        isquotation: "",


    });


    const handleAddJob = async (e) => {
        e.preventDefault();

        try {
            let response;
            if (selectedDuration === 'Long_term') {
                response = await axiosInstance.post("/auth/createvacancies", {
                    vacancytitle: jobData.jobtitle,
                    vacancydescription: jobData.jobdescription,
                    posteddate: jobData.posteddate,
                    duedate: jobData.posteddate,
                    vacancylocation: jobData.joblocation,
                    servicename: jobData.servicename,
                    vacancytype: jobData.vacancytype,
                    qualifications: jobData.qualifications,
                    responsibilities: jobData.responsibilities,
                    customer: userData.userid

                    // Add other properties specific to vacancies here
                });
            } else {
                response = await axiosInstance.post("/auth/createjobs", {
                    jobtitle: jobData.jobtitle,
                    posteddate: jobData.posteddate,
                    duedate: jobData.duedate,
                    joblocation: jobData.joblocation,
                    servicename: jobData.servicename,
                    jobdescription: jobData.jobdescription,
                    customer: userData.userid,
                    isquotation: jobData.isquotation // Include isquotation when Short Term is selected

                });
            }
            if (response.status === 200) {
                console.log(jobData);
                window.location.reload();
                setIsSubmitted(true);
                console.log("okkkk");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [servicesData, setServicesData] = useState({});

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/auth/services");
                const data = response.data;
                setServicesData(data);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const categories = Object.keys(servicesData);

    return (
        <div className='card2' >
            <div className="back-button" onClick={handleBackClick} style={{ marginLeft: '10px' }}>
                <div className="back-icon">
                    <i className="bi bi-arrow-left-circle-fill fs-3"></i>
                </div>
                <div className="back-text">
                    <p className="m-0 p-0">Back</p>
                </div>
            </div>
            <div className="VacancyForm-container" style={{ backgroundImage: `url(${BgImage})` }}>

                <h3>Job Creation Form</h3>
                <br></br>
                <form className="vacancy-form">
                    {/* Display the success alert when isSubmitted is true */}
                    {isSubmitted && (
                        <Alert variant="success">
                            Form submitted successfully!
                        </Alert>
                    )}
                    <div className="vacancy-form-group">
                        <Row><Col className="col-4">
                            <label for="title">Title <span style={{ color: "red" }}>&nbsp;*</span> </label></Col>
                            <Col className="col-6"><input type="text" name="jobtitle" value={jobData.jobtitle}
                                onChange={(e) => {
                                    inputJobdata(e.target.name, e.target.value);
                                }} className="form-control" id="title" placeholder="Enter the title" /></Col>
                        </Row>
                    </div>
                    <div className="vacancy-form-group">
                        <Row>
                            <Col className='col 4'>
                                <label for="description">Description <span style={{ color: "red" }}></span> </label>
                            </Col>

                            <Col className='col 6' style={{marginRight: '290px', width: '255px'}}>
                                <textarea
                                    type="text"
                                    name="jobdescription"
                                    value={jobData.jobdescription}
                                    onChange={(e) => {
                                        inputJobdata(e.target.name, e.target.value);
                                    }}
                                    className="form-control"
                                    id="description"
                                    placeholder="Enter your job details here" />
                            </Col>
                        </Row>
                    </div>

                    
                    <div className="vacancy-form-group">
                        <Row><Col className="col-4">
                            <label for="duedate">Due Date <span style={{ color: "red" }}>&nbsp;*</span> </label></Col>
                            <Col className="col-6">  <input type="date" name="duedate" value={jobData.duedate}
                                onChange={(e) => {
                                    inputJobdata(e.target.name, e.target.value);
                                }} className="form-control" id="duedate" />
                            </Col></Row>

                    </div>
                    <div className="vacancy-form-group">
                        <Row>
                            <Col className="col-4">
                                <label htmlFor="Service_name"> Location <span style={{ color: "red" }}>*</span></label>
                            </Col>
                            <Col className="col-6">
                                <Form.Group className="mb-3">
                                    <Form.Select
                                        id="locationSelect"
                                        className="select-small-text"
                                        onChange={handleLocationChange}
                                        value={selectedLocation}
                                    >
                                        <option value="" disabled hidden>Select Location</option>
                                        {Object.keys(places).map((location, index) => (
                                            <optgroup label={location} key={index}>
                                                {places[location].cities.map((city, subIndex) => (
                                                    <option key={`${index}-${subIndex}`} value={city}>
                                                        {city}
                                                    </option>
                                                ))}
                                            </optgroup>
                                        ))}
                                    </Form.Select>
                                </Form.Group>

                            </Col>
                        </Row>
                    </div>

                    <div className="vacancy-form-group">
                        <Row>
                            <Col className="col-4">
                                <label htmlFor="Service_name"> Service <span style={{ color: "red" }}>*</span></label>
                            </Col>
                            <Col className="col-6">
                                <Form.Group className="mb-3">
                                    <Form.Select
                                        id="disabledSelect"
                                        className="select-small-text"
                                        name="servicename" // Add the name attribute here
                                        value={jobData.servicename}
                                        onChange={handleDurationChange}>
                                        {/* <option value="" disabled>Select a service</option>
                                        <option value="Carpentry">Carpentry</option>
                                        <option value="Painting">Painting</option>
                                        <option value="AC_Repair">AC Repair</option>
                                        <option value="Electrical_Wiring">Electrical Wiring</option>
                                        <option value="Plumbing">Plumbing</option>
                                        <option value="Masonry">Masonry</option>
                                        <option value="Tiles_Fitting">Tiles Fitting</option>
                                        <option value="Iron_Works">Iron Works</option>
                                        <option value="Glass_Aluminum">Glass Aluminum</option>
                                        <option value="CCTV_Repair">CCTV Repair</option>
                                        <option value="Fire_Alarm">Fire Alarm</option>
                                        <option value="Video_Surveillance">Video Surveillance</option>
                                        <option value="Sofa_cleaning">Sofa cleaning</option>
                                        <option value="Carpet_cleaning">Carpet cleaning</option>
                                        <option value="none">None</option> */}
                                        <option value="" disabled hidden>
                                            Select Service
                                        </option>
                                        {categories.map((category, categoryIndex) => (
                                            <optgroup >
                                                {servicesData[category].map((service, serviceIndex) => (
                                                    <option key={`${categoryIndex}-${serviceIndex}`} value={service} className='servicedropdown'>
                                                        {service}
                                                    </option>
                                                ))}
                                            </optgroup>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>

                    <div className="vacancy-form-group">
                        <Row>
                            <Col className="col-4">
                                <label htmlFor="Duration"> Duration <span style={{ color: "red" }}>*</span></label>
                            </Col>
                            <Col className="col-6">
                                <Form.Group className="mb-3">
                                    <Form.Select
                                        id="durationSelect"
                                        className="select-small-text"
                                        defaultValue=""
                                        onChange={handleDurationChange}
                                    >
                                        <option value="" disabled>Select a duration period</option>
                                        <option value="Long_term">Long term</option>
                                        <option value="Short_term">Short term</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>

                    {selectedDuration === 'Long_term' && (
                        <div className="vacancy-form-group">
                            <div className="vacancy-form-group">
                                <Row>
                                    <Col className="col-4">
                                        <label htmlFor="category">Employment Type <span style={{ color: "red" }}>*</span></label>
                                    </Col>
                                    <Col className="col-6">
                                        <Form.Group className="mb-3">
                                            <Form.Select
                                                id="category"
                                                className="select-small-text"
                                                name="vacancytype" // Change this to "vacancytype" to match your data structure
                                                value={jobData.vacancytype}
                                                onChange={(e) => {
                                                    inputJobdata(e.target.name, e.target.value);
                                                }}
                                            >
                                                <option value="Full_Time">Full Time</option>
                                                <option value="Hours_based">Hours based</option>
                                                <option value="none">None</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </div>


                            <div className="vacancy-form-group">
                                <Row>
                                    <Col className="col-4">
                                        <label htmlFor="title">Skill & Qualification Expect <span style={{ color: "red" }}>*</span></label>
                                    </Col>
                                    <Col className="col-6">
                                        <input type="text" name="qualifications" value={jobData.qualifications}
                                            onChange={(e) => {
                                                inputJobdata(e.target.name, e.target.value);
                                            }} className="form-control" id="qualifications" />
                                    </Col>
                                </Row>
                            </div>

                            <div className="vacancy-form-group">
                                <Row>
                                    <Col className="col-4">
                                        <label htmlFor="title">Responsibilities Expect <span style={{ color: "red" }}>*</span></label>
                                    </Col>
                                    <Col className="col-6">
                                        <input type="text" name="responsibilities" value={jobData.responsibilities}
                                            onChange={(e) => {
                                                inputJobdata(e.target.name, e.target.value);
                                            }} className="form-control" id="responsibilities" />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    )}
                    {selectedDuration === 'Short_term' && (
                        <div className="vacancy-form-group">
                            <Row>
                                <Col className="col-4">
                                    <label htmlFor="isquotation">Quotation Selection <span style={{ color: "red" }}>*</span></label>
                                </Col><Col className="col-6"><select
                                    name="isquotation"
                                    value={jobData.isquotation}
                                    onChange={(e) => {
                                        inputJobdata(e.target.name, e.target.value);
                                    }}
                                    className="form-select"
                                >
                                    <option value="">Select an option</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select></Col></Row>
                        </div>
                    )}
                    <div className="vacancy-form-group">
                        <label for="file" >Upload image of need</label>
                        <input type="file" name="file" className="form-control" id="file" />
                    </div>

                    <Row className="vacancy-form-group-buttons mt-3">
                        <Col>
                            <button method="POST" onClick={handleAddJob} type='submit' value="Send" className="btn btn-vacancy-form-k" >Submit</button>
                        </Col>
                        <Col>
                            <a id="cancel-link" href="#"><button>Cancel</button></a>
                        </Col>
                    </Row>
                </form>
            </div></div>
    );



};

export default PostJobForm;

