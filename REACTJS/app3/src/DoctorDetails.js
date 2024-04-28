import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default class DoctorDeatils extends React.Component {
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
                                <h1 className="page-title">Doctor Details</h1>
                            </div>
                            <ul className="breadcrumb-nav">
                                <li><Link to="/">Home</Link></li>
                                <li>Doctor Details</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className="doctor-details section">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        {/* Start Doctor Image */}
                                        <div className="image">
                                            <img src="site/assets/images/doctors/detail-img.jpg" alt="#" />
                                        </div>
                                        {/* End Doctor Image */}
                                        {/* Start Doctor Left Bar */}
                                        <div className="doctor-left-bar">
                                            {/* Start Single Bar */}
                                            <div className="single-bar">
                                                <h4>Specialty</h4>
                                                <p>Respiratory medicine (lung)</p>
                                            </div>
                                            {/* End Single Bar */}
                                        </div>
                                        {/* End Doctor Left Bar */}
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-12">
                                        {/* Start Main Content */}
                                        <div className="content">
                                            <h3 className="name">Dr.Alice Williams
                                                <span>Your Community Safety Net For Over 50 Years.</span>
                                            </h3>
                                            <ul className="list-info">
                                                <li><span>Profession:</span> Neurologist</li>
                                                <li><span>Experience:</span> 10 Years</li>
                                                <li><span>Phone:</span> (+88) 123 456 789</li>
                                                <li><span>Email:</span> contact@williams.com</li>
                                                <li><span>Address:</span> 594 E. Whitemarsh Street Mchenry, IL 60050</li>
                                                <li>
                                                    <ul className="social">
                                                        <li><span>Follow On:</span></li>
                                                        <li><a href="javascript:void(0)"><i className="lni lni-facebook-filled" /></a></li>
                                                        <li><a href="javascript:void(0)"><i className="lni lni-twitter-original" /></a></li>
                                                        <li><a href="javascript:void(0)"><i className="lni lni-instagram" /></a>
                                                        </li>
                                                        <li><a href="javascript:void(0)"><i className="lni lni-pinterest" /></a>
                                                        </li>
                                                        <li><a href="javascript:void(0)"><i className="lni lni-youtube" /></a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        {/* End Main Content */}
                                    </div>
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