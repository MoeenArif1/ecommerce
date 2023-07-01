import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import { Nav } from "./components/Nav";
import { NotFound } from "./components/NotFound";
import { About } from "./components/About";

function App() {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path= "/not" element = {<NotFound/>}/>
      <Route path="/About" element = {<About/>}/>
      <Route path = "/*" element = {()=> <h1>404 Page not Exists</h1>}/>
    </Routes>
  </BrowserRouter>


  );
}

export default App;
