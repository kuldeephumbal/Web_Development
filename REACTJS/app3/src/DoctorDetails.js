import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import getBase from './Api';
import { showError } from './ToastMessage'
import { ToastContainer } from "react-toastify";
import { withCookies } from 'react-cookie';
class DoctorDeatils extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: '',
            services: []
        }
    }
    componentDidMount() {
        const { cookies } = this.props;
        let doctorid = cookies.get('mydoctorid');
        let apiAddress = getBase() + `get_single_doctor.php?doctorid=${doctorid}`;
        console.log(apiAddress);
        axios({
            method: 'get',
            url: apiAddress,
            responseType: 'json'
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0)
                    showError('no doctor found')
                else {
                    response.data.splice(0, 2);
                    let temp = response.data[0];
                    response.data.splice(0, 1);
                    this.setState({
                        doctor: temp,
                        services: response.data
                    });
                }
            }
        }).catch((error) => {
            showError('could not connect to server');
        });
    }
    render() {
        return (<>
            <Menu />
            <div className="breadcrumbs overlay">
                <div className="container">
                    <ToastContainer />
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
                                        <div className="image">
                                            <img src="site\assets\images\doctors\doctors.webp" alt="#" />
                                        </div>
                                        <div className="doctor-left-bar">
                                            <div className="single-bar">
                                                <h4>Specialty</h4>
                                                {this.state.services.map((item) => {
                                                    return <p>{item.title}</p>
                                                    })}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-8 col-12">
                                        <div className="content">
                                            <h3 className="name">{this.state.doctor.name}
                                                <span>{this.state.doctor.qualification}</span>
                                            </h3>
                                            <ul className="list-info">
                                                <li><span>Registration No:</span> {this.state.doctor.regno}</li>
                                                <li><span>Phone:</span> {this.state.doctor.contactno}</li>
                                                <li><span>Website:</span> {this.state.doctor.website}</li>
                                                <li><span>email:</span> {this.state.doctor.email}</li>
                                                <li><span>City:</span> {this.state.doctor.city}</li>
                                            </ul>
                                            <div className="button add-list-button">
                                                <Link to='/booking-appointment' className="btn">Book Appointment</Link>
                                            </div>
                                        </div>
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
export default withCookies(DoctorDeatils);