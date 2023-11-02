import '../../../../style/ServiceProvider/ApplyVacancy.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import { useRef } from 'react';

function ApplyVacancy() {
    const [viewVacancyData, setviewVacancyData] = useState(null);

    const [selectedFile, setSelectedFile] = useState(null);
    const [alertMessage, setAlertMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const [firstnameError, setFirstnameError] = useState(false);
    const [lastnameError, setLastnameError] = useState(false);
    const [contactnumberError, setContactnumberError] = useState(false);
    const [emailaddressError, setEmailaddressError] = useState(false);
    const [educationqualificationError, setEducationqualificationError] = useState(false);
    const [hasWorkExperienceError, setHasWorkExperienceError] = useState(false);
    const [yearsofexperienceError, setYearsofexperienceError] = useState(false);
    const [salaryexpectationError, setSalaryexpectationError] = useState(false);

    const fileInputRef = useRef(null);

    const educationQualificationArray = ["Ordinary Level","Advanced Level","Undergraduate","Postgraduate","None"];

    const [vacancyFormData, setVacancyFormData] = useState({
        firstname: "",
        lastname: "",
        contactnumber: "",
        emailaddress: "",        
        educationqualification: "0",  
        hasWorkExperience: '1',
        yearsofexperience: "0",      
        salaryexpectation: "",
        cvfile: "",
    });

    const handleFileInputChange = (e) => {
        const selectedFile = e.target.files[0];
      
        if (selectedFile) {
          setSelectedFile(selectedFile);
        }
    };

    const navigate = useNavigate();
        const handleBackClick = () => {
        navigate(-1);
    };

    const { id } = useParams();
    const vacancyId = parseInt(id, 10);

    useEffect(() => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        axios.get(`http://localhost:8080/auth/viewNewVacancies/${vacancyId}`,formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            console.log(res.data);
            setviewVacancyData(res.data);
        });
    }, []);

    if (!viewVacancyData) return 'No Vacancy found!';

    // GETTING LOGGED IN SERVICEPROVIDER ID
    const response = sessionStorage.getItem('authenticatedUser');
    const userData = JSON.parse(response);

    const handleApplyVacancy = (e) => {
        e.preventDefault();

        //Reset error states
        setFirstnameError(false);
        setLastnameError(false);
        setContactnumberError(false);
        setEmailaddressError(false);
        setEducationqualificationError(false);
        setHasWorkExperienceError(false);
        setYearsofexperienceError(false);
        setSalaryexpectationError(false);

        // Check for empty fields and show error messages if necessary
        if (!vacancyFormData.firstname) {
            setFirstnameError(true);
        }
        if (!vacancyFormData.lastname) {
            setLastnameError(true);
        }
        if (!vacancyFormData.contactnumber) {
            setContactnumberError(true);
        }
        if (!vacancyFormData.emailaddress) {
            setEmailaddressError(true);
        }
        if (!vacancyFormData.educationqualification) {
            setEducationqualificationError(true);
        }
        if (!vacancyFormData.hasWorkExperience) {
            setHasWorkExperienceError(true);
        }
        if (!vacancyFormData.yearsofexperience) {
            setYearsofexperienceError(true);
        }
        if (!vacancyFormData.salaryexpectation) {
            setSalaryexpectationError(true);
        }

        if(!vacancyFormData.firstname || !vacancyFormData.lastname || !vacancyFormData.contactnumber || !vacancyFormData.emailaddress || !vacancyFormData.educationqualification || !vacancyFormData.hasWorkExperience || !vacancyFormData.yearsofexperience || !vacancyFormData.salaryexpectation) {
            return;
        }

        const formData = new FormData();
        formData.append('firstname', vacancyFormData.firstname);
        formData.append('lastname', vacancyFormData.lastname);
        formData.append('contactnumber', vacancyFormData.contactnumber);
        formData.append('emailaddress', vacancyFormData.emailaddress);
        formData.append('educationqualification', educationQualificationArray[vacancyFormData.educationqualification]);
        formData.append('hasWorkExperience', vacancyFormData.hasWorkExperience);
        formData.append('yearsofexperience', vacancyFormData.yearsofexperience);
        formData.append('salaryexpectation', vacancyFormData.salaryexpectation);
        formData.append('serviceproviderid', userData.userid);
        formData.append('file', selectedFile);

        axios
            .post(`http://localhost:8080/auth/applyVacancy/${vacancyId}`, formData,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                console.log('Vacancy application submitted successfully:', response.data);
                setVacancyFormData({
                    firstname: "",
                    lastname: "",
                    contactnumber: "",
                    emailaddress: "",        
                    educationqualification: "0",  
                    hasWorkExperience: '1',
                    yearsofexperience: "0",      
                    salaryexpectation: "",
                    cvfile: "",
                });
                
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }

                showAlertWithMessage("Vacancy application submitted successfully");
            })
            .catch((error) => {
                console.error('Error submitting vacancy application:', error);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVacancyFormData({
            ...vacancyFormData,
            [name]: value,
        });
    };
        
    const showAlertWithMessage = (message) => {
        setAlertMessage(message);
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
          }, 2000);
    };

    return (
        <div className="ms-lg-4 me-lg-4">
            <div className="ViewATraining-details border rounded px-5 py-2 py-2">
                <div className="ViewATraining-details-body-left mt-2 d-flex flex-row flex-wrap">
                    <div className="col-lg-4 col-md-6 col-12  d-lg-flex">
                        <i className="bi bi-person-badge-fill"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">{viewVacancyData.vacancytitle}</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-lg-flex justify-content-center">
                        <i className="bi bi-person-fill"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">{viewVacancyData.customer.firstname} {viewVacancyData.customer.lastname}</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-lg-flex justify-content-end">
                        <i className="bi bi-clock-fill"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">{viewVacancyData.vacancytype}</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-lg-flex">
                        <i className="bi bi-geo-alt-fill"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">{viewVacancyData.vacancylocation}</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-lg-flex justify-content-center">
                        <i className="bi bi-tools"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">{viewVacancyData.servicename}</span>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 d-lg-flex justify-content-end">
                        <i className="bi bi-hourglass-top"></i>&nbsp;&nbsp;&nbsp;
                        <span className="ViewATraining-details-sub-info-val mb-1">{viewVacancyData.duedate}</span>
                    </div>
                </div>
            </div>
            {/* Apply Now */}
            <div className="ViewATraining-details border rounded px-5 py-3 mt-4 ">
                <div className="fs-5 fw-bold mb-3" style={{textAlign:'center'}}>Apply Now</div>
                <Form className="mt-2" onSubmit={handleApplyVacancy} method='post'>
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>First Name <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your first name" 
                            name="firstname" 
                            value={vacancyFormData.firstname}
                            onChange={handleInputChange}
                            required
                        />
                        {firstnameError && <p style={{ color: 'red' }}>Please enter your first name</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Last Name <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your Last name" 
                            name="lastname" 
                            value={vacancyFormData.lastname}
                            onChange={handleInputChange}
                            required
                        />
                        {lastnameError && <p style={{ color: 'red' }}>Please enter your last name</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Contact Number <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your contact number" 
                            name="contactnumber" 
                            value={vacancyFormData.contactnumber}
                            onChange={handleInputChange}
                            required
                        />
                        {contactnumberError && <p style={{ color: 'red' }}>Please enter your contact number</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Email Address <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your email address" 
                            name="emailaddress" 
                            value={vacancyFormData.emailaddress}
                            onChange={handleInputChange}
                            required
                        />
                        {emailaddressError && <p style={{ color: 'red' }}>Please enter your email address</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicJobCategory">
                        <Form.Label>Education Qualification <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Select 
                            aria-label="Education Qualification" 
                            name="educationqualification"
                            value={vacancyFormData.educationqualification}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="0">Ordinary Level</option>
                            <option value="1">Advanced Level</option>
                            <option value="2">Undergraduate</option>
                            <option value="3">Postgraduate</option>
                            <option value="4">None</option>
                        </Form.Select>
                        {educationqualificationError && <p style={{ color: 'red' }}>Please select your education qualification</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicJobCategory">
                        <Form.Label>Do you have work experience <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Select 
                            aria-label="Education Qualification" 
                            name="hasWorkExperience"
                            value={vacancyFormData.hasWorkExperience}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </Form.Select>
                        {hasWorkExperienceError && <p style={{ color: 'red' }}>Please select whether you have work experience</p>}
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicJobCategory">
                        <Form.Label>How Many Years of Work Experience Do You Possess <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter years of work experience" 
                            name="yearsofexperience" 
                            value={vacancyFormData.yearsofexperience}
                            onChange={handleInputChange}
                            required
                        />
                        {yearsofexperienceError && <p style={{ color: 'red' }}>Please enter your years of work experience</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Your Salary Expectations <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your email address" 
                            name="salaryexpectation" 
                            value={vacancyFormData.salaryexpectation}
                            onChange={handleInputChange}
                        />
                        {salaryexpectationError && <p style={{ color: 'red' }}>Please enter your salary expectation</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicFiles">
                        <Form.Label>Upload your CV <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Control 
                            ref={fileInputRef}
                            type="file" 
                            name="cvfile" 
                            onChange={handleFileInputChange}
                            required
                        />
                    </Form.Group>

                    <div className="vacancy-form-button-container d-flex flex-row">
                        <Button className="btn-ServiceProvider-1" type="submit">Apply</Button>
                        <Button className="btn-ServiceProvider-2 vacancy-form-cancel ms-auto" onClick={handleBackClick}>Back</Button>
                    </div>
                </Form>
            </div>
            <Alert
                show={showAlert}
                variant="info"
                onClose={() => setShowAlert(false)}
                dismissible
                style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 9999,
                }}
            >
                {alertMessage}
            </Alert>
        </div>
    );
}

export default ApplyVacancy;