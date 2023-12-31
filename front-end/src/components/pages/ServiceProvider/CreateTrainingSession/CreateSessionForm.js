import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from "react";
import Alert from 'react-bootstrap/Alert';

// const subscribedJobCategories = [
//     'Masonry',
//     'Plumbing',
//     'Carpentry',
// ];

function CreateSessionForm() {
    const [myservicesData, setMyservicesData] = useState([]);

    const [trainingSessionFormData, setTrainingSessionFormData] = useState({
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
        status: "Pending",   
    });
    
    const [selectedFiles, setSelectedFiles] = useState([]);

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState(''); 

    const [alertMessageRed, setAlertMessageRed] = useState(''); 
    const [showAlertRed, setShowAlertRed] = useState(false);

    const [serviceError, setServiceError] = useState(false);
    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [starttimeError, setStartTimeError] = useState(false);
    const [endtimeError, setEndTimeError] = useState(false);
    const [locationError, setLocationError] = useState(false);
    const [costError, setCostError] = useState(false);

    const handleFileInputChange = (e) => {
        const selectedFilesArray = Array.from(e.target.files);
    
        if (selectedFilesArray.length + selectedFiles.length > 3) {
            handleShowAlertRed('You can select a maximum of 3 images.');
            return;
        }

        const selectedFileNames = selectedFilesArray.map((file) => file);
    
        setSelectedFiles((prevSelectedFiles) => [...prevSelectedFiles, ...selectedFileNames]);
    
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

    // GETTING LOGGED IN SERVICEPROVIDER ID

    const response = sessionStorage.getItem('authenticatedUser');
    const userData = JSON.parse(response);

    const handleCreateTrainingSession = (event) => {
        event.preventDefault();

        // Reset error states
        setTitleError(false);
        setDescriptionError(false);
        setServiceError(false);
        setDateError(false);
        setStartTimeError(false);
        setEndTimeError(false);
        setLocationError(false);
        setCostError(false);

        // Check for empty fields and show error messages if necessary
        if (!trainingSessionFormData.servicename) {
            setServiceError(true);
        }
        if (!trainingSessionFormData.trainingtitle) {
            setTitleError(true);
        }
        if (!trainingSessionFormData.trainingdescription) { 
            setDescriptionError(true);
        }
        if (!trainingSessionFormData.trainingdate) {
            setDateError(true);
        }
        if (!trainingSessionFormData.trainingstarttime) {
            setStartTimeError(true);
        }
        if (!trainingSessionFormData.trainingendtime) {
            setEndTimeError(true);
        }
        if (!trainingSessionFormData.traininglocation) {
            setLocationError(true);
        }
        if (!trainingSessionFormData.trainingcost) {
            setCostError(true);
        }

        if(!trainingSessionFormData.servicename || !trainingSessionFormData.trainingtitle || !trainingSessionFormData.trainingdescription || !trainingSessionFormData.trainingdate || !trainingSessionFormData.trainingstarttime || !trainingSessionFormData.trainingendtime || !trainingSessionFormData.traininglocation || !trainingSessionFormData.trainingcost) {
            return;
        }

        // Create a FormData object to send the data
        const formData = new FormData();
    
        // Append the training session data to the FormData object
        for (const key in trainingSessionFormData) {
            formData.append(key, trainingSessionFormData[key]);
        }

        formData.append('serviceproviderid', userData.userid)
    
        // Append each selected file to the FormData object    
        selectedFiles.map((file) => {
            formData.append("images", file);
        });
 
        // Log the FormData key-value pairs
        for (const [key, value] of formData.entries()) {
            console.log(`FormData Key: ${key}, Value: ${value}`);
        }

        // Make the POST request with Axios
        axios.post('http://localhost:8080/auth/createTrainingSession', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then((response) => {
            window.location.reload();
            handleShowAlert('Training session created successfully!');
          })
          .catch((error) => {
            console.error('Error creating training session:', error);
        });
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/auth/viewMyServices/${userData.userid}`).then((res) => {
            console.log(res.data);
            setMyservicesData(res.data);
        });
    }, []);
    
    const handleShowAlertRed = (message) => {
        setAlertMessageRed(message);
        setShowAlertRed(true);
    
        // Automatically hide the alert after 5 seconds
        setTimeout(() => {
          setShowAlertRed(false);
        }, 3500); // 3500 milliseconds (5 seconds)
    };

    const handleShowAlert = (message) => {
        setAlertMessage(message);
        setShowAlert(true);
    
        // Automatically hide the alert after 5 seconds
        setTimeout(() => {
          setShowAlert(false);
        }, 3500); // 3500 milliseconds (5 seconds)
    };

    return (
        <div className="ms-lg-4 me-lg-4">
            <span style={{ fontSize: "28px", fontWeight: "bold" }}>Create a Training Session</span>

            <Form className="mt-4" method="post">
                <Form.Group className="mb-3" controlId="formBasicJobCategory">
                    <Form.Control 
                        as="select" 
                        name="servicename"
                        value={trainingSessionFormData.servicename}
                        onChange={handleInputChange}
                    >
                        <option value="">Select the service category</option>
                        {myservicesData.map((category) => (
                            <option key={category.serviceId} value={category.serviceName}>
                                {category.serviceName}
                            </option>
                        ))}
                    </Form.Control>
                    {serviceError && <p style={{ color: 'red' }}>Please select a service category</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter the Title" 
                        name="trainingtitle"
                        value={trainingSessionFormData.trainingtitle}
                        onChange={handleInputChange}
                    />
                    {titleError && <p style={{ color: 'red' }}>Please enter a title</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={5} 
                        placeholder="Provide a detailed description of the training session" 
                        name="trainingdescription"
                        value={trainingSessionFormData.trainingdescription}
                        onChange={handleInputChange}
                    />
                    {descriptionError && <p style={{ color: 'red' }}>Please enter a description</p>}
                </Form.Group>

                <div className="CreateSession-Time d-flex flex-row">
                    <Form.Group className="mb-3 col-md-2" controlId="formBasicDate">
                        <Form.Label>Date <span style={{ color: 'red' }}>*</span></Form.Label>
                        <Form.Control 
                            type="date" 
                            placeholder="Select the date of the training session" 
                            name="trainingdate"
                            value={trainingSessionFormData.trainingdate}
                            onChange={handleInputChange}
                        />
                        {dateError && <p style={{ color: 'red' }}>Please select a date</p>}
                    </Form.Group>

                    <Form.Group className="mb-3 ms-md-4 col-md-2" controlId="formBasicTime">
                        <Form.Label>Start Time <span style={{ color: 'red' }}>*</span></Form.Label>
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
                        {starttimeError && <p style={{ color: 'red' }}>Please select a start time</p>}
                    </Form.Group>

                    <Form.Group className="mb-3 ms-md-4 col-md-2" controlId="formBasicDuration">
                        <Form.Label>End Time <span style={{ color: 'red' }}>*</span></Form.Label>
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
                        {endtimeError && <p style={{ color: 'red' }}>Please select an end time</p>}
                    </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Label>Location <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter the location of the training session" 
                        name="traininglocation"
                        value={trainingSessionFormData.traininglocation}
                        onChange={handleInputChange}
                    />
                    {locationError && <p style={{ color: 'red' }}>Please enter a location</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEntranceFee">
                    <Form.Label>Entrance Fee (Rs) <span style={{ color: 'red' }}>*</span></Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter the entrance fee or cost for the training session (if applicable)" 
                        name="trainingcost"
                        value={trainingSessionFormData.trainingcost}
                        onChange={handleInputChange}
                    />
                    {costError && <p style={{ color: 'red' }}>Please enter the entrance fee</p>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFiles">
                    <Form.Label>Upload Relevant Media </Form.Label><Form.Text className="text-muted">&nbsp;&nbsp;( Please upload images that showcase your training session and its contents )</Form.Text><br />
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
                                <Button variant="link" onClick={() => handleRemoveFile(index)}><i class="bi bi-x bi-lg" style={{ color: 'black' }}></i></Button>
                            </div>
                        ))}
                    </div>
                </Form.Group>

                <div className="CreateBlog-button-container d-flex flex-row">
                    <Button className="btn-ServiceProvider-1" onClick={handleCreateTrainingSession}>Create</Button>
                </div>
            </Form>

            <Alert
                show={showAlertRed}
                    variant="danger"
                    onClose={() => setShowAlert(false)}
                    dismissible
                    style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 9999, // Adjust the z-index as needed
                    }}
                >
                {alertMessageRed}
            </Alert>
            <Alert
                show={showAlert}
                    variant="info"
                    onClose={() => setShowAlert(false)}
                    dismissible
                    style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 9999, // Adjust the z-index as needed
                    }}
                >
                {alertMessage}
            </Alert>    
        </div>
    );
}

export default CreateSessionForm;