import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import '../../style/ServiceProvider/ServiceProviderSidebar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CustomerSideBar() {
    return (
        <div className="container-fluid-4 ps-2 m-0">
            <div className="row h-100">
                <div className="side-bar-sub-container col-auto col-md-2.5 min-vh-100 d-sm-inline d-flex justify-content-between flex-column">
                    <div className="sidebar-content">
                        <ul className="nav nav-pills flex-column" id="parentM">

                            <li className="nav-item text-white fs-4 mt-4 py-2 py-sm-1">
                                <a href="#" className="nav-link text-white">
                                    <i className="bi bi-speedometer2 " id="nav-single-element"></i>
                                    <span className="ms-3 d-none d-lg-inline ">Dashboard</span>
                                </a>
                            </li>

                            <li className="nav-item text-white fs-4 mt-2 py-2 py-sm-1">
                                <a href="#" className="nav-link text-white">
                                    <i className="bi bi-house " id="nav-single-element"></i>
                                    <span className="ms-3 d-none d-lg-inline ">Services</span>
                                </a>
                            </li>


                            {/* <li className="nav-item text-white fs-4 my-1 py-2 py-sm-1">
                                <a href="#" className="nav-link text-white fs-5">
                                    <i className="bi bi-file-post-fill"></i>
                                    <span className="ms-3 d-none d-lg-inline">Post Vacancies</span>
                                </a>
                            </li> */}

                            <li className="nav-item text-white fs-4 my-0 py-2 py-sm-1">
                                <a href="#submenu-1" className="nav-link text-white fs-5" data-bs-toggle="collapse">
                                    <i className="bi bi-file-post-fill"></i>
                                    <span className="ms-3 d-none  d-none d-lg-inline d-sm-none d-md-none">Vacancies</span>
                                    <i className="bi bi-caret-down-fill ms-2 d-none d-lg-inline d-sm-none d-md-none"></i>

                                    <NavDropdown id="basic-nav-dropdown" className="dropdown-icon d-md-inline d-sm-inline d-lg-none custom-dropdown">
                                        <NavDropdown.Item href="#" className="no-hover">Post Vacancies</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#" className="no-hover">End Vacancies</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#" className="no-hover">Response Vacancies</NavDropdown.Item>
                                    </NavDropdown>
                                </a>
                                <ul className="nav collapse ms-4.5 flex-column" id="submenu-1" data-bs-parent="#parentM">
                                    <li className="nav-item fs-5 d-none d-lg-inline d-sm-none d-md-none">
                                        <a className="nav-link text-white sub-item-nav ms-4" href="#">Post Vacancies</a>
                                    </li>
                                    <li className="nav-item fs-5 d-none d-lg-inline d-sm-none d-md-none">
                                        <a className="nav-link text-white sub-item-nav ms-4" href="#">End Vacancies</a>
                                    </li>
                                    <li className="nav-item fs-5 d-none d-lg-inline d-sm-none d-md-none">
                                        <a className="nav-link text-white sub-item-nav ms-4" href="#">Response</a>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-1">
                                <a href="#" className="nav-link text-white fs-5">
                                    <i className="bi bi-receipt"></i>
                                    <span className="ms-3 d-none d-lg-inline">Quotation</span>
                                </a>
                            </li>
                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-1">
                                <a href="#" className="nav-link text-white fs-5">
                                    <i className="fa-solid fa-people-group"></i>
                                    <span className="ms-3 d-none d-lg-inline">Forum</span>
                                </a>
                            </li>
                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-1">
                                <a href="#" className="nav-link text-white fs-5">
                                    <i className="bi bi-file-earmark-text"></i>
                                    <span className="ms-3 d-none d-lg-inline">Complaints</span>
                                </a>
                            </li>



                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomerSideBar;