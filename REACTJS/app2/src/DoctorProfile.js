import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import getBase from './Api';
import axios from 'axios';
import { NetworkError, showError, showMessage } from './ToastMessage';
import { ToastContainer } from 'react-toastify';
import VerifyLogin from './Verifylogin';
export default function DoctorProfile() {
    VerifyLogin();
    let [qualification, setQualification] = useState('');
    let [city, setCity] = useState('');
    let [address, setAddress] = useState('');
    let [gender, setGender] = useState('');
    let [date, setDate] = useState('');
    let [website, setWebsite] = useState('');
    let [photo, setPhoto] = useState(null);


    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    let navigate = useNavigate();

    let createProfile = function (event) {
        event.preventDefault();
        // console.log(qualification, city, address,gender, date, website, photo);
        let apiAddress = getBase() + "update_doctor_profile.php";
        let form = new FormData();
        form.append("qualification", qualification);
        form.append("city", city);
        form.append("address", address);
        form.append("gender",gender);
        form.append("date", date);
        form.append("website", website);
        form.append("photo", photo[0]);
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
                let message = response.data[2]['message'];
                if (success !== 'yes') {
                    showError(message);
                }
                else {
                    showMessage(message);
                    setTimeout(() => {
                        navigate("/admin-appointments/" + cookies['doctorid']);
                    }, 2000);
                }
            }

        }).catch((error) => {
            showError(error);
        });
    }
        return (<>
            <main>
                <div className="container">
                    <ToastContainer />
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8 col-12 d-flex flex-column align-items-center justify-content-center">
                                    <div className="d-flex justify-content-center py-2">
                                        <p className="d-flex align-items-center w-auto">
                                            <img src="../logo.png" height="50px" />
                                            <span className="d-none d-lg-block h4">Online Doctor Appointment</span>
                                        </p>
                                    </div>
                                    {/* End Logo */}
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="pt-4 pb-2 mb-3">
                                                <h5 className="card-title text-center fs-4">Create profile</h5>
                                            </div>
                                            <form className="row g-3" onSubmit={createProfile} >
                                                <div className="col-6">
                                                    <label htmlFor="qualification" className="form-label">Qualification</label>
                                                    <input type="text" name="qualification" id="qualification" className="form-control" value={qualification} onChange={(e) => setQualification(e.target.value)} 
                                                     required />
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="city" className="form-label">City</label>
                                                    <input type="text" name="city" id="city" className="form-control" value={city} onChange={(e) => setCity(e.target.value)} required />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="address" className="form-label">Address</label>
                                                    <textarea name="address" id="address" cols={30} rows={2} className="form-control" defaultValue={""} value={address} onChange={(e) => 
                                                         setAddress(e.target.value)}/>
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="gender" className="form-label">Gender</label>
                                                    <select className="form-select" id="gender" name="gender" required
                                                        value={gender} onChange={(e) => setGender(e.target.value)}>
                                                        <option value='' >Select Gender</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="date" className="form-label">Date</label>
                                                    <input type="date" name="date" id="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required />
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="website" className="form-label">Website</label>
                                                    <input type="text" name="website" id="website" className="form-control" value={website} onChange={(e) => setWebsite(e.target.value)} required />
                                                </div>
                                                <div className="col-6">
                                                    <label htmlFor="photo" className="form-label">Photo</label>
                                                    <input type="file" name="file" id="file" className="form-control" onChange={(e) => setPhoto(e.target.files)} required />
                                                </div>
                                                <div className="col-12 text-end">
                                                    <div className="mt-3">
                                                        <button type="submit" className="btn btn-primary me-1">Save</button>
                                                        <button type="reset" className="btn btn-danger">Reset</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>


        </>
        );
    }