import {
  Box,
  Flex,
  Heading,
} from '@chakra-ui/core';
import React, { ReactChildren } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthenticationContext } from '@utils/authenticationContext';
import { Breadcrumbs } from '@components/breadcrumbs';
import { Container } from '@components/container';
import { EditOnGithub } from '@components/editOnGithub';
import { Footer } from '@components/footer';
import { Image } from '@components/image';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { PrivacyDisclaimer } from '@components/privacyDisclaimer';
import { PublicNavigationBar } from '@components/navigationBars/public';
import { Seo } from '@components/seo';

import { graphql } from 'gatsby';

const shortcodes = { Link };
import { publicClient } from '@utils/authenticationContext';

const MdxLayout: React.FC<{
  data: {
    mdx: {
      body: string,
      frontmatter: {
        title: string,
        featuredImage?: any,
        slug: string,
      }
    }
  },
  chlidren: ReactChildren
}> = ({ data }) => {
  const { body, frontmatter } = data.mdx;
  const { title, slug, featuredImage } = frontmatter;

  return (
    <Flex
      minHeight="100vh"
      direction="column"
    >
      <Seo title={title} image={featuredImage} />
      <AuthenticationContext.Consumer>
        {({ isLoading, apolloClient }) => {
          if (isLoading) {
            return (
              <ApolloProvider client={publicClient}>
                <>
                  <PublicNavigationBar />
                  <Box
                    flex={1}
                    padding="8em 0 4em 0"
                  >
                    <Container>
                      <Breadcrumbs />
                      <Flex
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Heading>
                          {title}
                        </Heading>
                        <EditOnGithub path={slug} />
                      </Flex>
                      {featuredImage &&
                        (<Box
                          borderWidth="1px"
                          rounded="lg"
                          overflow="hidden"
                        >
                          <Image
                            src={featuredImage}
                            alt={title}
                            aspectRatio={16 / 9}
                          />
                        </Box>)
                      }
                      <MDXProvider components={shortcodes}>
                        <MDXRenderer>{body}</MDXRenderer>
                      </MDXProvider>
                    </Container>
                  </Box>
                </>
              </ApolloProvider>
            );
          }
          return (
            <ApolloProvider client={apolloClient}>
              <>
                <PublicNavigationBar />
                <Box
                  flex={1}
                  padding="8em 0 4em 0"
                >
                  <Container>
                    <Breadcrumbs />
                    <div>
                      <Flex
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Heading>
                          {title}
                        </Heading>
                        <EditOnGithub path={slug} />
                      </Flex>
                      {featuredImage &&
                        (<Box
                          borderWidth="1px"
                          rounded="lg"
                          overflow="hidden"
                        >
                          <Image
                            src={featuredImage}
                            alt={title}
                            aspectRatio={16 / 9}
                          />
                        </Box>)
                      }
                      <MDXProvider components={shortcodes}>
                        <MDXRenderer>{body}</MDXRenderer>
                      </MDXProvider>
                    </div>
                  </Container>
                </Box>
              </>
            </ApolloProvider>
          );
        }}
      </AuthenticationContext.Consumer>
      <PrivacyDisclaimer />
      <Footer />
    </Flex>
  );
};

export default MdxLayout;

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        slug
        featuredImage
      }
    }
  }
`;
