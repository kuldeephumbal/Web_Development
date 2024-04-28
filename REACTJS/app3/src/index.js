import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import ChangePassword from './ChangePassword';
import Doctor from './Doctor';
import DoctorDeatils from './DoctorDetails';
import MyAppointment from './MyAppointment';
import BookingHistory from './BookingHistory';
import BookingAppointment from './BookingAppointment';
import Logout from './Logout';
import NoPageFound from './NoPageFound';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function MYROUTES(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index path='/' element={<Home />} />
                <Route index path='/login' element={<Login />} />
                <Route index path='/forgot-password' element={<ForgotPassword />} />
                <Route index path='/register' element={<Register />} />
                <Route index path='/change-password' element={<ChangePassword />} />
                <Route index path='/doctor' element={<Doctor />} />
                <Route index path='/doctor-details' element={<DoctorDeatils />} />
                <Route index path='/my-appointment' element={<MyAppointment />} />
                <Route index path='/booking-history' element={<BookingHistory />} />
                <Route index path='/booking-appontment' element={<BookingAppointment />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='*' element={<NoPageFound />} />
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MYROUTES />);
