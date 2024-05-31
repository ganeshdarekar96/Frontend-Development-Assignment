import React, { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UpdateSaleOrderFormModal from './UpdateSaleOrderFormModal';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = (newSaleOrder) => {
    console.log('Saved sale order:', newSaleOrder);
    // Implement the save logic here, such as making an API call to save the new sale order
  };

  return (
    <Router>
      <Button onClick={openModal} colorScheme="teal">
        Create Sale Order
      </Button>
      <UpdateSaleOrderFormModal isOpen={isModalOpen} onClose={closeModal} onSave={handleSave} />

      {/* Define routes */}
      <Routes>
        <Route path="/submit" element={<div>Order Submitted Successfully</div>} />
      </Routes>
    </Router>
  );
};

export default App;
