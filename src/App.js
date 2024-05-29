import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Home";
import Login from './Components/Login';
import Register from './Components/Signup';
import NotFound from './Components/NotFound';
import { AddProducts } from './Components/AddProducts';
import UpdateProduct from './Components/UpdateProduct';
import AddLocation from './Components/AddLocation';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/add-products" element={<AddProducts />} />
          <Route path="/update-products" element={<UpdateProduct />} />
          <Route path="/add-location" element={<AddLocation />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
