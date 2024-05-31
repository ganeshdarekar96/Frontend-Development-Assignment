import React, { useState } from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react';
import SaleOrderFormModal from './SaleOrderFormModal';
import CompleteSaleOrder from './CompleteSaleOrder';
import ActiveOrdersTable from './ActiveOrdersTable';

const SaleOrderManagementPage = ({ saleOrders, handleSaveSaleOrder }) => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const handleCreateModalOpen = () => setCreateModalOpen(true);
  const handleCreateModalClose = () => setCreateModalOpen(false);

  const activeOrders = saleOrders.filter(order => !order.paid || order.paid);
  const completedOrders = saleOrders.filter(order => order.paid);

  return (
    <Box p={4}>
      <Tabs>
        <TabList>
          <Tab>Active Orders</Tab>
          <Tab>Completed Orders</Tab>
          <Box mb={4} marginLeft="auto">
            <Button onClick={handleCreateModalOpen}>+ Sale Order</Button>
          </Box>
        </TabList>

        <TabPanels>
          <TabPanel>
            <ActiveOrdersTable orders={activeOrders} />
          </TabPanel>
          <TabPanel>
            <CompleteSaleOrder saleOrders={completedOrders} />
          </TabPanel>
        </TabPanels>
      </Tabs>

      <SaleOrderFormModal isOpen={isCreateModalOpen} onClose={handleCreateModalClose} onSave={handleSaveSaleOrder} />
    </Box>
  );
};

export default SaleOrderManagementPage;
