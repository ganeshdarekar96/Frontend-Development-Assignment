import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const CompleteSaleOrder = ({ saleOrders }) => {
  const paidSaleOrders = saleOrders.filter(order => order.paid);

  return (
    <Box mt={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Customer Name</Th>
            <Th>Price</Th>
            <Th>Paid</Th>
            <Th>Last Modified</Th>
          </Tr>
        </Thead>
        <Tbody>
          {paidSaleOrders.map((order, index) => (
            <Tr key={index}>
              <Td>{order.customerId}</Td>
              <Td>{order.customerName}</Td>
              <Td>{order.price}</Td>
              <Td>{order.paid ? 'Yes' : 'No'}</Td>
              <Td>{new Date().toLocaleString()}</Td> {/* Assuming current time as last modified */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default CompleteSaleOrder;
