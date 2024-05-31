import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import {Flex,Box,Button, Input, FormControl, FormLabel, Heading, VStack, Text, useColorMode, useColorModeValue } from '@chakra-ui/react';

const Login = ({ setIsAuthenticated }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();
  const buttonText = useColorModeValue('Dark', 'Light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('chakra-ui-color-mode');
    if (savedTheme) {
      if (savedTheme !== colorMode) {
        toggleColorMode();
      }
    }
  }, [colorMode, toggleColorMode]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const dummyUserId = 'admin';
    const dummyPassword = 'pass123';

    if (userId === dummyUserId && password === dummyPassword) {
      setError('');
      setIsAuthenticated(true);
      navigate('/sale-order-management');
    } else {
      setError('Invalid user ID or password');
    }
  };

  const handleToggleTheme = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light';
    toggleColorMode();
    localStorage.setItem('chakra-ui-color-mode', newColorMode);
  };

  return (
  <Flex height="100vh" alignItems="center" justifyContent="center">
  <Box border="1px solid" borderColor="gray.200" p={8} rounded="md" width="400px">

    <VStack spacing={4} align="center">
      <Heading>Login</Heading>
      <FormControl id="userId">
        <FormLabel>User ID</FormLabel>
        <Input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      {error && <Text color="red.500">{error}</Text>}
      <Button onClick={handleSubmit} colorScheme="teal">Login</Button>
      <Button onClick={handleToggleTheme}>
        Toggle {buttonText} Mode
      </Button>
    </VStack>
    </Box>
    </Flex>
  );
};

export default Login;
