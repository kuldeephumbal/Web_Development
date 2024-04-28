import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
export default class ChangePassword extends React.Component {
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
                                <h1 className="page-title">Change Password</h1>
                            </div>
                            <ul className="breadcrumb-nav">
                                <li><Link to="/">Home</Link></li>
                                <li>Change Password</li>
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
                                <h4 className="title">Reset Your Password</h4>
                                <form action="#!" method="post">
                                <div className="form-group">
                                        <input name="oldpassword" type="password" placeholder="Old Password" />
                                    </div>
                                    <div className="form-group">
                                        <input name="password" type="password" placeholder="New Password" />
                                    </div>
                                    <div className="form-group">
                                        <input name="confirmpassword" type="password" placeholder="Confirm New Password" />
                                    </div>
                                    <div className="button">
                                        <button type="submit" className="btn">Submit</button>
                                    </div>
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