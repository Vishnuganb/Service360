import React, { useState, useEffect } from 'react';
import { Card, Tab, Tabs, Modal, Button, Form, Carousel } from 'react-bootstrap';
import '../../../../style/Admin/AdminServiceProvider.css';
import BgImage from '../../../../assets/images/header/Background.png';
import PopupBgImage from '../../../../assets/images/header/popupBg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import Session1_1 from '../../../../assets/images/admin/trainingSession/Training_Carpentry_1.jpeg';
import Session1_2 from '../../../../assets/images/admin/trainingSession/Training_Carpentry_2.jpeg';
import Session1_3 from '../../../../assets/images/admin/trainingSession/Training_Carpentry_3.jpeg';
import Session2_1 from '../../../../assets/images/admin/trainingSession/Training_Tiling_1.jpeg';
import Session2_2 from '../../../../assets/images/admin/trainingSession/Training_Tiling_2.jpeg';
import Session2_3 from '../../../../assets/images/admin/trainingSession/Training_Tiling_3.jpeg';
import Session3_1 from '../../../../assets/images/admin/trainingSession/Training_ACRepair_1.jpeg';
import Session3_2 from '../../../../assets/images/admin/trainingSession/Training_ACRepair_2.jpeg';
import Session3_3 from '../../../../assets/images/admin/trainingSession/Training_ACRepair_3.jpeg';
import Session4_1 from '../../../../assets/images/admin/trainingSession/Training_Painting_1.jpeg';
import Session4_2 from '../../../../assets/images/admin/trainingSession/Training_Painting_2.jpeg';
import Session4_3 from '../../../../assets/images/admin/trainingSession/Training_Painting_3.jpeg';
import Session5_1 from '../../../../assets/images/admin/trainingSession/Training_Plumbing_1.jpeg';
import Session5_2 from '../../../../assets/images/admin/trainingSession/Training_Plumbing_2.jpeg';
import Session5_3 from '../../../../assets/images/admin/trainingSession/Training_Plumbing_3.jpeg';
import Session6_1 from '../../../../assets/images/admin/trainingSession/Training_Electrical_1.jpeg';
import Session6_2 from '../../../../assets/images/admin/trainingSession/Training_Electrical_2.jpeg';
import Session6_3 from '../../../../assets/images/admin/trainingSession/Training_Electrical_3.jpeg';
import Session7_1 from '../../../../assets/images/admin/trainingSession/Training_Roofing_1.jpeg';
import Session7_2 from '../../../../assets/images/admin/trainingSession/Training_Roofing_2.jpeg';
import Session7_3 from '../../../../assets/images/admin/trainingSession/Training_Roofing_3.jpeg';
import Session8_1 from '../../../../assets/images/admin/trainingSession/Training_Masonry_1.jpeg';
import Session8_2 from '../../../../assets/images/admin/trainingSession/Training_Masonry_2.jpeg';
import Session8_3 from '../../../../assets/images/admin/trainingSession/Training_Masonry_3.jpeg';
import Session9_1 from '../../../../assets/images/admin/ads/wrench_1.jpeg';
import Session9_2 from '../../../../assets/images/admin/ads/wrench_2.jpeg';
import Session9_3 from '../../../../assets/images/admin/ads/wrench_3.jpeg';
import { set } from 'lodash';

const searchInputStyle = {
    height: '38px',
};

const StyledModalFooter = styled(Modal.Footer)`
        justify-content: flex-end;
    `;

