/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import {
  Box,
  useColorMode,
} from '@chakra-ui/core';
import React from 'react';

export const Footer = () => {
  const { colorMode } = useColorMode();
  const color = { dark: 'white', light: 'black' };
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };
  return (
    <Box
      bg={lighterBg[colorMode]}
      color={color[colorMode]}
      width="100%"
      textAlign="left"
      padding="2em"
      as="footer"
    >
      Law Job Resources is a collection of resources provided by Professor
      Joe Regalia at UNLV Law.
      <br />
      This site was built by&nbsp;
      <a href="https://www.neonlaw.com" target="_blank" rel="noreferrer">
        Neon Law, the Upward Mobility Law Firm
      </a>.
    </Box>
  );
};
