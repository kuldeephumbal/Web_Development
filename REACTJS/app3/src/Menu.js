import React from 'react';
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';
class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { cookies } = this.props;
        return (
            <>
                <header className="header navbar-area style2">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-12 col-sm-12">
                                <div className="nav-inner">
                                    <nav className="navbar navbar-expand-lg">
                                        <img className="img-fluid" src="site/assets/images/logo/icon.png" alt="Logo" />
                                        <Link className="navbar-brand" to="/">
                                            <h1 className="fs-1">
                                                <span style={{ color: '#8cc44c' }}>Medi</span><span style={{ color: '#056c3c' }}>Appoint</span>
                                            </h1>
                                        </Link>
                                        <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="toggler-icon"></span>
                                            <span className="toggler-icon"></span>
                                            <span className="toggler-icon"></span>
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
                                                {(cookies.get('userid') === undefined) ? <><li className="nav-item">
                                                    <Link className="nav-link" to="/login">Login</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/register">Sign up</Link>
                                                </li></> :
                                                <> <li className="nav-item">
                                                    <Link className="nav-link" to="/change-password">Change password</Link>
                                                </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/logout">Logout</Link>
                                                    </li>
                                                </>}
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}
export default withCookies(Menu);