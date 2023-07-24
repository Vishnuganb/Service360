import Card from "react-bootstrap/Card";
import { Col, Container, Row } from 'react-bootstrap';
import '../../../../style/ServiceProvider/Dashboard.css'


function Overview() {
  return (
    <>
        <Row>
            <Card className="card-sp-dashboard dashboard-button-1 ">
                <Card.Body>
                <Card.Title>24</Card.Title>
                <Card.Text className="card-body-container">
                    Jobs Completed
                    <i className="bi bi-tools"></i>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card-sp-dashboard dashboard-button-2">
                <Card.Body>
                <Card.Title>3</Card.Title>
                <Card.Text className="card-body-container">
                    Ongoing job
                    <i className="bi bi-rocket-takeoff"></i>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card-sp-dashboard dashboard-button-3">
                <Card.Body>
                <Card.Title>2</Card.Title>
                <Card.Text className="card-body-container">
                    Pending Jobs
                    <i className="bi bi-hourglass-top"></i>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="card-sp-dashboard dashboard-button-4">
                <Card.Body>
                <Card.Title>14</Card.Title>
                <Card.Text className="card-body-container">
                    Reviews
                    <i className="bi bi-pass"></i>
                </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    </>
  );
}

export default Overview;
