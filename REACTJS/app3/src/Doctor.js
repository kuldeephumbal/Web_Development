import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';    
export default class Doctor extends React.Component {
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
                                <h1 className="page-title">Doctor</h1>
                            </div>
                            <ul className="breadcrumb-nav">
                                <li><Link to="/">Home</Link></li>
                                <li>Doctor</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section className="doctors section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h3>Doctors</h3>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Our Outstanding Team Is Active To Help You!</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">There are many variations of passages of Lorem
                                    Ipsum available, but the majority have suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Doctor */}
                            <div className="single-doctor wow fadeInUp" data-wow-delay=".2s">
                                <div className="image">
                                    <img src="site/assets/images/doctors/doctor1.jpg" alt="#" />
                                </div>
                                <div className="content">
                                    <h5>Cardiologist</h5>
                                    <h3><a href="doctor-details.html">Dr.Felica Queen</a></h3>
                                </div>
                            </div>
                            {/* End Single Doctor */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Doctor */}
                            <div className="single-doctor wow fadeInUp" data-wow-delay=".4s">
                                <div className="image">
                                    <img src="site/assets/images/doctors/doctor2.jpg" alt="#" />
                                </div>
                                <div className="content">
                                    <h5>Neurologist</h5>
                                    <h3><a href="doctor-details.html">Dr.Alice Williams</a></h3>
                                </div>
                            </div>
                            {/* End Single Doctor */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Doctor */}
                            <div className="single-doctor wow fadeInUp" data-wow-delay=".6s">
                                <div className="image">
                                    <img src="site/assets/images/doctors/doctor3.jpg" alt="#" />
                                   
                                </div>
                                <div className="content">
                                    <h5>Physician Assistant</h5>
                                    <h3><a href="doctor-details.html">Dr.Paul Flavius</a></h3>
                                </div>
                            </div>
                            {/* End Single Doctor */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Doctor */}
                            <div className="single-doctor wow fadeInUp" data-wow-delay=".8s">
                                <div className="image">
                                    <img src="site/assets/images/doctors/doctor4.jpg" alt="#" />

                                </div>
                                <div className="content">
                                    <h5>Physician Assistant</h5>
                                    <h3><a href="doctor-details.html">Dr.Michael Bean</a></h3>
                                </div>
                            </div>
                            {/* End Single Doctor */}
                        </div>
                        
                    </div>
                </div>
            </section>

            <Footer />
        </>
        );
    }
}