import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from './AdminLogin';
import AdminForgotPassword from './AdminForgotPassword';
import AdminAppointments from './AdminAppointments';
import AdminAssistant from './AdminAssistant';
import AdminChangePassword from './AdminChangePassword';
import AdminDoctorManagement from './AdminDoctorManagement';
import AdminPackage from './AdminPackage';
import AdminComposeEmail from './AdminComposeEmail';
import DoctorLogin from './DoctorLogin';
import DoctorForgotPassword from './DoctorForgotPassword';
import DoctorRegister from './DoctorRegister';
import DoctorProfile from './DoctorProfile';
import DoctorAddAssistant from './DoctorAddAssistant';
import DoctorAddPackage from './DoctorAddPackage';
import DoctorEditAssistant from './DoctorEditAssistant';
import DoctorEditPackage from './DoctorEditPackage';
import NoPageFound from './NoPageFound';

function ROUTES(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<AdminLogin />} />
                <Route path='/admin-forgot-password' element={<AdminForgotPassword />} />
                <Route path='/admin-appointments' element={<AdminAppointments />} />
                <Route path='/admin-assistant' element={<AdminAssistant />} />
                <Route path='/admin-change-password' element={<AdminChangePassword />} />
                <Route path='/admin-doctor-mangement' element={<AdminDoctorManagement />} />
                <Route path='/admin-package' element={<AdminPackage />} />
                <Route path='/admin-compose-email' element={<AdminComposeEmail />} />
                <Route path='/doctor-login' element={<DoctorLogin />} />
                <Route path='/doctor-forgot-passwprd' element={<DoctorForgotPassword />} />
                <Route path='/doctor-register' element={<DoctorRegister />} />
                <Route path='/doctor-profile' element={<DoctorProfile />} />
                <Route path='/doctor-add-assistant' element={<DoctorAddAssistant />} />
                <Route path='/doctor-add-package' element={<DoctorAddPackage />} />
                <Route path='/doctor-edit-assistant' element={<DoctorEditAssistant />} />
                <Route path='/doctor-edit-package' element={<DoctorEditPackage />} />
                <Route path='*' element={<NoPageFound />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ROUTES />);
