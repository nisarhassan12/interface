import { Box, Flex } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';
import { Button } from '@components/button';
import { Link } from '@components/link';
import { useIntl } from 'gatsby-plugin-intl';

export const PrivacyDisclaimer = () => {
  const intl = useIntl();
  const [disclaimerAcceptance, accept] = useState(false);
  useEffect(() => {
    accept(!!localStorage.getItem('acceptPrivacyDisclaimer'));
  }, []);

  if (disclaimerAcceptance) {
    return null;
  }

  const acceptPrivacyDisclaimer = () => {
    localStorage.setItem('acceptPrivacyDisclaimer', 'true');
    accept(true);
  };
  

  return (
    <Box
      bottom="0"
      position="fixed"
      padding="1em"
      left="0"
      right="0"
      zIndex={999}
      backgroundColor="gray.200"
      color="black"
    >
      <Flex
        direction={['column', 'column', 'row']}
        size="100%"
        px="6"
        align="center"
      >
        <Box marginRight="1em">
          {intl.formatMessage({ id: 'privacyDisclaimer.text1' })}
          <Box as="span" textDecoration="underline">
            <Link to="/privacy-policy"> {intl.formatMessage({ id: 'footer.privacy_Policy' })}</Link>
          </Box>.
          {intl.formatMessage({ id: 'privacyDisclaimer.text2' })}
        </Box>

        <Box>
          <Button
            color="black"
            onClick={acceptPrivacyDisclaimer}
          >
            {intl.formatMessage({ id: 'privacyDisclaimer.accept' })}
          </Button>
        </Box>
        <Box width="250px" display={['none', 'none', 'block']} />
      </Flex>
    </Box>
  );
};
