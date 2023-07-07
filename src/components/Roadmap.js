import React from 'react';
import "../App.css";
import ImageOne from "../images/12.svg";
import ImageTwo from "../images/13.svg";
import ImageThree from "../images/14.png";
import ImageFour from "../images/15.png";
import ImageFive from "../images/2.png";

function roadmap() {
    return (
        <>
            <section className="roadmap-section pt-100 pb-70">
                <div className="container">
                    <div className="roadmap-title"><span>Roadmap</span>
                        <h3>Roadmap to capitalize the opportunity</h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-roadmap-box bg-one">
                                <div className="icon bg-faddd4"><i className="flaticon-landing-page"></i></div>
                                <h3><a href="/single-roadmap/">Evaluate opportunities and prototype</a></h3>
                                <p>Evaluate the opportunities with our design thinking based evaluation framework and build prototypes.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-roadmap-box bg-two">
                                <div className="icon bg-cafbf1"><i className="flaticon-goal"></i></div>
                                <h3><a href="/single-roadmap/">Execute and Test Solution</a></h3>
                                <p>Execute the IT solution with technology and process limitations on the chosen platform. Test for performance, security and scale.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-roadmap-box bg-three">
                                <div className="icon bg-ddd5fb"><i className="flaticon-contract"></i></div>
                                <h3><a href="/single-roadmap/">Implement and Operate</a></h3>
                                <p>Implement solutions and Authorize updatesand changes.</p>
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

export default roadmap
