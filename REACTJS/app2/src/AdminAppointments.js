import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getBase from "./Api";
import axios from "axios";
import Menu from "./Menu";
import { format, parseISO } from "date-fns";
import { NetworkError, showError, showMessage } from "./ToastMessage";
import { ToastContainer } from "react-toastify";
import { useCookies } from 'react-cookie';
import VerifyLogin from "./Verifylogin";

export default function AdminAppointments() {
  VerifyLogin();
  let { doctorid } = useParams();
  console.log("doctor id = ", doctorid);

  let [appointments, setAppointment] = useState([]);
  let [doctorName, setDoctorName] = useState('');
  let [isFetched, setIsFetched] = useState(false);
  let status = ['Book', 'Confirmed', 'Completed'];

  let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);

  let fetchAppointment = (day = null) => {
    let apiAddress = '';
    if (day === null) {
      apiAddress = getBase() + "appointment.php?doctorid=" + doctorid;
    } else {
      apiAddress = getBase() + "appointment.php?doctorid=" + doctorid + "&day=" + day;
    }

    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response.data);
      let error = response.data[0]['error'];
      // console.log(error);
      if (error !== 'no') {
        showError(error);
      } else if (response.data[1]['total'] === 0) {
        showError('no appointment found');
      } else {
        response.data.splice(0, 2);
        setAppointment(response.data);
        setDoctorName(response.data[0]['name']);
        setIsFetched(true);
        showMessage('Data loaded successfully');
      }
    }).catch((error) => {
      // console.log(error.code);
        NetworkError(error);
    });
  };

  useEffect(() => {
    if (!isFetched) {
      fetchAppointment();
    }
  }, [isFetched]);

  let updateAppointment = function (mode, appointmentid) {
    console.log(appointmentid + " ", mode);
    let apiAddress = getBase() + "update_appointment.php?appointmentid=" + appointmentid;
    if (mode === 'accept') {
      apiAddress += "&status=1";
    }
    else {
      apiAddress += "&status=2";
    }
    console.log(apiAddress);

    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    })
      .then((response) => {
        console.log(response.data);
        let error = response.data[0]['error'];
        if (error !== 'no')
          showError(error);
        else {
          let success = response.data[1]['success'];
          let message = response.data[2]['message'];

          if (success === 'yes') {
            showMessage(message);
          }
          else {
            showError(message);
          }
          let temp = appointments.filter((item)=>{
              if(item.id === appointmentid)
              {
                if(mode === 'accept')
                    item.status = 1;
                else 
                  item.status = 2;
              }
              return item
          });
          setAppointment(temp);
        }
      })
      .catch((error) => {
        showError(error);
      });
  }

  let AppointmentManagent = function (props) {
    console.log(props.status,props.appointmentid);
    //alert('we are here');
    if (cookies['assitantid'] === undefined)
      return status[props.status];
    else {
      return (<>
        <button disabled={props.status === 1 || props.status === 2} onClick={() => updateAppointment('accept', props.appointmentid)} type='button' className="btn btn-success btn-sm">{(props.status === 1)?'Accepted':'accept'}</button>&nbsp;
        <button disabled={props.status === 1 || props.status === 2} onClick={() => updateAppointment('cancel', props.appointmentid)} type='button' className="btn btn-danger btn-sm">{(props.status === 2)?'Canceled':'Cancel'}</button>
      </>)
    }

  }


  let displayAppointment = (item) => {
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.patient}</td>
        <td>{item.package}</td>
        <td>{format(parseISO(item.appointmentdate), "EEEE, dd-MM-yyyy")}</td>
        <td>{item.servicetime} {format(parseISO(item.servicedate), "EEEE, dd-MM-yyyy")}</td>
        <td>{item.remarks}</td>
        <td><AppointmentManagent status={item.status} appointmentid={item.id} /></td>
      </tr>
    );
  };

  return (
    <>
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
                    <input type="button" value="Yesterday" className="btn btn-outline-secondary m-1" onClick={() => fetchAppointment('yesterday')} />
                    <input type="button" value="Today" className="btn btn-outline-secondary m-1" onClick={() => fetchAppointment('today')} />
                    <input type="button" value="Tomorrow" className="btn btn-outline-secondary m-1" onClick={() => fetchAppointment('tomorrow')} />
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
