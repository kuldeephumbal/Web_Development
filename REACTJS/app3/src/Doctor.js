import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import getBase from './Api';
import { showError } from './ToastMessage'
import { ToastContainer } from "react-toastify";
import { withCookies } from 'react-cookie';   
class Doctor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: []
        }
    }
    showDoctorDetail = (doctorid) => {
        const { cookies } = this.props; 
        cookies.set("mydoctorid",doctorid,{ path: '/' });
    }
    SingleDoctor = (item) => {
        return(<div className = "col-lg-3 col-md-6 col-12" >
            {/* Start Single Doctor */ }
            <Link to='/doctor-details' onClick = {()=>this.showDoctorDetail(item.id) }>
                <div className="single-doctor wow fadeInUp" data-wow-delay=".2s">
                    <div className="image">
                        <img src="site\assets\images\doctors\doctors.webp" alt="#" />

                    </div>
                    <div className="content">
                        <h5>{item.qualification}</h5>
                        <h3>{item.name} </h3>
                    </div>
                </div>
            </Link>
        {/* End Single Doctor */ }
    </div>)
    }
    componentDidMount() {
        const { cookies } = this.props;
        let city = cookies.get('city');
        let serviceid = cookies.get('serviceid');
        let apiAddress = getBase() + `doctor.php?city=${city}&serviceid=${serviceid}`;
        console.log(apiAddress);
        axios({
            method: 'get',
            url: apiAddress,
            responseType: 'json'
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let total = response.data[1]['total'];
                if (total === 0)
                    showError('no doctors found')
                else {
                    response.data.splice(0, 2);
                    this.setState({
                        doctor: response.data
                    });
                }
            }
        }).catch((error) => {
            showError('could not connect to server');
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
                                <h1 className="page-title">Doctor</h1>
                            </div>
                            <ul className="breadcrumb-nav">
                                <li><Link to="/">Home</Link></li>
                                <li>Doctor</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="doctors section">
                <ToastContainer />
                <div className="container">
                    <div className="row">
                        {this.state.doctor.map((item) => this.SingleDoctor(item))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
        );
    }
}
export default withCookies(Doctor);