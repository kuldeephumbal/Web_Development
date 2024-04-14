import { Link } from "react-router-dom";
import Menu from "./Menu";
import { showError, showMessage } from "./ToastMessage";
import { useCookies } from 'react-cookie';
import axios from "axios";
import { useState } from "react";
import getBase from "./Api";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
export default function DoctorAddAssistant() {

  let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let navigate = useNavigate();

  let addAssistent = function(e) {
    e.preventDefault();
    let apiAddress = getBase() + "add_assistance.php";

    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('doctorid', cookies['doctorid']);

    axios({
      method: 'post',
      responseType: 'json',
      url: apiAddress,
      data: formData,
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      console.log(error);
      if(error !== 'no'){
        showError(error);
      }
      else{
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];
        if(success !== 'yes'){
          showError(message);
        }else{
          showMessage(message);
          setTimeout(() => {
            navigate("/admin-assistant/" + cookies['doctorid']);
        }, 1000);
        }
      }
    }).catch((error) => {
      showError(error);
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
              <div className="card-header text-bg-primary h4 d-flex justify-content-between">Add new assistance
                <Link to="/admin-assistant/:doctorid" className="btn btn-light"><i className="fa-solid fa-angle-left" /> Back</Link>
              </div>
              <div className="card-body mt-2">
                <form className="row g-3 needs-validation" onSubmit={addAssistent}>
                  <div className="col-12">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name="name" id="name" className="form-control"
                    value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" id="email" className="form-control"
                    value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name="password" id="password" className="form-control"
                    value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <div className="col-12 text-end">
                    <div className="mt-2">
                      <button type="submit" className="btn btn-primary me-1 ">Add</button>
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