import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from "react";

const subscribedJobCategories = [
    'Masonry',
    'Plumbing',
    'Carpentry',
];


function CreateSessionForm() {

    const [trainingSessionFormData, setTrainingSessionFormData] = useState({
        trainingimage: "",
        trainingtitle: "",
        trainingdescription: "",
        trainingdate: "",        
        trainingstarttime: "",       
        traininglocation: "",
        trainingendtime: "",
        trainingcost: "",
        servicename: "",
        going: 0,
        interested: 0,
        status: "Payment Pending",   
    });
    
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileInputChange = (e) => {
        const selectedFilesArray = Array.from(e.target.files);
        const selectedFileNames = selectedFilesArray.map((file) => file.name);

        setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...selectedFileNames]);

        // Join the selected image file names into a comma-separated string
        const trainingImages = selectedFileNames.join(', ');

        // Update the trainingimage field in trainingSessionFormData
        setTrainingSessionFormData({
            ...trainingSessionFormData,
            trainingimage: trainingImages,
        });
    };

    const handleRemoveFile = (indexToRemove) => {
        setSelectedFiles((prevSelectedFiles) =>
            prevSelectedFiles.filter((_, index) => index !== indexToRemove)
        );
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTrainingSessionFormData({
            ...trainingSessionFormData,
            [name]: value,
        });
    };

    function convertTo24HourFormat(time12Hour) {
        const [time, modifier] = time12Hour.split(' ');
        let [hours, minutes] = time.split(':');
      
        if (hours === '12') {
          hours = '00';
        }
      
        if (modifier === 'PM') {
          hours = parseInt(hours, 10) + 12;
        }
      
        return `${hours}:${minutes}:00`;
      }   

    const handleCreateTrainingSession = () => {
        axios
            .post('http://localhost:8080/auth/createTrainingSession', trainingSessionFormData)
            .then((response) => {
                console.log('Training session created successfully:', response.data);
            })
            .catch((error) => {
                console.error('Error creating training session:', error);
            });
    };

    return (
        <div className="ms-lg-4 me-lg-4">
            <span style={{ fontSize: "28px", fontWeight: "bold" }}>Create a Training Session</span>

            <Form className="mt-4" onSubmit={handleCreateTrainingSession}>
                <Form.Group className="mb-3" controlId="formBasicJobCategory">
                    <Form.Control 
                        as="select" 
                        name="servicename"
                        value={trainingSessionFormData.servicename}
                        onChange={handleInputChange}
                    >
                        <option value="">Select the service category</option>
                        {subscribedJobCategories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter the Title" 
                        name="trainingtitle"
                        value={trainingSessionFormData.trainingtitle}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        placeholder="Provide a detailed description of the training session" 
                        name="trainingdescription"
                        value={trainingSessionFormData.trainingdescription}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <div className="CreateSession-Time d-flex flex-row">
                    <Form.Group className="mb-3 col-md-2" controlId="formBasicDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control 
                            type="date" 
                            placeholder="Select the date of the training session" 
                            name="trainingdate"
                            value={trainingSessionFormData.trainingdate}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 ms-md-4 col-md-2" controlId="formBasicTime">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control 
                            type="time" 
                            placeholder="Select the starting time of the training session" 
                            name="trainingtime"
                            value={trainingSessionFormData.trainingstarttime}
                            onChange={(e) => {
                                const twelveHourTime = e.target.value;
                                const twentyFourHourTime = convertTo24HourFormat(twelveHourTime);
                                console.log("start time (24-hour format):", twentyFourHourTime);
                                handleInputChange({
                                  target: {
                                    name: "trainingstarttime",
                                    value: twentyFourHourTime
                                  }
                                });
                              }}
                          
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 ms-md-4 col-md-2" controlId="formBasicDuration">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control 
                            type="time" 
                            placeholder="Select the ending time of the training session" 
                            name="trainingduration"
                            value={trainingSessionFormData.trainingendtime}
                            onChange={(e) => {
                                const twelveHourTime = e.target.value;
                                const twentyFourHourTime = convertTo24HourFormat(twelveHourTime);
                                console.log("end time (24-hour format):", twentyFourHourTime);
                                handleInputChange({
                                  target: {
                                    name: "trainingendtime",
                                    value: twentyFourHourTime
                                  }
                                });
                              }}
                        />
                    </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter the location of the training session" 
                        name="traininglocation"
                        value={trainingSessionFormData.traininglocation}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEntranceFee">
                    <Form.Label>Entrance Fee</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter the entrance fee or cost for the training session (if applicable)" 
                        name="trainingcost"
                        value={trainingSessionFormData.trainingcost}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFiles">
                    <Form.Label>Upload Relevant Media </Form.Label><Form.Text className="text-muted">&nbsp;&nbsp;( Please upload images that showcase your ts rning session and its content ).</Form.Text><br />
                    <Button className="btn-ServiceProvider-1" onClick={() => document.getElementById('fileInput').click()}>Select Images</Button>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        id="fileInput"
                        style={{ display: 'none' }}
                        onChange={handleFileInputChange}
                    />
                    <div className="selected-images">
                        {selectedFiles.map((file, index) => (
                            <div key={index} className="selected-image">
                                <span>{file.name}</span>
                                <Button variant="link" onClick={() => handleRemoveFile(index)}>Remove</Button>
                            </div>
                        ))}
                    </div>
                </Form.Group>

                <div className="CreateBlog-button-container d-flex flex-row">
                    <Button className="btn-ServiceProvider-1" type="submit">Create</Button>
                    <Button className="btn-ServiceProvider-2 CreateBlog-cancel ms-auto">Cancel</Button>
                </div>
            </Form>
        </div>
    );
}

export default CreateSessionForm;