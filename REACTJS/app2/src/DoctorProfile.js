export default function DoctorProfile() {
    return (<>
        <main>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
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
                                        <div className="pt-4 pb-2 mb-3">
                                            <h5 className="card-title text-center fs-4">Create profile</h5>
                                        </div>
                                        <form className="row g-3 needs-validation" noValidate>
                                            <div className="col-6">
                                                <label htmlFor="qualification" className="form-label">Qualification</label>
                                                <input type="text" name="qualification" id="qualification" className="form-control" required />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="city" className="form-label">City</label>
                                                <input type="text" name="city" id="city" className="form-control" required />
                                            </div>
                                            <div className="col-12">
                                                <label htmlFor="address" className="form-label">Address</label>
                                                <textarea name="address" id="addresss" cols={30} rows={2} className="form-control" defaultValue={""} />
                                            </div>
                                            <div className="col-6">
                                                <p>Gender</p>
                                                <div className="form-check form-check-inline">
                                                    <input type="radio" name="gender" id="male" className="form-check-input" />
                                                    <label htmlFor="male" className="form-check-label">Male</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input type="radio" name="gender" id="female" className="form-check-input" />
                                                    <label htmlFor="female" className="form-check-label">Female</label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input type="radio" name="gender" id="other" className="form-check-input" />
                                                    <label htmlFor="other" className="form-check-label">Other</label>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="date" className="form-label">Date</label>
                                                <input type="date" name="date" id="date" className="form-control" required />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="website" className="form-label">Website</label>
                                                <input type="text" name="website" id="website" className="form-control" required />
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="photo" className="form-label">Photo</label>
                                                <input type="file" name="file" id="file" className="form-control" required />
                                            </div>
                                            <div className="col-12 text-end">
                                                <div className="mt-3">
                                                    <button type="submit" className="btn btn-primary me-1">Save</button>
                                                    <button type="reset" className="btn btn-danger">Reset</button>
                                                </div>
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


    </>
    );
}