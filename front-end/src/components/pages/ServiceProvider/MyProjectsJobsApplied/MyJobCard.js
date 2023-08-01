import '../../../../style/ServiceProvider/ViewJobs.css'
import UserImg from '../../../../assets/images/header/user.jpg'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyJobCard(){
    return (
      <div className="single-my-job-card">
        <div className="my-job-card-header">
          <Row>
            <Col>
              <img src={UserImg} alt="avatar" className="my-job-card-avatar" />
            </Col>
            <Col>
              <Row>
                <span className="my-job-card-title">Painting</span>
              </Row>
              <Row>
                <span className="my-job-card-date">2 days ago</span>
              </Row>
            </Col>
            <Col>
              <NavDropdown id="Single-item-Dropdown">
                <NavDropdown.Item href="#action3">View more</NavDropdown.Item>
              </NavDropdown>
            </Col>
          </Row>
        </div>
        <div className="my-job-card-body">
          <div className="my-job-card-body-left">
            <span className="sinlge-my-job-sub-info">Urgent | Electrician</span>
            <br />
            <span className="my-job-location-info">
              <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: Wellawatte
            </span>
            <br />
          </div>
        </div>
        <hr />
        <div className="my-job-card-footer">
          <span
            className="btn btn-default my-job-card-footer-btn"
            id="my-job-card-footer-btn-view"
          >
            <i className="bi bi-eye h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ position: "relative", bottom: "1.5px" }}>View</span>
          </span>
        </div>
      </div>
    );

}

export default MyJobCard;