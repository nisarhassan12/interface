import {
  Box,
  Heading,
} from '@chakra-ui/core';
import { LawyersLayout } from '@layouts/lawyers';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const LawyersFirmSettings = () => {
  const intl = useIntl();
  return (
    <LawyersLayout>
      <Box>
        <Heading>
          {intl.formatMessage({ id: 'pages_lawyers.settings' })}
        </Heading>
      </Box>
    </LawyersLayout>
  );
};

export default LawyersFirmSettings;
