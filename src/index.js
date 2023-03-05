import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlantDetailsForm from './Components/PlantDetailsForm';
import PlantsDisplay from './Components/PlantsDisplay';
import Login from './Components/Login';
import Home from './Components/Home'
import Contact from './Components/Contact'
import Signuppage from './Components/Signuppage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* <Route path='/' element={<Navbar />}></Route> */}
        <Route path='/' element={<Home />}></Route>
        <Route path="/PlantsDisplay" element={<PlantsDisplay />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<Signuppage />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/PlantDetailsForm" element={<PlantDetailsForm />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();