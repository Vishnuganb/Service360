import '../../../../style/Customer/ViewSPCard.css';
import UserImg from '../../../../assets/images/header/user.jpg'
import ServiceProvideimg from '../../../../assets/images/Customer/ServiceProvider1.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import BgImage from '../../../../assets/images/header/Background.png';

const Popup = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="cutomerShareSP_primary" onClick={handleShow}>
        <i className="bi bi-share h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ position: "relative", bottom: "1.5px",  }}>Share</span>
        </Button>
  
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Share through</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <center><p><i className="bi bi-whatsapp"></i>&nbsp;&nbsp;&nbsp;&nbsp;<i className="bi bi-facebook"></i> &nbsp;&nbsp;&nbsp;&nbsp;<i className="bi bi-instagram"></i></p></center>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };
  
  const rating = 4;

function ViewSPCard(){
    return (
      <div className="single-SP-card" style={{ backgroundImage: `url(${BgImage})` }} >
        <div className="SP-card-header">
          <Row>
            <Col>
              <img src={ServiceProvideimg} alt="avatar" className="SP-card-avatar" />
            </Col>
            <Col>
                <span className="SP-card-title">Alex</span>
            </Col>
            <Col>
              <NavDropdown id="Single-item-Dropdown">
                <NavDropdown.Item href="#action3">Alex Kumar</NavDropdown.Item>
              </NavDropdown>
            </Col>
            <Col className='star' style={{width:"200px", marginTop:'-40px'}}>
            <div className='SPRatings'>
          <div className='rating'>
            <span className={`star ${rating >= 1 ? 'filled' : ''}`}>&#9733;</span>
            <span className={`star ${rating >= 2 ? 'filled' : ''}`}>&#9733;</span>
            <span className={`star ${rating >= 3 ? 'filled' : ''}`}>&#9733;</span>
            <span className={`star ${rating >= 4 ? 'filled' : ''}`}>&#9733;</span>
            <span className={`star ${rating >= 5 ? 'filled' : ''}`}>&#9733;</span>
          </div>
          </div>
           </Col>
          </Row>
        </div>
       
        <div className="SP-card-body">
          <div className="SP-card-body-left">
          {/* <span className="single-SP-status" id="SP-status">
          <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
            </span>
            <br /> */}
            <span className="sinlge-SP-sub-info">Tile Fitting | Member since june 23 2022</span>
            <br />
           
            <span className="sinlge-SP-sub-info">  <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: Wellawatte
        </span>
            <br />
            <span className="SP-contact-info">
               Contact number: 0713622131
            </span>
            <br />
          </div>
        </div>
        
        <hr />
        <div className="SP-card-footer">
          <span
            className="btn btn-default SP-card-footer-btn"
            id="SP-card-footer-btn-view"
          >
            <i className="bi bi-eye h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ position: "relative", bottom: "1.5px" }}>View Profile</span>
          </span>
          
          <span
            className="btn btn-default SP-card-footer-btn"
            id="SP-card-footer-btn-share"
          >
            <Popup/>
            
          </span>
        </div>
      </div>
    );

}

export default ViewSPCard;