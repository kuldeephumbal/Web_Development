import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default class Register extends React.Component {
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
                                <h1 className="page-title">Register</h1>
                            </div>
                            <ul class="breadcrumb-nav">
                                <li><Link to="/">Home</Link></li>
                                <li>Registration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <section className="login registration section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                            <div className="form-head">
                                <h4 className="title">Registration</h4>
                                <form action="#!" method="post">
                                    <div className="form-group">
                                        <input name="password" type="text" placeholder="Name" />
                                    </div>
                                    <div className="form-group">
                                        <input name="email" type="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input name="password" type="password" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <input name="password" type="password" placeholder="Confirm Password" />
                                    </div>
                                    <div className="button">
                                        <button type="submit" className="btn">Registration</button>
                                    </div>
                                    <p className="outer-link">Already have an account? <Link to="/login"> Login Now</Link>
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