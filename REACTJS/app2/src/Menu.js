export default function Menu() {
  return (<>
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="../logo.png" />
          <p className="fs-4 my-1 text-dark">Doctor Appointment</p>
        </a>
        <i className="bi bi-list toggle-sidebar-btn" />
      </div>
      {/* End Logo */}
    </header>
    {/* End Header */}
    {/* ======= Sidebar ======= */}
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item shadow-sm">
          <a className="nav-link collapsed" href="admin-home.html">
            <i className="fa-solid fa-house" />
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item shadow-sm">
          <a className="nav-link collapsed" href="doctor-profile.html">
            <i className="fa-solid fa-user-doctor" />
            <span>My profile</span>
          </a>
        </li>
        <li className="nav-item shadow-sm">
          <a className="nav-link collapsed" href="admin-doctor-management.html">
            <i className="fa-solid fa-stethoscope" />
            <span>Doctors management</span>
          </a>
        </li>
        <li className="nav-item shadow-sm">
          <a className="nav-link collapsed" href="doctor-home.html">
            <i className="fa-solid fa-house" />
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item shadow-sm">
          <a className="nav-link collapsed" href="doctor-service.html">
            <i className="fa-solid fa-box-open" />
            <span>My pakage</span>
          </a>
        </li>
        <li className="nav-item shadow-sm">
          <a className="nav-link collapsed" href="doctor-assistance.html">
            <i className="fa-solid fa-users" />
            <span>My assistents</span>
          </a>
        </li>
        <li className="nav-item shadow-sm">
          <a className="nav-link collapsed" href="assistent-home.html">
            <i className="fa-solid fa-house" />
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item shadow-sm">
          <a className="nav-link collapsed" href="admin-change-password.html">
            <i className="fa-solid fa-key" />
            <span>Change password</span>
          </a>
        </li>
        <li className="nav-item shadow-sm">
          <a className="nav-link collapsed" href="#">
            <i className="fa-solid fa-right-from-bracket" />
            <span>Log out</span>
          </a>
        </li>
      </ul>
    </aside>
    {/* End Sidebar*/}
  </>
  );
}