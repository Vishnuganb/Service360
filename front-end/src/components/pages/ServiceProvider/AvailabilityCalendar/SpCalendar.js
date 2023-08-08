import React from "react";
import UserImg from '../../../../assets/images/header/user.jpg'
import { Col, Row } from "react-bootstrap";

function SpCalendar(){

       //Job objects with properties
       const availabilityCalenderSingleDayData = [
        {
            profile: UserImg,
            id: 1,
            customerName: 'Viyaasan',
            startTime: '8.00',
            endTime: '10.00', 
            location: 'Dehiwala',
            date:'2023-08-19',
        },
        {
            profile: UserImg,
            id: 2,
            customerName: 'Tharun',
            startTime: '10.00',
            endTime: '11.00',
            location: 'Wellawatte',
            date:'2023-08-19',
        },
        {
            profile: UserImg,
            id: 3,
            customerName: 'Kavin',
            startTime: '1.00',
            endTime: '3.00',
            location: 'Nugegoda',
            date:'2023-08-19',
        },
        {
            profile: UserImg,
            id:4,
            customerName: 'Umai vanan',
            startTime: '4.00',
            endTime: '5.00',
            location: 'Jaffna',
            date:'2023-08-19',
        },
    ];

    
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
                                        <span style={{fontSize:"20px",fontWeight:"bold"}}>Schedule for {availabilityCalenderSingleDayData.date}</span>    {/* date is not rendering */}      
                            </div>

                            {availabilityCalenderSingleDayData.map((work) => (
                                <Col key={work.id} className="col-lg-10 col-12 ms-lg-5">
                                    <div className="col-lg-10 px-3 ms-lg-5 mt-1">
                                        <Row>
                                            <div className="mt-3 p-3" style={{border:"1px solid black",borderRadius:"15px"}}>
                                                <div className=" d-flex flex-row">
                                                    <div>
                                                        <img
                                                        src={work.profile}
                                                        alt="avatar"
                                                        className="spCalendar-avatar rounded-circle"
                                                        style={{ width: "40px", height: "40px" }}
                                                        />
                                                    </div>
                                                    <div className="d-flex flex-column spCalendar-username-container ms-4">
                                                        <span className="spCalendar-username" style={{fontWeight:"650"}}>{work.customerName}</span>
                                                        <span className="spCalendar-comment-body-text" style={{fontWeight:"500"}}>{work.startTime} - {work.endTime}</span>
                                                    </div>
                                                    <div className="ms-auto d-flex flex-column justify-content-center align-items-center">
                                                        <i className="bi bi-x-circle-fill" style={{fontSize:"26px"}}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </div>
                                </Col>     
                            ))}
                    </div>  
                </div>
        </div>
    );
}

export default SpCalendar;