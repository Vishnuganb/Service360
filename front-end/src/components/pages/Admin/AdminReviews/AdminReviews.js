import React, { useState, useEffect } from "react";
import { Card, Tab, Tabs } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import BgImage from '../../../../assets/images/header/Background.png';
import Bg2Image from '../../../../assets/images/header/footer.png';
import '../../../../style/Admin/AdminReviews.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const reviewData = [

    {
        id: 1,
        image: require('../../../../assets/images/home/Customer_4.jpg'),
        firstName: 'John',
        lastName: 'Doe',
        address: '123 Main Street, City',
        review: `I've been using this platform for a few months now, and it has made my life so much easier. 
        I can easily find service providers based on my requirements and hire them within minutes.
        The variety of services available is impressive, and the platform is user-friendly. Highly recommended!`,
        status: 'All',
        date: '2023-08-01',
    },
    {
        id: 2,
        image: require('../../../../assets/images/home/Customer_5.jpg'),
        firstName: 'Jane',
        lastName: 'Smith',
        address: '456 Oak Avenue, Town',
        review: `As a busy professional, I don't have the time to search for service providers individually. 
        This platform has simplified the process for me. I can compare prices, read reviews,
        and make an informed decision about hiring service providers.
        It has saved me time and provided me with reliable professionals. Thank you!`,
        status: 'All',
        date: '2023-08-02',
    },
    {
        id: 3,
        image: require('../../../../assets/images/home/Customer_6.jpg'),
        firstName: 'Mike',
        lastName: 'Johnson',
        address: '789 Maple Lane, Village',
        review: `I recently used this platform to find a service provider, and I must say,
        I'm impressed.The website is intuitive, and the booking process was seamless.
        I found a skilled professional who delivered excellent service.
        It's great to have a platform that connects customers with trusted service providers.
        I will definitely be using it again.`,
        status: 'All',
        date: '2023-08-03',
    },
    {
        id: 4,
        image: require('../../../../assets/images/home/Customer_1.png'),
        firstName: 'De',
        lastName: 'Silva',
        address: '101 Pine Street, City',
        review: `I've been using this platform for a few months now, and it has made my life so much easier. 
        I can easily find service providers based on my requirements and hire them within minutes.
        The variety of services available is impressive, and the platform is user-friendly. Highly recommended!`,
        status: 'All',
        date: '2023-08-04',
    },
    {
        id: 5,
        image: require('../../../../assets/images/home/Customer_2.png'),
        firstName: 'Kumar',
        lastName: 'Sangakkara',
        address: '222 Oak Road, Town',
        review: `As a busy professional, I don't have the time to search for service providers individually. 
        This platform has simplified the process for me. I can compare prices, read reviews,
        and make an informed decision about hiring service providers.
        It has saved me time and provided me with reliable professionals. Thank you!`,
        status: 'All',
        date: '2023-08-05',
    },
    {
        id: 6,
        image: require('../../../../assets/images/home/Customer_3.png'),
        firstName: 'Mike',
        lastName: 'Johnson',
        address: '333 Maple Street, Village',
        review: `I recently used this platform to find a service provider, and I must say,
        I'm impressed.The website is intuitive, and the booking process was seamless.
        I found a skilled professional who delivered excellent service.
        It's great to have a platform that connects customers with trusted service providers.
        I will definitely be using it again.`,
        status: 'All',
        date: '2023-08-06',
    },
    {
        id: 7,
        image: require('../../../../assets/images/home/Customer_7.jpg'),
        firstName: 'Saman',
        lastName: 'Perera',
        address: '444 Pine Avenue, City',
        review: `I've been using this platform for a few months now, and it has made my life so much easier. 
        I can easily find service providers based on my requirements and hire them within minutes.
        The variety of services available is impressive, and the platform is user-friendly. Highly recommended!`,
        status: 'All',
        date: '2023-08-07',
    },
    {
        id: 8,
        image: require('../../../../assets/images/home/Customer_8.jpg'),
        firstName: 'Susantha',
        lastName: 'Villergers',
        address: '555 Oak Lane, Town',
        review: `As a busy professional, I don't have the time to search for service providers individually. 
        This platform has simplified the process for me. I can compare prices, read reviews,
        and make an informed decision about hiring service providers.
        It has saved me time and provided me with reliable professionals. Thank you!`,
        status: 'All',
        date: '2023-08-08',
    },
    {
        id: 9,
        image: require('../../../../assets/images/home/Customer_9.jpg'),
        firstName: 'William',
        lastName: 'Wiliamson',
        address: '666 Maple Road, Village',
        review: `I recently used this platform to find a service provider, and I must say,
        I'm impressed.The website is intuitive, and the booking process was seamless.
        I found a skilled professional who delivered excellent service.
        It's great to have a platform that connects customers with trusted service providers.
        I will definitely be using it again.`,
        status: 'All',
        date: '2023-08-09',
    },
]

