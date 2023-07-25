import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../../../style/ServiceProvider/ViewJobs.css'

function bodyNav() {

  return (
    <Navbar expand="lg md sm" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Collapse className="body-nav-container" id="navbarScroll">
          <Form className="nav-search">
            <Form.Control
              type="search"
              placeholder=""
              className="me-2"
              aria-label="Search"
            />
            <Button id="view-jobs-button">Search</Button>
          </Form>
          <Nav
            className="mx-3 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            id="nav-filter"
          >
            <NavDropdown title="Select Job Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Painting</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Carpentry</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Masonary</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Electrical</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Plumping</NavDropdown.Item>
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
  );
}

export default bodyNav;