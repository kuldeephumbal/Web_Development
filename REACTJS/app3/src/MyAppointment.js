import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default class MyAppointment extends React.Component {
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
                                <h1 className="page-title">My Appointment</h1>
                            </div>
                            <ul className="breadcrumb-nav">
                                <li><Link to="/">Home</Link></li>
                                <li>My Appointment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 text-end mb-3">
                        <Link to="/booking-history" className="btn btn-success">Booking History</Link>
                    </div>
                    <div className="col-12">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Sr No</th>
                                    <th>Name</th>
                                    <th>Departments</th>
                                    <th>Doctors & Address
                                    </th>
                                    <th>Date</th>
                                    <th>Timings</th>
                                    <th>Contacts</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Ajay bhai</td>
                                    <td>Cardiologist</td>
                                    <td>
                                        Dr Lakshman Sheth <br />
                                        Hill drive, bhavnagar
                                    </td>
                                    <td>30-04-2024</td>
                                    <td>05:00 AM</td>
                                    <td>1234567890</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>




            <Footer />
        </>
        );
    }
}