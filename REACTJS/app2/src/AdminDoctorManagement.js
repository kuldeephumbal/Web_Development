import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import Menu from "./Menu";
import getBase from './Api';
import { ToastContainer } from 'react-toastify';
import { NetworkError, showError, showMessage } from './ToastMessage';
export default function AdminDoctorManagement() {

    let [doctor, setDoctor] = useState([]);

    let displayDoctor = (item) => {
        return (<tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
                <img src="https://picsum.photos/70" className="img-fluid" />
            </td>
            <td>{item.city}</td>
            <td>{item.regno}</td>
            <td>{item.qualification}</td>
            <td>
                <div className="ms-3">
                    <Link to="/admin-compose-email" title="Messages" className="me-2 text-primary">
                        <i className="fa-solid fa-message fa-xl" />
                    </Link>
                    <Link to={"/admin-package/" + item.id} title="Pakages" className="pe-2 text-warning "><i className="fa-solid fa-box-open fa-xl" /></Link>
                    <Link to={"/admin-assistant/" + item.id} title="Assistent" className="pe-2 text-success"><i className="fa-solid fa-users fa-xl" /></Link>
                    <Link to={"/admin-appointments/" + item.id} title="Appointment" className="pe-2 text-danger"><i className="fa-solid fa-clipboard-list fa-xl" /></Link>
                </div>
            </td>
        </tr>);
    }
    useEffect(() => {
        if (doctor.length === 0) {

            let apiAddress = getBase() + "doctor.php";

            fetch(apiAddress)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    let error = data[0]['error'];
                    console.log(error);
                    if (error !== 'no') 
                        showError(error);
                    else if (data[1]['total'] === 0) {
                        showError('no doctor found');
                    }
                    else {
                        data.splice(0, 2);
                        console.log(data);
                        setDoctor(data);
                        showMessage('Data loaded successfully');
                    }
                })
                .catch((error) => {
                    NetworkError(error);
                });
        }
    });


    return (<>
        <Menu />
        <main id="main" className="main">
            <ToastContainer />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mb-3 fw-bolder">
                            <h1>Doctor management</h1>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header text-bg-primary h4">Registered Doctors</div>
                            <div className="card-body mt-3">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Sr no</th>
                                                <th>Name</th>
                                                <th>Photo</th>
                                                <th>City</th>
                                                <th>Registration</th>
                                                <th>Qualification</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {doctor.map((item) => displayDoctor(item))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </>
    );
}