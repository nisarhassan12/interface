import {
  Box,
  Divider,
  Flex,
  Heading,
} from '@chakra-ui/core';
import React, { ReactChildren } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  AuthenticationContext
} from '@neonlaw/shared-ui/src/utils/authenticationContext';
import { Breadcrumbs } from '@neonlaw/shared-ui/src/components/breadcrumbs';
import { Container } from '@neonlaw/shared-ui/src/components/container';
import { EditOnGithub } from '@neonlaw/shared-ui/src/components/editOnGithub';
import { Footer } from '@neonlaw/shared-ui/src/components/footer';
import { Image } from '../components/image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  PrivacyDisclaimer
}
  from '@neonlaw/shared-ui/src/components/privacyDisclaimer';
import {
  PublicNavigationBar
} from '@neonlaw/shared-ui/src/components/navigationBars/public';
import { Seo } from '../components/seo';
import { ShareButtons } from '@neonlaw/shared-ui/src/components/shareButtons';
import { graphql } from 'gatsby';
import {
  publicClient
} from '@neonlaw/shared-ui/src/utils/authenticationContext';
import { useSiteMetadata } from '../components/hooks';

const MdxLayout: React.FC<{
  data: {
    mdx: {
      body: string,
      frontmatter: {
        title: string,
        featuredImage?: any,
        slug: string,
        description?: string,
      }
    }
  },
  chlidren: ReactChildren
}> = ({ data }) => {
  const { body, frontmatter } = data.mdx;
  const { title, slug, featuredImage, description } = frontmatter;
  const { siteUrl } = useSiteMetadata();

  return (
    <Flex
      minHeight="100vh"
      direction="column"
    >
      <Seo title={title} image={featuredImage} description={description} />
      <AuthenticationContext.Consumer>
        {({ isLoading, apolloClient }) => {
          return (
            <ApolloProvider client={isLoading ? publicClient : apolloClient}>
              <>
                <PublicNavigationBar />
                <Box
                  flex={1}
                  padding="8em 0 4em 0"
                >
                  <Container>
                    <Breadcrumbs />
                    <Heading textAlign="center">
                      {title}
                    </Heading>
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
                    <MDXRenderer>{body}</MDXRenderer>
                    <Divider margin="1em 0" />
                    <Flex width="100%" justifyContent="space-between">
                      <ShareButtons slug={slug} siteUrl={siteUrl} />
                      <EditOnGithub app="neon-law" path={slug} />
                    </Flex>
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
        description
      }
    }
  }
`;
