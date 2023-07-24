import '../../../../style/ServiceProvider/ViewJobs.css'
import UserImg from '../../../../assets/images/header/user.jpg'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavDropdown from 'react-bootstrap/NavDropdown';

function jobCard(){
    return(
        <div className='single-job-card' >
            <div className='job-card-header'>
                <Row>
                    <Col>
                        <img src={UserImg} alt='avatar' className='job-card-avatar'/>
                    </Col>
                    <Col>
                        <Row>
                            <span className='job-card-title'>Pranavan</span>
                        </Row>
                        <Row>
                            <span className='job-card-date'>2 days ago</span>
                        </Row>
                    </Col>
                    <Col>
                        <NavDropdown id="Single-item-Dropdown">
                            <NavDropdown.Item href="#action3">View more</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                </Row>
            </div>
            <div className='job-card-body'>
                <div className='job-card-body-left'>
                    <span className='single-job-status' id='job-status'>New</span><br/>
                    <span className='single-job-title'>Painting</span><br/>
                    <span className='sinlge-job-sub-info'>Urgent | Electrician</span><br/>
                    <span className='job-location-info'>
                        <i className="bi bi-geo-alt-fill"></i>&nbsp;
                        Location: Wellawatte
                    </span><br/>
                    <span className='single-job-description'>Need to fix inverter need to wiring</span><br/>
                </div>
            </div>
            <hr/>
            <div className='job-card-footer'>
                <span className='btn btn-default job-card-footer-btn' id='job-card-footer-btn-view'>
                    <i className="bi bi-eye h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{position:"relative",bottom:"1.5px"}}>View</span>
                </span>
                <span className='btn btn-default job-card-footer-btn' id='job-card-footer-btn-comment'>
                    <i className="bi bi-chat-square-dots h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{position:"relative",bottom:"1.5px"}}>Comment</span>
                </span>
                <span className='btn btn-default job-card-footer-btn' id='job-card-footer-btn-share'>
                    <i className="bi bi-share h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{position:"relative",bottom:"1.5px"}}>Share</span>
                </span>
            </div>
        </div>
    );

}

export default jobCard;