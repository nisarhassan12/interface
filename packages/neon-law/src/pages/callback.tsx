import { AuthenticationContext } from 'neon-law-shared/src/utils/authenticationContext';
import { LoadingPage } from 'neon-law-shared/src/components/loadingPage';
import { PublicLayout } from 'neon-law-shared/src/layouts/publicLayout';
import React from 'react';
import { navigate } from 'gatsby';

const Callback = () => {
  return (
    <PublicLayout>
      <AuthenticationContext.Consumer>
        {({ isLoading, isAuthenticated, logout }) => {
          if (isLoading) {
            return <LoadingPage />;
          }
          if (isAuthenticated) {
            navigate('/portal');
            return null;
          }

          logout();
          return null;
        }}
      </AuthenticationContext.Consumer>
    </PublicLayout>
  );
};

export default Callback;
