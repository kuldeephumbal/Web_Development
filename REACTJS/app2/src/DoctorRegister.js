export default function DoctorRegister()
{
    return(<main>
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
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center fs-4">Registration as doctor</h5>
                    </div>
                    <form className="row g-3 needs-validation" noValidate>
                      <div className="col-6">
                        <label htmlFor="fullname" className="form-label">Name</label>
                        <input type="text" name="name" id="fullname" className="form-control" required />
                      </div>
                      <div className="col-6">
                        <label htmlFor="email" className="form-label">Eamil</label>
                        <input type="email" name="email" id="email" className="form-control" required />
                      </div>
                      <div className="col-6">
                        <label htmlFor="number" className="form-label">Mobile no.</label>
                        <input type="number" name="number" id="number" className="form-control" required />
                      </div>
                      <div className="col-6">
                        <label htmlFor="regitration" className="form-label">Regitration no.</label>
                        <input type="number" name="regitration" id="regitration" className="form-control" required />
                      </div>
                      <div className="col-6">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" id="password" className="form-control" required />
                      </div>
                      <div className="col-6">
                        <label htmlFor="password" className="form-label">Confirm password</label>
                        <input type="password" name="password" id="password" className="form-control" required />
                      </div>
                      <div className="col-12 text-end">
                        <div className="mt-2">
                          <button type="submit" className="btn btn-primary w-100">Create account</button>
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
      );
}