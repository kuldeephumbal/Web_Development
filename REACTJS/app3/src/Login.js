import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import getBase from './Api';
import axios from 'axios';
import { ToastContainer } from "react-toastify";    
import { showError, showMessage } from './ToastMessage';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    getInput = (e) => {
        this.setState({
             [e.target.name]: e.target.value 
            });
    }
    submited = (e) => {
        e.preventDefault();
        console.log(this.state);
        const { cookies } = this.props;
        let form = new FormData();  
        form.append('email', this.state.email);
        form.append('password', this.state.password);
        let apiAdress = getBase() + "user_login.php";
        axios({ 
            method: 'post',
            url: apiAdress,
            responseType: 'json',
            data: form
        }).then((response) => {
            console.log(response);
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success !== 'yes') {
                    showMessage(message);
                }
                {
                    let success = response.data[1]['success'];
                    let message = response.data[2]['message'];
                    if (success !== 'yes')
                        showError(message);
                    else {
                        let id = response.data[3]['id'];
                        console.log('userid' + id);
                        // Set the cookie with a name, value, and options
                        cookies.set('userid',id, { path: '/' }); 
                        cookies.set('email',this.state.email, { path: '/' }); 
                        console.log('cookies has userid ',cookies.get('userid'))
                        showMessage(message);
                        setTimeout(() => {
                            window.location = "/";
                        }, 3000);
                    }
                }
            }
            }).catch((error) => {
            showError(error);
        }); 
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
                    <ToastContainer />
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                            <div className="form-head">
                                <h4 className="title">Login To Your Account</h4>
                                <form action="#!" method="post" onSubmit={this.submited}>
                                    <div className="form-group">
                                        <input name="email" type="email" placeholder="Email" 
                                        value={this.state.email} onChange={(e) => this.getInput(e)} />
                                    </div>
                                    <div className="form-group">
                                        <input name="password" type="password" placeholder="Password" 
                                        value={this.state.password} onChange={(e) => this.getInput(e)} />
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
export default withCookies(Login);