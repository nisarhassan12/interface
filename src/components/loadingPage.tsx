import { Flex, Spinner, Text } from '@chakra-ui/core';
import React from 'react';

export const LoadingPage = () => (
  <Flex alignItems="center" minHeight="100vh">
    <Flex justifyContent="center" width="100%">
      <Flex flexDirection="column" alignItems="center" justifyContent="center">
        <Text>Loading</Text>
        <Spinner
          thickness="4px"
          speed="1s"
          emptyColor="gray.200"
          color="cyan.500"
          size="xl"
        />
      </Flex>
    </Flex>
  </Flex>
);
