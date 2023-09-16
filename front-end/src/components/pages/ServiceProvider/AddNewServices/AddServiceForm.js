import React from "react";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const serviceCategories = {
    "Interior Works": ["Carpentry", "Painting"],
    "Electrical & Plumbing": ["AC Repair", "Electrical Wiring", "Plumbing"],
    "Construction": ["Masonry", "Tiles Fitting", "Iron Works", "Glass & Aluminum"],
    "Security": ["CCTV Systems Repair", "Fire Alarm Systems Repair", "Video Surveillance Systems Repair"],
    "Cleaning": ["Sofa Cleaning", "Carpet Cleaning"],
};

function AddServiceForm() {
    const [serviceFormData, setServiceFormData] = useState({
        subcategories: [],
        workingArea: "",
        qualificationCertificate: null,
        services: [],
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setServiceFormData({
            ...serviceFormData,
            [name]: value,
        });
    };

    const handleCategoryChange = (e) => {
        const { name, options } = e.target;
        const selectedSubcategories = [];
        const selectedServices = [];
    
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedSubcategories.push(options[i].value);
                selectedServices.push(...serviceCategories[options[i].value]);
            }
        }
    
        setServiceFormData({
            ...serviceFormData,
            subcategories: selectedSubcategories,
            services: selectedServices,
        });
    };
    

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setServiceFormData({
            ...serviceFormData,
            qualificationCertificate: file,
        });
    };

    const handleAddService = (event) => {
        event.preventDefault();

        // Create a FormData object to send the data
        const formData = new FormData();

        // Append the service data to the FormData object
        formData.append("subcategories", serviceFormData.subcategories.join(', '));
        formData.append("workingArea", serviceFormData.workingArea);
        formData.append("qualificationCertificate", serviceFormData.qualificationCertificate);
        formData.append("services", serviceFormData.services.join(', '));

        axios
            .post('http://localhost:8080/auth/addService', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then((response) => {
                console.log('Service added successfully:', response.data);
                window.location.reload();
            })
            .catch((error) => {
                console.error('Error adding service:', error);
            });
    };

    return (
        <div className="AddServiceForm-container ms-lg-4 me-lg-5">
            <Row className="AddServiceForm-Head">
                <Col className="col-xl-6 col-12 d-flex align-items-center mb-2">
                    <span className="AddServiceForm-Head-Title">
                        Add New Service(s)
                    </span>
                </Col>
                <Col className="col-xl-6 col-12 d-flex align-items-center">
                    <span className="AddServiceForm-Head-SubTitle p-2 ms-xl-auto">
                        Select your categories (maximum 5)
                    </span>
                </Col>
            </Row>
            <Row className="AddServiceForm-Body">
                <Form method="post">
                    <Form.Group className="mt-4 mb-3 custom-checkbox" controlId="formBasicCheckbox">
                        {Object.keys(serviceCategories).map((category, index) => (
                            <React.Fragment key={index}>
                                <Row>
                                    <Col className="col-md-2 col-12 mb-2">
                                        {category}
                                    </Col>
                                    <Col className="col-md-10 col-12">
                                        {serviceCategories[category].map((subcategory, subIndex) => (
                                            <Form.Check
                                                key={subIndex}
                                                className="me-3 custom-font"
                                                type="checkbox"
                                                label={subcategory}
                                                name={`subcategories-${index}-${subIndex}`}
                                                onChange={handleCategoryChange}
                                            />
                                        ))}
                                    </Col>
                                </Row>
                                {index < Object.keys(serviceCategories).length - 1 && <hr className="AddServiceForm-hr" />}
                            </React.Fragment>
                        ))}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="custom-font">Working Area</Form.Label>
                        <Form.Control 
                            className="custom-font" 
                            type="text" 
                            placeholder="Area you like to perform jobs" 
                            name="workingArea"
                            value={serviceFormData.workingArea}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label className="custom-font">Add Qualification Certificate</Form.Label>
                        <Form.Control 
                            className="custom-font" 
                            type="file" 
                            name="qualificationCertificate"
                            onChange={handleFileInputChange}
                            required
                        />
                    </Form.Group>

                    <div className="AddNewService-button-container d-flex flex-row">
                        <Button className="btn-ServiceProvider-1" onClick={handleAddService}>Submit</Button>
                        <Button className="btn-ServiceProvider-2 AddServiceForm-cancel ms-auto">Cancel</Button>
                    </div>
                </Form>
            </Row>
        </div>
    );
}

export default AddServiceForm;