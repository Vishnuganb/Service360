// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/js/dist/dropdown";
// import "bootstrap/js/dist/collapse";
// import "../../style/ServiceProvider/ServiceProviderSidebar.css";
// import NavDropdown from "react-bootstrap/NavDropdown";

// function AdvertiserSidebar() {
//   return (
//     <div className="container-fluid-4 ps-2 m-0">
//       <div className="row h-100">
//         <div className="side-bar-sub-container col-auto col-md-2.5 min-vh-100 d-sm-inline d-flex justify-content-between flex-column">
//           <div className="sidebar-content">
//             <ul className="nav nav-pills flex-column" id="parentM">

//               <li className="nav-item text-white fs-4 mt-4 py-2 py-sm-1">
//                 <a href="#" className="nav-link nav-link-sidebar text-white">
//                   <i
//                     className="bi bi-speedometer2 "
//                     id="nav-single-element"
//                   ></i>
//                   <span className="ms-3 d-none d-lg-inline ">Dashboard</span>
//                 </a>
//               </li>

//               <li className="nav-item text-white fs-4 my-0 py-2 py-sm-1">
//                 <a
//                   href="#submenu-2"
//                   className="nav-link nav-link-sidebar sub-sec text-white fs-5"
//                   data-bs-toggle="collapse"
//                   aria-current="page"
//                 >
//                   <i className="bi bi-file-earmark-post  d-none d-lg-inline d-sm-none d-md-none"></i>
//                   <span className="ms-3 d-none d-lg-inline d-sm-none d-md-none">
//                     Orders
//                   </span>
//                   <i className="bi bi-caret-down-fill ms-2 d-none d-lg-inline d-sm-none d-md-none"></i>

//                   <NavDropdown
//                     title={
//                       <>
//                         <i className="bi bi-file-earmark-post"></i>
//                       </>
//                     }
//                     id="basic-nav-dropdown"
//                     className="dropdown-icon d-md-inline d-sm-inline d-lg-none custom-dropdown"
//                   >
//                     <NavDropdown.Item href="#Customer" className="no-hover">
//                       New Orders
//                     </NavDropdown.Item>

//                     <NavDropdown.Divider />

//                     <NavDropdown.Item
//                       href="#serviceProvider"
//                       className="no-hover"
//                     >
//                       Confirm Orders
//                     </NavDropdown.Item>

//                     <NavDropdown.Divider />

//                     <NavDropdown.Item href="#Customer" className="no-hover">
//                       Orders History
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </a>

//                 <ul
//                   className="nav collapse ms-4.5 flex-column"
//                   id="submenu-2"
//                   data-bs-parent="#parentM"
//                 >
//                   <li className="nav-item fs-5 d-none d-lg-inline d-sm-none d-md-none">
//                     <a
//                       className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
//                       href="#"
//                     >
//                       New Orders
//                     </a>
//                   </li>

//                   <li className="nav-item fs-5 d-none d-lg-inline d-sm-none d-md-none">
//                     <a
//                       className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
//                       href="#"
//                     >
//                       Confirm Orders
//                     </a>
//                   </li>

//                   <li className="nav-item fs-5 d-none d-lg-inline d-sm-none d-md-none">
//                     <a
//                       className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
//                       href="#"
//                     >
//                       Orders History
//                     </a>
//                   </li>
//                 </ul>
//               </li>

//               <li className="nav-item text-white fs-4 my-0 py-2 py-sm-1">
//                 <a
//                   href="#submenu-1"
//                   className="nav-link nav-link-sidebar text-white fs-5"
//                   data-bs-toggle="collapse"
//                 >
//                   <i className="bi bi-house  d-none d-lg-inline d-sm-none d-md-none"></i>
//                   <span className="ms-3 d-none  d-none d-lg-inline d-sm-none d-md-none">
//                     My Ads
//                   </span>
//                   <i className="bi bi-caret-down-fill ms-2 d-none d-lg-inline d-sm-none d-md-none"></i>

//                   <NavDropdown
//                     title={
//                       <>
//                         <i className="bi bi-house"></i>
//                       </>
//                     }
//                     id="basic-nav-dropdown"
//                     className="dropdown-icon d-md-inline d-sm-inline d-lg-none custom-dropdown"
//                   >
//                     <NavDropdown.Item href="#Customer" className="no-hover">
//                       Verified Ads
//                     </NavDropdown.Item>

//                     <NavDropdown.Divider />

//                     <NavDropdown.Item
//                       href="#serviceProvider"
//                       className="no-hover"
//                     >
//                       Yet to Verify
//                     </NavDropdown.Item>

//                     <NavDropdown.Divider />

//                     <NavDropdown.Item
//                       href="#serviceProvider"
//                       className="no-hover"
//                     >
//                       Rejected Ads
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </a>

//                 <ul
//                   className="nav collapse ms-4.5 flex-column"
//                   id="submenu-1"
//                   data-bs-parent="#parentM"
//                 >
//                   <li className="nav-item fs-5 d-none d-lg-inline d-sm-none d-md-none">
//                     <a
//                       className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
//                       href="#"
//                     >
//                       Verified Ads
//                     </a>
//                   </li>

