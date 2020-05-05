import './aestetico.css';
import 'react-datepicker/dist/react-datepicker.css';

import { theme as chakraTheme } from '@chakra-ui/core';

export const theme = Object.assign(chakraTheme, {
  fonts: {
    body: '"Aestetico",, sans-serif',
    heading: '"Aestetico", sans-serif',
    mono: 'Menlo, monospace',
  },
});

export const colors = {
  background: { dark: 'gray.800', light: 'white' },
  link: { dark: 'cyan.400', light: 'cyan.800' },
  primaryButtonBg: { dark: 'cyan.200', light: 'cyan.800' },
  primaryButtonBgOnHover: { dark: 'cyan.100', light: 'cyan.700' },
  primaryButtonColor: { dark: 'black', light: 'white' },
  text: { dark: 'white', light: 'black' },
};
