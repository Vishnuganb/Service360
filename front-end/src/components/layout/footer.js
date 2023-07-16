import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone, faPrint } from '@fortawesome/free-solid-svg-icons';
import '../../style/Footer.css';


export default function App() {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    function goTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <footer className='text-center text-lg-start text-muted' style={{ background:'#818181'}}>

            <section className='' style={{ background: '#818181' }}>
                <Container className='text-center text-md-start mt-5'>
                    <Row className='mt-3'>
                        
                        <Col md={2} lg={4} xl={3} className='mx-auto mb-4 mt-4' >
                            <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
                            <p>
                                <a href='#!' className='text-reset' >
                                    About our Company
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Services we provide
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Career & Opportunities
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Privacy & Policy
                                </a>
                            </p>
                        </Col>

                        <Col md={4} lg={4} xl={3} className='mx-auto mb-md-0 mb-4 mt-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact Us</h6>
                            <p>
                                <FontAwesomeIcon icon={faHome} className='me-2' />
                                Nelson Place, Colombo, Sri Lanka
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} className='me-3' />
                                Service360@example.com
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPhone} className='me-3' /> + 01 234 567 88
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faPrint} className='me-3' /> + 01 234 567 89
                            </p>
                        </Col>

                        <Col md={3} lg={4} xl={3} className='mx-auto mb-4 mt-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Follow Us</h6>
                            <div>
                                <a href='' className='me-5 text-reset'>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href='' className='me-5 text-reset'>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href='' className='me-5 text-reset'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href='' className='me-5 text-reset'>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © {new Date().getFullYear()} Service360. All Rights Reserved.
            </div>
            {
                showTopBtn && (<div className="go-top" onClick={goTop}></div>)
            }
        </footer>

    );
}
