import React, { useState, useEffect } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input, Checkbox } from '@chakra-ui/react';

const SaleOrderFormModal = ({ isOpen, onClose, onSave }) => {
  const [customerName, setCustomerName] = useState('');
  const [customerId, setCustomerId] = useState('');
  const [skuId, setSkuId] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [paid, setPaid] = useState(false);
  const [invoiceNo, setInvoiceNo] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productBrand, setProductBrand] = useState('');

  const handleSubmit = () => {
    const newSaleOrder = {
      customerName,
      customerId,
      skuId,
      price,
      quantity,
      paid,
      invoiceNo,
      invoiceDate,
      productCategory,
      productBrand,
    };

    onSave(newSaleOrder);
    onClose();
  };

  const resetForm = () => {
    setCustomerName('');
    setCustomerId('');
    setSkuId('');
    setPrice('');
    setQuantity('');
    setPaid(false);
    setInvoiceNo('');
    setInvoiceDate('');
    setProductCategory('');
    setProductBrand('');
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Sale Order</ModalHeader>
        <ModalBody>
          <FormControl id="customerName" mb={4}>
            <FormLabel>Customer Name</FormLabel>
            <Input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
          </FormControl>
          <FormControl id="customerId" mb={4}>
            <FormLabel>Customer ID</FormLabel>
            <Input type="text" value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
          </FormControl>
          <FormControl id="skuId" mb={4}>
            <FormLabel>SKU ID</FormLabel>
            <Input type="text" value={skuId} onChange={(e) => setSkuId(e.target.value)} />
          </FormControl>
          <FormControl id="price" mb={4}>
            <FormLabel>Price</FormLabel>
            <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </FormControl>
          <FormControl id="quantity" mb={4}>
            <FormLabel>Quantity</FormLabel>
            <Input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </FormControl>
          <FormControl id="paid" mb={4}>
            <Checkbox isChecked={paid} onChange={(e) => setPaid(e.target.checked)}>Paid</Checkbox>
          </FormControl>
          <FormControl id="invoiceNo" mb={4}>
            <FormLabel>Invoice No</FormLabel>
            <Input type="text" value={invoiceNo} onChange={(e) => setInvoiceNo(e.target.value)} />
          </FormControl>
          <FormControl id="invoiceDate" mb={4}>
            <FormLabel>Invoice Date</FormLabel>
            <Input type="date" value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} />
          </FormControl>
          <FormControl id="productCategory" mb={4}>
            <FormLabel>Product Category</FormLabel>
            <Input type="text" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
          </FormControl>
          <FormControl id="productBrand" mb={4}>
            <FormLabel>Product Brand</FormLabel>
            <Input type="text" value={productBrand} onChange={(e) => setProductBrand(e.target.value)} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SaleOrderFormModal;
