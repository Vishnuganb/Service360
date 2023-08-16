import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceProvideimg from '../../../assets/images/Customer/ServiceProvider1.png';
import img1 from '../../../assets/images/Customer/img2.jpeg';
import img2 from '../../../assets/images/Customer/img3.jpeg';
import img3 from '../../../assets/images/Customer/img4.jpeg';
import '../../../style/Customer/ViewServiceProvider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComment, faStar } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function ViewServiceProvider() {
  const rating = 4;

  return (
    <div className="SPBox ">
      <img className='SPImg' src={ServiceProvideimg} alt="profile-image" />
      <div className='SPProfile'>
        <span className='SPname'> Alex </span>
        <span className='SPActive'> Last Active 5 days ago </span>
        <div class="SPDetail">
          <p className='p1'> Member Since 2022 </p>
          <p className='p1'>Service : Phone Repair &nbsp; | &nbsp; Location : Dehiwala</p>
          <p className='p1'>Description </p>
          <p className='Des border p-3' >Iphone unlocking Software and hardware, Display replacing, Battery replacing, All kind Mobile can be repaired</p>
        </div>

        <div className='SPContact'>
          <div className='contacticon'>
            <a href="#getcall" className='SPNo'>
              <FontAwesomeIcon icon={faPhone} />
              &nbsp; &nbsp; 0705844693
            </a>
          </div>

        </div>
        <hr className='line'></hr>

        <div className='SPContact'>
          <div className='contacticon'>
            <a href='#Chat' className='SPNo'>
              <FontAwesomeIcon icon={faComment} />
              &nbsp; &nbsp; Chat
            </a>
          </div>
          <br></br>
        </div>
        <hr className='line'></hr>

        <div className='SPImageCarousel'>
          <Carousel>
            <Carousel.Item>
            <img
                className="d-block w-100 img-fluid"
                src={img1}
                alt="Third slide"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100 img-fluid"
                src={img3}
                alt="Third slide"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 img-fluid"
                src={img2}
                alt="Third slide"
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
            </Carousel.Item>

          </Carousel>
        </div>

        <div className='SPReqButtons'>
          <Link to={`/customer/JobRequest`}> 
            <button className='SPRequestjob'> Request for job </button></Link>
          

         <Link to={`/customer/Quotation`}> 
            <button className='SPRequestquotation'> Request for quotation</button>
          </Link>
        </div>

        <div className='SPRatings'>
          <p className='ratereview'> Ratings and Reviews (24 Jobs)</p>
          <div className='rating'>
            <span className={`star ${rating >= 1 ? 'filled' : ''}`}>&#9733;</span>
            <span className={`star ${rating >= 2 ? 'filled' : ''}`}>&#9733;</span>
            <span className={`star ${rating >= 3 ? 'filled' : ''}`}>&#9733;</span>
            <span className={`star ${rating >= 4 ? 'filled' : ''}`}>&#9733;</span>
            <span className={`star ${rating >= 5 ? 'filled' : ''}`}>&#9733;</span>
          </div>

          <Card style={{ width: 'auto' }}>
            <Card.Body>
              <Card.Title>Diana</Card.Title>
              <div className='rating'>
                <span className={`star ${rating >= 1 ? 'filled' : ''}`}>&#9733;</span>
                <span className={`star ${rating >= 2 ? 'filled' : ''}`}>&#9733;</span>
                <span className={`star ${rating >= 3 ? 'filled' : ''}`}>&#9733;</span>
                <span className={`star ${rating >= 4 ? 'filled' : ''}`}>&#9733;</span>
                <span className={`star ${rating >= 5 ? 'filled' : ''}`}>&#9733;</span>
              </div>
              <Card.Text>
                Nice experience 👍
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br> <br></br>

          <Card style={{ width: 'auto' }}>
            <Card.Body>
              <Card.Title>Diana</Card.Title>
              <div className='rating'>
                <span className={`star ${rating >= 1 ? 'filled' : ''}`}>&#9733;</span>
                <span className={`star ${rating >= 2 ? 'filled' : ''}`}>&#9733;</span>
                <span className={`star ${rating >= 3 ? 'filled' : ''}`}>&#9733;</span>
                <span className={`star ${rating >= 4 ? 'filled' : ''}`}>&#9733;</span>
                <span className={`star ${rating >= 5 ? 'filled' : ''}`}>&#9733;</span>
              </div>
              <Card.Text>
                Nice experience 👍
              </Card.Text>
            </Card.Body>
          </Card>
          <br></br> <br></br>
          <Card style={{ width: 'auto' }}>
            <Card.Body>
              <Card.Title>Diana</Card.Title>
              <div className='rating'>
                <span className={`star ${rating >= 1 ? 'filled' : ''}`}>&#9733;</span>
                <span className={`star ${rating >= 2 ? 'filled' : ''}`}>&#9733;</span>
                <span className={`star ${rating >= 3 ? 'filled' : ''}`}>&#9733;</span>
                <span className={`star ${rating >= 4 ? 'filled' : ''}`}>&#9733;</span>
                <span className={`star ${rating >= 5 ? 'filled' : ''}`}>&#9733;</span>
              </div>
              <Card.Text>
                Nice experience 👍
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>

  );
}

export default ViewServiceProvider;
