import React from 'react';
import "../App.css";
import ImageOne from "../images/12.svg";
import ImageTwo from "../images/13.svg";
import ImageThree from "../images/14.png";
import ImageFour from "../images/15.png";
import ImageFive from "../images/2.png";

function Services() {
    return (
        <>
            <section className="services-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title"><span>Services</span>
                        <h3>How We Can Help?</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-faddd4"><i className="flaticon-landing-page"></i></div>
                                <h3><a href="/single-service/">Graphics Designing</a></h3>
                                <p>Our experienced mobile UI designers are experts in designing an interface which is easy and intuitive for the novice users.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-cafbf1"><i className="flaticon-goal"></i></div>
                                <h3><a href="/single-service/">React JS</a></h3>
                                <p>React JS is an open source JavaScript framework acclaimed for being high-performance, robust, and scalable.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-ddd5fb"><i className="flaticon-contract"></i></div>
                                <h3><a href="/single-service/">Quality Assurance</a></h3>
                                <p>As enterprises look for nothing less than perfection in their software applications and methodologies.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-fcdeee"><i className="flaticon-application"></i></div>
                                <h3><a href="/single-service/">Web Desiging</a></h3>
                                <p>We help you to engage with your potential audience because we are passionate to do so.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-c5ebf9"><i className="flaticon-seo"></i></div>
                                <h3><a href="/single-service/">Node JS</a></h3>
                                <p>Node.js framework powers developing scalable, faster network applications quickly because of its lightweight.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-f8fbd5"><i className="flaticon-data-recovery"></i></div>
                                <h3><a href="/single-service/">Android / IOS App</a></h3>
                                <p>We, at Grace IT Services Pvt. Ltd. leverage the Hybrid Application Development for your enterprises.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-f8fbd5"><i className="flaticon-data-recovery"></i></div>
                                <h3><a href="/single-service/">.Net Development</a></h3>
                                <p>We, at Grace IT Services Pvt. Ltd., are a leading .NET Application Development Company.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-f8fbd5"><i className="flaticon-data-recovery"></i></div>
                                <h3><a href="/single-service/">PHP Development</a></h3>
                                <p>We create full-featured web applications with the help of many framework and offer clients high-quality PHP programs.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon bg-f8fbd5"><i className="flaticon-data-recovery"></i></div>
                                <h3><a href="/single-service/">Angular JS</a></h3>
                                <p>Angular JS is utilized to develop browser-based applications and mobile applications with reduced development time.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="default-animation">
                    <div className="shape-img1">
                        <img src={ImageOne} alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src={ImageTwo} alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src={ImageThree} alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src={ImageFour} alt="image" />
                    </div>
                    <div className="shape-img5">
                        <img src={ImageFive} alt="image" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Services
