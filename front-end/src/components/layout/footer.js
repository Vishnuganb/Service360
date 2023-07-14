import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import '../../style/Footer.css';

const AppFooter = () => {

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
        <Container fluid className='footer'>
            <div className="copyright">&copy;{new Date().getFullYear()} Service 360. All Right Reserved. </div>
            <div className="socials">
                <ul>
                    <li><a href='https://www.facebook.com'><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href='https://www.twitter.com'><i className="fab fa-twitter"></i></a></li>
                    <li><a href='https://www.linkedin.com'><i className="fab fa-linkedin"></i></a></li>
                </ul>
            </div>
            {
                showTopBtn && (<div className="go-top" onClick={goTop}></div>)
            }
        </Container>
    )
}

export default AppFooter