function AdminSessions() {

    const sessionsData = [
        {
            id: 1,
            title: 'Mastering Carpentry Techniques',
            description: 'Join our comprehensive carpentry training session to learn advanced techniques and enhance your woodworking skills.',
            date: '2023-08-25',
            time: '10:00 AM',
            duration: '2 hours',
            location: 'Colombo Workshop ',
            entrance_fee: 'Rs. 500',
            firstName: 'John',
            lastName: 'Doe',
            nic: '123456789V',
            contactNumber: '0123456789',
            email: 'john.doe@example.com',
            address: '123 Main Street, City',
            registeredDate: '2023-08-01',
            service: 'Carpentry',
            category: 'Interior Works',
            images: [Session1_1, Session1_2, Session1_3],
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 2,
            title: 'Expert Plumbing Solutions',
            description: 'Discover the latest trends in plumbing and get hands-on experience with modern tools and techniques in this informative session.',
            date: '2023-08-23',
            time: '09:00 AM',
            duration: '2.5 hours',
            location: 'Jaffna Workshop Center',
            entrance_fee: 'Rs. 600',
            firstName: 'Jane',
            lastName: 'Smith',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'jane.smith@example.com',
            address: '456 Oak Avenue, Town',
            registeredDate: '2023-08-02',
            service: 'Plumbing',
            category: 'Electrical & Plumbing',
            images: [Session5_1, Session5_2, Session5_3],
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 3,
            title: 'Essential Electrical Repairs',
            description: 'Learn the fundamentals of electrical repairs and safety measures to provide top-notch electrical services to your customers.',
            date: '2023-08-24',
            time: '11:00 AM',
            duration: '4 hours',
            location: 'Badhulla Training Center',
            entrance_fee: 'Rs. 800',
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '456123789V',
            contactNumber: '0456123789',
            email: 'mike.johnson@example.com',
            address: '789 Maple Lane, Village',
            registeredDate: '2023-08-03',
            service: 'Electrical Wiring',
            category: 'Electrical & Plumbing',
            images: [Session6_1, Session6_2, Session6_3],
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 4,
            title: 'Mastering Tiling Techniques',
            description: 'Explore the art of tiling and become proficient in creating beautiful and durable tile installations for various spaces.',
            date: '2023-08-26',
            time: '10:30 AM',
            duration: '3.5 hours',
            location: 'Tile Design Studio',
            entrance_fee: 'Rs. 800',
            firstName: 'De',
            lastName: 'Silva',
            nic: '789123456V',
            contactNumber: '0789123456',
            email: 'de.silva@example.com',
            address: '101 Pine Street, City',
            registeredDate: '2023-08-04',
            service: 'Tiles Fitting',
            category: 'Construction',
            images: [Session2_1, Session2_2, Session2_3],
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 5,
            title: 'Advanced HVAC Maintenance',
            description: 'Join us to delve into advanced HVAC system maintenance strategies, ensuring optimal performance and customer satisfaction.',
            date: '2023-08-27',
            time: '01:00 PM',
            duration: '2 hours',
            location: 'HVAC Training Center',
            entrance_fee: 'Rs. 500',
            firstName: 'Kumar',
            lastName: 'Sangakkara',
            nic: '654987321V',
            contactNumber: '0654987321',
            email: 'kumar.sangakkara@example.com',
            address: '222 Oak Road, Town',
            registeredDate: '2023-08-05',
            service: 'AC Repair',
            category: 'Electrical & Plumbing',
            images: [Session3_1, Session3_2, Session3_3],
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 6,
            title: 'Creative Interior Carpentry',
            description: 'Unleash your creativity with interior carpentry designs and learn how to add unique touches to spaces through custom woodwork.',
            date: '2023-09-02',
            time: '03:30 PM',
            duration: '2 hours',
            location: 'Interior Design Academy',
            entrance_fee: 'Rs. 1000',
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '789654123V',
            contactNumber: '0789654123',
            email: 'mike.johnson@example.com',
            address: '333 Maple Street, Village',
            registeredDate: '2023-08-06',
            service: 'Carpentry',
            category: 'Interior Works',
            images: [Session1_1, Session1_2, Session1_3],
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 7,
            title: 'Professional Painting Techniques',
            description: 'Upgrade your painting skills by mastering advanced techniques, color theory, and surface preparation for flawless results.',
            date: '2023-09-06',
            time: '11:30 AM',
            duration: '4 hours',
            location: 'Artistic Painting Studio',
            entrance_fee: 'Rs. 950',
            firstName: 'Saman',
            lastName: 'Perera',
            nic: '321456789V',
            contactNumber: '0321456789',
            email: 'saman.perera@example.com',
            address: '444 Pine Avenue, City',
            registeredDate: '2023-08-07',
            service: 'Painting',
            category: 'Interior Works',
            images: [Session4_1, Session4_2, Session4_3],
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 8,
            title: 'Effective Roofing Practices',
            description: 'Learn the essentials of roofing installation, repair, and maintenance, ensuring your clients have a reliable and safe roof over their heads.',
            date: '2023-09-10',
            time: '09:30 AM',
            duration: '3.5 hours',
            location: 'Roofing Education Center',
            entrance_fee: 'Rs. 850',
            firstName: 'Susantha',
            lastName: 'Villergers',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'susantha.villergers@example.com',
            address: '555 Oak Lane, Town',
            registeredDate: '2023-08-08',
            service: 'Iron Works',
            category: 'Construction',
            images: [Session7_1, Session7_2, Session7_3],
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 9,
            title: 'Plumbing Innovations Workshop',
            description: 'Stay updated with the latest plumbing innovations and technology trends to offer cutting-edge solutions to your customers.',
            date: '2023-09-15',
            time: '02:00 PM',
            duration: '2 hours',
            location: 'Plumbing Training Center',
            entrance_fee: 'Rs. 750',
            firstName: 'William',
            lastName: 'Wiliamson',
            nic: '654321789V',
            contactNumber: '0654321789',
            email: 'william.wiliamson@example.com',
            address: '666 Maple Road, Village',
            registeredDate: '2023-08-09',
            service: 'Plumbing',
            category: 'Electrical & Plumbing',
            images: [Session5_1, Session5_2, Session5_3],
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 10,
            title: 'Expert Furniture Restoration',
            description: 'Dive into the art of furniture restoration and learn how to bring new life to old pieces with careful techniques and craftsmanship.',
            date: '2023-09-20',
            time: '11:30 AM',
            duration: '3 hours',
            location: 'Restoration Art Studio',
            entrance_fee: 'Rs. 500',
            firstName: 'Johnes',
            lastName: 'Doe',
            nic: '123456789V',
            contactNumber: '0123456789',
            email: 'john.doe@example.com',
            address: '777 Main Street, City',
            registeredDate: '2023-08-10',
            service: 'Carpentry',
            category: 'Interior Works',
            images: [Session1_1, Session1_2, Session1_3],
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 11,
            title: 'Advanced Locksmithing Methods',
            description: 'Discover advanced locksmithing techniques and tools that will help you offer efficient and secure solutions to your clients.',
            date: '2023-08-27',
            time: '10:00 AM',
            duration: '2.5 hours',
            location: 'Colombo Training center',
            entrance_fee: 'Rs. 1200',
            firstName: 'Jane',
            lastName: 'Smith',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'jane.smith@example.com',
            address: '888 Oak Avenue, Town',
            registeredDate: '2023-08-11',
            service: 'Video Surveillance',
            category: 'Security',
            images: [Session2_1, Session2_2, Session2_3],
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 12,
            title: 'Green Energy Plumbing',
            description: 'Learn how to integrate green energy solutions into your plumbing services and contribute to sustainable practices.',
            date: '2023-09-30',
            time: '10:00 AM',
            duration: '3 hours',
            location: 'Green Plumbing Institute',
            entrance_fee: 'Rs. 2000',
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '456123789V',
            contactNumber: '0456123789',
            email: 'mike.johnson@example.com',
            address: '999 Maple Lane, Village',
            registeredDate: '2023-08-12',
            service: 'Plumbing',
            category: 'Electrical & Plumbing',
            images: [Session5_1, Session5_2, Session5_3],
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 13,
            title: 'Mastering Concrete Finishes',
            description: 'Discover various concrete finishing techniques and create stunning surfaces for both indoor and outdoor spaces.',
            date: '2023-10-05',
            time: '09:00 AM',
            duration: '4 hours',
            location: 'Colombo Workshop ',
            entrance_fee: 'Rs. 500',
            firstName: 'De',
            lastName: 'Silva',
            nic: '789123456V',
            contactNumber: '0789123456',
            email: 'de.silva@example.com',
            address: '1010 Pine Street, City',
            registeredDate: '2023-08-13',
            service: 'Masonry',
            category: 'Construction',
            images: [Session8_1, Session8_2, Session8_3],
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 14,
            title: 'Essential Electrical Safety',
            description: 'Learn about critical electrical safety measures to protect yourself, your clients, and their properties during electrical projects.',
            date: '2023-08-30',
            time: '02:00 AM',
            duration: '5 hours',
            location: 'Electrical Safety Institute',
            entrance_fee: 'Rs. 1500',
            firstName: 'Kumar',
            lastName: 'Sangakkara',
            nic: '654987321V',
            contactNumber: '0654987321',
            email: 'kumar.sangakkara@example.com',
            address: '111 Oak Road, Town',
            registeredDate: '2023-08-14',
            service: 'Electrical Wiring',
            category: 'Electrical & Plumbing',
            images: [Session6_1, Session6_2, Session6_3],
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 15,
            title: 'Expert Roof Inspection',
            description: 'Enhance your roofing inspection skills to accurately assess the condition of roofs and provide informed recommendations.',
            date: '2023-10-15',
            time: '01:30 PM',
            duration: '2.5 hours',
            location: 'Roof Inspection Academy',
            entrance_fee: 'Rs. 1200',
            firstName: 'Mike',
            lastName: 'Johnson',
            nic: '789654123V',
            contactNumber: '0789654123',
            email: 'mike.johnson@example.com',
            address: '1212 Maple Street, Village',
            registeredDate: '2023-08-15',
            service: 'Iron Works',
            category: 'Construction',
            images: [Session7_1, Session7_2, Session7_3],
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 16,
            title: 'Effective Pest Control Strategies',
            description: 'Learn about various pest control methods and techniques to help your clients maintain a pest-free environment.',
            date: '2023-10-20',
            time: '10:30 AM',
            duration: '3 hours',
            location: 'Pest Control Center',
            entrance_fee: 'Rs. 500',
            firstName: 'Saman',
            lastName: 'Perera',
            nic: '321456789V',
            contactNumber: '0321456789',
            email: 'saman.perera@example.com',
            address: '1313 Pine Avenue, City',
            registeredDate: '2023-08-16',
            service: 'Carpet cleaning',
            category: 'cleaning',
            images: [Session3_1, Session3_2, Session3_3],
            status: 'Pending',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 17,
            title: 'Metalworking Techniques',
            description: 'Discover innovative approaches to metalworking and create stunning metal designs and structures for clients.',
            date: '2023-10-25',
            time: '02:30 PM',
            duration: '2.5 hours',
            location: 'Metalworking Studio',
            entrance_fee: 'Rs. 2500',
            firstName: 'Susantha',
            lastName: 'Villergers',
            nic: '987654321V',
            contactNumber: '0987654321',
            email: 'susantha.villergers@example.com',
            address: '1414 Oak Lane, Town',
            registeredDate: '2023-08-17',
            service: 'Iron Works',
            category: 'Construction',
            images: [Session1_1, Session1_2, Session1_3],
            status: 'Accepted',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
        {
            id: 18,
            title: 'Artistic Wood Carving',
            description: 'Unleash your artistic talents through wood carving and create intricate designs that add a touch of elegance to spaces.',
            date: '2023-10-30',
            time: '11:00 AM',
            duration: '3 hours',
            location: 'Artistic Carving Workshop',
            entrance_fee: 'Rs. 2500',
            firstName: 'William',
            lastName: 'Wiliamson',
            nic: '654321789V',
            contactNumber: '0654321789',
            email: 'william.wiliamson@example.com',
            address: '1515 Maple Road, Village',
            registeredDate: '2023-08-18',
            service: 'Carpentry',
            category: 'Interior Works',
            images: [Session1_1, Session1_2, Session1_3],
            status: 'Rejected',
            uploadedFiles: [
                { fileName: 'File 1', url: 'https://example.com/file1.pdf' },
                { fileName: 'File 2', url: 'https://example.com/file2.pdf' },
            ],
        },
    ];

    const sessionsCategories = {
        "Interior Works": ["Carpentry", "Painting"],
        "Electrical & Plumbing": ["AC Repair", "Electrical Wiring", "Plumbing"],
        "Construction": ["Masonry", "Tiles Fitting", "Iron Works", "Glass & Aluminum"],
        "Security": ["CCTV Repair", "Fire Alarm", "Video Surveillance"],
        "cleaning": ["Sofa cleaning", "Carpet cleaning"],
    };

    const [data, setData] = useState({
        category: 'default',
        service: '',
        selectedCategory: 'default',
        currentPage: 1,
        showModal: false,
        filteredServices: [],
        totalPages: 1,
        searchTerm: '',
        activeTab: 'Pending',
        filteredSessions: [],
        displayedSessions: [],
        showDetailsModal: false,
        selectedSession: null,
        cardsPerPage: 3,
        showAcceptConfirmation: false,
        showRejectConfirmation: false,
        enable: true,
        rejectReason: '',
        rejectReasonErrorMessage: '',
    });

    // const cardsPerPage = data.windowWidth <= 768 ? 3 : 6;
    const totalPages = Math.ceil(sessionsData.length / data.cardsPerPage);
    const startIndex = (data.currentPage - 1) * data.cardsPerPage;
    const endIndex = startIndex + data.cardsPerPage;
    const displayedSessions = sessionsData.slice(startIndex, endIndex);

    const filterSessionsByCategory = (category) => {
        if (category === 'default') {
            return sessionsData;
        } else {
            return sessionsData.filter((provider) => provider.category === category);
        }
    };


    const handlePageChange = (page) => {
        const startIndex = (page - 1) * data.cardsPerPage;
        const endIndex = startIndex + data.cardsPerPage;
        const filteredData = data.filteredSessions[data.activeTab];
        const displayedSessions = filteredData.slice(startIndex, endIndex);

        setData({
            ...data,
            currentPage: page,
            displayedSessions,
        });

    };


    const handleSearchChange = (e) => {
        const { value } = e.target;
        setData((prevState) => ({
            ...prevState,
            searchTerm: value,
        }));
    };

    const filterServiceProviders = (status) => {
        const filteredServices = data.selectedCategory !== 'default'
            ? sessionsData.filter((session) => session.category === data.selectedCategory)
            : sessionsData;

        const filteredProviders = filteredServices.filter((session) =>
            session.status === status && (
                session.title.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                session.category.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                session.date.toLowerCase().includes(data.searchTerm.toLowerCase()) ||
                session.location.toLowerCase().includes(data.searchTerm.toLowerCase())
            )
        );

        return filteredProviders;
    };


    const calculateTotalPages = (filteredServices) => Math.ceil(filteredServices.length / data.cardsPerPage);

    const handleSessionCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        const filteredServiceProvidersByCategory = filterSessionsByCategory(selectedCategory);

        const displayedSessions = filteredServiceProvidersByCategory.filter((session) => {
            return session.status === data.activeTab;
        });

        setData((prevState) => ({
            ...prevState,
            selectedCategory,
            displayedSessions,
            currentPage: 1,
            totalPages: calculateTotalPages(displayedSessions),
        }));
    };

    const handleTabChange = (tab) => {

        setData((prevState) => ({
            ...prevState,
            activeTab: tab,
        }));
    };


    useEffect(() => {
        const filteredSessionsByStatus = {
            Pending: filterServiceProviders('Pending'),
            Accepted: filterServiceProviders('Accepted'),
            Rejected: filterServiceProviders('Rejected'),
        };

        const filteredProviders = filteredSessionsByStatus[data.activeTab];
        const totalPages = Math.ceil(filteredProviders.length / data.cardsPerPage);

        setData((prevState) => ({
            ...prevState,
            totalPages,
            filteredSessions: filteredSessionsByStatus,
            displayedSessions: filteredProviders.slice(0, data.cardsPerPage),
            currentPage: 1,
        }));
    }, [data.selectedCategory, data.searchTerm, data.activeTab]);

    const handleConfirmAccept = () => {
        setData({ ...data, showAcceptConfirmation: false });
    };

    const handleConfirmReject = () => {
        setData({ ...data, showRejectConfirmation: false });
    };

    const handleAcceptAdvertisement = () => {
        setData({ ...data, showAcceptConfirmation: false });
    };

    const handleRejectSession = (rejectReason) => {
        let isError = false;
        let rejectReasonErrorMessage = '';

        if (rejectReason === '') {
            isError = true;
            rejectReasonErrorMessage = 'Please enter a reason for rejection.';
        }

        setData({ ...data, rejectReasonErrorMessage });

        if (!isError) {
            setData({ ...data, showRejectConfirmation: false, rejectReason });
        }
    };

    const handleShowDetails = (provider) => {
        setData({ ...data, showDetailsModal: true, selectedSession: provider });
    };

    function handleImageClick(e) {
        e.target.style.transform = 'scale(2)';
        e.target.style.filter = 'brightness(1)';
        e.target.style.cursor = 'zoom-out';
    }

    function handleImageMouseLeave(e) {
        e.target.style.transform = 'scale(1)';
        e.target.style.filter = 'brightness(1.2)';
        e.target.style.cursor = 'zoom-in';
    }


    return (

        <div>
            <Tabs activeKey={data.activeTab} onSelect={(key) => handleTabChange(key)} className="service-tabs mb-3" >
                <Tab eventKey="Pending" title="Pending" />
                <Tab eventKey="Accepted" title="Accepted" />
                <Tab eventKey="Rejected" title="Rejected" />
            </Tabs>

            <section id="service-page" className="block serviceProvider m-5 p-5" style={{ backgroundImage: `url(${BgImage})` }} >

                <h2 className="ms-5 fw-bold align-self-start">Training Sessions</h2>

                <div className="d-flex align-items-center justify-content-center w-100">
                    <div className='me-xs-2 col-xs-2 col-sm-5 col-md-4 m-3'>
                        <div className="input-group">
                            <select
                                className="form-select"
                                value={data.selectedCategory}
                                onChange={handleSessionCategoryChange}
                                required
                            >
                                <option value="default">Select a Training sessions Category</option>
                                {Object.keys(sessionsCategories).map((session) => (
                                    <option key={session} value={session}>
                                        {session}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='me-xs-2 col-xs-2 col-sm-5 col-md-4 col-xxl-3 m-3'>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Training sessions"
                                value={data.searchTerm}
                                onChange={handleSearchChange}
                                style={searchInputStyle}
                            />
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div>
                    </div>

                </div>

                <div className="d-flex flex-wrap justify-content-center mt-4">
                    {data.displayedSessions && data.displayedSessions.map((session) => (
                        <Card className="m-3" key={session.id}>
                            <Card.Img src={session.images[0]} alt="Service session" />
                            <Card.Body className="d-flex flex-column align-items-center">
                                <p className="card-text fw-bold d-none d-md-block">{session.title}</p>
                                <p className="card-text d-none d-md-block align-self-start">Date: {session.date}</p>
                                <p className="card-text d-none d-md-block align-self-start">Location: {session.location}</p>
                                <div className="d-flex flex-column justify-content-center text-center">
                                    <button onClick={() => handleShowDetails(session)} className="btn" style={{ backgroundColor: '#0B85A0' }} > More Details </button>
                                    <button
                                        className="btn"
                                        style={{ backgroundColor: "#0D6445" }}
                                        onClick={() => {
                                            setData({ ...data, showAcceptConfirmation: true, selectedSession: session });
                                        }}
                                    >
                                        Accept
                                    </button>
                                    <button
                                        className="btn"
                                        style={{ backgroundColor: "#B60E0E" }}
                                        onClick={() => {
                                            setData({ ...data, showRejectConfirmation: true, selectedSession: session });
                                        }}
                                    >
                                        Reject
                                    </button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>

                <div className="pagination justify-content-center">
                    {Array.from({ length: data.totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            className={`page-link ${data.currentPage === index + 1 ? 'active' : ''}`}
                            style={{ backgroundColor: '#292D32', color: '#fff' }}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

            </section>

            <Modal show={data.showAcceptConfirmation} onHide={() => setData({ ...data, showAcceptConfirmation: false })} centered>
                <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
                    <Modal.Title>Confirm Acceptance</Modal.Title>
                </Modal.Header>
                {data.selectedSession && (
                    <Modal.Body className="centered-body" style={{ backgroundImage: `url(${BgImage})` }}>
                        <div className="d-flex justify-content-center">
                            <img src={data.selectedSession.images[0]} alt="Service Provider" width="150" height="150" />
                        </div>
                        <p className='fw-bold pt-4'>Are you sure you want to accept this Training session?</p>
                    </Modal.Body>
                )}
                <Modal.Footer>
                    <Button className='btn-effect2' onClick={() => setData({ ...data, showAcceptConfirmation: false })}>
                        No
                    </Button>
                    <Button className='btn-effect' style={{ marginLeft: '10px' }} onClick={handleAcceptAdvertisement}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={data.showRejectConfirmation} onHide={() => setData({ ...data, showRejectConfirmation: false })} centered>
                <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
                    <Modal.Title>Confirm Rejection</Modal.Title>
                </Modal.Header>
                {data.selectedSession && (
                    <Modal.Body className="centered-body" style={{ backgroundImage: `url(${BgImage})` }}>
                        <div className="d-flex justify-content-center">
                            <img src={data.selectedSession.images[0]} alt="Service Provider" width="150" height="150" />
                        </div>
                        <p className='fw-bold pt-4'>Are you sure you want to Reject this Training session?</p>
                        <p>If you select "Yes," please enter the reason for rejection.<span style={{ color: 'red' }}>*</span></p>
                        <input type="text" value={data.rejectReason} onChange={(e) => setData({ ...data, rejectReason: e.target.value })} placeholder="Enter Reject Reason" />
                        {data.rejectReasonErrorMessage && <p className="text-danger p-0 m-0">{data.rejectReasonErrorMessage}</p>}
                    </Modal.Body>
                )}
                <Modal.Footer>
                    <Button className='btn-effect3' onClick={() => setData({ ...data, showRejectConfirmation: false })}>
                        No
                    </Button>
                    <Button className='btn-effect' style={{ marginLeft: '10px' }} onClick={() => handleRejectSession(data.rejectReason)}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={data.showDetailsModal} onHide={() => setData({ ...data, showDetailsModal: false })} centered>
                <Modal.Header closeButton style={{ background: '#282b3d', color: '#fff' }}>
                    <Modal.Title>Training session Details</Modal.Title>
                </Modal.Header>
                {data.selectedSession && (
                    <Modal.Body className="text-start" style={{ backgroundImage: `url(${PopupBgImage})` }}>
                        <div className="row">
                            <div className="col-md-8">
                                <div className="d-flex justify-content-start">
                                    <Carousel
                                        interval={3000}
                                        prevIcon={<span className="carousel-control-prev-icon" aria-hidden="true" />}
                                        nextIcon={<span className="carousel-control-next-icon" aria-hidden="true" />}
                                        onMouseEnter={handleImageClick}
                                        onMouseLeave={handleImageMouseLeave}
                                        className="custom-carousel"
                                    >
                                        {data.selectedSession.images.map((image, index) => (
                                            <Carousel.Item key={index}>
                                                <img src={image} alt={`Image ${index + 1}`} className="d-block" width="200" height="150" />
                                            </Carousel.Item>
                                        ))}
                                    </Carousel>
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Full Name: </span> {data.selectedSession.firstName}{' '}{data.selectedSession.lastName}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="p-3 ">
                                    <div className="d-flex justify-content-start align-items-start" style={{ height: '100%' }}>
                                        <h6 className="text-center">Flyers And Advertisements</h6>
                                    </div>
                                    <ul className="list-unstyled">
                                        {data.selectedSession.uploadedFiles.map((file, index) => (
                                            <li key={index}>
                                                <div className="d-flex align-items-center mb-2 p-2 rounded hover-effect" style={{ backgroundColor: "#ccc" }}>
                                                    <i className="bi bi-file-earmark-arrow-down-fill me-2 fs-4"></i>
                                                    <a href={file.url} download className="text-decoration-none text-dark fw-bold">
                                                        {file.fileName}
                                                    </a>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Session Title: </span>{data.selectedSession.title}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Description: </span>{data.selectedSession.description}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Session Date: </span>{data.selectedSession.date}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Location: </span>{data.selectedSession.location}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Duration: </span>{data.selectedSession.duration}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Enterance Fee: </span>{data.selectedSession.entrance_fee}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Category:</span> {data.selectedSession.category}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>NIC: </span> {data.selectedSession.nic}
                                </div>
                                <div className="mt-2 bordered-paragraph rounded">
                                    <span style={{ color: '#9F390D', fontWeight: 'bold' }}>Email: </span> {data.selectedSession.email}
                                </div>
                            </div>
                        </div>

                    </Modal.Body>
                )}
                <StyledModalFooter>
                    {data.activeTab === 'Accepted' && (
                        <>

                            <Form.Check
                                type="radio"
                                name="enableDisableRadio"
                                id="enableRadio"
                                label="Enable"
                                checked={data.enable}
                                onChange={() => setData({ ...data, enable: true })}
                                className='ms-0 me-1 custom-radio'
                            />
                            <Form.Check
                                type="radio"
                                name="enableDisableRadio"
                                id="disableRadio"
                                label="Disable"
                                checked={!data.enable}
                                onChange={() => setData({ ...data, enable: false })}
                                className='ms-0 me-5 custom-radio'
                            />

                        </>
                    )}
                    <div className="col-sm-6 d-flex justify-content-end align-items-end m-0">
                        <Button className="btn-effect3 me-2" onClick={() => setData({ ...data, showDetailsModal: false })}>
                            Cancel
                        </Button>
                        <Button type="submit" className="btn-effect">
                            More Info
                        </Button>
                    </div>
                </StyledModalFooter>

            </Modal>
        </div>
    );
}

export default AdminSessions;
