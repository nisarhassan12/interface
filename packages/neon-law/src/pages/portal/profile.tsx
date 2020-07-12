import { Box, Heading } from '@chakra-ui/core';
import { PortalLayout } from 'neon-law-shared/src/layouts/portalLayout';
import { PortalProfileCard } from 'neon-law-shared/src/components/cards/portalProfileCard';
import { PortalProfileForm } from 'neon-law-shared/src/forms/portalProfileForm';
import React from 'react';

const PortalProfilePage = () => {
  return (
    <PortalLayout>
      <Box margin="1rem 0">
        <Heading textAlign="center">Your Profile</Heading>
      </Box>
      <Box margin="1rem 0">
        <PortalProfileCard />
      </Box>
      <Box margin="1rem 0">
        <PortalProfileForm />
      </Box>
    </PortalLayout>
  );
};

export default PortalProfilePage;
