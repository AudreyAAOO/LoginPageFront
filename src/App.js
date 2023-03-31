import './assets/css/App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

// import composants
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import SignupPage from "./components/pages/SignupPage";
import LoginPage from "./components/pages/LoginPage";
import Home from './components/pages/Home';
import Modal from './components/Modal';
import Modal2 from './components/Modal2';
import Modal3 from './components/Modal3';


function App() {

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage visible={visible} setVisible={setVisible} visible2={visible2} setVisible2={setVisible2} visible3={visible3} setVisible3={setVisible3} />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
      {visible === true && <Modal visible={visible} setVisible={setVisible} />}
      {visible2 === true && <Modal2 visible2={visible2} setVisible2={setVisible2} />}
      {visible3 === true && <Modal3 visible3={visible3} setVisible3={setVisible3} />}


    </Router>
  );
}

export default App;
