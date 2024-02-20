import Menu from "./Menu";
export default function AdminChangePassword() {
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
                            <div className="card-header text-bg-primary h4 d-flex justify-content-between">Change password
                            </div>
                            <div className="card-body mt-2">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="currentPassword" className="form-label">Current Password</label>
                                        <input type="password" className="form-control" id="currentPassword" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="newPassword" className="form-label">New Password</label>
                                        <input type="password" className="form-control" id="newPassword" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                                        <input type="password" className="form-control" id="confirmPassword" required />
                                    </div>
                                    <div className="mt-2">
                                        <button type="submit" className="btn btn-primary m-1">Change password</button>
                                        <button type="reset" className="btn btn-danger m-1">Claer</button>
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