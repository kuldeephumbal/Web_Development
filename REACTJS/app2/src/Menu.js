import { Link } from "react-router-dom";
export default function Menu() {
  return (<>
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <link to="index.html" className="logo d-flex align-items-center">
          <img src="../logo.png" />
          <p className="fs-4 my-1 text-dark">Doctor Appointment</p>
        </link>
        <i className="bi bi-list toggle-sidebar-btn" />
      </div>
      {/* End Logo */}
    </header>
    {/* End Header */}
    {/* ======= Sidebar ======= */}
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item shadow-sm">
          <link className="nav-link collapsed" to="admin-home.html">
            <i className="fa-solid fa-house" />
            <span>Home</span>
          </link>
        </li>
        <li className="nav-item shadow-sm">
          <link className="nav-link collapsed" to="doctor-profile.html">
            <i className="fa-solid fa-user-doctor" />
            <span>My profile</span>
          </link>
        </li>
        <li className="nav-item shadow-sm">
          <link className="nav-link collapsed" to="admin-doctor-management.html">
            <i className="fa-solid fa-stethoscope" />
            <span>Doctors management</span>
          </link>
        </li>
        <li className="nav-item shadow-sm">
          <link className="nav-link collapsed" to="doctor-home.html">
            <i className="fa-solid fa-house" />
            <span>Home</span>
          </link>
        </li>
        <li className="nav-item shadow-sm">
          <link className="nav-link collapsed" to="doctor-service.html">
            <i className="fa-solid fa-box-open" />
            <span>My pakage</span>
          </link>
        </li>
        <li className="nav-item shadow-sm">
          <link className="nav-link collapsed" to="doctor-assistance.html">
            <i className="fa-solid fa-users" />
            <span>My assistents</span>
          </link>
        </li>
        <li className="nav-item shadow-sm">
          <link className="nav-link collapsed" to="assistent-home.html">
            <i className="fa-solid fa-house" />
            <span>Home</span>
          </link>
        </li>
        <li className="nav-item shadow-sm">
          <link className="nav-link collapsed" to="admin-change-password.html">
            <i className="fa-solid fa-key" />
            <span>Change password</span>
          </link>
        </li>
        <li className="nav-item shadow-sm">
          <link className="nav-link collapsed" to="#">
            <i className="fa-solid fa-right-from-bracket" />
            <span>Log out</span>
          </link>
        </li>
      </ul>
    </aside>
    {/* End Sidebar*/}
  </>
  );
}