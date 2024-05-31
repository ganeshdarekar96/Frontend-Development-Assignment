// EditSaleOrderModal.js
import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';

const EditSaleOrderModal = ({ isOpen, onClose, saleOrder, onUpdate }) => {
  const [editedOrder, setEditedOrder] = useState(null);

  useEffect(() => {
    // Initialize editedOrder with the saleOrder when it changes
    setEditedOrder(saleOrder);
  }, [saleOrder]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the editedOrder state with the new value
    setEditedOrder({ ...editedOrder, [name]: value });
  };

  const handleSubmit = () => {
    console.log("submit")
    // Pass the updated order to the onUpdate function
    onUpdate(editedOrder);
    // Close the modal
    onClose();
  };

  if (!editedOrder) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Sale Order</ModalHeader>
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Customer Name</FormLabel>
            <Input type="text" name="customerName" value={editedOrder.customerName} onChange={handleChange} />
          </FormControl>
          <FormControl  mb={4}>
            <FormLabel>Customer ID</FormLabel>
            <Input type="text" name="customerId" value={editedOrder.customerId} onChange={handleChange} />
          </FormControl>
          <FormControl  mb={4}>
            <FormLabel>sku Id</FormLabel>
            <Input type="text" name="skuId" value={editedOrder.skuId} onChange={handleChange} />
          </FormControl>
          <FormControl  mb={4}>
            <FormLabel>price</FormLabel>
            <Input type="text" name="price" value={editedOrder.price} onChange={handleChange} />
          </FormControl>
          <FormControl  mb={4}>
            <FormLabel>quantity</FormLabel>
            <Input type="text" name="quantity" value={editedOrder.quantity} onChange={handleChange} />
          </FormControl>
          <FormControl  mb={4}>
            <FormLabel>paid</FormLabel>
            <Input type="text" name="paid" value={editedOrder.paid} onChange={handleChange} />
          </FormControl>
          <FormControl  mb={4}>
            <FormLabel>invoiceNo</FormLabel>
            <Input type="text" name="invoiceNo" value={editedOrder.invoiceNo} onChange={handleChange} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>invoiceDate</FormLabel>
            <Input type="number" name="invoiceDate" value={editedOrder.invoiceDate} onChange={handleChange} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>product Category</FormLabel>
            <Input type="number" name="productCategory" value={editedOrder.productCategory} onChange={handleChange} />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>product Brand</FormLabel>
            <Input type="number" name="productBrand" value={editedOrder.productBrand} onChange={handleChange} />
          </FormControl>
          {/* Add more fields as needed */}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" onClick={handleSubmit}>Update</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditSaleOrderModal;
