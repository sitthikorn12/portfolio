import React from 'react';
// 1. Import เครื่องมือสำหรับทำ Router
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Services from './components/services/Services'
import './App.css';

const App = () => {
  return (
    // 2. เอา BrowserRouter ครอบทั้งแอป
    <BrowserRouter>
      {/* Header จะแสดงอยู่ทุกหน้า ไม่หายไปไหน */}
      <Header /> 

      <main className="main">
        {/* 3. ใช้ Routes เพื่อสลับหน้าตาม URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;