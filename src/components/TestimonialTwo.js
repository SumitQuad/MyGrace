import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImageNine from "../images/3 (1).jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
    var settings = {
        className: "center",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <>
            <section className="testimonial-section ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="testimonial-content-area">
                                <span>Testimonial</span>
                                <h3>What Our Client Say</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                                    ipsum suspendisse ultrices gravida. Risus commodo viverra
                                    maecenas accumsan lacus.Lorem is simply dummy text of the
                                    printing and typesetting industry.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7 testimonial-slides">
                            <Slider {...settings}>
                                <div
                                    className="owl-item cloned"
                                >
                                    <div className="testimonial-single-item">
                                        <div className="testimonial-image">
                                            <img src={ImageNine} alt="image" />
                                        </div>
                                        <div className="testimonial-content-text">
                                            <h3>Mahindra jhon</h3>
                                            <span>Ceo &amp; Sustainable designer</span>
                                            <div className="icon"><i className="flaticon-quote"></i></div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Quis ipsum suspendisse gravida.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="owl-item cloned"
                                >
                                    <div className="testimonial-single-item">
                                        <div className="testimonial-image">
                                            <img src={ImageNine} alt="image" />
                                        </div>
                                        <div className="testimonial-content-text">
                                            <h3>Lee Munroe</h3>
                                            <span>Underwriter</span>
                                            <div className="icon"><i className="flaticon-quote"></i></div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Quis ipsum suspendisse gravida.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="owl-item cloned"
                                >
                                    <div className="testimonial-single-item">
                                        <div className="testimonial-image">
                                            <img src={ImageNine} alt="image" />
                                        </div>
                                        <div className="testimonial-content-text">
                                            <h3>Meg Lanning</h3>
                                            <span>Agent Manager</span>
                                            <div className="icon"><i className="flaticon-quote"></i></div>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Quis ipsum suspendisse gravida.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial
