import logo from './logo.svg';
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import Productpage from './page/Productpage';
import ProductDetailpage from './page/ProductDetailpage';
import Loginpage from './page/Loginpage';
import Userpage from './page/Userpage';

function App() {

  const [ authenticate, setAuthenticate ] = useState(true);

  // PrivateRoute 컴포넌트
  const PrivateRoute = () => {
      return authenticate == true? <Userpage /> : <Navigate to="/login" />
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/products/:id" element={<ProductDetailpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