//                   <li className="nav-item fs-5 d-none d-lg-inline d-sm-none d-md-none">
//                     <a
//                       className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
//                       href="#"
//                     >
//                       Yet to Verify
//                     </a>
//                   </li>

//                   <li className="nav-item fs-5 d-none d-lg-inline d-sm-none d-md-none">
//                     <a
//                       className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
//                       href="#"
//                     >
//                       Rejected Ads
//                     </a>
//                   </li>
//                 </ul>
//               </li>

//               <li className="nav-item text-white fs-4 my-1 py-2 py-sm-1">
//                 <a
//                   href="#"
//                   className="nav-link nav-link-sidebar text-white fs-5"
//                 >
//                   <i
//                     className="bi bi-calendar-week"
//                     id="nav-single-element"
//                   ></i>
//                   <span className="ms-3 d-none d-lg-inline">Subcription</span>
//                 </a>
//               </li>

//               {/* <li className="nav-item text-white fs-4 my-1 py-2 py-sm-1">
//                 <a
//                   href="#"
//                   className="nav-link nav-link-sidebar text-white fs-5"
//                 >
//                   <i
//                     className="bi bi-calendar2-plus "
//                     id="nav-single-element"
//                   ></i>
//                   <span className="ms-3 d-none d-lg-inline">
//                     Create Sessions
//                   </span>
//                 </a>
//               </li> */}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdvertiserSidebar;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import "../../style/Admin/AdminSidebar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Image from "../../assets/images/header/bg_1.png";
import styles from "../../style/Admin/AdminSidebar.module.css";

function AdvertiserSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      className={`${styles.containerFluid4} ps-2 m-0 d-flex ${
        isOpen ? styles.largeScreen : styles.smallScreen
      }`}
    >
      <div className="row h-100">
        <div
          className={`side-bar-sub-container col-auto col-md-2.5 min-vh-100 d-xs-inline justify-content-between`}
          style={{ backgroundImage: `url(${Image})` }}
        >
          <div className="sidebar-content">
            <ul className={`nav nav-pills flex-column`} id="parentM">
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
                <Link
                  to="/advertiser/Dashboard"
                  className="nav-link nav-link-sidebar text-white"
                >
                  <i className="bi bi-grid"></i>
                  <span
                    className={`ms-3 d-none ${
                      isOpen ? "d-lg-inline" : "d-none"
                    }`}
                  >
                    Dashboard
                  </span>
                </Link>
              </li>

              <li className="nav-item text-white fs-4 my-0 py-2 py-xs-1">
                <Link
                  to="#submenu-1"
                  className={`nav-link nav-link-sidebar text-white d-none ${
                    isOpen ? "d-lg-block" : "d-none"
                  }`}
                  data-bs-toggle="collapse"
                  aria-current="page"
                >
                  <i
                    className={`bi bi-window-stack d-none ${
                      isOpen ? "d-lg-inline" : "d-none"
                    }`}
                  ></i>
                  <span
                    className={`ms-3 d-none ${
                      isOpen ? "d-lg-inline" : "d-none"
                    }`}
                  >
                    Ads
                  </span>
                  <i
                    className={`bi bi-chevron-down ms-3 d-none ${
                      isOpen ? "d-lg-inline" : "d-none"
                    } custom-icon-size`}
                  ></i>
                </Link>

                <NavDropdown
                  title={
                    <>
                      {" "}
                      <i className="bi bi-window-stack"></i>{" "}
                    </>
                  }
                  id="basic-nav-dropdown"
                  className={`dropdown-icon d-md-inline d-xs-inline custom-dropdown ${
                    isOpen ? " d-lg-none" : "d-lg-inline"
                  }`}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/advertiser/VerifiedAds"
                    className="no-hover"
                  >
                    {" "}
                    Verified Ads{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    to="/advertiser/YetToVerifyAds"
                    className="no-hover"
                    as={Link}
                  >
                    {" "}
                    Yet To Verified{" "}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/advertiser/RejectedAds"
                    className="no-hover"
                  >
                    {" "}
                    Rejected Ads{" "}
                  </NavDropdown.Item>
                </NavDropdown>

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
                      to="/advertiser/VerifiedAds"
                      className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
                    >
                      {" "}
                      Verified Ads{" "}
                    </Link>
                    <Link
                      to="/advertiser/YetToVerifyAds"
                      className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
                    >
                      {" "}
                      Yet To Verified{" "}
                    </Link>
                    <Link
                      to="/advertiser/RejectedAds"
                      className="nav-link nav-link-sidebar text-white sub-item-nav ms-4"
                    >
                      {" "}
                      Rejected Ads{" "}
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item text-white fs-4 my-0 py-2 py-xs-1">
                <Link
                  to="/advertiser/Subscribtion"
                  className="nav-link nav-link-sidebar text-white"
                >
                  <i
                    className="bi bi-tools"
                    id="nav-single-element"
                    style={{ fill: "none" }}
                  ></i>
                  <span
                    className={`ms-3 d-none ${
                      isOpen ? "d-lg-inline" : "d-none"
                    }`}
                  >
                    Subcription
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

export default AdvertiserSidebar;
