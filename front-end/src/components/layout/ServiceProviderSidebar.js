import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import '../../style/ServiceProvider/ServiceProviderSidebar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function ServiceProviderSideBar() {
    return (
        <div className="container-fluid-4 ps-2 m-0">
            <div className="row h-100">
                <div className="side-bar-sub-container col-auto col-md-2.5 min-vh-100 d-sm-inline d-flex justify-content-between flex-column">
                    <div className="sidebar-content">
                        <ul className="nav nav-pills flex-column" id="parentM">
                            <li className="nav-item text-white fs-4 mt-4 py-2 py-sm-1">
                                <Link to="#" className="nav-link nav-link-sidebar text-white">
                                    <i
                                        className="bi bi-speedometer2 "
                                        id="nav-single-element"
                                    ></i>
                                    <span className="ms-3 d-none d-lg-inline ">Dashboard</span>
                                </Link>
                            </li>

                            <li className="nav-item text-white fs-4 my-0 py-2 py-sm-1">
                                <Link to="#"
                                    className="nav-link nav-link-sidebar text-white fs-5"
                                    data-bs-toggle="collapse"
                                >
                                    <i className="bi bi-house  d-none d-lg-inline"></i>
                                    <span className="ms-3 d-none d-lg-inline">My Services</span>
                                    <i className="bi bi-chevron-down ms-2 d-none d-lg-inline"></i>

                                    <NavDropdown
                                        title={
                                            <>
                                                <i className="bi bi-house"></i>
                                            </>
                                        }
                                        id="basic-nav-dropdown"
                                        className="dropdown-icon d-md-inline d-sm-inline d-lg-none custom-dropdown"
                                    >
                                        <NavDropdown.Item href="#Customer" className="no-hover">
                                            My Jobs
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            href="#serviceProvider"
                                            className="no-hover"
                                        >
                                            My Vacancies
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Link>
                                <ul
                                    className="nav collapse ms-4.5 flex-column"
                                    id="submenu-1"
                                    data-bs-parent="#parentM"
                                >
                                    <li className="nav-item fs-5 d-none d-lg-inline">
                                        <Link to="#"
                                            className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
                                        >
                                            Jobs
                                        </Link>
                                        <Link to="#"
                                            className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
                                        >
                                            Vacancies
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-1">
                                <Link to="#"
                                    className="nav-link nav-link-sidebar text-white fs-5"
                                >
                                    <i
                                        className="bi bi-calendar-week"
                                        id="nav-single-element"
                                    ></i>
                                    <span className="ms-3 d-none d-lg-inline">
                                        Availability Calendar
                                    </span>
                                </Link>
                            </li>

                            <li className="nav-item text-white fs-4 my-0 py-2 py-sm-1">
                                <Link to="#"
                                    className="nav-link nav-link-sidebar sub-sec text-white fs-5"
                                    data-bs-toggle="collapse"
                                    aria-current="page"
                                >
                                    <i className="bi bi-file-earmark-post  d-none d-lg-inline"></i>
                                    <span className="ms-3 d-none d-lg-inline">Blogs</span>
                                    <i className="bi bi-chevron-down ms-2 d-none d-lg-inline"></i>

                                    <NavDropdown
                                        title={
                                            <>
                                                <i className="bi bi-file-earmark-post"></i>
                                            </>
                                        }
                                        id="basic-nav-dropdown"
                                        className="dropdown-icon d-md-inline d-sm-inline d-lg-none custom-dropdown"
                                    >
                                        <NavDropdown.Item href="#Customer" className="no-hover">
                                            Create a Blog
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            href="#serviceProvider"
                                            className="no-hover"
                                        >
                                            My Blogs
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Link>
                                <ul
                                    className="nav collapse ms-4.5 flex-column"
                                    id="submenu-2"
                                    data-bs-parent="#parentM"
                                >
                                    <li className="nav-item fs-5 d-none d-lg-inline">
                                        <Link to="#"
                                            className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
                                        >
                                            Create a Blog
                                        </Link>
                                        <Link to="#"
                                            className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
                                        >
                                            My Blogs
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-1">
                                <Link to="#"
                                    className="nav-link nav-link-sidebar text-white fs-5"
                                >
                                    <i
                                        className="bi bi-calendar2-plus "
                                        id="nav-single-element"
                                    ></i>
                                    <span className="ms-3 d-none d-lg-inline">
                                        Create Sessions
                                    </span>
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