import Card from "react-bootstrap/Card";
import { Col, Container, Row } from 'react-bootstrap';
import '../../../../style/ServiceProvider/Dashboard.css'


function Overview() {
  return (
    <>
        <Row>
            <Card className="dashboard-button bg-secondary">
                <Card.Body>
                <Card.Title>24</Card.Title>
                <Card.Text>
                    Jobs Completed
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="dashboard-button bg-primary">
                <Card.Body>
                <Card.Title>3</Card.Title>
                <Card.Text>
                    Ongoing job
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="dashboard-button bg-warning">
                <Card.Body>
                <Card.Title>2</Card.Title>
                <Card.Text>
                    Pending Jobs
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="dashboard-button bg-danger">
                <Card.Body>
                <Card.Title>14</Card.Title>
                <Card.Text>
                    Reviews
                </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    </>
  );
}

export default Overview;
