import '../../../style/User/ViewAjob.css';
import Container from 'react-bootstrap/Container';
import ServiceProvideimg1 from '../../../assets/images/Customer/ServiceProvider1.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserImg from '../../../assets/images/header/user.jpg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import JobCard from './JobCard';
import Customer1 from '../../../assets/images/ServiceProvider/customer1.jpg';
import Customer2 from '../../../assets/images/ServiceProvider/customer2.jpg';
import Customer3 from '../../../assets/images/ServiceProvider/customer3.jpg';
import Customer4 from '../../../assets/images/ServiceProvider/customer4.jpg';
import Customer5 from '../../../assets/images/ServiceProvider/customer5.jpg';


function ViewAjob() {

  const itemsPerPage = 4;
  const [activePage, setActivePage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  const jobsCardData = [
    {
      avatarImage: Customer1,
      customername: 'Pranavan',
      title: 'Tv Repair',
      subInfo: 'Need to fix Tv and wiring',
      location: 'Wellawatte',
      dateposted: '2 days ago',
      duedate: '2021-08-19',
    },

    {
      avatarImage: Customer2,
      customername: 'Visnugan',
      title: 'Tiles fitting at House',
      subInfo: 'Fit tiles for full house',
      location: 'Dehiwala',
      dateposted: '6 days ago',
      duedate: '2021-08-01',
    },
    {
      avatarImage: Customer3,
      customername: 'Karthikeyan',
      title: 'Build Wall',
      subInfo: 'Build a Congrete wall around house',
      location: 'Colombo',
      dateposted: '12 day ago',
      duedateposted: '8 days ago'
    },
    {
      avatarImage: Customer4,
      customername: 'Mithilan',
      title: 'House Cleaning',
      subInfo: 'Fix electrical outlets in the kitchen',
      location: 'Galle',
      dateposted: '1 day ago',
      duedate: '2021-08-02',
    },
    {
      avatarImage: Customer5,
      customername: 'Naresh',
      title: 'Build House',
      subInfo: 'Build a House with five rooms within two month',
      location: 'Colombo',
      dateposted: '5 days ago',
      duedate: '2021-08-12',
    },
  ];


  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredServiceCardData = jobsCardData.filter((cardData) =>
    cardData.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (locationFilter === '' || cardData.location.toLowerCase() === locationFilter.toLowerCase())
  );

  const displayedServiceCards = filteredServiceCardData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredServiceCardData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    setActivePage(1);
  };

  const handleLocationFilterChange = (event) => {
    const { value } = event.target;
    setLocationFilter(value);
    setActivePage(1);
  };
  return (
    <div className="bodyPageContainer-SP">
      <div className="bodyPageContainer-SP">

        <Row id="bodyPageRow1">
          <div className="back-button" onClick={handleBackClick} style={{ marginLeft: '120px' }}>
            <div className="back-icon">
              <i className="bi bi-arrow-left-circle-fill fs-3"></i>
            </div>
            <div className="back-text">
              <p className="m-0 p-0">Back</p>
            </div>
          </div>
          <div className="ServiceCardContainer col-lg-12 col-md-12 col-sm-12" style={{ overflow: 'auto', height: '50%' }}>
            <div className="search-container">

              <Row><Col>  <div className="d-flex flex-row">  <input
                type="text"
                placeholder="Search"
                className="form-control training-nav-input"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                  width: '200px',
                  marginright: '200px'
                }}
              /> <span className="input-group-text training-nav-input">
                  <i class="fas fa-search"></i>
                </span></div></Col>
                <Col><div className="d-flex flex-row">
                  <select
                    value={locationFilter}
                    onChange={handleLocationFilterChange}
                    className="form-control training-nav-input"
                    style={{
                      marginLeft: '300px',
                      height: '43px',
                      width: '200px'
                    }}
                  >
                    <option value="">Filter by Locations</option>
                    <option value="wellawatte">Wellawatte</option>
                    <option value="colombo">Colombo</option>
                    <option value="Ampara">Ampara</option>
                    <option value="Anuradhapura">Anuradhapura</option>
                    <option value="Badulla">Badulla</option>
                    <option value="Batticaloa">Batticaloa</option>
                    <option value="Colombo">Colombo</option>
                    <option value="Galle">Galle</option>
                    <option value="Gampaha">Gampaha</option>
                    <option value="Hambantota">Hambantota</option>
                    <option value="Jaffna">Jaffna</option>
                    <option value="Kalutara">Kalutara</option>
                    <option value="Kandy">Kandy</option>
                    <option value="Kegalle">Kegalle</option>
                    <option value="Kilinochchi">Kilinochchi</option>
                    <option value="Kurunegala">Kurunegala</option>
                    <option value="Mannar">Mannar</option>
                    <option value="Matale">Matale</option>
                    <option value="Matara">Matara</option>
                    <option value="Monaragala">Monaragala</option>
                    <option value="Mullaitivu">Mullaitivu</option>
                    <option value="Nuwara Eliya">Nuwara Eliya</option>
                    <option value="Polonnaruwa">Polonnaruwa</option>
                    <option value="Puttalam">Puttalam</option>
                    <option value="Ratnapura">Ratnapura</option>
                    <option value="Trincomalee">Trincomalee</option>
                    <option value="Vavuniya">Vavuniya</option>
                  </select></div></Col></Row>
            </div>
            <br />
            {displayedServiceCards.map((cardData, index) => (
              <JobCard
                key={index}
                avatarImage={cardData.avatarImage}
                title={cardData.title}
                subInfo={cardData.subInfo}
                location={cardData.location}
                dateposted={cardData.dateposted}
                contactNumber={cardData.contactNumber}
                customername={cardData.customername}
                duedate={cardData.duedate}
              />
            ))}
          </div>
        </Row>
        <Row>
          <div className="pagination justify-content-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`pagination-element ${activePage === index + 1 ? 'active' : ''}`}
                style={{ backgroundColor: '#292D32', color: '#fff', width: '35px', height: '35px', fontSize: '16px' }}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </Row>
      </div>
    </div>
  );
}

export default ViewAjob;