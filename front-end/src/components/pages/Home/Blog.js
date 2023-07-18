import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
    {
        id: 1,
        image: require('../../../assets/images/home/blog-1.jpg'),
        time: '08 Aug 2023',
        title: '5 Essential Tips for Hiring the Perfect Service Provider',
        description: 'Explore five valuable insights to simplify the process of selecting an ideal service provider for your needs.',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        image: require('../../../assets/images/home/blog-2.jpeg'),
        time: '07 Aug 2023',
        title: 'Mastering the Art of Showcasing Your Skills as a Service Provider',
        description: 'Discover effective strategies to highlight your unique skills and excel as a service provider in a competitive market.',
        link: 'https://www.facebook.com'
    },
    {
        id: 3,
        image: require('../../../assets/images/home/blog-3.jpeg'),
        time: '06 Aug 2023',
        title: 'Boost Your Business with Effective Online Advertisements',
        description: 'Unlock the potential of online advertising and discover proven techniques to promote your products with maximum impact.',
        link: 'https://www.twitter.com'
    },
]

export default function AppBlog() {
    return (
        <section id="blog" className="block blog-block">
            <div className="title-holder">
                <h2>Latest from blog</h2>
                <div className="subtitle">Get our latest news from blog</div>
            </div>
            <Container fluid>
                <Row>
                    {
                        blogData.map((item) => {
                            return (
                                <Col sm={4} key={item.id}>
                                    <div className="holder">
                                        <Card >
                                            <Card.Img variant="top" src={item.image} />
                                            <Card.Body>
                                                <time>{item.time}</time>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>{item.description}</Card.Text>
                                                <a href={item.link} className='btn btn-primary'>Read More<i className="fas fa-chevron-right"></i></a>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </section>
    )
}
