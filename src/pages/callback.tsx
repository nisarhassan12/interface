import { AuthenticationContext } from '@utils/authenticationContext';
import { LoadingPage } from '@components/loadingPage';
import React from 'react';
import { navigate } from 'gatsby';

const Callback = () => {
  return (
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
  );
};

export default Callback;
