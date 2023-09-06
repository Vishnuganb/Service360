import React from "react";
import { Form } from 'react-bootstrap'

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Routing from "./Routing";

const routeDetails = [
    {
        cutomerLocation: "College House, 94 Kumaratunga Munidasa Mawatha, Colombo 00700",
        serviceProviderLocation: "no 11 5/4 Nelson Place, Colombo 06"
    }
];

function FindRoute() {

    const position = [16.902, 79.859];

    return (
        <div className="ms-lg-4 me-lg-4">
            <div className="FindRoute-location-info">
                <span style={{ fontSize: "28px", fontWeight: "bold" }}>Route Details</span>

                <Form className="mt-4">
                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>My Location</Form.Label>
                        <Form.Control type="text" value={routeDetails[0].serviceProviderLocation} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicTitle">
                        <Form.Label>Customer's Location</Form.Label>
                        <Form.Control type="text" value={routeDetails[0].cutomerLocation} />
                    </Form.Group>
                </Form>

            </div>
            <div className="FindRoute-map mt-5 border" style={{ width: "100%", height: "600px" }}>
                <div id="map">
                    <MapContainer center={position} zoom={14} style={{ height: "82vh" }}>
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