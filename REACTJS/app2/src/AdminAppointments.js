import Menu from "./Menu";
export default function AdminAppointments()
{
    return(<>
        <Menu/>
        <main id="main" className="main">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mb-3 fw-bolder">
                  <h1>Doctor management</h1>
                </div>
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-header text-bg-primary h4 d-flex justify-content-between">Appointments
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
                          <tr>
                            <td>1</td>
                            <td>Sahil</td>
                            <td>Dental implant</td>
                            <td>10/2/24</td>
                            <td>11:00AM 11/2/24</td>
                            <td>Type 1 dentist</td>
                            <td>Confirmed</td>
                          </tr>
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