import {
  Box,
  Heading,
  Text,
} from '@chakra-ui/core';
import { LawyersLayout } from '@layouts/lawyers';
import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

const LawyersPage = () => {
  const intl = useIntl();
  return (
    <LawyersLayout>
      <Box>
        <Heading>
          {intl.formatMessage({ id: 'pages_lawyers.heading' })}
        </Heading>

        <Text>
          {intl.formatMessage({ id: 'pages_lawyers.text' })}
        </Text>
      </Box>
    </LawyersLayout>
  );
};

export default LawyersPage;
