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
              aria-label="Search"
            />
          </Form>
          <Nav
            className="mx-3 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            id="nav-filter"
          >
            <NavDropdown title="Select Service Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Painting</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Carpentry</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Masonary</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Electrical</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Plumbing</NavDropdown.Item>
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
                    <Row id='bodyPageRow1'>
                        <div className="ServiceCardContainer col-md-12 col-sm-12" >
 
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
    );

}

export default ViewAservice;