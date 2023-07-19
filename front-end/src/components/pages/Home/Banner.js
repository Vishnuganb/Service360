import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
        id: 1,
        image: require('../../../assets/images/home/Banner-2_2.jpeg'),
        title: 'Find Trusted Service Providers',
        description: 'Easily connect with skilled professionals in your area. From experienced plumbers and electricians to reliable home cleaners and skilled carpenters, our platform brings together a diverse range of service providers to meet all your needs. Hire with confidence and get the job done right.',
        link: 'https://www.google.com'
    },
    {
        id: 2,
        image: require('../../../assets/images/home/Banner-7_7.jpeg'),
        title: 'Hire with Confidence',
        description: "Discover a wide range of qualified service providers ready to tackle any project. Browse through their profiles, check their ratings and reviews from satisfied customers, and compare competitive prices. Whether you need a handyman, a personal trainer, or a graphic designer, you can hire with confidence knowing you're making the right choice.",
        link: 'https://www.facebook.com'
    },
    {
        id: 3,
        image: require('../../../assets/images/home/Banner-4_4.jpeg'),
        title: 'Advertise Your Business to a Wide Audience',
        description: 'Boost your business visibility by reaching a large audience through our platform. Advertise your products and services to potential customers who are actively seeking solutions. Our advertising options allow you to target specific demographics, maximize exposure, and increase brand awareness. Drive traffic to your business and achieve your marketing goals.',
        link: 'https://www.twitter.com'
    }
]

function AppHero() {
    return (
        <section id='home' className="hero-block mt-0">
            <Carousel>
                {
                    heroData.map((item) => {
                        return (
                            <Carousel.Item key={item.id}>
                                <img
                                    className="d-block w-100"
                                    src={item.image}
                                    alt={"Slide " + item.id}
                                />
                                <Carousel.Caption>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <a className='btn btn-primary' href={item.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                                </Carousel.Caption>
                            </Carousel.Item>
                        );

                    })
                }

            </Carousel>
        </section>
    );
}

export default AppHero;
