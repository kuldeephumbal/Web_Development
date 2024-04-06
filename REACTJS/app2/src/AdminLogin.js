import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import getBase from "./Api";
import axios from "axios";
import { NetworkError, showError, showMessage } from "./ToastMessage";
import { ToastContainer } from "react-toastify";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {

  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
  let navigate = useNavigate();

  let verifyLogin = function (event) {
    event.preventDefault(); //required to stop reloading module
    console.log(email, password);
    
    //api address
    let apiAddress = getBase() + "admin_login.php";
    console.log(apiAddress);
   
    let form = new FormData(); //FormData is library class of javascript
    form.append("email", email);
    form.append("password", password);
    //axios is a library to send data to api

    axios({
      method: 'post',
      url: apiAddress,
      responseType: 'json',
      data: form
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no'){
        showError(error);
      }
      else {
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];

        if (success === 'no')
          showError(message);
        else {
          showMessage(message);
          let id = response.data[3]['id'];

          setCookie('adminid', id, { path: '/' }); //create cookie
          //check whether cookies has been created or not
          console.log("admin id", cookies['adminid']);

          setTimeout(() => {
            navigate("/admin-doctor-management");
          },2000);

        }
      }
    }).catch((error) => {
        NetworkError(error)
      });
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
                    <h5 className="card-title text-center pb-0 fs-4">Admin Login</h5>
                  </div>
                  <form className="row g-3 needs-validation" onSubmit={verifyLogin}>
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
                        <Link to="/admin-forgot-password">Forgot password?</Link>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">Login</button>
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