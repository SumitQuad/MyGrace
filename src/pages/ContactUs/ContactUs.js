import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import {
    Link
} from "react-router-dom";

function ContactUs() {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
    });
    const form = useRef();

    const postUserData = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    function sendEmail() {

        emailjs.sendForm('service_ukq47mb', 'template_sux9n4c', form.current, 'user_xRBTUWlC6IMwOzKomioWv')
            .then((result) => {
                console.log(result.text);
                setUserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    message: "",
                });
            }, (error) => {
                console.log(error.text);
            });
    }

    // connect with firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, message } = userData;

        if (firstName && lastName && phone && email && message) {
            const res = await fetch(
                "https://reactfirebase-aeee3-default-rtdb.firebaseio.com/userDataRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phone,
                        email,
                        message,
                    }),
                }
            );
            console.log(res)
            if (res) {
                sendEmail(event);
                alert("Data Stored");
            } else {
                alert("plz fill the data");
            }
        } else {
            alert("plz fill the data");
        }
    };

    return (
        <>
            <div className="page-title-area">
                <div className="container">
                    <div className="page-title-content">
                        <h2>Contact</h2>
                        <ul>
                            <li><Link to href="/">Home</Link></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="contact-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-box">
                                <div className="icon"><i className="bi bi-phone"></i></div>
                                <div className="content">
                                    <h4>Phone / Fax</h4>
                                    <p>9890989900</p>
                                    <p>9890908900</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-box">
                                <div className="icon"> <i className="bi bi-envelope-open"></i></div>
                                <div className="content">
                                    <h4>E-mail</h4>
                                    <p>hr@graceit.com</p>
                                    <p>businessgraceit@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="contact-box">
                                <div className="icon"><i className="bi bi-geo-alt-fill"></i></div>
                                <div className="content">
                                    <h4>Location</h4>
                                    <p>
                                        Ambala,India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact-text">
                                <h3>Get in Touch</h3>
                                <p>
                                    Have Link to project in mind? Get A Quote with us today. We’d love to chat with you
                                    and discuss how we can help. Use the form or contact us directly.
                                </p>
                                <ul className="social-links">
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank"
                                        ><i className="bi bi-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i className="bi bi-twitter"></i>
                                        </a >
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank"
                                        ><i className="bi bi-instagram"></i>
                                        </a >
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/" target="_blank"
                                        ><i className="bi bi-linkedin"></i>
                                        </a >
                                    </li>
                                    <li>
                                        <a href="https://www.pinterest.com/" target="_blank"
                                        ><i className="bi bi-pinterest"></i>
                                        </a >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <form ref={form} method="POST" className="contact-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="firstName"
                                                id=""
                                                className="form-control"
                                                placeholder="First Name"
                                                value={userData.firstName}
                                                onChange={postUserData}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="lastName"
                                                id=""
                                                className="form-control"
                                                placeholder="Last Name"
                                                value={userData.lastName}
                                                onChange={postUserData}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="email"
                                                id=""
                                                className="form-control"
                                                placeholder="Email ID"
                                                value={userData.email}
                                                onChange={postUserData}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="phone"
                                                id=""
                                                className="form-control"
                                                placeholder="Phone Number "
                                                value={userData.phone}
                                                onChange={postUserData}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea
                                                cols="30"
                                                rows="6"
                                                type="text"
                                                name="message"
                                                id=""
                                                className="form-control"
                                                placeholder="Enter Your Message"
                                                value={userData.message}
                                                onChange={postUserData}
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-sm-12">
                                        <div className="send-btn">
                                            <button
                                                type="submit"
                                                className="send-btn-one"
                                                onClick={submitData}>
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactUs
