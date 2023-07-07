import React from 'react';
import "../App.css";
import {
    Link
} from "react-router-dom";


function Features() {
    return (
        <>
            <section className="features-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="features-content-area">
                                <span>CARE FEATURES</span>
                                <h3>IT Services Offerings to Build a better future</h3>
                                <p>Grace IT servies Provide realistc, customized solutions and consultation support for Web Applications/Softwares, Mobile Applications and Digital Marketing.</p>
                                <div className="features-btn">
                                    <Link to='/#' className="features-btn-one">More Details</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f1eff8">
                                        <div className="icon">
                                            <i className="flaticon-seo"></i>
                                        </div>
                                        <h3>Seo Consultancy</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-fbe6d4">
                                        <div className="icon">
                                            <i className="flaticon-analytics"></i>
                                        </div>
                                        <h3>Website Design</h3>
                                        <p>We specialise in web designing and development. Whether you need to create a new website or update the existing.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f0fffc">
                                        <div className="icon">
                                            <i className="flaticon-laptop"></i>
                                        </div>
                                        <h3>Apps Development</h3>
                                        <p>Star It is ready to go the extra mile to ensure that you requirement is fulfilled. From eCommerce to education.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="single-features-item bg-f8e1eb">
                                        <div className="icon">
                                            <i className="flaticon-analysis-1"></i>
                                        </div>
                                        <h3>Digital Marketing</h3>
                                        <p>Generate your sales opportunity with digital marketing services from Star IT. Our strategic solutions.</p>
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

export default Features
