import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import getBase from './Api';
import Menu from "./Menu"; 
import { NetworkError, showError, showMessage } from "./ToastMessage";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { useCookies } from 'react-cookie';
import axios from "axios";
import VerifyLogin from "./Verifylogin";

export default function AdminAssistant() {
    VerifyLogin();
    let { doctorid } = useParams();
    // console.log(doctorid);
    
    let [cookies, setCookie, removeCookie] = useCookies(['theeasylearn']);
    let [assistants, setAssistant] = useState([]);
    let [doctorName, setDoctorName] = useState('');
    let [isFetch, setIsFetch] = useState(false);

    let displayAssistent = function(item) {
        return(<tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            {(cookies['doctorid'] !== undefined) ? <td>
            <Link to={"/doctor-edit-assistant/" + item.id} title="Edit"><i className="fa-solid fa-pen-to-square fa-lg ms-1" /></Link>
                <Link to="#" title="delete" onClick={() => deleteAssistant(item.id)}><i className="fa-solid fa-trash fa-lg ms-3" style={{"color":"#ff0000"}} /></Link>
                </td> 
                : <></> }
        </tr>);
    }

    let deleteAssistant = function(assistantid) {
        let apiAddress = getBase() + "delete_assistance.php?id=" + assistantid;
        axios({
            method:'get',
            responseType:'json',
            url: apiAddress
        }).then((response) => {
            let error = response.data[0]['error'];
            if(error !== 'no'){
                showError(error);
            }
            else{
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if(success === 'yes'){
                    showMessage(message);
                    let newAssistant = assistants.filter((item) => item.id !== assistantid);
                    setAssistant(newAssistant);
                }
                else{
                    showError(message);
                }
            }
        }).catch((error) => {
            NetworkError(error);
        });
    }

    let noAssistentFound = function() {
        return(<tr>
            <td colSpan='4' className="text-danger fs-3 text-center">No Assistant Found</td>
        </tr>);
    
    }

    useEffect(() => {
        if(isFetch === false){
            let apiAddress = getBase() + "assitant.php?doctorid=" + doctorid;
            console.log(apiAddress);
            if(assistants.length === 0){
                axios({
                    method: 'get',
                    responseType:'json',
                    url: apiAddress
                }).then((response) => {
                    console.log(response.data);
                let error = response.data[0]['error'];
                console.log(error);
                if(error !== 'no'){
                    showError(error);
                }
                else {
                    if(response.data[1]['total'] === 0){
                        showError('no assistent found');
                    }
                    else{
                        response.data.splice(0,2);
                        setAssistant(response.data);
                        setDoctorName(response.data[0]['name']);
                        showMessage('Data loaded successfully');
                        setIsFetch(true);
                    }
                }
            }).catch((error) => {
                NetworkError(error);
            });
        }
        }
    });

   
    return (<>
        <Menu />
        <main id="main" className="main">
            <div className="container">
                <ToastContainer />
                <div className="row">
                    <div className="col-12">
                        <div className="mb-3 fw-bolder">
                            <h1>Doctor management</h1>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header text-bg-primary d-flex justify-content-between h4">Assistent - {doctorName}
                                {(cookies['doctorid'] !== undefined) ? <Link to="/doctor-add-assistant" className="btn btn-light">Add Assistent</Link> : <></>}
                            </div>
                            <div className="card-body mt-3">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Sr no</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                {(cookies['doctorid'] !== undefined) ? <th>Action</th> : <></>}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {(assistants.length > 0) ? assistants.map((item) => displayAssistent(item)) : -noAssistentFound()}
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