import {
  Box,
  Flex,
} from '@chakra-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import { AuthenticationContext } from '@utils/authenticationContext';
import { Container } from '@components/container';
import { Footer } from '@components/footer';
import { LawyersNavigationBar } from '@components/navigationBars/lawyers';
import { LawyersSideNav } from '@components/sideNavigation/lawyers';
import { LoadingPage } from '@components/loadingPage';
import React from 'react';
import { Redirect } from '@reach/router';

export const LawyersLayout: React.FC = ({ children }) => {
  return (
    <AuthenticationContext.Consumer>
      {({ isLoading, isAuthenticated, apolloClient }) => {
        if (isLoading) {
          return <LoadingPage />;
        }
        if (!isAuthenticated) {
          return <Redirect noThrow={true} to="/" />;
        }
        return (
          <ApolloProvider client={apolloClient}>
            <>
              <LawyersNavigationBar />
              <Flex
                flex="1"
                direction="row"
              >
                <LawyersSideNav
                  display={['none', 'none', 'block']}
                  maxWidth="10em"
                  width="full"
                />
                <Flex
                  minHeight="100vh"
                  flex="1"
                  width="100%"
                  direction="column"
                  marginLeft={['none', 'none', '10em']}
                >
                  <Box
                    flex="1"
                    paddingTop="6em"
                  >
                    <Container>
                      {children}
                    </Container>
                  </Box>
                  <Footer />
                </Flex>
              </Flex>
            </>
          </ApolloProvider>
        );
      }}
    </AuthenticationContext.Consumer>
  );
};
