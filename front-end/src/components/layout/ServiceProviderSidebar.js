import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import '../../style/ServiceProvider/ServiceProviderSidebar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ServiceProviderSideBar(){
    return(
        <div className="container-fluid-lg">
            <div className="row">
                <div className="side-bar-sub-container bg-dark col-auto col-md-2.5 min-vh-100 d-sm-inline d-flex justify-content-between flex-column">
                    <div className="sidebar-content">  
                        <ul className="nav nav-pills flex-column" id="parentM">

                            <li className="nav-item text-white fs-4 mt-4 py-2 py-sm-1">
                                <a href="#" class="nav-link text-white">
                                    <i className="bi bi-speedometer2 " id="nav-single-element"></i>
                                    <span className="ms-3 d-none d-lg-inline ">Dashboard</span>
                                </a>
                            </li>

                            <li className="nav-item text-white fs-4 my-0 py-2 py-sm-1">
                                <a href="#submenu-1" class="nav-link text-white fs-5" data-bs-toggle="collapse">
                                    <i className="bi bi-house  d-none d-lg-inline d-sm-none d-md-none"></i>
                                    <span className="ms-3 d-none  d-none d-lg-inline d-sm-none d-md-none">My Services</span>
                                    <i className="bi bi-caret-down-fill ms-2 d-none d-lg-inline d-sm-none d-md-none"></i>

                                    <NavDropdown title={<><i className="bi bi-house"></i></>} id="basic-nav-dropdown" className="dropdown-icon d-md-inline d-sm-inline d-lg-none custom-dropdown">
                                        <NavDropdown.Item href="#Customer" className="no-hover">My Jobs</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#serviceProvider" className="no-hover">My Vacancies</NavDropdown.Item>
                                    </NavDropdown>
                                </a>
                                <ul class="nav collapse ms-4.5 flex-column" id="submenu-1" data-bs-parent="#parentM">
                                    <li class="nav-item fs-5 d-none d-lg-inline d-sm-none d-md-none">
                                        <a class="nav-link text-white sub-item-nav" href="#">Jobs</a>
                                    </li>
                                    <li class="nav-item fs-5 d-none d-lg-inline d-sm-none d-md-none">
                                        <a class="nav-link text-white sub-item-nav" href="#">Vacancies</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-1">
                                <a href="#" class="nav-link text-white fs-5">
                                    <i className="bi bi-calendar-week" id="nav-single-element"></i>
                                    <span className="ms-3 d-none d-lg-inline">Availability Calendar</span>
                                </a>
                            </li>

                            <li className="nav-item text-white fs-4 my-0 py-2 py-sm-1">
                                <a href="#submenu-2" class="nav-link sub-sec text-white fs-5" data-bs-toggle="collapse" aria-current="page">
                                    <i className="bi bi-file-earmark-post  d-none d-lg-inline d-sm-none d-md-none"></i>
                                    <span className="ms-3 d-none d-lg-inline d-sm-none d-md-none">Blogs</span>
                                    <i className="bi bi-caret-down-fill ms-2 d-none d-lg-inline d-sm-none d-md-none"></i>
                                    
                                    <NavDropdown title={<><i className="bi bi-file-earmark-post"></i></>} id="basic-nav-dropdown" className="dropdown-icon d-md-inline d-sm-inline d-lg-none custom-dropdown">
                                        <NavDropdown.Item href="#Customer" className="no-hover">Create a Blog</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#serviceProvider" className="no-hover">My Blogs</NavDropdown.Item>
                                    </NavDropdown>

                                </a>
                                <ul class="nav collapse ms-4.5 flex-column" id="submenu-2" data-bs-parent="#parentM">
                                    <li class="nav-item fs-5 d-none d-lg-inline d-sm-none d-md-none">
                                        <a class="nav-link text-white sub-item-nav" href="#">Create a Blog</a>
                                    </li>
                                    <li class="nav-item fs-5 d-none d-lg-inline d-sm-none d-md-none">
                                        <a class="nav-link text-white sub-item-nav" href="#">My Blogs</a>
                                    </li>
                                    
                                </ul>
                            </li>

                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-1">
                                <a href="#" class="nav-link text-white fs-5">
                                    <i className="bi bi-calendar2-plus " id="nav-single-element"></i>
                                    <span className="ms-3 d-none d-lg-inline">Create Sessions</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceProviderSideBar;