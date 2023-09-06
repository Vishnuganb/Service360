import '../../../../style/ServiceProvider/ApplyVacancy.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ApplyVacancy() {
    const [viewVacancyData, setviewVacancyData] = useState(null);

    const { id } = useParams();
    const vacancyId = parseInt(id, 10);

    useEffect(() => {
        axios.get(`http://localhost:8080/auth/viewNewVacancies/${vacancyId}`).then((res) => {
            console.log(res.data);
            setviewVacancyData(res.data);
        });
    }, []);

    if (!viewVacancyData) return 'No Vacancy found!';

    return (
        <div className="ms-lg-4 me-lg-4">
            <div className='d-flex flex-column'>
              <span style={{fontSize:"30px",fontWeight:"600"}}>{viewVacancyData.vacancytitle}</span>
              <span style={{fontSize:"26px",fontWeight:"600"}}>{viewVacancyData.customer.firstname}</span>
            </div>
            <Form className="mt-4">
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your first name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Last name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter your contact number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter your email address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicJobCategory">
                    <Form.Label>Education Qualification</Form.Label>
                    <Form.Select aria-label="Education Qualification">
                        <option value="1">Ordinary Level</option>
                        <option value="2">Advanced Level</option>
                        <option value="3">Undergraduate</option>
                        <option value="4">Postgraduate</option>
                        <option value="5">None</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicJobCategory">
                    <Form.Label>Do you have work experience</Form.Label>
                    <Form.Select aria-label="Education Qualification">
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </Form.Select>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicJobCategory">
                    <Form.Label>How Many Years of Work Experience Do You Possess</Form.Label>
                    <Form.Select aria-label="Education Qualification">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3-5</option>
                        <option value="4">5-10</option>
                        <option value="5">{'>'}10</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Your Salary Expectations</Form.Label>
                    <Form.Control type="text" placeholder="Enter your email address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFiles">
                    <Form.Label>Upload your CV</Form.Label>
                    <Form.Control type="file" accept="image/*" />
                    <Form.Text className="text-muted">Please upload images that showcase your work experience and accomplishments.</Form.Text>
                </Form.Group>

                <div className="vacancy-form-button-container d-flex flex-row">
                    <Button className="btn-ServiceProvider-1" type="submit">Apply</Button>
                    <Button className="btn-ServiceProvider-2 vacancy-form-cancel ms-auto">Cancel</Button>
                </div>
            </Form>
        </div>
    );
}

export default ApplyVacancy;