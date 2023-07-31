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

function CustomerSideBar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      className={`${styles.containerFluid4} ps-2 m-0 ${
        isOpen ? styles.largeScreen : styles.smallScreen
      }`}
    >
      <div className="row h-100">
        <div
          className="side-bar-sub-container col-auto col-md-2.5 min-vh-100 d-xs-inline d-flex justify-content-between flex-column"
          style={{ backgroundImage: `url(${Image})` }}
        >
          <div className="sidebar-content">
            <ul className="nav nav-pills flex-column" id="parentM">
              <li
                className={`fs-4 mt-3 py-2 d-flex d-none d-lg-inline ${
                  isOpen ? "align-self-end" : "mx-3"
                }`}
                onClick={toggle}
                style={{
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <i
                  className="bi bi-list text-white"
                  style={{ marginLeft: "auto" }}
                ></i>
              </li>

              <li className="nav-item text-white fs-4 mt-4 py-2 py-xs-1">
                <Link to="#" className="nav-link nav-link-sidebar text-white">
                  <i
                    className="bi bi-speedometer2 "
                    id="nav-single-element"
                  ></i>
                  <span
                    className={`ms-3 d-none ${
                      isOpen ? "d-lg-inline" : "d-none"
                    }`}
                  >
                    Dashboard
                  </span>
                </Link>
              </li>

              <li className="nav-item text-white fs-4 mt-2 py-2 py-xs-1">
                <Link to="#" className="nav-link nav-link-sidebar text-white">
                  <i
                    className="bi bi-house "
                    id="nav-single-element"
                  ></i>
                  <span
                    className={`ms-3 d-none ${
                      isOpen ? "d-lg-inline" : "d-none"
                    }`}
                  >
                    Services
                  </span>
                </Link>
              </li>

              <li className="nav-item text-white fs-4 my-0 py-2 py-xs-1">
                <Link
                  to="#submenu-1"
                  className="nav-link nav-link-sidebar text-white fs-5"
                  data-bs-toggle="collapse"
                  aria-current="page"
                >
                  <i
                    className={`bi bi-file-post-fill d-none ${
                      isOpen ? "d-lg-inline" : "d-none"
                    }`}
                  ></i>
                  <span
                    className={`ms-3 d-none ${
                      isOpen ? "d-lg-inline" : "d-none"
                    }`}
                  >
                     Vacancies 
                  </span>
                  <i
                    className={`bi bi-chevron-down ms-2 d-none ${
                      isOpen ? "d-lg-inline" : "d-none"
                    }`}
                  ></i>

                  <NavDropdown
                    title={
                      <>
                        <i className="bi bi-file-post-fill"></i>
                      </>
                    }
                    id="basic-nav-dropdown"
                    className={`dropdown-icon d-md-inline d-xs-inline custom-dropdown ${
                      isOpen ? " d-lg-none" : "d-lg-inline"
                    }`}
                  >
                    <NavDropdown.Item href="#Customer" className="no-hover">
                    Post Vacancies
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#"
                      className="no-hover"
                    >
                      End Vacancies
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="#"
                      className="no-hover"
                    >
                      Response Vacancies
                    </NavDropdown.Item>

                  </NavDropdown>
                </Link>
                <ul
                  className="nav collapse ms-4.5 flex-column"
                  id="submenu-1"
                  data-bs-parent="#parentM"
                >
                  <li
                    className={`nav-item fs-5 ${
                      isOpen ? "d-lg-inline" : "d-none"
                    }`}
                  >
                    <Link
                      to="#"
                      className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
                    >
                      Post Vacancies
                    </Link>
                    <Link
                      to="#"
                      className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
                    >
                      End Vacancies
                    </Link>
                    <Link
                      to="#"
                      className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
                    >
                      Responses
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item text-white fs-4 my-1 py-2 py-xs-1">
                <Link
                  to="#"
                  className="nav-link nav-link-sidebar text-white fs-5"
                >
                  <i
                    className="bi bi-receipt"
                    id="nav-single-element"
                  ></i>
                  <span
                    className={`ms-3 d-none ${
                      isOpen ? "d-lg-inline" : "d-none"
                    }`}
                  >
                    Quotations
                  </span>
                </Link>
              </li>

              <li className="nav-item text-white fs-4 my-1 py-2 py-xs-1">
                <Link
                  to="#"
                  className="nav-link nav-link-sidebar text-white fs-5"
                >
                  <i
                    className="fa-solid fa-people-group"
                    id="nav-single-element"
                  ></i>
                  <span
                    className={`ms-3 d-none ${
                      isOpen ? "d-lg-inline" : "d-none"
                    }`}
                  >
                    Forum
                  </span>
                </Link>
              </li>


              <li className="nav-item text-white fs-4 my-1 py-2 py-xs-1">
                <Link
                  to="#"
                  className="nav-link nav-link-sidebar text-white fs-5"
                >
                  <i
                    className="bi bi-file-earmark-text "
                    id="nav-single-element"
                  ></i>
                  <span
                    className={`ms-3 d-none ${
                      isOpen ? "d-lg-inline" : "d-none"
                    }`}
                  >
                    Complaints
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

export default CustomerSideBar;
