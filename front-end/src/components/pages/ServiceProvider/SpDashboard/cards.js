import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import '../../../../style/ServiceProvider/Dashboard.css'
import profile_img_2 from '../../../../assets/images/ServiceProvider/my_profile_2.jpg'
import services_img from '../../../../assets/images/ServiceProvider/my_services.jpg'
import blog_img from '../../../../assets/images/ServiceProvider/my_blog.jpg'


function BasicExample() {
  return (
    <>
     <Row>
            <Card className="dashboard-pages">
                <img className="card-img-top" src={profile_img_2} alt="my profile"/>
                <Card.Body>
                  <Card.Text>
                      My Profile
                      <a href="#myProfile"><i className="bi bi-arrow-right-circle h3 text-dark"></i></a>
                  </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card dashboard-pages ">
                <img className="card-img-top" src={services_img} alt="my projects"/>
                <Card.Body>
                  <Card.Text>
                      My Projects
                      <a href="#myProjects"><i className="bi bi-arrow-right-circle h3 text-dark"></i></a>
                  </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card dashboard-pages ">
                <img className="card-img-top" src={blog_img} alt="my blogs"/>
                <Card.Body>
                  <Card.Text>
                      My Blogs
                      <a href="#myBlogs"><i className="bi bi-arrow-right-circle h3 text-dark"></i></a>
                  </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    </>
  );
}

export default BasicExample;