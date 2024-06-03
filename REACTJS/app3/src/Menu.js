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
                                                    <Link className="nav-link" to="/"><i class="fa-solid fa-house me-2"></i>Home</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/doctor"><i class="fa-solid fa-stethoscope me-2"></i>Doctor</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/doctor-details"><i class="fa-solid fa-user-graduate me-2"></i>Doctor details</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/my-appointment"><i class="fa-solid fa-calendar-check me-2"></i>My Appointments</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/booking-history"><i class="fa-solid fa-clock-rotate-left me-2"></i>Booking history</Link>
                                                </li>
                                                {(cookies.get('userid') === undefined) ? <><li className="nav-item">
                                                    <Link className="nav-link" to="/login"><i class="fa-solid fa-user me-2"></i>Login</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/register"><i class="fa-regular fa-user me-2"></i>Register</Link>
                                                </li></> :
                                                <> <li className="nav-item">
                                                    <Link className="nav-link" to="/change-password"><i class="fa-solid fa-unlock me-2"></i>Change password</Link>
                                                </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" to="/logout"><i class="fa-solid fa-right-from-bracket me-2"></i>Logout</Link>
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