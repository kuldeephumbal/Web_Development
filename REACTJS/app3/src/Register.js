import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import getBase from './Api';
import axios from 'axios';
import { showError, showMessage } from "./ToastMessage";
import { ToastContainer } from "react-toastify";
export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            cpassword: '',
            mobileno: ''
        }
    }
    getInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submitted = (e) => {
        e.preventDefault();
        console.log(this.state);
        let form = new FormData();
        form.append('name', this.state.name);
        form.append('email', this.state.email);
        form.append('password', this.state.password);
        form.append('mobileno', this.state.mobileno);
        console.log(form);

        let apiAdress = getBase() + "user_register.php";
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
                if (success !== 'yes')
                    showError(message);
                else {
                    showMessage(message);
                    setTimeout(() => {
                        window.location = "/login";
                    }, 3000);
                }
            }
        }).catch((error) => {
                showError('it seems you are offline or network is not available...');
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
                                <h1 className="page-title">Register</h1>
                            </div>
                            <ul className="breadcrumb-nav">
                                <li><Link to="/">Home</Link></li>
                                <li>Registration</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <section className="login registration section">
                <div className="container">
                <ToastContainer />
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                            <div className="form-head">
                                <h4 className="title">Registration</h4>
                                <form action="#!" method="post" onSubmit={this.submitted}>
                                    <div className="form-group">
                                        <input name="name" type="text" placeholder="Name" value={this.name} onChange={(e) => this.getInput(e)}  />
                                    </div>
                                    <div className="form-group">
                                        <input name="email" type="email" placeholder="Email" value={this.email} onChange={(e) => this.getInput(e)} />
                                    </div>
                                    <div className="form-group">
                                        <input name="password" type="password" placeholder="Password" value={this.password} onChange={(e) => this.getInput(e)} />
                                    </div>
                                    <div className="form-group">
                                        <input name="cpassword" type="password" placeholder="Confirm Password" value={this.cpassword} onChange={(e) => this.getInput(e)} />
                                    </div>
                                    <div className="form-group">
                                        <input name="mobileno" type="number" placeholder="Mobile no." value={this.mobileno} onChange={(e) => this.getInput(e)} />
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