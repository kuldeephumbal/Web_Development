import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getBase from "./Api";
import axios from "axios";
import Menu from "./Menu";
import { NetworkError, showError, showMessage } from "./ToastMessage";
import { ToastContainer } from "react-toastify";
export default function AdminAppointments() {

  let { doctorid } = useParams();
  console.log("doctor id = ", doctorid);

  let [appointments, setAppointment] = useState([]);
  let [doctorName, setDoctorName] = useState('');

  let displayAppointment = (item) => {
    return( <tr>
      <td>{item.id}</td>
      <td>{item.patient}</td>
      <td>{item.package}</td>
      <td>{item.appointmentdate}</td>
      <td>{item.servicetime}</td>
      <td>{item.remarks}</td>
      <td>{item.status}</td>
    </tr>);
  }

  useEffect(() => {
    let apiAddress = getBase() + "appointment.php?doctorid=" + doctorid;
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      console.log(error);
      if (error !== 'no') {
        showError(error);
      }
      else if (response.data[1]['total'] === 0) {
        showError('no appointment found');
      }
      else {
        response.data.splice(0, 2);
        setAppointment(response.data);
        setDoctorName(response.data[0]['name']);
        showMessage('Data loaded successfully');
      }
    }).catch((error) => {
      NetworkError(error);
    });
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
              <div className="card-header text-bg-primary h4 d-flex justify-content-between">Appointments of {doctorName}
                <button type="button" className="btn btn-light"><i className="fa-solid fa-print" /> Print</button>
              </div>
              <div className="card-body mt-3">
                <span>Select date:</span>
                <div className="mb-3">
                  <button type="button" className="btn btn-outline-secondary m-1">Yesterday</button>
                  <button type="button" className="btn btn-outline-secondary m-1">Today</button>
                  <button type="button" className="btn btn-outline-secondary m-1">Tommorrow</button>
                </div>
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Sr no</th>
                        <th>User</th>
                        <th>Service</th>
                        <th>App. Date</th>
                        <th>Service Datetime</th>
                        <th>Remarks</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                     {appointments.map((item) => displayAppointment(item))}
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