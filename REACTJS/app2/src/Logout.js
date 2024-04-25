import { useCookies } from "react-cookie";

export default function Logout() {
    const [cookies, , removeCookie] = useCookies(['theeasylearn']);

    if (cookies['adminid'] !== undefined) {
        removeCookie("adminid");
        window.location.href = "/";
        // alert("You have been logged out");
    } 
    else if (cookies['doctorid'] !== undefined) {
        removeCookie("doctorid");
        window.location.href = "/doctor-login";
    } 
    else if (cookies['assistantid'] !== undefined) {
        removeCookie("assistantid");
        removeCookie("docid");
        window.location.href = "/doctor-login";
    }
    return null;
}
