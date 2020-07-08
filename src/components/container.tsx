import { Box } from '@chakra-ui/core';
import React from 'react';

export const Container = ({ children }) => (
  <Box className="row" margin="auto" width={['95%', '95%', '90%']}>
    {children}
  </Box>
);
