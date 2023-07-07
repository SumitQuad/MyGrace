import React from 'react';
import "../App.css";
import ImageOne from "../images/logo5.png";
import ImageTwo from "../images/logo-light.png";
import ImageThree from "../images/logo.png";
import ImageFour from "../images/cirtek-logo.svg";
import ImageFive from "../images/logoo.png";
import ImageOnee from "../images/12.svg";
import ImageTwoo from "../images/13.svg";
import ImageThreee from "../images/14.png";
import ImageFourr from "../images/15.png";
import ImageFivee from "../images/2.png";

function PartnerSection() {
    return (
        <>
            <div className="partner-section">
                <div className="container">
                    <div className="history-title">
                        <h3>Our Clients</h3>
                    </div>
                    <div className="row" >
                        <div className="col">
                            <div className="partner-item">
                                <a href="#" target="_blank"
                                ><img src={ImageOne} alt="partner" /></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="partner-item">
                                <a href="#" target="_blank"
                                ><img src={ImageTwo} alt="partner" /></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="partner-item">
                                <a href="#" target="_blank"
                                ><img src={ImageFive} alt="partner" /></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="partner-item">
                                <a href="#" target="_blank"
                                ><img src={ImageThree} alt="partner" /></a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="partner-item">
                                <a href="#" target="_blank">
                                    <img src={ImageFour} alt="partner" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="default-animation">
                    <div className="shape-img1">
                        <img src={ImageOnee} alt="image" />
                    </div>
                    <div className="shape-img2">
                        <img src={ImageTwoo} alt="image" />
                    </div>
                    <div className="shape-img3">
                        <img src={ImageThreee} alt="image" />
                    </div>
                    <div className="shape-img4">
                        <img src={ImageFourr} alt="image" />
                    </div>
                    <div className="shape-img5">
                        <img src={ImageFivee} alt="image" />
                    </div>
                </div> */}

            </div>

        </>
    )
}

export default PartnerSection
