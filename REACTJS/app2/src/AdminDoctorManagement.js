import Menu from "./Menu";
export default function AdminDoctorManagement() {
    return (<>
        <Menu />
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
                            <div className="card-header text-bg-primary h4">Registered Doctors</div>
                            <div className="card-body mt-3">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Sr no</th>
                                                <th>Name</th>
                                                <th>Photo</th>
                                                <th>City</th>
                                                <th>Registration</th>
                                                <th>Qualification</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Rahul</td>
                                                <td><img src="http://picsum.photos/70?random=1" alt /></td>
                                                <td>Bhavnagar</td>
                                                <td>G-1421</td>
                                                <td>MBBS</td>
                                                <td>
                                                    <div className="ms-3">
                                                        <a href="admin-compose-email.html" title="Messages" className="me-2 text-primary"><i className="fa-solid fa-message fa-xl" /></a>
                                                        <a href="admin-package.html" title="Pakages" className="pe-2 text-warning "><i className="fa-solid fa-box-open fa-xl" /></a>
                                                        <a href="admin-assitant.html" title="Assistent" className="pe-2 text-success"><i className="fa-solid fa-users fa-xl" /></a>
                                                        <a href="admin-appointments.html" title="Appointment" className="pe-2 text-danger"><i className="fa-solid fa-clipboard-list fa-xl" /></a>
                                                    </div>
                                                </td>
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