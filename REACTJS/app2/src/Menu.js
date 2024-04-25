import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';

function AdminMenuLink() {
  let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
  if(cookies['adminid'] !== undefined){
    return(<>
     <li className="nav-item shadow-sm">
          <Link className="nav-link collapsed" to="admin-home.html">
            <i className="fa-solid fa-house" />
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item shadow-sm">
          <Link className="nav-link collapsed" to="/admin-doctor-management">
            <i className="fa-solid fa-stethoscope" />
            <span>Doctors management</span>
          </Link>
        </li>
    </>);
  }
}

function DoctorMenuLink() {
  let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
  if(cookies['doctorid'] !== undefined){
    return(<>
    <li className="nav-item shadow-sm">
          <Link className="nav-link collapsed" to="doctor-home.html">
            <i className="fa-solid fa-house" />
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item shadow-sm">
          <Link className="nav-link collapsed" to="/admin-appointments/:doctorid">
            <i className="fa-solid fa-user-doctor" />
            <span>My appointment</span>
          </Link>
        </li>
        <li className="nav-item shadow-sm">
          <Link className="nav-link collapsed" to="/admin-package/:doctorid">
            <i className="fa-solid fa-box-open" />
            <span>My package</span>
          </Link>
        </li>
        <li className="nav-item shadow-sm">
          <Link className="nav-link collapsed" to="/admin-assistant/:doctorid">
            <i className="fa-solid fa-users" />
            <span>My assistants</span>
          </Link>
        </li>
    </>);
  }
}

function AssistantMenuLink() {
  let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
  if(cookies['assistantid'] !== undefined){
    return(<>
    <li className="nav-item shadow-sm">
          <Link className="nav-link collapsed" to="assistant-home.html">
            <i className="fa-solid fa-house" />
            <span>Home</span>
          </Link>
        </li>
        <li className="nav-item shadow-sm">
          <Link className="nav-link collapsed" to="/admin-appointments/:doctorid">
            <i className="fa-solid fa-user-doctor" />
            <span>My appointment</span>
          </Link>
        </li>
    </>);
  }
}

export default function Menu() {
  const toggleSidebar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };
  return (<>
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <Link to="index.html" className="logo d-flex align-items-center">
          <img src="../logo.png" />
          <p className="fs-4 my-1 text-dark">Doctor Appointment</p>
        </Link>
        <i className="bi bi-list toggle-sidebar-btn" onClick={toggleSidebar} />
      </div>
      {/* End Logo */}
    </header>
    {/* End Header */}
    {/* ======= Sidebar ======= */}
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
      <AdminMenuLink />
      <DoctorMenuLink />
      <AssistantMenuLink />
        <li className="nav-item shadow-sm">
          <Link className="nav-link collapsed" to="/admin-change-password">
            <i className="fa-solid fa-key" />
            <span>Change password</span>
          </Link>
        </li>
        <li className="nav-item shadow-sm">
          <Link className="nav-link collapsed" to="/logout">
            <i className="fa-solid fa-right-from-bracket" />
            <span>Log out</span>
          </Link>
        </li>
      </ul>
    </aside>
    {/* End Sidebar*/}
  </>
  );
}
