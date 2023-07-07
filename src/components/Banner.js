import React from 'react';
import "../App.css";
import MainImage from "../images/main-image.png";
import {
    Link
} from "react-router-dom";

function Banner() {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-content">
                                <h1>Grace IT Services Pvt. Ltd</h1>
                                <p>We're full service provider which means we've got you covered on Design, Web Development and Content right through to digital.</p>
                                <div className="banner-btn">
                                    <Link to="/#" className="default-btn-one" >Get Started</Link>
                                    <div className="video-btn popup-youtube">Watch Video
                                        <i className="flaticon-play-button"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="banner-image">
                                <img src={MainImage} className="animate__animated animate__zoomIn animate__delay-0.5s" alt="main-image.png" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
