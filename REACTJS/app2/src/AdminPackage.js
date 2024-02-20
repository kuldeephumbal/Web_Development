import Menu from "./Menu";
export default function AdminPackage() {
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
                            <div className="card-header text-bg-primary h4 d-flex justify-content-between">Package - (Rahul)
                                <a href="doctor-add-package.html" className="btn btn-light">Add packages <i className="fa-solid fa-floppy-disk ms-1" /></a>
                            </div>
                            <div className="card-body mt-3">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Sr no</th>
                                                <th>Title details</th>
                                                <th>Photo</th>
                                                <th>Charge</th>
                                                <th>Duration</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente ipsum
                                                    illum et accusamus? Sed eius maxime explicabo molestiae dicta esse.</td>
                                                <td><img src="http://picsum.photos/70?random=1" alt /></td>
                                                <td>Rs 50000</td>
                                                <td>4 hours</td>
                                                <td>
                                                    <a href="doctor-edit-pakage.html" title="Edit"><i className="fa-solid fa-pen-to-square fa-lg ms-1" /></a>
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