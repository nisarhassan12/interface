import {
  Box,
  Flex,
  Heading,
} from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthenticationContext } from '@utils/authenticationContext';
import { Breadcrumbs } from '@components/breadcrumbs';
import { Container } from '@components/container';
import { EditOnGithub } from '@components/editOnGithub';
import { Footer } from '@components/footer';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { PrivacyDisclaimer } from '@components/privacyDisclaimer';
import { PublicNavigationBar } from '@components/navigationBars/public';
import React from 'react';

import { graphql } from 'gatsby';

const shortcodes = { Link };
import { publicClient } from '@utils/authenticationContext';


const BlogLayout = ({ data: { mdx } }) => {
  const featuredImage = mdx.frontmatter.featuredImage;
  return (
    <Flex
      minHeight="100vh"
      direction="column"
    >
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
                      <div>
                        <Flex
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Heading>
                            {mdx.frontmatter.title}
                          </Heading>
                          <EditOnGithub path={mdx.frontmatter.slug} />
                        </Flex>
                        <Box
                          borderWidth="1px"
                          rounded="lg"
                          overflow="hidden"
                        >
                          {
                            featuredImage ?
                              <Img fluid={
                                featuredImage.childImageSharp.fluid
                              } />
                              : null
                          }

                        </Box>
                        <MDXProvider components={shortcodes}>
                          <MDXRenderer>{mdx.body}</MDXRenderer>
                        </MDXProvider>
                      </div>
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
                          {mdx.frontmatter.title}
                        </Heading>
                        <EditOnGithub path={mdx.frontmatter.slug} />
                      </Flex>
                      <Box
                        borderWidth="1px"
                        rounded="lg"
                        overflow="hidden"
                      >
                        {featuredImage ?
                          <Img fluid={
                            featuredImage.childImageSharp.fluid
                          } />
                          : null}

                      </Box>
                      <MDXProvider components={shortcodes}>
                        <MDXRenderer>{mdx.body}</MDXRenderer>
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

export default BlogLayout;


export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        slug
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
