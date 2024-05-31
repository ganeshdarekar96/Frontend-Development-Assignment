// UpdateSaleOrderFormModal.js
import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import {ActiveSaleOrdersTable} from './ActiveSaleOrdersTable';
import { useParams } from 'react-router-dom';
const UpdateSaleOrderFormModal = () => {
  const {id} =useParams()
  console.log(id)
  useEffect(()=>{
    axios.get('http://localhost:3000/edit/'+{id})
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

  },[])
  console.log(id)
  const [isOpen, setIsOpen] = useState(true);
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
    // Handle the form submission
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setPaid(checked);
    } else {
      switch (id) {
        case 'customerName':
          setCustomerName(value);
          break;
        case 'customerId':
          setCustomerId(value);
          break;
        case 'skuId':
          setSkuId(value);
          break;
        case 'price':
          setPrice(value);
          break;
        case 'quantity':
          setQuantity(value);
          break;
        case 'invoiceNo':
          setInvoiceNo(value);
          break;
        case 'invoiceDate':
          setInvoiceDate(value);
          break;
        case 'productCategory':
          setProductCategory(value);
          break;
        case 'productBrand':
          setProductBrand(value);
          break;
        default:
          break;
      }
    }
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-content">
        <div className="modal-header">
          
          <h2>Edit Active Sale Order</h2>
        </div>
        <div className="modal-body">
          <label htmlFor="customerName">Customer Name</label>
          <input type="text" id="customerName" value={customerName} onChange={handleChange} />

          <label htmlFor="customerId">Customer ID</label>
          <input type="text" id="customerId" value={customerId} onChange={handleChange} />

          <label htmlFor="skuId">SKU ID</label>
          <input type="text" id="skuId" value={skuId} onChange={handleChange} />

          <label htmlFor="price">Price</label>
          <input type="number" id="price" value={price} onChange={handleChange} />

          <label htmlFor="quantity">Quantity</label>
          <input type="number" id="quantity" value={quantity} onChange={handleChange} />

          <label htmlFor="paid">Paid</label>
          <input type="checkbox" id="paid" checked={paid} onChange={handleChange} />

          <label htmlFor="invoiceNo">Invoice No</label>
          <input type="text" id="invoiceNo" value={invoiceNo} onChange={handleChange} />

          <label htmlFor="invoiceDate">Invoice Date</label>
          <input type="date" id="invoiceDate" value={invoiceDate} onChange={handleChange} />

          <label htmlFor="productCategory">Product Category</label>
          <input type="text" id="productCategory" value={productCategory} onChange={handleChange} />

          <label htmlFor="productBrand">Product Brand</label>
          <input type="text" id="productBrand" value={productBrand} onChange={handleChange} />
        </div>
        <div className="modal-footer">
          <button className="btn-submit" onClick={handleSubmit}>Submit</button>
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateSaleOrderFormModal;
