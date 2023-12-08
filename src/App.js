import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/User/Login";
import Mobile from "./Components/Mobile";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Employee from "./Pages/Employee/Employee";

const App = () => {
  return (
    <>
      <div className="bg-slate-900 flex  items-center  ">
        <BrowserRouter>
          <Routes>         
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employee" element={<Employee />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
