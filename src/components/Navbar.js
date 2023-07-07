import React from "react";
import '../App.css';
import ImageOne from "../images/custom-final-logo-Next-blk-1-e1613563680640.png";
import {
    Link
} from "react-router-dom";

function App() {
    return (

        <div className="App" >
            <div className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-dark pl-0 pr-0">
                    <a style={{color : "#f1b517"}}className="navbar-brand" href="#">
              Grace IT 
            </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapsibleNavbar"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="collapsibleNavbar">
                            <ul className="navbar-nav mr-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">AboutUs</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Career
                                        {/* <span className="hiring-tip">
                                            <img alt="" src="images/hiring1-png.png" /></span> */}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link m-0" href="contact-us">
                                        <button className="transitionflowing">ContactUs</button></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default App;