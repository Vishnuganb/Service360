import Card from 'react-bootstrap/Card';
import '../../../../style/ServiceProvider/Dashboard.css'
import profile_img_2 from '../../../../assets/images/ServiceProvider/my_profile_2.jpg'
import services_img from '../../../../assets/images/ServiceProvider/my_services.jpg'
import blog_img from '../../../../assets/images/ServiceProvider/my_blog.jpg'


function BasicExample() {
  return (
      <div className='dashboard-bottom-card-container d-flex flex-row ms-lg-4 me-lg-4'>
              <Card className="dashboard-pages col-md-3 col-12">
              <img className="card-img-top" src={profile_img_2} alt="my profile" />
              <Card.Body>
                  <Card.Text className='card-text-container d-flex align-items-center flex-row'>
                      <span>My Profile</span>
                      <span className="d-flex ms-auto">
                          <i className="bi bi-arrow-right-circle"></i>
                      </span>
                  </Card.Text>
              </Card.Body>
          </Card>

          <Card className="dashboard-pages col-md-3 col-12">
              <img className="card-img-top" src={services_img} alt="my profile" />
              <Card.Body>
                  <Card.Text className='card-text-container d-flex align-items-center flex-row'>
                      <span>Ongoing Projects</span>
                      <span className="d-flex ms-auto">
                          <i className="bi bi-arrow-right-circle"></i>
                      </span>
                  </Card.Text>
              </Card.Body>
          </Card>

          <Card className="dashboard-pages col-md-3 col-12">
              <img className="card-img-top" src={blog_img} alt="my profile" />
              <Card.Body>
                  <Card.Text className='card-text-container d-flex align-items-center flex-row'>
                      <span>My Training Sessions</span>
                      <span className="d-flex ms-auto">
                          <i className="bi bi-arrow-right-circle"></i>
                      </span>
                  </Card.Text>
              </Card.Body>
          </Card>
      </div>

  );
}

export default BasicExample;