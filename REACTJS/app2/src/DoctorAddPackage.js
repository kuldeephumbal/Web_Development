import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { showError, showMessage, NetworkError } from "./ToastMessage";
import getBase from "./Api";
import { ToastContainer } from "react-toastify";
import VerifyLogin from "./Verifylogin";
export default function DoctorAddPackage() {
    VerifyLogin();

    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);

    let navigate = useNavigate();
    let [title, setTitle] = useState('');
    let [detail, setDetail] = useState('');
    let [charge, setCharge] = useState('');
    let [duration, setDuration] = useState('');
    let [photo, setPhoto] = useState('');

    let addPackage = function (event) {
        event.preventDefault();
        console.log(title, detail, charge, duration, photo);


    let form = new FormData();
    form.append("title", title);
    form.append("detail", detail);
    form.append("charges", charge);
    form.append("duration", duration);
    form.append("photo", photo);
    form.append("doctorid", cookies['doctorid']);

    let apiAddress = getBase() + "add_package.php";
    console.log(apiAddress);

    axios({
        method: 'post',
        responseType: 'json',
        url: apiAddress,
        data: form,
        headers: { 'Content-Type': 'multipart/form-data' }
    }).then((response) => {
        // console.log(response.data);
        let error = response.data[0]['error'];
        if (error !== 'no') {
            showError(error);
        }
        else {
            let success = response.data[1]['success'];
            let message = response.data[2]['message'];
            if (success !== 'yes') {
                showError(message);
            }
            else {
                showMessage(message);
                setTimeout(() => {
                    navigate("/admin-package/" + cookies['doctorid']);
                }, 1000);
            }
        }
    }).catch((error) => {
        NetworkError(error);
    });
}
    return (<>
        <Menu />
        <main id="main" className="main">
            <div className="container">
                <ToastContainer />
                <div className="row">
                    <div className="col-12">
                        <div className="mb-3 fw-bolder">
                            <h1>Doctor management</h1>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header text-bg-primary h4 d-flex justify-content-between">Add new package
                                <Link to="admin-package.html" className="btn btn-light"><i className="fa-solid fa-angle-left" /> 
                                 Back</Link>
                            </div>
                            <div className="card-body mt-2">
                                <form className="row g-3 needs-validation" onSubmit={addPackage}>
                                    <div className="col-6">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" name="title" id="title" className="form-control" 
                                        value={title} onChange={(event) => setTitle(event.target.value)} required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="detail" className="form-label">Details</label>
                                        <input type="text" name="detail" id="detail" className="form-control" 
                                        value={detail} onChange={(event) => setDetail(event.target.value)} required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="charge" className="form-label">Charges</label>
                                        <input type="number" name="charge" id="charge" className="form-control" 
                                        value={charge} onChange={(event) => setCharge(event.target.value)} required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="duration" className="form-label">Duration</label>
                                        <input type="number" name="duration" id="duration" className="form-control" 
                                        value={duration} onChange={(event) => setDuration(event.target.value)} required />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="photo" className="form-label">Photo</label>
                                        <input type="file" name="file" id="file" className="form-control" 
                                         onChange={(event) => setPhoto(event.target.files[0])} required />
                                    </div>
                                    <div className="col-12 text-end">
                                        <div className="mt-2">
                                            <button type="submit" className="btn btn-primary me-1">Add</button>
                                            <button type="reset" className="btn btn-danger ">Clear</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    );
}