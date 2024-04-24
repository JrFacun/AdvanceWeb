import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from './Components/Login';
import Register from './Components/Signup';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
