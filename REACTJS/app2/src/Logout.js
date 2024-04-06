import {useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
export default function Logout() {
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    let navigate = useNavigate();
    if (cookies['adminid'] !== undefined) {
        removeCookie("adminid");
        navigate("/");
        // alert("You have been logged out");
    }

    else if (cookies['doctorid'] !== undefined) {
        removeCookie("doctorid");
        navigate("/doctor-login");
    }

    else if (cookies['assitantid'] !== undefined) {
        removeCookie("assitantid");
        navigate("/doctor-login");

    }
    return (<></>);
}