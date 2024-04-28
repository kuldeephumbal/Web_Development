import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default class ForgotPassword extends React.Component {
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
                                <h1 className="page-title">Forgot Password</h1>
                            </div>
                            <ul className="breadcrumb-nav">
                                <li><Link to="/login">Login</Link></li>
                                <li>Forgot Password</li>
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
                                <h4 className="title">Recover Your Account</h4>
                                <form action="#!" method="post">
                                    <div className="form-group">
                                        <input name="email" type="email" placeholder="Email" />
                                    </div>
                                    <div className="button">
                                        <button type="submit" className="btn">Submit</button>
                                    </div>
                                    <p className="outer-link text-end"> <Link to="/login"><i class="fa-solid fa-angle-left"></i> Back to Login</Link>
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