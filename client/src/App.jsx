import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import { Nav } from "./components/Nav";
import { NotFound } from "./components/NotFound";
import { About } from "./components/About";
import axios from 'axios';
import Signup from "./components/Signup";
import { LoginContextProvider } from "./components/LoginContext";
import { AppContextProvider } from "./components/appContext";
import AccountInfo from "./components/AccountInfo";
import OrderManagement from "./components/OrderManagement";


function App() {

//  useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://127.0.0.1:5000/members');
//       console.log(response.data); // Print the response data to the console
//     } catch (error) {
//       console.error(error); 
//     }
//   };

//   fetchData(); 
// }, []);

  return (
  
    <BrowserRouter>
    <LoginContextProvider>
    <AppContextProvider>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element = {<About/>}/>
        <Route path="/Signup" element = {<Signup/>}/>
        <Route path="/AccountInfo" element = {<AccountInfo/>}/>
        <Route path="/Order" element= {<OrderManagement/>}/>
        <Route path = "/*" element = {<NotFound/>}/>


      </Routes>
    </AppContextProvider>
    </LoginContextProvider>
    
  </BrowserRouter>


  );
}

export default App;
