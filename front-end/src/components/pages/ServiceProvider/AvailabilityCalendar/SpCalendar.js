import React from "react";
import UserImg from '../../../../assets/images/header/user.jpg'
import { Col, Row } from "react-bootstrap";

function SpCalendar(){
    return(
        <div>
             <span style={{fontSize:"28px",fontWeight:"bold"}}>Availability Calendar</span>
             <div className="spCalendar-container mt-4 d-flex flex-row">
                <div className="col-lg-6 col-12">
                    <div className="p-3">

                        {/* Calendar */}

                    </div>
                </div>
                <div className="col-lg-6 col-12 ms-5-lg">
                        <div className=" col-lg-10 col-12 ms-lg-5 ">
                            <span style={{fontSize:"20px",fontWeight:"bold"}}>Schedule for August 05, 2023</span>
                        </div>
                        {/* LOOP HERE */}

                        <Col className="col-lg-10 px-3 ms-lg-5 mt-1">
                            <Row>
                                <div className="mt-3 p-3" style={{border:"1px solid black",borderRadius:"15px"}}>
                                    <div className=" d-flex flex-row">
                                        <div>
                                            <img
                                            src={UserImg}
                                            alt="avatar"
                                            className="spCalendar-avatar rounded-circle"
                                            style={{ width: "40px", height: "40px" }}
                                            />
                                        </div>
                                        <div className="d-flex flex-column spCalendar-username-container ms-4">
                                            <span className="spCalendar-username" style={{fontWeight:"650"}}>Juliyan</span>
                                            <span className="spCalendar-comment-body-text" style={{fontWeight:"500"}}>10.00 AM - 11.00 AM</span>
                                        </div>
                                        <div className="ms-auto d-flex flex-column justify-content-center align-items-center">
                                            <i className="bi bi-x-circle-fill" style={{fontSize:"26px"}}></i>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Col>

                        <Col className="col-lg-10 px-3 ms-lg-5 mt-1">
                            <Row>
                                <div className="mt-3 p-3" style={{border:"1px solid black",borderRadius:"15px"}}>
                                    <div className=" d-flex flex-row">
                                        <div>
                                            <img
                                            src={UserImg}
                                            alt="avatar"
                                            className="spCalendar-avatar rounded-circle"
                                            style={{ width: "40px", height: "40px" }}
                                            />
                                        </div>
                                        <div className="d-flex flex-column spCalendar-username-container ms-4">
                                            <span className="spCalendar-username" style={{fontWeight:"650"}}>Juliyan</span>
                                            <span className="spCalendar-comment-body-text" style={{fontWeight:"500"}}>10.00 AM - 11.00 AM</span>
                                        </div>
                                        <div className="ms-auto d-flex justify-content-center align-items-center">
                                            <i className="bi bi-x-circle-fill" style={{fontSize:"26px"}}></i>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Col>

                        <Col className="col-lg-10 px-3 ms-lg-5 mt-1">
                            <Row>
                                <div className="mt-3 p-3" style={{border:"1px solid black",borderRadius:"15px"}}>
                                    <div className=" d-flex flex-row">
                                        <div>
                                            <img
                                            src={UserImg}
                                            alt="avatar"
                                            className="spCalendar-avatar rounded-circle"
                                            style={{ width: "40px", height: "40px" }}
                                            />
                                        </div>
                                        <div className="d-flex flex-column spCalendar-username-container ms-4">
                                            <span className="spCalendar-username" style={{fontWeight:"650"}}>Juliyan</span>
                                            <span className="spCalendar-comment-body-text" style={{fontWeight:"500"}}>10.00 AM - 11.00 AM</span>
                                        </div>
                                        <div className="ms-auto d-flex justify-content-center align-items-center">
                                            <i className="bi bi-x-circle-fill" style={{fontSize:"26px"}}></i>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Col>

                        
                 </div>       
             </div>
        </div>
    );
}

export default SpCalendar;