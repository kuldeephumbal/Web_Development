import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { NetworkError, showError, showMessage } from "./ToastMessage";
import getBase from "./Api";
import { ToastContainer } from "react-toastify";
import { useCookies } from 'react-cookie';

export default function DoctorLogin() {
  let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let verifyLogin = function (e) {
        e.preventDefault();
        var ButtonId = e.target.id; //return id of the cliecked submit button. 
        console.log(email, password, ButtonId);
        if (ButtonId === 'doctor') {
            let apiAddress = getBase() + "doctor_login.php";
            console.log(apiAddress);
            let form = new FormData();
            form.append("email", email);
            form.append("password", password);
            axios({
                method: 'post',
                url: apiAddress,
                responseType: 'json',
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
                    if (success === 'no') {
                        showError(message);
                    }
                    else {
                        showMessage(message);
                        let doctorid = response.data[3]['id'];
                        setCookie("doctorid", doctorid);
                        setTimeout(() => {
                            navigate("/doctor-profile/");
                            // navigate("/admin-appointments/" + doctorid);
                        }, 3000);
                    }
                }
            }).catch((error) => {
                console.log(error);
                NetworkError(error);
            })
        } 
    else {
      showMessage('login successfull');
      let assistantid = 1;
      let doctorid = 54;
      setCookie("docid", doctorid);
      setCookie("assistantid", assistantid);
      setTimeout(() => {
        navigate("/admin-appointments/" + doctorid);;
      }, 3000);
    }
  }
  return (<main>
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <ToastContainer />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-12 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-2">
                <p className="d-flex align-items-center w-auto">
                  <img src="../logo.png" height="50px" />
                  <span className="d-none d-lg-block h4">Online Doctor Appointment</span>
                </p>
              </div>
              {/* End Logo */}
              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Doctor Login</h5>
                  </div>
                  <form className="row g-3 needs-validation" verifyLogin={verifyLogin}>
                    <div className="col-12">
                      <label htmlFor="youremail" className="form-label">Email</label>
                      <div className="input-group has-validation">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="email" name="email" className="form-control" id="youremail"
                          value={email} onChange={(event) => setEmail(event.target.value)} required />
                        <div className="invalid-feedback">Please enter your username.</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">Password</label>
                      <input type="password" name="password" className="form-control" id="yourPassword"
                        value={password} onChange={(event) => setPassword(event.target.value)} required />
                      <div className="invalid-feedback">Please enter your password!</div>
                      <div className="mt-1">
                        <Link to="/doctor-forgot-passwprd" className="text-danger">Forgot password?</Link>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button className="btn btn-success" onClick={verifyLogin} id='doctor' type="submit">Doctor login</button>&nbsp;
                      <button className="btn btn-primary" onClick={verifyLogin} id='assistant' type="submit">Assistant login</button>
                    </div>
                    <div className="col-12 text-center">
                      <p className="small mb-0">Don't have account? <Link to='/doctor-register'>Create an account</Link></p>
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
  );
}