export default function AdminReviews() {
    const [data, setData] = useState({
        currentPage: 1,
        showModal: false,
        totalPages: 1,
        searchTerm: '',
        activeTab: 'All',
        filteredReviews: [],
        displayedReviews: [],
        selectedReviews: [],
        showDetailsModal: false,
        selectedReview: null,
        reviewsPerPage: 3,
        showAcceptConfirmation: false,
        enable: true,
    });

    const totalPages = Math.ceil(reviewData.length / data.reviewsPerPage);
    const startIndex = (data.currentPage - 1) * data.reviewsPerPage;
    const endIndex = startIndex + data.reviewsPerPage;
    const displayedReviews = reviewData.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setData((prevState) => ({
            ...prevState,
            currentPage: page,
            displayedReviews: getDisplayedReviews(prevState.filteredReviews[prevState.activeTab], page, prevState.reviewsPerPage),
        }));
    };


    const filterReviews = (status) => {

        const filteredReviews = reviewData.filter((review) =>
            review.status === status && (
                review.firstName.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                review.lastName.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                review.address.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                review.date.toLowerCase().includes(data.searchTerm.toLowerCase())
            )
        );

        return filteredReviews;
    };

    useEffect(() => {

        const filteredReviewsByStatus = {
            All: filterReviews('All'),
            Selected: filterReviews('Selected'),
        }

        const filteredReviews = filteredReviewsByStatus[data.activeTab];
        const totalPages = Math.ceil(filteredReviews.length / data.reviewsPerPage);

        console.log(filteredReviewsByStatus);

        setData((prevState) => ({
            ...prevState,
            totalPages,
            filteredReviews: filteredReviewsByStatus,
            displayedReviews: filteredReviews.slice(0, data.reviewsPerPage),
            currentPage: 1,
        }));
    }, [data.searchTerm, data.activeTab, data.selectedReviews]);

    const handleSearchChange = (e) => {
        const { value } = e.target;
        setData((prevState) => ({
            ...prevState,
            searchTerm: value,
        }));
    };

    const handleAssign = (reviewId) => {
        const reviewToAssign = reviewData.find((review) => review.id === reviewId);

        if (reviewToAssign && data.selectedReviews.length < 3) {

            reviewToAssign.status = 'Selected';

            setData((prevState) => ({
                ...prevState,
                selectedReviews: [...prevState.selectedReviews, reviewToAssign],
            }));

            const updatedReviewData = reviewData.filter((review) => review.id !== reviewId);
            //const displayedAllReviews = getDisplayedReviews(updatedReviewData, data.currentPage, data.reviewsPerPage);

            setData((prevState) => ({
                ...prevState,
                // displayedReviews: displayedAllReviews,
                filteredReviews: {
                    ...prevState.filteredReviews,
                    All: updatedReviewData,
                    Selected: [...prevState.selectedReviews],
                },
            }));
        }
    };

    const getDisplayedReviews = (filteredReviews, currentPage, reviewsPerPage) => {
        const startIndex = (currentPage - 1) * reviewsPerPage;
        const endIndex = startIndex + reviewsPerPage;
        return filteredReviews.slice(startIndex, endIndex);
    };

    const handleReassign = (reviewId) => {
        const reviewToReassign = data.selectedReviews.find((review) => review.id === reviewId);

        if (reviewToReassign) {

            reviewToReassign.status = 'All';

            const updatedSelectedReviews = data.selectedReviews.filter((review) => review.id !== reviewId);

            setData((prevState) => {
                const updatedFilteredReviews = {
                    ...prevState.filteredReviews,
                    Selected: updatedSelectedReviews,
                };

                return {
                    ...prevState,
                    selectedReviews: updatedSelectedReviews,
                    filteredReviews: updatedFilteredReviews,
                    displayedReviews: getDisplayedReviews(updatedFilteredReviews[prevState.activeTab], prevState.currentPage, prevState.reviewsPerPage),
                };
            });
        }
    };

    const handleTabChange = (tab) => {
        setData((prevState) => ({
            ...prevState,
            activeTab: tab,
            currentPage: 1,
            displayedReviews: getDisplayedReviews(prevState.filteredReviews[tab], 1, prevState.reviewsPerPage),
        }));
    };


    return (
        <div>
            <Tabs activeKey={data.activeTab} onSelect={(key) => handleTabChange(key)} className="service-tabs mb-3" >
                <Tab eventKey="All" title="All" />
                <Tab eventKey="Selected" title="Selected" />
            </Tabs>
            <section className="block review-block" style={{ backgroundImage: `url(${BgImage})` }}>

                {/* <h2 className='ms-5 fw-bold align-self-start'>System Reviews</h2> */}

                {data.activeTab === "All" ? (
                    <>
                        <h2 className='ms-5 fw-bold align-self-start'>System Reviews</h2>
                        <div className="d-flex justify-content-end  w-100">
                            <div className='col-xs-2 col-sm-5 col-md-3 col-lg-3 col-xl-2 mx-5'>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search Reviews"
                                        value={data.searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                    <span className="input-group-text">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h2 className='ms-5 fw-bold align-self-start'>Selected Reviews</h2>
                    </>
                )}

                <div className="d-flex flex-wrap justify-content-center mt-4">
                    {data.displayedReviews && data.displayedReviews.map((review) => (
                        <Card key={review.id}>
                            <Card.Body className="py-3" style={{ backgroundImage: `url(${Bg2Image})` }}>
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={review.image}
                                            className="rounded-circle mb-4 mb-lg-0 shadow-2 d-none d-lg-block"
                                            alt="Customers"
                                            width="100"
                                            height="100"
                                        />
                                    </div>
                                    <div className="flex-grow-1 ms-4 ps-3">
                                        <blockquote className="blockquote mb-4">
                                            <FontAwesomeIcon
                                                icon={faQuoteLeft}
                                                className="fa-lg text-warning me-2"
                                            />
                                            <p>
                                                <span className="font-italic">
                                                    {review.review}
                                                </span>
                                            </p>
                                            <footer className="blockquote-footer mb-3">
                                                {review.firstName}{review.lastName} {" "}

                                            </footer>
                                        </blockquote>

                                        {data.activeTab === "All" && (
                                            <button
                                                className="btn-effect3"
                                                onClick={() => handleAssign(review.id)}
                                                disabled={data.selectedReviews.length >= 3}
                                            >
                                                Assign
                                            </button>
                                        )}
                                        {data.activeTab === "Selected" && (
                                            <button
                                                className="btn-effect3"
                                                onClick={() => handleReassign(review.id)}
                                            >
                                                Reassign
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

                <div className="pagination justify-content-center">
                    {Array.from({ length: data.totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`page-link ${data.currentPage === index + 1 ? "active" : ""}`}
                            style={{ backgroundColor: '#292D32', color: '#fff' }}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
}