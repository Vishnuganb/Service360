import React from "react";
import { Form } from 'react-bootstrap'

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Routing from "./Routing";


function FindRoute() {

    const position = [6.902,79.859];
    
    
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
            <div className="FindRoute-map mt-5 border" style={{width:"100%", height:"600px"}}>
                <div id="map">
                    <MapContainer center={position} zoom={0} style={{ height: "82vh" }}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Routing />
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}

export default FindRoute;