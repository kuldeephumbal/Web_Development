import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default class Aboutus extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <Menu />

            <div className="breadcrumbs overlay">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 offset-lg-2 col-md-12 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">About us</h1>
                            </div>
                            <ul className="breadcrumb-nav">
                                <li><Link to="/">Home</Link></li>
                                <li>About us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <section className="login section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-10 col-12">
                            <div className="form-head">
                                <h3 className="mt-4">About MediAppoint</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item ">MediAppoint is your trusted platform for booking appointments with the best healthcare 
                                     professionals. Our mission is to make 
                                         healthcare accessible, efficient, and transparent for everyone.</li>
                                    <li className="list-group-item"> We provide detailed profiles of doctors, including their specialties, qualifications, and patient 
                                     reviews, to help you make 
                                         informed decisions about your healthcare. Our easy-to-use interface allows you to browse and book appointments with just a few 
                                          clicks.</li>
                                    <li className="list-group-item">At MediAppoint, we believe in putting patients first. Our goal is to create a seamless experience 
                                     that connects you with the 
                                         right doctor at the right time. Thank you for choosing MediAppoint for your healthcare needs.</li>
                                </ul>
                                <h3 className="mt-4">Our Mission</h3>
                                <p>Our mission is to revolutionize healthcare by providing an online platform that connects patients with top medical professionals. We 
                                     aim to improve the healthcare experience through convenience, transparency, and reliability.</p>
                                
                                <h3 className="mt-4">Why Choose Us</h3>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Comprehensive Doctor Profiles</li>
                                    <li className="list-group-item">Easy Appointment Booking</li>
                                    <li className="list-group-item">Trusted Patient Reviews</li>
                                    <li className="list-group-item">User-Friendly Interface</li>
                                    <li className="list-group-item">Secure and Confidential</li>
                                </ul>
                                
                                <h3 className="mt-4">Follow Us</h3>
                                <div className="social-links mt-3">
                                    <a href="https://www.facebook.com/mediappoint" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success mt-2 me-2">
                                        <i className="fab fa-facebook-f"></i> Facebook
                                    </a>
                                    <a href="https://twitter.com/mediappoint" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success mt-2 me-2">
                                        <i className="fab fa-twitter"></i> Twitter
                                    </a>
                                    <a href="https://www.instagram.com/mediappoint" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success mt-2 me-2">
                                        <i className="fab fa-instagram"></i> Instagram
                                    </a>
                                    <a href="https://www.linkedin.com/company/mediappoint" target="_blank" rel="noopener noreferrer" className="btn btn-outline-success mt-2">
                                        <i className="fab fa-linkedin-in"></i> LinkedIn
                                    </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
        );
    }
}