import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import axios from 'axios';
import getBase from './Api';
import { showError, showMessage } from './ToastMessage'
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { withCookies } from 'react-cookie';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: [],
            department: [],
            services: [],
            selectedCity: '',
            selectedDepartment: '',
            isDataFetched: false
        }
    }
    GetCity = () => {
        let apiAddress = getBase() + "city.php";
        axios({
            method: 'get',
            url: apiAddress,
            responseType: 'json'
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0)
                    showError('no city found')
                else {
                    response.data.splice(0, 2);
                    this.setState({
                        city: response.data
                    });
                }
            }
        }).catch((error) => {
            showError('could not connect to server');
        });
    }
    GetDepartmentByCity = (SelectedCity) => {
        this.setState({
            selectedCity: SelectedCity
        });
        let apiAddress = getBase() + "get_service_by_city.php?city=" + SelectedCity;
        axios({
            method: 'get',
            url: apiAddress,
            responseType: 'json'
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0)
                    showError('no service found');
                else {
                    response.data.splice(0, 2);
                    this.setState({
                        department: response.data
                    });
                }
            }
        }).catch((error) => {
            showError('could not connect to server');
        });
    }
    GetDepartment = () => {
        let apiAddress = getBase() + "get_unique_service.php";
        axios({
            method: 'get',
            url: apiAddress,
            responseType: 'json'
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0)
                    showError('no services found')
                else {
                    response.data.splice(0, 2);
                    this.setState({
                        services: response.data,
                        isDataFetched: true
                    });
                }
            }
        }).catch((error) => {
            showError('could not connect to server');
        })
    }
    componentDidMount() {
        if (this.state.isDataFetched === false) {
            this.GetCity();
            this.GetDepartment();
        }
    }
    onchangeService = (SelectedService) => {
        this.setState({
            selectedService: SelectedService
        });
    }
    submitted = (e) => {
        e.preventDefault();
        console.log(this.state.selectedCity, this.state.selectedService);
        const { cookies } = this.props; 
        cookies.set('city', this.state.selectedCity, { path: '/' });
        cookies.set('serviceid', this.state.selectedService, { path: '/' });
        window.location = "/doctor";
    }
    render() {
        return (<>
            <Menu />
            {/* Start Hero Area */}
            <ToastContainer />
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
                                                <Link to="/booking-aapointment" className="btn">Book Appointment</Link>
                                                <Link to="#" className="btn alt">About Us</Link>
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
                    <form action="#" onSubmit={this.submitted}>
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
                                        <label htmlFor="city"><i className="fa-solid fa-city"></i></label>
                                        <select className="form-select" required
                                            onChange={(e) => this.GetDepartmentByCity(e.target.value)}>
                                            <option value=''>Select city</option>
                                            {this.state.city.map((item) => {
                                                return <option value={item.city}>{item.city}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12 p-0">
                                    <div className="appointment-input">
                                        <label htmlFor="department"><i className="fa-solid fa-book-medical"></i></label>
                                        <select name="department" id="department"
                                            required onChange={(e) => this.onchangeService(e.target.value)}>
                                            <option value=''>Select department</option>
                                            {this.state.department.map((item) => {
                                                return <option value={item.id}>{item.title}</option>
                                            })}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 col-12 custom-padding">
                                    <div className="appointment-btn button">
                                        <button type='submit' className="btn">Get Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
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
                        <div className="col-lg-4 col-md-12 col-12">
                            <div className="portfolio-sidebar">
                                <div className="single-widget researcher-details">
                                    <h2 className="text-center text-success">Dental Care Treatment</h2>
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
export default withCookies(Home);