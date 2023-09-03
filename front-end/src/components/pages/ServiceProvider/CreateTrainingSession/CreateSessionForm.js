import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const subscribedJobCategories = [
    'Masonry',
    'Plumbing',
    'Carpentry',
];

function CreateSessionForm() {
    return(
        <div className="ms-lg-4 me-lg-4">
            <span style={{fontSize:"28px",fontWeight:"bold"}}>Create a Training Session</span>

            <Form className="mt-4">    
                <Form.Group className="mb-3" controlId="formBasicJobCategory">
                    <Form.Control as="select">
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
                    <Form.Control type="text" placeholder="Enter the Title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Provide a detailed description of the training session" />
                </Form.Group>
                
                <div className="CreateSession-Time d-flex flex-row">
                    <Form.Group className="mb-3 col-md-2" controlId="formBasicDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Select the date of the training session" />
                    </Form.Group>

                    <Form.Group className="mb-3 ms-md-4 col-md-2" controlId="formBasicTime">
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control type="time" placeholder="Select the starting time of the training session" />
                    </Form.Group>

                    <Form.Group className="mb-3 ms-md-4 col-md-2" controlId="formBasicDuration">
                        <Form.Label>End Time</Form.Label>
                        <Form.Control type="time" placeholder="Select the ending time of the training session" />
                    </Form.Group>
                </div>

                <Form.Group className="mb-3" controlId="formBasicLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter the location of the training session" />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicEntranceFee">
                    <Form.Label>Entrance Fee</Form.Label>
                    <Form.Control type="text" placeholder="Enter the entrance fee or cost for the training session (if applicable)" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFiles">
                    <Form.Label>Upload Relevant Media</Form.Label>
                    <Form.Control type="file" accept="image/*" />
                    <Form.Text className="text-muted">Please upload images that showcase your training session and its content.</Form.Text>
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