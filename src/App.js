import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Courses from './Courses';
import Contact from './Contact';

function App() {
  return (
    <>
    <BrowserRouter>
   
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact/>} />
        
    </Routes>
</BrowserRouter>
    </>
  );
}

export default App;
