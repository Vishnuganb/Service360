import '../../../../style/ServiceProvider/ViewJobs.css'
import UserImg from '../../../../assets/images/header/user.jpg'
import Col from 'react-bootstrap/Col';

function MyVacancyCard(){
    return (
      <div className="single-my-vacancy-card">
        <div className="my-vacancy-card-header">
            <Col className='col-12 d-flex flex-row'>
                <img src={UserImg} alt="avatar" className="my-vacancy-card-avatar vertical-align" />
                <Col className='my-vacancy-card-header-inner-col'>
                  <span className="my-vacancy-card-title ms-3">Electronics Technician</span>         
                  <span className="my-vacancy-card-company ms-3">Aptinex</span>
                  <span className="my-vacancy-card-time ms-3">5 days ago</span>
                </Col>
            </Col>
        </div>
        <div className="my-vacancy-card-body">
          <div className="my-vacancy-card-body-left">
            <span className="sinlge-my-vacancy-sub-info">Urgent | Electrician</span>
            <br />
            <span className="my-vacancy-location-info">
              <i className="bi bi-geo-alt-fill"></i>&nbsp; Location: Wellawatte
            </span>
            <br />
          </div>
        </div>
        <hr />
        <div className="my-vacancy-card-footer d-flex flex-row">
          <span
            className="btn btn-default my-vacancy-card-footer-btn"
            id="my-vacancy-card-footer-btn-view"
          >
            <i className="bi bi-check-circle h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ position: "relative", bottom: "1.5px" }}>Accept</span>
          </span>
          <span
            className="btn btn-default my-vacancy-card-footer-btn"
            id="my-vacancy-card-footer-btn-view"
          >
            <i className="bi bi-x-circle h5"></i>&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{ position: "relative", bottom: "1.5px" }}>Reject</span>
          </span>
        </div>
      </div>
    );

}

export default MyVacancyCard;