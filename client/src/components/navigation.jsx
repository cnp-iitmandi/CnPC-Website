import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import iitimage from "../images/resize.png";
import logo from "./logo.ico";
import noc from "./NOC.doc";
class Navigation extends Component {
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    // const { user } = this.props.auth;
    let navimg = {
      width: "100px",
      height: "50px",
      padding: "0 10px",
    };
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <img className="navbar-brand " style={navimg} src={logo}></img>
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              {/* <span className='sr-only'>Toggle navigation</span>{' '} */}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="/">
              CnP, IIT Mandi
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a href="/#why_recruit" className="page-scroll dropbtn">
                  <b>Why IIT Mandi ?</b>
                </a>
              </li>
              <li className="dropdown">
                <a href="#features" className="page-scroll dropbtn">
                  <strong>Recruiters Valley</strong>
                </a>
                <div className="dropdown-content">
                  <a href="/Recpro">
                    Recruitment Process
                  </a>
                  <a href="https://drive.google.com/file/d/1yzcZepfq2UIVK73xc09oosTrfFlxn5dF/view?usp=sharing" target="_blank" >
                    CnP policy for Company
                  </a>
                  {/* {this.props.auth.isAuthenticated &&
                  this.props.auth.user.role == "recruiter" ? (
                    <a href="/dashboardRecruiter">Dashboard</a>
                  ) : (
                    <>
                      <a href="/registerRecruiter">Register</a>
                      <a href="/loginRecruiter">Login</a>
                    </>
                  )} */}

                  {/* <a href="#">Placement brochure</a> */}
                  <a href="https://www.figma.com/design/ngcd1bCAPFBOCQdVRZkdHG/CnP-Brochure-2024-25?fuid=1255801949228038361" target="blank">
                    Brochure
                  </a>
                  <a href="/past">
                    Past Recruiters
                  </a>
                  <a href="/demographics" target="blank">
                    Demographics
                  </a>
                  <a id="outerDiv" className="dropbtn">
                  Forms{" "}
                  <i
                    style={{ float: "right", marginTop: "4px" }}
                    class="fas fa-caret-right"
                  ></i>
                  <div
                    id="innerDiv"
                    className="dropdown-content btn-group dropright"
                  >
                    <a href="https://docs.google.com/document/d/1qXnT3VwJ91AdR88xXaBQGw9_Iss6DMVJ/edit" target={"_blank"}>
                    INF form
                    </a>
                    <a href="https://docs.google.com/document/d/1tVSJ-L0pHXRQBv_EpMCEo5kyqVRhVe4y/edit" target={"_blank"}>
                    JNF form
                    </a>
                  </div>
                </a>
                  {/*<a
                    href="https://iitmandi.ac.in/calender2022/Home/ViewCalendar/2.html" target="_blank">
                    Calendar
                  </a>*/}
                </div>
              </li>
              <li className="dropdown">
                <a href="#features" className="page-scroll dropbtn">
                  <strong>Students Col</strong>
                </a>
                <div className="dropdown-content">
                  {/* {this.props.auth.isAuthenticated &&
                  this.props.auth.user.role == "student" ? (
                    <a href="/dashboardStudent">Dashboard</a>
                  ) : (
                    <a href="/loginStudent">Login</a>
                  )} */}
                  <a id="outerDiv" className="dropbtn" >
                    CnP Policy For Students{" "}
                    <i style={{ float: "right", marginTop: "4px" }} class="fas fa-caret-right" ></i>
                    <div id="innerDiv" className="dropdown-content btn-group dropright" >
                      <a href="https://docs.google.com/document/d/1fdXgPW90P_-577Ysjcx3lLFHKS72ZOGaFJ0IqiolrB8/edit" target={"_blank"}>
                        Internship Policy
                      </a>
                      <a href="https://docs.google.com/document/d/1DwPjxCmo2FD89vn_mjnREbQqRm8yLEP1wyPEmLWk7dQ/edit?addon_store" target="_blank">
                        Placement Policy
                      </a>
                    </div>
                </a>
                  {/* <a href="/noticeboard">Noticeboard</a> */}
                  {/* <a href={noc}>Forms </a> */}
                  <a id="outerDiv" className="dropbtn" >
                    Forms{" "}
                    <i style={{ float: "right", marginTop: "4px" }} class="fas fa-caret-right" ></i>
                    <div id="innerDiv" className="dropdown-content btn-group dropright" >
                      <a href="https://docs.google.com/document/d/1iVD3wzyHI591f39YQ9R32UtLbJ31ItyT/edit?usp=sharing&ouid=101579694841482910243&rtpof=true&sd=true" target={"_blank"}>
                        Internship document
                      </a>
                      <a href={noc}>
                        Noc
                      </a>
                    </div>
                </a>
                  {/* <a href="/PrepPortal">Preparation Portal</a> */}
                </div>
              </li>
              <li className="dropdown">
                <a href="/contact" className="page-scroll dropbtn">
                  <strong>Contact Us</strong>
                </a>
                {/* <div className="dropdown-content">
                <a href="/contact">Professor in charge</a>
                <a href="/contact">Placement cell details</a>
                <a href="/contact">Student coordinators</a>
                <a href="/contact">Administrative staff</a>
              </div> */}
              </li>

              {this.props.auth.isAuthenticated ? (
                <button
                  onClick={this.onLogout}
                  className="page-scroll dropbtn logout"
                >
                  Logout
                </button>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navigation);