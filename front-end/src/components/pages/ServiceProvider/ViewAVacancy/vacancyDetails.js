import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserImg from "../../../../assets/images/header/user.jpg";
import Companyimage from "../../../../assets/images/ServiceProvider/company1.jpg";
import Button from "react-bootstrap/Button";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function VacancyDetails() {
  const [viewVacancyData, setviewVacancyData] = useState(null);

//     {
//         profile: UserImg,
//         id: 1,
//         customerName: 'Aptinex',
//         lastSeen: '2 days ago',
//         location: 'Battaramulla',
//         vacancyTitle: 'Electronics Technician',
//         vacancyType: 'full-time',
//         description: 'Need to fix Tv and wiring',
//         dueDate: '2023-08-29',
//         vacancyStatus: 'new',
//         serviceName: 'Electrical Wiring',
//         posted: '2023-08-01 ',
//         vacancyCount:6,
//         address: '44, T13, T14, Dedicated Economic Center Kirimandala Mawatha, Colombo -5' ,
//         qualifications:'Candidates with a minimum of 1 year and above work experience and trainees. Basic knowledge of laying the wiring using conduit and casing. Good communication skills Valid riding/ driving license will be a value-added qualification.',
//         responsibilities:'Perform routine maintenance and troubleshooting of electronic equipment.Identify and resolve electronic equipment malfunctions or failures by conducting diagnostic tests, analyzing circuitry. Assist in designing and modifying electronic circuits, including PCB layout, component selection, and soldering. Maintain accurate records of equipment maintenance, repair activities, and component inventory.'
//     },
//     {
//         profile: UserImg,
//         id: 2,
//         customerName: 'Hayleys',
//         lastSeen: '1 day ago',
//         location: 'Colombo',
//         vacancyTitle: 'Cleaning Staff',
//         vacancyType: 'full-time',
//         description: 'Clean sofas in the office',
//         dueDate: '2023-08-28',
//         vacancyStatus: 'new',
//         serviceName: 'Sofa Cleaning',
//         posted: '2023-08-05 ',
//         vacancyCount:3,
//         address: '123, ABC Lane, Colombo',
//         qualifications: 'Candidates with a minimum of 2 years of work experience in electronics repair. Proficiency in soldering and component-level diagnostics. Excellent problem-solving skills and attention to detail.',
//         responsibilities: 'Diagnose and repair complex electronic faults. Collaborate with engineering teams to troubleshoot and enhance product designs. Keep up to date with the latest electronic components and technologies.'
//     },
//     {
//         profile: UserImg,
//         id: 3,
//         customerName: 'Emerald',
//         lastSeen: '3 days ago',
//         location: 'Mount Lavinia',
//         vacancyTitle: 'Security Staff',
//         vacancyType: 'part-time',
//         description: 'CCTV monitoring and patrolling',
//         dueDate: '2023-08-30',
//         vacancyStatus: 'new',
//         serviceName: 'CCTV Systems Repair',
//         posted: '2023-08-09 ',
//         vacancyCount:2,
//         address: '789, XYZ Street, Dehiwala',
//         qualifications: 'Candidates with a diploma in Electronics Engineering. Experience in troubleshooting and repairing electronic devices. Strong analytical skills and ability to read schematics.',
//         responsibilities: 'Conduct functional tests on electronic systems. Repair and replace faulty components. Collaborate with cross-functional teams to improve product reliability and performance.'
//     },
//     {
//         profile: UserImg,
//         id: 4,
//         customerName: 'Arinos',
//         lastSeen: '1 week ago',
//         location: 'Dehiwala',
//         vacancyTitle: 'Masonry Worker',
//         vacancyType: 'full-time',
//         description: 'Build walls and other structures',
//         dueDate: '2023-08-25',
//         vacancyStatus: 'new',
//         serviceName: 'Masonry',
//         posted: '2023-07-18 ',
//         vacancyCount:11,
//         address: '456, PQR Avenue, Nugegoda',
//         qualifications: 'Candidates with hands-on experience in electronics repair. Ability to diagnose and repair a variety of electronic devices. Familiarity with safety protocols and industry standards.',
//         responsibilities: 'Inspect, diagnose, and repair electronic equipment. Maintain accurate records of repairs and parts used. Provide technical support to customers and address their inquiries.'
//     },
//     {
//         profile: UserImg,
//         id: 5,
//         customerName: 'Payzy',
//         lastSeen: '4 days ago',
//         location: 'Nugegoda',
//         vacancyTitle: 'Wooden furniture cleaner ',
//         vacancyType: 'half-time',
//         description: 'Clean wooden furniture in the office',
//         dueDate: '2023-08-27',
//         vacancyStatus: 'completed',
//         serviceName: 'Carpentry',
//         posted: '2023-08-06 ',
//         vacancyCount:3,
//         address: '789, MNO Road, Rajagiriya',
//         qualifications: 'Candidates with a degree in Electronics Engineering. Proven track record of repairing advanced electronic systems. Strong communication skills and ability to lead a team.',
//         responsibilities: 'Lead the electronic repair team. Develop repair strategies and ensure high-quality repairs. Collaborate with suppliers and vendors to source components and materials.'
//     },
//     {
//         profile: UserImg,
//         id: 6,
//         customerName: 'Veracity',
//         lastSeen: '2 weeks ago',
//         location: 'Rajagiriya',
//         vacancyTitle: 'AC Repair technician',
//         vacancyType: 'full-time',
//         description: 'Build an office building',
//         dueDate: '2023-08-24',
//         vacancyStatus: 'completed',
//         serviceName: 'Ac Repair',
//         posted: '2023-08-04 ',
//         vacancyCount:2,
//         address: '789, JKL Road, Colombo',
//         qualifications: 'Candidates with a diploma in Electrical Engineering. Experience in troubleshooting and repairing electronic systems. Knowledge of PLC programming and industrial control systems.',
//         responsibilities: 'Inspect and maintain industrial electronic systems. Troubleshoot and repair PLC-based control systems. Collaborate with production teams to ensure optimal equipment performance.'
//     },
//     {
//         profile: UserImg,
//         id: 7,
//         customerName: 'Wallspan',
//         lastSeen: '5 days ago',
//         location: 'Battaramulla',
//         vacancyTitle: 'Plumber',
//         vacancyType: 'part-time',
//         description: 'Provide plumbing services to the office',
//         dueDate: '2023-08-26',
//         vacancyStatus: 'completed',
//         serviceName: 'Plumbing',
//         posted: '2023-07-20 ',
//         vacancyCount:7,
//         address: '123, UVW Lane, Kotte',
//         qualifications: 'Candidates with a degree in Computer Engineering or related field. Experience in embedded systems development and debugging. Proficiency in programming languages like C/C++.',
//         responsibilities: 'Design and develop embedded systems for electronic devices. Debug and optimize software for efficient performance. Collaborate with hardware engineers to integrate software and hardware components.'
//     },
// ];

  const { id } = useParams();
  const vacancyId = parseInt(id, 10);

  useEffect(() => {
    axios.get(`http://localhost:8080/auth/viewVacancies/${vacancyId}`).then((res) => {
        console.log(res.data);
        setviewVacancyData(res.data);
    });
  }   , []);

  if (!viewVacancyData) return 'No Vacancy found!';


    return (
      <Row className="vacancyDetails-Col-container">
        <Col className="vacancyDetails-img-container col-12 col-lg-2 d-flex flex-column align-items-center">
          <div className="vacancyDetails-avatar-container mb-2">
              <img
              src={Companyimage}
              alt="avatar"
              className="vacancyDetails-avatar rounded-circle"
              style={{ width: "50px", height: "50px" }}
              />
          </div>
          <div
            className="vacancyDetails-username mb-1"
            style={{ fontSize:"18px",fontFamily: "'Rubik', sans-serif" }}
          >
            {viewVacancyData.customername}
          </div>
          <div>
            <Link to={`/ServiceProvider/ApplyVacancy/${viewVacancyData.vacancyid}`}>     
              <Button
                className="vacancyDetails-apply-btn btn-ServiceProvider-1 mt-2 mb-4"
                style={{ fontFamily: "'Rubik', sans-serif" }}
              >
                Apply
              </Button>
            </Link>
          </div>
        </Col>

        <Col className="vacancyDetails-details-container col-12 col-lg-10 d-flex flex-column">
          <div className="vacancyDetails-status-container mb-2">
            <span className="vacancyDetails-status me-2" id="vacancy-status" style={{fontSize:"16px",fontWeight:"400",padding:"4px 6px",border:"2px solid rgb(37, 199, 37)",borderRadius:"8px"}}>
              {viewVacancyData.vacancystatus}
            </span>
            <span className="vacancyDetails-status" id="vacancy-status" style={{fontSize:"16px",fontWeight:"400",padding:"4px 6px",border:"2px solid rgb(37, 199, 37)",borderRadius:"8px"}}>
              {viewVacancyData.vacancytype}
            </span>
          </div>
          <div className="vacancyDetails-title-container mb-2">
            <span className="jobDetails-title" style={{fontWeight:"650"}}>{viewVacancyData.vacancytitle}</span>
          </div>
          <div className="vacancyDetails-category-container mb-2 d-flex flex-column">
            <span className="jobDetails-category" style={{fontWeight:"650"}}>Category</span>
            <span className="jobDetails-category-value">{viewVacancyData.servicename}</span>
          </div>
          <div className="vacancyDetails-location-container mb-2 d-flex flex-column">
            <span className="jobDetails-location" style={{fontWeight:"650"}}>Location</span>
            <span className="jobDetails-location-value">{viewVacancyData.vacancylocation}</span>
          </div>
          <div className="vacancyDetails-dueDate-container mb-2 d-flex flex-row">
            <div>
              <span className="vacancyDetails-dueDate" style={{fontWeight:"650"}}>Due Date</span>
              <br />
              <span className="vacancyDetails-dueDate-value">{viewVacancyData.duedate}</span>
            </div>
            <div className="mx-4">
              <span className="vacancyDetails-posted" style={{fontWeight:"650"}}>Posted</span>
              <br />
              <span className="vacancyDetails-posted-value">{viewVacancyData.posteddate}</span>
            </div>
          </div>
          <div className="vacancyDetails-skills-container d-flex flex-column mb-2">
            <span className="vacancyDetails-skills" style={{fontWeight:"650"}}>Skills & Qualifications</span>
            <span className="vacancyDetails-skills-value">
                {viewVacancyData.qualifications}
            </span>
          </div>
          <div className="vacancyDetails-responsibility-container d-flex flex-column mb-2">
            <span className="vacancyDetails-responsibility" style={{fontWeight:"650"}}>Responsibilities</span>
            <span className="vacancyDetails-responsibility-value">
                {viewVacancyData.responsibilities}
            </span>
          </div>
          <div className="vacancyDetails-place-container d-flex flex-column mb-2">
            <span className="vacancyDetails-place-value text-success" style={{fontWeight:"650", fontSize:"19px"}}>
                {viewVacancyData.address}
            </span>
          </div>
          <div className="vacancyDetails-place-container d-flex flex-column mt-3 mb-3">
            <span className="vacancyDetails-place-value" style={{fontWeight:"600", fontSize:"15px"}}>
                (Please Click Apply Button to Apply for this Vacancy)
            </span>
          </div>
        </Col>
      </Row>
    );
  }
  
  export default VacancyDetails;
  