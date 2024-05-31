import React,{ useState } from 'react';
import { Button,Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import EditSaleOrderModal from './EditSaleOrderModal';

const ActiveOrdersTable = ({ orders }) => {

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleEditModalOpen = (order) => {
    setSelectedOrder(order);
    setEditModalOpen(true);
  };

  const handleEditModalClose = () => {
    setSelectedOrder(null);
    setEditModalOpen(false);
  };
  return (
    <Box mt={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer Name</Th>
            <Th>Price</Th>
            <Th>Last Modified</Th>
            <Th>Edit</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order, index) => (
            <Tr key={index}>
              <Td>{order.customerId}</Td>
              <Td>{order.customerName}</Td>
              <Td>{order.price}</Td>
              <Td>{new Date().toLocaleString()}</Td> {/* Assuming current time as last modified */}
              <Td><Button onClick={() => handleEditModalOpen(order)}>...</Button></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <EditSaleOrderModal isOpen={isEditModalOpen} onClose={handleEditModalClose} saleOrder={selectedOrder} onUpdate={(updatedOrder) => {
        // Implement the logic to update the sale order data here
        console.log("Updated Order:", updatedOrder);
        handleEditModalClose();
      }} />
    </Box>
  );
};

export default ActiveOrdersTable;
