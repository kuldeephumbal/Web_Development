import Menu from "./Menu";
export default function AdminAssistant() {
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
                            <div className="card-header text-bg-primary d-flex justify-content-between h4">Assistent - (Rahul)
                                <a href="doctor-add-assistant.html" className="btn btn-light">Add Assistant <i className="fa-solid fa-floppy-disk ms-1" /></a>
                            </div>
                            <div className="card-body mt-3">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Sr no</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>kuldeep</td>
                                                <td>kuldeep54@gmail.com</td>
                                                <td>
                                                    <a href="doctor-edit-assistant.html" title="Edit"><i className="fa-solid fa-pen-to-square fa-lg ms-1" /></a>
                                                    <a href="#" title="delete"><i className="fa-solid fa-trash fa-lg ms-1" style={{ "color": "#ff0000" }} /></a>
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