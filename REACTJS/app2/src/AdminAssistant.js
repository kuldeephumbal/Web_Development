import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import getBase from './Api';
import Menu from "./Menu";
import { NetworkError, showError, showMessage } from "./ToastMessage";
export default function AdminAssistant() {
    let { doctorid } = useParams();
    console.log("doctor id = ", doctorid);

    let [assistents, setAssistent] = useState([]);
    let [doctorName, setDoctorName] = useState('');

    let displayAssistent = (item) =>{
        return(<tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
                <a href="doctor-edit-assistant.html" title="Edit"><i className="fa-solid fa-pen-to-square fa-lg ms-1" /></a>
                <a href="#" title="delete"><i className="fa-solid fa-trash fa-lg ms-3" style={{ "color": "#ff0000" }} /></a>
            </td>
        </tr>);
    }

    let noAssistentFound = () => {
        return(<tr>
            <td colSpan='4' className="text-danger fs-3 text-center">No Assistent Found</td>
        </tr>);
    
    }

    useEffect(() => {
        if(assistents.length === 0){

            let apiAddress = getBase() + "assitent.php?doctorid=" + doctorid;
            fetch(apiAddress)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                let error = data[0]['error'];
                console.log(error);
                if(error !== 'no'){
                    showError(error);
                }
                else if(data[1]['total'] === 0){
                    showError('no assistent found');
                }
                else{
                    data.splice(0,2)
                    console.log(data);
                    setAssistent(data)
                    setDoctorName(data[0]['name']);
                    showMessage('Data loaded successfully');
                }
            })
            .catch((error) => {
                NetworkError(error);
            });
        }
    });

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
                            <div className="card-header text-bg-primary d-flex justify-content-between h4">Assistent - {doctorName}
                                <a href="doctor-add-assistant.html" className="btn btn-light">Add Assistant <i className="fa-solid fa-floppy-disk ms-1" /></a>
                            </div>
                            <div className="card-body mt-3">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Sr no</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {assistents.length > 0 ? assistents.map((item) => displayAssistent(item)) : noAssistentFound()}
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