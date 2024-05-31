import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/login';
import SaleOrderManagementPage from './Components/SaleOrderManagementPage';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [saleOrders, setSaleOrders] = useState([]);

  const handleSaveSaleOrder = (newSaleOrder) => {
    setSaleOrders([...saleOrders, newSaleOrder]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/sale-order-management" element={isAuthenticated ? <SaleOrderManagementPage saleOrders={saleOrders} handleSaveSaleOrder={handleSaveSaleOrder} /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
