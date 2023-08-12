import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Index(){
    return(
        <div className="ms-lg-4 me-lg-4 mt-4">
            <div>
                <span className="h5 ViewATraining-title">Registration</span>
            </div>
            <Form>
                <Form.Group className="mt-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mt-2" controlId="formBasicPassword">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter mobile number" />
                </Form.Group>

                <Form.Group className="mt-2" controlId="formBasicPassword">
                    <Form.Label>Amount Payable</Form.Label>
                    <Form.Control type="text" value="LKR 200.00" disabled/>
                </Form.Group>
                <div class="form-check mt-3">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">I have verified the event name, venue and time before proceeding my payment.</label>
                </div>
                <div className="ViewATraining-button-container mt-4 d-flex flex-row">
                    <Button className="btn-ServiceProvider-1" type="submit">Register</Button>
                    <Button className="btn-ServiceProvider-2 ViewATraining-cancel ms-auto">Back</Button>
                </div>
            </Form>
        </div>
    );
}

export default Index;