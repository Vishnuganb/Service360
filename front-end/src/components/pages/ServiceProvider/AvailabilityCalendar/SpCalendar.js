import React from "react";
import UserImg from '../../../../assets/images/header/user.jpg'
import { Button, Col, Row } from "react-bootstrap";
import { useState } from "react";
import { Modal, Form } from "react-bootstrap";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import {
    format,
    startOfWeek,
    addDays,
    startOfMonth,
    endOfMonth,
    endOfWeek,
    isSameMonth,
    isSameDay,
    subMonths,
    addMonths
} from "date-fns";

function SpCalendar(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = (date) => {
        setSelectedModalDate(date); // Set the selected date for the modal
        setShow(true);
    };
    const [selectedModalDate, setSelectedModalDate] = useState(new Date());
    
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [activeDate, setActiveDate] = useState(new Date());


    const [selectedSchedules, setSelectedSchedules] = useState([]);    // New state for selected date's schedules

    const availabilityCalenderSingleDayData = [
        {
            profile: UserImg,
            id: 5,
            customerName: 'Rahul',
            startTime: '9.30',
            endTime: '12.00',
            location: 'Colombo',
            description: 'Plumbing work',
            date: '2023-08-012',
        },
        {
            profile: UserImg,
            id: 6,
            customerName: 'Samantha',
            startTime: '14.00',
            endTime: '16.00',
            location: 'Kandy',
            description: 'Electrical work',
            date: '2023-08-12',
        },
        {
            profile: UserImg,
            id: 7,
            customerName: 'Nimal',
            startTime: '11.00',
            endTime: '12.30',
            location: 'Galle',
            description: 'Painting',
            date: '2023-08-16',
        },
        {
            profile: UserImg,
            id: 8,
            customerName: 'Lakshmi',
            startTime: '9.00',
            endTime: '10.30',
            location: 'Negombo',
            description: 'Carpentry work',
            date: '2023-08-16',
        },
        {
            profile: UserImg,
            id: 9,
            customerName: 'Dilshan',
            startTime: '15.00',
            endTime: '17.00',
            location: 'Kurunegala',
            description: 'Roof repair',
            date: '2023-08-20',
        },
        {
            profile: UserImg,
            id: 10,
            customerName: 'Priya',
            startTime: '12.00',
            endTime: '13.30',
            location: 'Matara',
            description: 'Gardening',
            date: '2023-08-24',
        },
        {
            profile: UserImg,
            id: 11,
            customerName: 'Aruna',
            startTime: '8.30',
            endTime: '10.30',
            location: 'Anuradhapura',
            description: 'Window cleaning',
            date: '2023-08-24',
        },
        {
            profile: UserImg,
            id: 12,
            customerName: 'Sanjeewa',
            startTime: '14.00',
            endTime: '16.00',
            location: 'Gampaha',
            description: 'Floor polishing',
            date: '2023-08-27',
        },
        {
            profile: UserImg,
            id: 13,
            customerName: 'Thilini',
            startTime: '10.00',
            endTime: '12.00',
            location: 'Kotte',
            description: 'Plastering work',
            date: '2023-08-29',
        },
    ];


    const getHeader = () => {
        return (

        <div className="SpCalendar-header d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
                <i
                    className="bi bi-chevron-left me-2"
                    onClick={() => setActiveDate(subMonths(activeDate, 1))}
                />
                <i
                    className="bi bi-chevron-right"
                    onClick={() => setActiveDate(addMonths(activeDate, 1))}
                />
            </div>
            <span className="currentMonth">{format(activeDate, "MMMM yyyy")}</span>
            <div
                className="SpCalendar-todayButton"
                onClick={() => {
                    setSelectedDate(new Date());
                    setActiveDate(new Date());
                }}
            >
                Today
            </div>
        </div>

            
          );
    };


    const getWeekDaysNames = () => {
        const weekStartDate = startOfWeek(activeDate);
        const weekDays = [];
        for (let day = 0; day < 7; day++) {
        weekDays.push(
            <div className="day weekNames">
            {format(addDays(weekStartDate, day), "E")}
            </div>
        );
        }
        return <div className="weekContainer">{weekDays}</div>;
    };
    
    
    const generateDatesForCurrentWeek = (date, selectedDate, activeDate) => {
        let currentDate = date;
        const week = [];

        for (let day = 0; day < 7; day++) {
          const cloneDate = currentDate;
          const formattedDate = format(currentDate, "yyyy-MM-dd");
    
          const schedulesForDate = getSchedulesForDate(cloneDate);
          const numSchedules = schedulesForDate.length;
  
          const hasSchedules = numSchedules > 0;
          const hasFewSchedules = numSchedules === 1;
          const hasManySchedules = numSchedules >= 2;

          week.push(
            <div
              className={`day ${
                isSameMonth(currentDate, activeDate) ? "" : "inactiveDay"
              } ${isSameDay(currentDate, selectedDate) ? "selectedDay" : ""}
              ${isSameDay(currentDate, new Date()) ? "today" : ""}
              ${isSameDay(currentDate, new Date()) ? "" : hasSchedules ? "hasSchedules" : ""}
              ${isSameDay(currentDate, new Date()) ? "" : hasFewSchedules ? "hasFewSchedules" : ""}
              ${isSameDay(currentDate, new Date()) ? "" : hasManySchedules ? "hasManySchedules" : ""}`}
              onClick={() => {
                setSelectedDate(cloneDate);
                setSelectedSchedules(getSchedulesForDate(cloneDate)); // Update selected schedules
                // setSelectedModalDate(cloneDate); // Pass the selected date to handleShow
              }}
            >
              {format(currentDate, "d")}
            </div>
          );
          currentDate = addDays(currentDate, 1);
        }
        return <>{week}</>;
      };

      const getSchedulesForDate = (date) => {
        const formattedDate = format(date, "yyyy-MM-dd");
        return availabilityCalenderSingleDayData.filter((work) => work.date === formattedDate);
      };
    
      const getDates = () => {
        const startOfTheSelectedMonth = startOfMonth(activeDate);
        const endOfTheSelectedMonth = endOfMonth(activeDate);
        const startDate = startOfWeek(startOfTheSelectedMonth);
        const endDate = endOfWeek(endOfTheSelectedMonth);
    
        let currentDate = startDate;
    
        const allWeeks = [];
    
        while (currentDate <= endDate) {
          allWeeks.push(
            generateDatesForCurrentWeek(currentDate, selectedDate, activeDate)
          );
          currentDate = addDays(currentDate, 7);
        }
    
        return <div className="weekContainer">{allWeeks}</div>;
      };
      

    
    return(
        <div className="ms-lg-4">
             {/* Page Title*/}
             <span className="align-self-start" style={{fontSize:"28px",fontWeight:"600"}}>Availability Calendar</span>
             <div className="spCalendar-container mt-4 d-flex flex-row">
                    <div className="Sp-div-calendar w-xl-50 w-100">
                        <div className="p-3 border rounded">

                            {getHeader()}
                            {getWeekDaysNames()}
                            {getDates()}

                        </div>
                        <Button className="mt-3 d-flex ms-auto btn-ServiceProvider-1" onClick={() => handleShow(activeDate)}>Add Schedule</Button>
                    </div>

                    <div className="div-schedules w-xl-50 w-100">
                            <div className=" col-lg-10 col-12 ms-lg-5 mt-xl-0 mt-4">
                                        <span style={{fontSize:"24px"}}>Schedule for {format(selectedDate, "yyyy-MM-dd")}</span>    {/* date is not rendering */}      
                            </div>

                            {selectedSchedules.map((work) => (
                                <Col key={work.id} className="col-lg-12 col-12 ms-lg-5">
                                    <div className="col-lg-10 px-3 mt-1">
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
                                                        <span className="spCalendar-comment-body-text" style={{fontWeight:"500"}}>{work.description}</span>
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

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff'}}>
                        <Modal.Title>Schedule Visitation</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Date</Form.Label>
                        <Form.Control className='mb-2' type="date" value={format(selectedDate, "yyyy-MM-dd")}  onChange={(e)=>setSelectedDate(new Date(e.target.value))} autoFocus />

                        <Form.Label>Start Time</Form.Label>
                        <Form.Control className='mb-2' type="time" placeholder="" autoFocus/>
                        
                        <Form.Label>End Time</Form.Label>
                        <Form.Control className='mb-2' type="time" placeholder="" autoFocus/>

                        <Form.Label>Description</Form.Label>
                        <Form.Control className='mb-2' type="text" placeholder="" autoFocus/>

                        </Form.Group>

                    </Form>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button className='btn-ServiceProvider-2' onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button className='btn-ServiceProvider-1' onClick={handleClose}>
                        Schedule
                    </Button>
                    </Modal.Footer>
                </Modal>

        </div>
    );
}

export default SpCalendar;