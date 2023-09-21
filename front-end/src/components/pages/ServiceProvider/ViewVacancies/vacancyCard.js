import '../../../../style/ServiceProvider/ViewVacancies.css'
import CompanyImg from '../../../../assets/images/header/user.jpg'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavDropdown from 'react-bootstrap/NavDropdown';

function jobCard(){
    return(
        <div className='single-vacancy-card' >
            <div className='vacancy-card-header'>
                <Row>
                    <Col>
                        <img src={CompanyImg} alt='avatar' className='vacancy-card-avatar'/>
                    </Col>
                    <Col>
                        <Row>
                            <span className='vacancy-card-title'>Aptinex</span>
                        </Row>
                        <Row>
                            <span className='vacancy-card-date'>1 day ago</span>
                        </Row>
                    </Col>
                    <Col>
                        <NavDropdown id="Single-item-Dropdown">
                            <NavDropdown.Item href="#action3">View more</NavDropdown.Item>
                        </NavDropdown>
                    </Col>
                </Row>
            </div>
            <div className='vacancy-card-body'>
                <div className='vacancy-card-body-left'>
                    <span className='vacancy-location-info'>
                        <i className="bi bi-geo-alt-fill"></i>&nbsp;
                        Location: Wellawatte
                    </span><br/>
                    <span className='single-vacancy-title'>Electronics Technician</span>&nbsp;&nbsp;
                    <span className='single-vacancy-type' id='vacancy-status'>full-time</span><br/>
                    <span className='single-vacancy-description'>Need to fix inverter need to wiring</span><br/>
                    <span className='sinlge-vacancy-expiry-info'>Urgent | Electrician</span><br/>
                </div>
            </div>
            <hr/>
            <div className='vacancy-card-footer'>
                <span className='btn btn-default vacancy-card-footer-btn' id='vacancy-card-footer-btn-view'>
                    <i className="bi bi-file-earmark-plus h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{position:"relative",bottom:"1.5px"}}>Apply for Job</span>
                </span>
            </div>
        </div>
    );

}

export default jobCard;