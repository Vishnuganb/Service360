import '../../../../style/ServiceProvider/ApplyVacancy.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ApplyVacancy() {
    const [viewVacancyData, setviewVacancyData] = useState(null);

    const [selectedFile, setSelectedFile] = useState(null);

    const [vacancyFormData, setVacancyFormData] = useState({
        firstname: "",
        lastname: "",
        contactnumber: "",
        emailaddress: "",        
        educationqualification: "",  
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

    const handleApplyVacancy = () => {
        const formData = new FormData();
        formData.append('firstname', vacancyFormData.firstname);
        formData.append('lastname', vacancyFormData.lastname);
        formData.append('contactnumber', vacancyFormData.contactnumber);
        formData.append('emailaddress', vacancyFormData.emailaddress);
        formData.append('educationqualification', vacancyFormData.educationqualification);
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

    return (
        <div className="ms-lg-4 me-lg-4">
            <div className='d-flex flex-column'>
              <span style={{fontSize:"30px",fontWeight:"600"}}>{viewVacancyData.vacancytitle}</span>
              <span style={{fontSize:"26px",fontWeight:"600"}}>{viewVacancyData.customer.firstname} {viewVacancyData.customer.lastname}</span>
            </div>
            <Form className="mt-4" onSubmit={handleApplyVacancy}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your first name" 
                        name="firstname" 
                        value={vacancyFormData.firstname}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your Last name" 
                        name="lastname" 
                        value={vacancyFormData.lastname}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your contact number" 
                        name="contactnumber" 
                        value={vacancyFormData.contactnumber}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your email address" 
                        name="emailaddress" 
                        value={vacancyFormData.emailaddress}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicJobCategory">
                    <Form.Label>Education Qualification</Form.Label>
                    <Form.Select 
                        aria-label="Education Qualification" 
                        name="educationqualification"
                        value={vacancyFormData.educationqualification}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="1">Ordinary Level</option>
                        <option value="2">Advanced Level</option>
                        <option value="3">Undergraduate</option>
                        <option value="4">Postgraduate</option>
                        <option value="5">None</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicJobCategory">
                    <Form.Label>Do you have work experience</Form.Label>
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
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicJobCategory">
                    <Form.Label>How Many Years of Work Experience Do You Possess</Form.Label>
                    <Form.Select 
                        aria-label="Education Qualification" 
                        name="yearsofexperience"
                        value={vacancyFormData.yearsofexperience}
                        onChange={handleInputChange}
                        required
                    >
                        <option value="0">Less than 1 year</option>
                        <option value="1">1-2 years</option>
                        <option value="2">3-5 years</option>
                        <option value="3">6-10 years</option>
                        <option value="5">More than 10 years</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Your Salary Expectations</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter your email address" 
                        name="salaryexpectation" 
                        value={vacancyFormData.salaryexpectation}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFiles">
                    <Form.Label>Upload your CV</Form.Label>
                    <Form.Control 
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
    );
}

export default ApplyVacancy;