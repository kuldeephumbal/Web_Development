import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminLogin from './AdminLogin';
import AdminForgotPassword from './AdminForgotPassword';
import DoctorLogin from './DoctorLogin';
import DoctorForgotPassword from './DoctorForgotPassword';
import DoctorRegister from './DoctorRegister';
import AdminAppointments from './AdminAppointments';
import AdminAssistant from './AdminAssistant';
import AdminChangePassword from './AdminChangePassword';
import AdminDoctorManagement from './AdminDoctorManagement';
import AdminPackage from './AdminPackage';
import AdminComposeEmail from './AdminComposeEmail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AdminComposeEmail />);
