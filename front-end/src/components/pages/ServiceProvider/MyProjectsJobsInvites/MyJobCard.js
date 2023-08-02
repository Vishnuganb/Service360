import '../../../../style/ServiceProvider/ViewJobs.css'
import UserImg from '../../../../assets/images/header/user.jpg'
import Col from 'react-bootstrap/Col';

function MyJobCard(){
    return (
      <div className="single-my-job-card">
        <div className="my-job-card-header">
            <Col className='col-12 d-flex flex-row'>
                <img src={UserImg} alt="avatar" className="my-job-card-avatar" />
                <Col className='my-job-card-header-inner-col'>
                  <span className="my-job-card-title ms-3">Painting</span>         
                  <span className="my-job-card-date ms-3">2 days ago</span>
                </Col>
            </Col>
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
        <div className="my-job-card-footer d-flex flex-row">
          <span
            className="btn btn-default my-job-card-footer-btn"
            id="my-job-card-footer-btn-view"
          >
            <i className="bi bi-check-circle h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ position: "relative", bottom: "1.5px" }}>Accept</span>
          </span>
          <span
            className="btn btn-default my-job-card-footer-btn"
            id="my-job-card-footer-btn-view"
          >
            <i className="bi bi-x-circle h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ position: "relative", bottom: "1.5px" }}>Reject</span>
          </span>
        </div>
      </div>
    );

}

export default MyJobCard;