import React from "react";
import { Form } from 'react-bootstrap'

function FindRoute() {
    return(
        <div className="ms-lg-4 me-lg-4">
            <div className="FindRoute-location-info">
                <span style={{fontSize:"28px",fontWeight:"bold"}}>Route Details</span>
                
                <Form className="mt-4">
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Origin</Form.Label>
                        <Form.Control type="text" value="Service Provider's location"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Destination</Form.Label>
                        <Form.Control type="text" value="Customer's location" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Distance</Form.Label>
                        <Form.Control type="text" value="15 km" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control type="text" value="50 minutes"/>
                    </Form.Group>
                </Form>

            </div>
            <div className="FindRoute-map mt-5 border" style={{width:"100%", height:"500px"}}>
                <div id="map"></div>
                <input type="text" id="origin" value="University of Colombo School of Computing (UCSC), Reid Avenue, Colombo" required hidden />  {/* service provider's location*/}
                <input type="text" id="destination" value="" required hidden />  {/* customer's location*/}
            </div>
        </div>
    );
}

export default FindRoute;