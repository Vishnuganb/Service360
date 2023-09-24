import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ServiceProvideimg from '../../../assets/images/Customer/ServiceProvider1.png';
import img1 from '../../../assets/images/Customer/sofaclean1.jpg';
import img2 from '../../../assets/images/Customer/sofaclean2.jpg';
import img3 from '../../../assets/images/Customer/sofaclean3.jpeg';
import '../../../style/Customer/ViewServiceProvider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComment, faStar } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';
import { error } from 'jquery';
// import { Link } from 'react-router-dom';
// import { useEffect } from 'react';
// import axios from 'axios';

function ViewServiceProvider() {
  const [viewSpBlogs, setViewSpBlogs] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const rating = 4;
  const { id } = useParams();
  // const ViewServiceProvider = ({ match }) => {
  //   const rating = 4; 

  //   const serviceproviderid = match.params.id;

  //   useEffect(() => {
  //     axios.get('http://localhost:8080/auth/details/${serviceproviderid}')
  //       .then((response) => {
  //           setServiceProvider(response.data);

  //       })
  //       .catch((error) => {
  //         console.error(error);
  //     });
  //   }, [serviceproviderid]);

  const [serviceProvider, setServiceProvider] = useState({});

  const getServiceProvider=async()=>{
    const data=await axios.get("http://localhost:8080/auth/details")
    const filteredData = data.data.filter(item => item.serviceproviderid == id);
    setServiceProvider(filteredData[0])

  }

  useEffect(() => {
    getServiceProvider();
  });

  useEffect(() => {
    axios.get('http://localhost:8080/auth/viewServiceProviderBlogs').then((res) => {
        console.log(res.data);
        setViewSpBlogs(res.data);
    });
  }, []);

  if (!viewSpBlogs) return 'No jobs found!';

  const handlePrev = () => {
    setActiveIndex(activeIndex > 0 ? activeIndex - 1 : viewSpBlogs.length - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex < viewSpBlogs.length - 1 ? activeIndex + 1 : 0);
  };

  return (
    <div className="SPBox ">
      <img className='SPImg' src={ServiceProvideimg} alt="profile-image" />
      <div className='SPProfile'>
        <span className='SPname'>{serviceProvider.serviceprovidername}</span>
        <span className='SPActive'> Last Active 5 days ago </span>
        <div class="SPDetail">
          <p className='p1'> Member Since {serviceProvider.membershipdate} </p>
          <p className='p1'>Service : {serviceProvider.service}  &nbsp; | &nbsp; Location : {serviceProvider.location}</p>
          <p className='p1'> </p>
          <p className='Des border p-3' >{serviceProvider.description}</p>
        </div>

        <div className='SPContact'>
          <div className='contacticon'>
            <a href="#getcall" className='SPNo'>
              <FontAwesomeIcon icon={faPhone} />
              &nbsp; &nbsp; {serviceProvider.contact}
            </a>
          </div>
        </div>

        {/* <hr className='line'></hr>

        <div className='SPContact'>
          <div className='contacticon'>
            <a href='#Chat' className='SPNo'>
              <FontAwesomeIcon icon={faComment} />
              &nbsp; &nbsp; Chat
            </a>
          </div>
          <br></br>
        </div> */}
        <hr className='line'></hr>

        <div className='SPReqButtons'>
          <Link to={`/customer/JobRequest`}>
            <button className='SPRequestjob'> Request for job </button></Link>


          {/* <Link to={`/customer/Quotation`}>
            <button className='SPRequestquotation'> Request for quotation</button>
          </Link> */}
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

        
        {/* BLOGS SECTION */}
        <br />
        <div className='SPblogs'>
          <p className='blogstitle fs-5'> Blogs </p>

          {viewSpBlogs.map((Blog, index) => (
            <div
              key={index}
              className={`blogs-container border border-secondary p-4 ${index !== activeIndex ? 'd-none' : ''}`}
              style={{ borderRadius: "5px" }}
            >
              <div className='SPImageCarousel'>
              <Carousel interval={null}>
                <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={img1}
                  alt="Blog Image"
                  style={{ maxHeight: '300px', objectFit: 'cover' }}
                />
                </Carousel.Item>
                <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src={img1}
                  alt="Blog Image"
                  style={{ maxHeight: '300px', objectFit: 'cover' }}
                />
                </Carousel.Item>
              </Carousel>
              </div><br />

              <div className="d-flex flex-row">
                <div>
                  <p className='blogtitle' style={{ fontWeight: "600" }}> {Blog.blogtitle} </p>
                </div>
                <div className='ms-auto'>
                  <span className='blog-service'>{Blog.servicename}</span>
                </div>
              </div>
              <p className='blogdescription'> {Blog.blogdescription} </p>
            </div>
          ))}

          <div className="d-flex blog-bt-container justify-content-center">
            <div className="blog-bt-left me-3">
              <Button className='btn-ServiceProvider-2' onClick={handlePrev}>&lt;</Button>
            </div>
            <div className="blog-bt-right ms-3">
              <Button className='btn-ServiceProvider-2' onClick={handleNext}>&gt;</Button>
            </div>
          </div>
        </div>


      </div>
    </div>

  );
};

export default ViewServiceProvider;