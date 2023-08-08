import '../../../style/User/ServiceCard.css';
import Pagination from 'react-bootstrap/Pagination';
import ServiceCard  from './ServiceCard';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ViewAservice() {

    return (
        
          <div className="bodyPageContainer-SP">
            <Navbar expand="lg md sm" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse className="body-nav-container" id="navbarScroll">
          <Form className="nav-search">
            <Form.Control
              type="search"
              placeholder=""
              className=""
            /><span className="input-group-text">
            <i className="bi bi-search"></i>
        </span>
          </Form>
         
                                    
                                
          <Nav
            className="mx-3 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            id="nav-filter"
          >
            <NavDropdown title="Select Service Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Interior Works</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Electrical and Plumbing</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Construction</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Security</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Cleaning</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Select Service Name" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Carpentry</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Painting</NavDropdown.Item>
              <NavDropdown.Item href="#action4">AC Repair</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Electrical Wiring</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Plumbing</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Masonary</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Tiles Fitting</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Iron Works</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Glass Aluminum</NavDropdown.Item>
              <NavDropdown.Item href="#action4">CCTV Repair</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Fire Alarm</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Video Surveillance</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Sofa cleaning</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Carpet cleaning</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title="Filter by Location" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">All Island</NavDropdown.Item>
              <NavDropdown.Item >or</NavDropdown.Item>
              &nbsp; &nbsp;
              <input type="range" name="distance" min="1km" max="50km" />               {/*ADD LOCATION PART IS REMAINING*/}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="bodyPageContainer-SP">
                    <Row id='bodyPageRow1'>
                        <div className="ServiceCardContainer col-lg-12 col-md-12 col-sm-12" style={{ overflow: 'auto' }} >
                            <ServiceCard/>
                            <ServiceCard/>
                            <ServiceCard/>
                            <ServiceCard/>
                        </div>
                    </Row>
                    <Row id='bodyPageRow2'>
                        <div className="paginationContainer-SP" >
                            <Pagination className='pagination-element'>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Item>{4}</Pagination.Item>
                                <Pagination.Item>{5}</Pagination.Item>
                                <Pagination.Ellipsis />
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </div>
                    </Row>
          </div>
          </div>
    );

}

export default ViewAservice;