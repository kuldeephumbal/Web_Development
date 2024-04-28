import React from 'react';
import {Link} from 'react-router-dom';
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <header className="header navbar-area style2">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-sm-12">
                                <div className="nav-inner">
                                    {/* Start Navbar */}
                                    <nav className="navbar navbar-expand-lg">
                                        <img className="img-fluid" src="site/assets/images/logo/icon.png" alt="Logo" />
                                        <Link className="navbar-brand" to="/">
                                            <h1 className="fs-1">
                                                <span style={{ color: '#8cc44c' }}>Medi</span><span style={{ color: '#056c3c' }}>Appoint</span>
                                            </h1>
                                        </Link>
                                        <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse" data-bs-
                                            target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <i className="fa-solid fa-bars fa-xl"></i>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav ms-auto">
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/">Home</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/doctor">Doctor</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/doctor-details">Doctor details</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/my-appointment">My Appointments</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/booking-history">Booking history</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/login">Login</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/register">Register</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/change-password">Change password</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/logout">Logout</Link>
                                                </li>
                                            </ul>
                                            <div className="button add-list-button">
                                                <Link to="/booking-appontment" className="btn">Book Appointment</Link>
                                            </div>
                                        </div> {/* navbar collapse */}
                                    </nav>
                                    {/* End Navbar */}
                                </div>
                            </div>
                        </div> {/* row */}
                    </div> {/* container */}
                </header>
            </>
        );
    }
}
