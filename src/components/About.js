import React from 'react';
import "../App.css";
import AboutImage from "../images/about-image.png";


function About() {
    return (
        <>
            <section className="about-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src={AboutImage} className="animate__animated animate__zoomIn animate__delay-0.5s" alt="main-image.png" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-area-content"><span>About Us</span>
                                <h3>We’re a global stakeholder relations and partnership building consultancy.</h3>
                                <strong>Collaborate Consulting exists to find the place where to being seemingly disparate interests meet. From that point of the connection, we create platforms.</strong>
                                <p>Grace IT Services Pvt. Ltd. is the powerhouse of top-notch IT services. Our team believes in empowering solutions through innovation and creativity. We are a leader in providing software development services to the clientele
                                    all over the world.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="single-fun-facts">
                                        <h3>1,165<span className="sign-icon">+</span></h3>
                                        <p>Project Completed</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="single-fun-facts">
                                        <h3>2,665<span className="sign-icon">+</span></h3>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
