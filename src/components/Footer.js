import React from 'react';
import "../App.css";
import ImageOne from "../images/12.svg";
import ImageTwo from "../images/13.svg";
import ImageThree from "../images/14.png";
import ImageFour from "../images/15.png";
import ImageFive from "../images/2.png";
import {
    Link
} from "react-router-dom";

function Footer() {
    return (
        <>
            <footer className="footer-section pt-100 pb-70">
                <div className="container">
                    <div className="main-footer">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="footer-area">
                                    <div className="footer-heading">
                                        <h3>About Us</h3>
                                    </div>
                                    <p>Grace IT Services Pvt. Ltd. is a young, ambitious and trusted global technology service company.We are providing a wide range of Development and Marketing Services, Team includes Quality Analysts, Experienced programmers and creative Graphical Engineers.</p>
                                    <ul className="footer-social">
                                        <li className=""><a href="https://www.linkedin.com/" target="_blank" className="bg-3955bc"><i class="bi bi-linkedin"></i></a></li>
                                        <li className=""><a href="https://www.facebook.com/" target="_blank" className="bg-1da1f2"><i class="bi bi-facebook"></i></a></li>
                                        <li className=""><a href="https://twitter.com/" target="_blank" className="bg-004dff"><i class="bi bi-twitter"></i></a></li>
                                        <li className=""><a href="https://www.instagram.com/" target="_blank" className="bg-0273af"><i class="bi bi-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-item-area">
                                    <div className="footer-heading">
                                        <h3>Important Links</h3>
                                    </div>
                                    <ul className="footer-quick-links">
                                        <li className=""><Link to="/#">About Us</Link></li>
                                        <li className=""><Link to="/#">Careers</Link></li>
                                        <li className=""><Link to="/#">Testimonials</Link></li>
                                        <li className=""><Link to="/#">Privacy Policy</Link></li>
                                        <li className=""><Link to="/#">FAQ</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="footer-item-area">
                                    <div className="footer-heading">
                                        <h3>Featured Service</h3>
                                    </div>
                                    <ul className="footer-quick-links">
                                        <li className=""><a href="/#">Web Desiging</a></li>
                                        <li className=""><a href="/#">Graphics Designing</a></li>
                                        <li className=""><a href="/#">React JS</a></li>
                                        <li className=""><a href="/#">.Net Development</a></li>
                                        <li className=""><a href="/#">PHP Development</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="mb-30">
                                    <div className="footer-heading">
                                        <h3>Contact</h3>
                                    </div>
                                    <div className="footer-info-contact"><i class="bi bi-phone"></i>
                                        <h3>Phone</h3><span>+91-999-878-000</span></div>
                                    <div className="footer-info-contact">
                                        {/* <i className="flaticon-envelope"></i> */}
                                        <i class="bi bi-envelope-open"></i>
                                        <h3>Email</h3><span>hr@graceit.com</span></div>
                                    <div className="footer-info-contact">
                                        {/* <i className="flaticon-placeholder-filled-point"></i> */}
                                        <i class="bi bi-geo-alt-fill"></i>
                                        <h3>Address</h3><span>Ambala, India</span></div>
                                </div>
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
            </footer>

        </>
    )
}

export default Footer
