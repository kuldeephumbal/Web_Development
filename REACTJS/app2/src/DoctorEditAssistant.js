import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError, showMessage, NetworkError } from "./ToastMessage";
import Menu from "./Menu";
import getBase from "./Api";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import VerifyLogin from "./Verifylogin";
export default function DoctorEditAssistant() {
  VerifyLogin();
  let { assistantid } = useParams();
  console.log(assistantid);

  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [isFetch, setIsFetch] = useState(false);
  let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
  let navigate = useNavigate();

  useEffect(() => {
    console.log(assistantid);
    if (isFetch === false) {
      let apiAdress = getBase() + "assitant.php?assistantid=" + assistantid;
      axios({
        method: 'get',
        responseType: 'json',
        url: apiAdress,
      }).then((res) => {
        console.log(res.data);
        let error = res.data[0]['error'];
        if (error !== 'no') {
          showError(error);
        }
        else {
          setName(res.data[2]['name']);
          setEmail(res.data[2]['email']);
          setPassword(res.data[2]['password']);
          setIsFetch(true);
        }
      }).catch((error) => {
        NetworkError(error);
      });
    }
  });

  let editAssistant = function (e) {
    e.preventDefault();
    console.log(name, email, password);

    let apiAdress = getBase() + "update_assistant.php";
    let form = new FormData();
    form.append('name', name);
    form.append('email', email);
    form.append('password', password);
    form.append('id', assistantid);
    axios({
      method: 'post',
      responseType: 'json',
      url: apiAdress,
      data: form,
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      if (error !== 'no') {
        showError(error);
      }
      else {
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];
        if (success === 'yes') {
          showMessage(message);
          setTimeout(() => {
            navigate("/admin-assistant/:doctorid" + cookies['doctorid']);
          }, 2000);
        }
        else {
          showError(message);
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
              <div className="card-header text-bg-primary h4 d-flex justify-content-between">Add new assistance
                <Link to="/admin-assistant/:doctorid" className="btn btn-light"><i className="fa-solid fa-angle-left" /> Back</Link>
              </div>
              <div className="card-body mt-2">
                <form className="row g-3 " onSubmit={editAssistant} >
                  <div className="col-12">
                    <label htmlFor="name" className="form-label"><i className="fa-solid fa-pen-to-square fa-xs" /> Name</label>
                    <input type="text" name="name" id="name" className="form-control"
                      value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label"><i className="fa-solid fa-pen-to-square fa-xs" /> Email</label>
                    <input type="email" name="email" id="email" className="form-control"
                      value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="password" className="form-label"><i className="fa-solid fa-pen-to-square fa-xs" /> Password</label>
                    <input type="password" name="password" id="password" className="form-control"
                      value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <div className="col-12 text-end">
                    <div className="mt-2">
                      <button type="submit" className="btn btn-primary me-1">Save changes</button>
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