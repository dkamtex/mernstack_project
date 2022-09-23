import React from "react";
import "./App.css"
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup"
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return(
    <>
      < Navbar />
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route  path="/about"  element={<About />} />
      <Route  path="/contact" element={<Contact />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="/signup" element={<Signup />} />
      </Routes>
        
      
   
      

      
    </>
  )
}

  export default App;