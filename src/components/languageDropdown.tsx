import {
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from '@chakra-ui/core';
import React from 'react';

export const LanguageDropdown = () => {
  const { colorMode } = useColorMode();
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };
  const evenLighterBg = { dark: 'gray.600', light: 'gray.100' };

  return (
    <>
      <Box display={['none', 'none', 'flex']}>
        <Menu>
          <MenuButton>
            Language{' '}<Icon name="chevron-up" />
          </MenuButton>
          <MenuList
            placement="top-end"
            bg={lighterBg[colorMode]}
          >
            <MenuItem _hover={{ backgroundColor: evenLighterBg[colorMode] }}>
              English
            </MenuItem>
          </MenuList>
        </Menu>
      </Box >
      <Box
        cursor="pointer"
        width="100%"
        display={['flex', 'flex', 'none']}
        textAlign="left"
      >
        Currently viewing this site in English
      </Box>
    </>
  );
};
