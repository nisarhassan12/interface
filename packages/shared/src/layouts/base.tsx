import { CSSReset, ColorModeProvider, ThemeProvider } from '@chakra-ui/core';
import React, { ReactChildren, useEffect } from 'react';

import { AuthenticationProvider } from '@utils/authenticationContext';
import { Background } from '@components/background';
import { MDXComponents } from '@utils/mdxComponents';
import { MDXProvider } from '@mdx-js/react';
import { handleFirstTab } from '../utils/accessibility';
import { theme } from '@themes/neonLaw';

export const BaseLayout: React.FC<{
  children: ReactChildren
}> = ({ children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleFirstTab);

    return (): void => {
      window.removeEventListener('keydown', handleFirstTab);
    };
  }, []);

  return (
    <AuthenticationProvider>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <ColorModeProvider>
          <MDXProvider components={MDXComponents}>
            <Background>{children}</Background>
          </MDXProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </AuthenticationProvider>
  );
};
