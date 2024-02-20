export default function DoctorLogin()
{
    return(<main>
        <div className="container">
          <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-12 d-flex flex-column align-items-center justify-content-center">
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
                        <h5 className="card-title text-center pb-0 fs-4">Doctor Login</h5>
                      </div>
                      <form className="row g-3 needs-validation" noValidate>
                        <div className="col-12">
                          <label htmlFor="youremail" className="form-label">Email</label>
                          <div className="input-group has-validation">
                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                            <input type="email" name="email" className="form-control" id="youremail" required />
                            <div className="invalid-feedback">Please enter your username.</div>
                          </div>
                        </div>
                        <div className="col-12">
                          <label htmlFor="yourPassword" className="form-label">Password</label>
                          <input type="password" name="password" className="form-control" id="yourPassword" required />
                          <div className="invalid-feedback">Please enter your password!</div>
                          <div className="mt-1">
                            <a href="doctor-forgot.html">Forgot password?</a>
                          </div>
                        </div>
                        <div className="col-12">
                          <button className="btn btn-primary w-100" type="submit">Login</button>
                        </div>
                        <div className="col-12">
                          <p className="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a></p>
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