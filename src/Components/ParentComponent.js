// ParentComponent.js
import React, { useState } from 'react';
import SaleOrderManagementPage from './SaleOrderManagementPage';
import ActiveOrdersTable from './ActiveOrdersTable';

const ParentComponent = () => {
  const [saleOrders, setSaleOrders] = useState([saleOrders]); // Initialize with your sale order data

  const handleUpdateSaleOrder = (updatedOrder) => {
    // Update the sale order data
    const updatedOrders = saleOrders.map(order => {
      if (order.id === updatedOrder.id) {
        return updatedOrder;
      }
      return order;
    });
    setSaleOrders(updatedOrders);
  };

  return (
    <>
      <SaleOrderManagementPage saleOrders={saleOrders} handleSaveSaleOrder={handleUpdateSaleOrder} />
      <ActiveOrdersTable orders={saleOrders} />
    </>
  );
};

export default ParentComponent;
