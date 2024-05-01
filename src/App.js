import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Login from './Components/Login';
import Register from './Components/Signup';
import NotFound from './Components/NotFound';
import { AddProducts } from './Components/AddProducts';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/add-products" element={<AddProducts />} />
          <Route path="/update-products" element={<UpdateProduct />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
