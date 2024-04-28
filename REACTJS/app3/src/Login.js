import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default class Login extends React.Component {
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
                                <h1 className="page-title">Login</h1>
                            </div>
                            <ul className="breadcrumb-nav">
                                <li><Link to="/">Home</Link></li>
                                <li>Login</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <section className="login section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                            <div className="form-head">
                                <h4 className="title">Login To Your Account</h4>
                                <form action="#!" method="post">
                                    <div className="form-group">
                                        <input name="email" type="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input name="password" type="password" placeholder="Password" />
                                    </div>
                                    <div className="check-and-pass">
                                        <div className="row align-items-center">
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <Link to="/forgot-password" className="lost-pass">Lost your password?</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <button type="submit" className="btn">Login Now</button>
                                    </div>
                                    <p className="outer-link">Don't have an account? <Link to="/register">Register here</Link>
                                    </p>
                                </form>
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