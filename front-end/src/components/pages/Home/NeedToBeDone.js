import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

function NeedToBeDone() {
    return (
        <Container>
            <h3 className="text_needto">What do you need to be done</h3>
            <Row className="cardflex">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card className="card" key={i}>
                        <Card.Body>
                            <h5>IT</h5>
                            <FontAwesomeIcon icon={faNewspaper} size="lg" />
                        </Card.Body>
                    </Card>
                ))}
            </Row>
        </Container>
    );
}

export default NeedToBeDone;

