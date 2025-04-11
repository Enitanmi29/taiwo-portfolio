import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Contact from './components/Contact';
import Home from './components/Home';
import Projects from './components/Projects'
import Footer from './components/Footer';

const App = () => {
  return (
      <Router>
        <Navbar/>
        <div>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/projects' element={<Projects/>} />
          </Routes>
        </div>
        <Footer/>
      </Router>
      
  )
}

export default App