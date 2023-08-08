import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "../../style/ServiceProvider/ServiceProviderSidebar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Image from "../../assets/images/header/bg_1.png";
import styles from "../../style/ServiceProvider/ServiceProviderSideBar.module.css";

function ServiceProviderSideBar() {

    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <div className={`${styles.containerFluid4} ps-2 m-0 ${isOpen ? styles.largeScreen : styles.smallScreen}`}>
            <div className="row h-100">
                <div className="side-bar-sub-container col-auto col-md-2.5 min-vh-100 d-xs-inline d-flex justify-content-between flex-column" style={{ backgroundImage: `url(${Image})`}}>
                    <div className="sidebar-content">
                        <ul className="nav nav-pills flex-column" id="parentM">

                            <li className={`fs-4 mt-3 py-2 d-flex d-none d-lg-inline ${isOpen ? "align-self-end" : "mx-3"}`} onClick={toggle}
                                style={{
                                    position: 'relative',
                                    cursor: 'pointer',
                                }}>
                                <i className="bi bi-list text-white" style={{ marginLeft: 'auto' }}></i>
                            </li>



                            <li className="nav-item text-white fs-4 mt-4 py-2 py-xs-1">
                                <Link to="#" className="nav-link nav-link-sidebar text-white">
                                    <i className="bi bi-grid"></i>
                                    <span className={`ms-3 d-none ${isOpen ? "d-lg-inline" : "d-none"}`}>Dashboard</span>
                                </Link>
                            </li>



                            <li className="nav-item text-white fs-4 my-0 py-2 py-xs-1">
                                <Link to="#" className="nav-link nav-link-sidebar text-white">
                                    <i className="bi bi-people" id="nav-single-element" style={{ fill: "none" }}></i>
                                    <span className={`ms-3 d-none ${isOpen ? "d-lg-inline" : "d-none"}`}>Jobs & Vacancies</span>
                                </Link>
                            </li>



                            <li className="nav-item text-white fs-4 my-0 py-2 py-xs-1">
                                <Link to="#" className="nav-link nav-link-sidebar text-white">
                                    <i className="bi bi-tools" id="nav-single-element" style={{ fill: "none" }}></i>
                                    <span className={`ms-3 d-none ${isOpen ? "d-lg-inline" : "d-none"}`}>My Services</span>
                                </Link>
                            </li>



                            <li className="nav-item text-white fs-4 my-0 py-2 py-xs-1">
                                <Link to="#" className="nav-link nav-link-sidebar text-white">
                                    <i className="bi bi-calendar2-check" id="nav-single-element" style={{ fill: "none" }}></i>
                                    <span className={`ms-3 d-none ${isOpen ? "d-lg-inline" : "d-none"}`}>Availability Calendar</span>
                                </Link>
                            </li>



                            <li className="nav-item text-white fs-4 my-0 py-2 py-xs-1">
                                <Link to="#" className="nav-link nav-link-sidebar text-white">
                                    <i className="bi bi-card-heading" id="nav-single-element" style={{ fill: "none" }}></i>
                                    <span className={`ms-3 d-none ${isOpen ? "d-lg-inline" : "d-none"}`}>Create Blog</span>
                                </Link>
                            </li>



                            <li className="nav-item text-white fs-4 my-1 py-2 py-xs-1">
                                <Link to="#" className="nav-link nav-link-sidebar text-white">
                                    <i className="bi bi-window-stack"></i>
                                    <span className={`ms-3 d-none ${isOpen ? "d-lg-inline" : "d-none"}`}> Create Session</span> 
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceProviderSideBar;