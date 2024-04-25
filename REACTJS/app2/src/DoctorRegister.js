import { useState } from "react";
import getBase from "./Api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { NetworkError, showError, showMessage } from "./ToastMessage";
import { ToastContainer } from "react-toastify";
export default function DoctorRegister()
{
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [number, setNumber] = useState();
  let [regNo, setRegNo] = useState();
  let [password, setPassword] = useState(); 
  let [confirmPassword, setConfirmPassword] = useState(); 

  let navigate = useNavigate();

  let docotrRegister = function(event) {
  event.preventDefault();
  console.log(name, email, number, regNo, password, confirmPassword);
  if (password !== confirmPassword){
    showError("Password and confirm password not matched");
  }
  else {
    let apiAdrress = getBase() + "doctor_register.php";
    console.log(apiAdrress);
    
    let form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("contactno", number);
    form.append("regno", regNo);
    form.append("password", password);
    axios({
      method: 'post',
      responseType:'json',
      url: apiAdrress,
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
        if (success !== 'yes'){
          showError(message);
        }
        else {
          showMessage(message);
          setTimeout(() => {
            navigate("/doctor-login");
          },2000);
        }
      }
    }).catch((error) => {
      NetworkError(error);  
    });
  }  
  }
    return(<main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <ToastContainer />
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
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center fs-4">Registration as doctor</h5>
                    </div>
                    <form className="row g-3 needs-validation" onSubmit={docotrRegister}>
                      <div className="col-6">
                        <label htmlFor="fullname" className="form-label">Name</label>
                        <input type="text" name="name" id="fullname" className="form-control"
                        value={name} onChange={(event) => setName(event.target.value)}
                        required />
                      </div>
                      <div className="col-6">
                        <label htmlFor="email" className="form-label">Eamil</label>
                        <input type="email" name="email" id="email" className="form-control"
                        value={email} onChange={(event) => setEmail(event.target.value)}
                        required />
                      </div>
                      <div className="col-6">
                        <label htmlFor="number" className="form-label">Mobile no.</label>
                        <input type="number" name="number" id="number" className="form-control"
                        value={number} onChange={(event) => setNumber(event.target.value)}
                        required />
                      </div>
                      <div className="col-6">
                        <label htmlFor="regitration" className="form-label">Regitration no.</label>
                        <input type="number" name="regitration" id="regitration" className="form-control"
                        value={regNo} onChange={(event) => setRegNo(event.target.value)}
                        required />
                      </div>
                      <div className="col-6">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" id="password" className="form-control"
                        value={password} onChange={(event) => setPassword(event.target.value)}
                        required />
                      </div>
                      <div className="col-6">
                        <label htmlFor="password" className="form-label">Confirm password</label>
                        <input type="password" name="password" id="password" className="form-control"
                        value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}
                        required />
                      </div>
                      <div className="col-12 text-end">
                        <div className="mt-2">
                          <button type="submit" className="btn btn-primary w-100">Create account</button>
                        </div>
                      </div>
                      <div className="col-12 text-center">
                      <p className="small mb-0">Already have account? <Link to='/doctor-login'>Login</Link></p>
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