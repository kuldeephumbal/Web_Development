import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import getBase from './Api';
import { showError, showMessage } from './ToastMessage'
import { ToastContainer } from "react-toastify";
import { withCookies } from 'react-cookie';
class BookingHistory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            isModalOpen: false,
        }
    }
    MyAppointments = (item) => {
        if (!item) {
            return null; // Return null if item is null or undefined
        }
        const { cookies } = this.props;
        return (<tr>
            <td>1</td>
            <td>{item.patient}</td>
            <td>{item.package}</td>
            <td>
                {item.name}
                <br />
                {item.address}
            </td>
            <td>{item.servicedate}</td>
            <td>{item.servicetime}</td>
            <td>{item.contactno}</td>
            <td width="20%">
                {item.rating > 0 ?
                    (<>{item.rating} <br /> {item.feedback_review}</>) :
                    (<><button onClick={() => cookies.set('appointmentid', item.id, { path: '/' })} data-bs-toggle="modal" data-bs-target="#ratingreview" type="button"
                        className="btn btn-primary">Rating & Review</button></>)}
            </td>
        </tr>
        );
    }
    onChangeValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    componentDidMount() {
        if (this.state.appointments.length === 0) {
            const { cookies } = this.props;
            let userid = cookies.get('userid');
            let apiAddress = getBase() + `view_expired_appointment.php?user_id=${userid}`;
            console.log(apiAddress);
            axios({
                method: 'get',
                responseType: 'json',
                url: apiAddress
            }).then((response) => {
                console.log(response.data);
                let error = response.data[0]['error'];
                if (error !== 'no') {
                    showError(error);
                }
                else {
                    let total = response.data[1]['total'];
                    if (total === 0)
                        showError('no appointments history');
                    else {
                        // alert('hi');
                        let temp = response.data;
                        temp.splice(0, 2);
                        this.setState({
                            appointments: temp
                        });
                    }
                }
            }).catch((error) => {
                showError('error in connecting with server.');
            });
        }
    }
    postRatingReview = (event) => {
        event.preventDefault();
        const { cookies } = this.props;
        let apiAddress = getBase() + `update_rating_review.php`;
        console.log(apiAddress);
        console.log(cookies.get('appointmentid'));
        console.log(this.state.rating, this.state.review);
        let form = new FormData();
        form.append("id", cookies.get('appointmentid'));
        form.append("rating", this.state.rating);
        form.append("review", this.state.review);
        axios({
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data: form
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let success = response.data[1]['success'];
                if (success === 'yes') {
                    showMessage(response.data[2]['message']);
                    let updatedAppointment = null;
                    let temp = this.state.appointments.filter((item) => {
                        if (item.id !== cookies.get('appointmentid')) {
                            return item;
                        }
                        else {
                            updatedAppointment = item;
                            updatedAppointment.rating = this.state.rating;
                            updatedAppointment.feedback_review = this.state.review;
                        }
                    });
                    temp = [...temp, updatedAppointment]
                    this.setState({
                        appointments: temp,
                        isModalOpen: false
                    });
                }
                else
                    showError(response.data[2]['message']);
            }
        }).catch((error) => {
            showError('error in connecting with server.');
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
                                <h1 className="page-title">Booking History</h1>
                            </div>
                            <ul className="breadcrumb-nav">
                                <li><Link to="/">Home</Link></li>
                                <li>Booking History</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <ToastContainer />
                <div className="row">
                    <div className="col-12 text-end mb-3">
                        <Link to="/my-appointment" className="btn btn-success">My Appointments</Link>
                    </div>
                    <div className="col-12">
                        <table className="table table-responsive table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Sr No</th>
                                    <th>Name</th>
                                    <th>Departments</th>
                                    <th>Doctors & their Address
                                    </th>
                                    <th>Date</th>
                                    <th>Timings</th>
                                    <th>Contacts</th>
                                    <th>Reviews</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.appointments.map((item) => this.MyAppointments(item))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>

                    {/* Modal */}
                    <form onSubmit={this.postRatingReview}>
                        <div className="modal fade" id="ratingreview" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog ">
                                <div className="modal-content ">
                                    <div className="modal-header">
                                        <h1 className="fs-5 text-bg-primary" id="exampleModalLabel">Rating & Review</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        {/* Rating Input */}
                                        <div className="mb-3">
                                            <label htmlFor="rating" className="form-label">Rating:</label>
                                            <select className="form-select" id="rating" name="rating"
                                                value={this.state.rating}
                                                onChange={(event) => this.onChangeValue(event)}
                                                required>
                                                <option value>Select Rating...</option>
                                                <option value='5'>5 Stars</option>
                                                <option value='4'>4 Stars</option>
                                                <option value='3'>3 Stars</option>
                                                <option value='2'>2 Stars</option>
                                                <option value='1'>1 Star</option>
                                            </select>
                                        </div>
                                        {/* Review Input */}
                                        <div className="mb-3">
                                            <label htmlFor="review" className="form-label">Review:</label>
                                            <textarea className="form-control" id="review" name="review" rows={3}
                                                value={this.state.review}
                                                onChange={(event) => this.onChangeValue(event)}
                                                required />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div >
            </div >
            <Footer />
        </>
        );
    }
}
export default withCookies(BookingHistory);