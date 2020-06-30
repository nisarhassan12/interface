import { CSSReset, ColorModeProvider, ThemeProvider } from '@chakra-ui/core';
import React, { ReactChildren, useEffect } from 'react';

import { AuthenticationProvider } from '@utils/authenticationContext';
import { Background } from '@components/background';
import { MDXComponents } from '@utils/mdxComponents';
import { MDXProvider } from '@mdx-js/react';
import { Seo } from '@components/seo';
import { handleFirstTab } from '../utils/accessibility';
import { theme } from '@themes/neonLaw';


export const BaseLayout: React.FC<{
  data: { mdx: { frontmatter: { title: string, featuredImage: any }; } },
  children: ReactChildren
}>
  = ({ data, children }) => {


    useEffect(() => {
      window.addEventListener('keydown', handleFirstTab);

      return (): void => {
        window.removeEventListener('keydown', handleFirstTab);
      };
    }, []);

    console.log('This is the data');
    console.log(data);

    const frontmatter = data ? (data.mdx ? data.mdx.frontmatter : null) : null;
    const image = frontmatter ?
      (frontmatter.featuredImage ?
        frontmatter.featuredImage.childImageSharp.fluid.src
        : null)
      : null;
    const title = frontmatter ? frontmatter.title : null;

    return (
      <AuthenticationProvider>
        <ThemeProvider theme={theme}>
          <CSSReset />
          <Seo title={title || undefined} image={image || undefined} />
          <ColorModeProvider>
            <MDXProvider components={MDXComponents}>
              <Background>{children}</Background>
            </MDXProvider>
          </ColorModeProvider>
        </ThemeProvider>
      </AuthenticationProvider>
    );
  };
