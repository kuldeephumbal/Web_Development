import React from 'react';
import Menu from './Menu';
import Footer from './Footer';

let SpecalitiesItem = (props) => {
    return (<div className="col-lg-4 col-md-12 col-12">
        <div className="portfolio-sidebar">
            <div className="single-widget researcher-details">
                <h2 className="text-center text-success">Dental Care Treatment</h2>
            </div>

        </div>
    </div>)
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<>
            <Menu />
            {/* Start Hero Area */}
            <section className="hero-area style2">
                <div className="hero-slider">
                    {/* Start Single Slider */}
                    <div className="single-slider">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12 col-12">
                                    <div className="hero-text wow fadeInLeft">
                                        {/* Start Hero Text */}
                                        <div className="section-heading">
                                            <h2 className="wow fadeInLeft" data-wow-delay=".3s">Find A Doctor &amp; <br />Book Appointment
                                            </h2>
                                            <p className="wow fadeInLeft" data-wow-delay=".5s">Our teaming has been focused on
                                                building a high-qualities medicals service by MediAppoint.</p>
                                            <div className="button wow fadeInLeft" data-wow-delay=".7s">
                                                <a href="appointment.html" className="btn">Book Appointment</a>
                                                <a href="about-us.html" className="btn alt">About Us</a>
                                            </div>
                                        </div>
                                        {/* End Hero Text */}
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 col-12">
                                    <div className="hero-image wow fadeInRight">
                                        <img src="site/assets/images/hero/02.png" alt="#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Hero Area */}


            <section className="appointment">
                <div className="container">
                    {/* Appointment Form */}
                    <div className="appointment-form">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="appointment-title">
                                    <span>Appointment</span>
                                    <h2>Book An Appointment</h2>
                                    <p>Please feel welcome to contact our friendly reception staff with any general or medical
                                        enquiry. Our doctors will receive or return any urgent calls.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12 p-0">
                                <div className="appointment-input">
                                    <label htmlFor="city"><i class="fa-solid fa-city"></i></label>
                                    <input type="text" name="city" id="city" placeholder="Your city" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 p-0">
                                <div className="appointment-input">
                                    <label htmlFor="department"><i class="fa-solid fa-book-medical"></i></label>
                                    <select name="department" id="department">
                                        <option value="none" selected disabled>Department</option>
                                        <option value="none">General Surgery</option>
                                        <option value="none">Gastroenterology</option>
                                        <option value="none">Nutrition &amp; Dietetics</option>
                                        <option value="none">Cardiology</option>
                                        <option value="none">Neurology</option>
                                        <option value="none">Pediatric</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 custom-padding">
                                <div className="appointment-btn button">
                                    <button className="btn">Get Appointment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End Appointment Form */}
                </div>
            </section>

            <section className="our-achievement section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-achievement wow fadeInUp" data-wow-delay=".2s">
                                <i className="lni lni-apartment" />
                                <h3 className="counter"><span id="secondo1" className="countup" cup-end={1250}>1250</span></h3>
                                <p>Available Specialities</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-achievement wow fadeInUp" data-wow-delay=".4s">
                                <i className="lni lni-sthethoscope" />
                                <h3 className="counter"><span id="secondo2" className="countup" cup-end={125}>125</span></h3>
                                <p>Available Doctors</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
                                <i className="lni lni-emoji-smile" />
                                <h3 className="counter"><span id="secondo3" className="countup" cup-end={2500}>2500 +</span></h3>
                                <p>Happy Patients</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-12">
                            <div className="single-achievement wow fadeInUp" data-wow-delay=".6s">
                                <i className="lni lni-certificate" />
                                <h3 className="counter"><span id="secondo3" className="countup" cup-end={35}>35</span></h3>
                                <p>No of appointments Booked</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="departments section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h3>Departments</h3>
                                <h2 className="wow fadeInUp" data-wow-delay=".4s">Specialities available</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">We Provide Many faculties to book appointment</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <SpecalitiesItem title='Hair Growth Treatment' />

                    </div>
                </div>
            </section>

            <Footer />
        </>
        );
    }
}