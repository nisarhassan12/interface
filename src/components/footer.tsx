/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import {
  Box,
  Flex,
  Heading,
  Text,
  useColorMode,
} from '@chakra-ui/core';
import {
  FaFacebookF, FaLinkedinIn, FaMailchimp, FaTwitter
} from 'react-icons/fa';
import { LanguageDropdown } from '@components/languageDropdown';
import { Link } from 'gatsby';
import React from 'react';

export const Footer = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = { dark: 'white', light: 'black' };
  const bg = { dark: 'black', light: 'gray.300' };
  const lighterBg = { dark: 'gray.700', light: 'gray.200' };

  return (
    <Box
      bg={lighterBg[colorMode]}
      color={color[colorMode]}
      width="100%"
      textAlign="left"
      as="footer"
      fontSize="sm"
    >
      <Heading
        as="div"
        size="md"
        textAlign="center"
        fontWeight="medium"
        padding="1em">
        The Upward Mobility Law Firm
      </Heading>
      <Text padding="1em" maxWidth="1024px" margin="0 auto" textAlign="center">
        All content presented herein is for informational purposes only.
        Nothing should be construed as legal advice. Transmission and receipt
        of this information is not intended to create and does not
        constitute, an attorney-client relationship with lawyers on this
        platform. There is no expectation of attorney-client privilege or
        confidentiality of anything you may communicate to us in this forum.
        Do not act upon any information presented without seeking
        professional counsel.
      </Text>
      <Flex
        direction={['column', 'column', 'row']}
        padding="2em 1em"
        bg={bg[colorMode]}
        justifyContent="space-between"
      >
        <Flex direction="column">
          <Box display={['block', 'block', 'none']}>
            <a
              href="https://www.twitter.com/neonlaw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="@Neon Law on Twitter"
            >
              <FaTwitter style={{ display: 'inline' }} />
            </a>
            {' '}
            <a
              href="https://www.facebook.com/neonlaw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Neon Law Facebook page"
            >
              <FaFacebookF style={{ display: 'inline' }} />
            </a>
            {' '}
            <a
              href="https://www.linkedin.com/company/neon-law"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Neon Law LinkedIn page"
            >
              <FaLinkedinIn style={{ display: 'inline' }} />
            </a>
            {' '}
            <a
              href="https://mailchi.mp/f364242f585f/neonlaw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Neon Law Monthly - an Email Newsletter"
            >
              <FaMailchimp style={{ display: 'inline' }} />
            </a>
          </Box>
          <Box as={Link} to="/about-us">
            About Us
          </Box>
          <Box as={Link} to="/pro-bono">
            Pro Bono
          </Box>
          <a href="https://neonlaw.zendesk.com/"
            target="_blank"
            rel="noopener noreferrer">
            Support
          </a>
          <Box display={['none', 'none', 'block']}>
            <Link to="/">
              <Text>
                Copyright &copy; {new Date().getFullYear()} Shook Law PLLC
              </Text>
            </Link>
          </Box>
        </Flex>
        <Flex direction="column">
          <Box as={Link} to="/practice-areas">
            Practice Areas
          </Box>
          <Box as={Link} to="/privacy-policy">
            Privacy Policy
          </Box>
          <Box as={Link} to="/terms-of-service">
            Terms of Service
          </Box>
        </Flex>
        <Flex direction="column">
          <Box display={['none', 'none', 'block']}>
            <a
              href="https://www.twitter.com/neonlaw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="@Neon Law on Twitter"
            >
              <FaTwitter style={{ display: 'inline' }} />
            </a>
            {' '}
            <a
              href="https://www.facebook.com/neonlaw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Neon Law Facebook page"
            >
              <FaFacebookF style={{ display: 'inline' }} />
            </a>
            {' '}
            <a
              href="https://www.linkedin.com/company/neon-law"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Neon Law LinkedIn page"
            >
              <FaLinkedinIn style={{ display: 'inline' }} />
            </a>
            {' '}
            <a
              href="https://mailchi.mp/f364242f585f/neonlaw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Neon Law Monthly - an Email Newsletter"
            >
              <FaMailchimp style={{ display: 'inline' }} />
            </a>
          </Box>
          <Text onClick={toggleColorMode} cursor="pointer">
            Switch to {colorMode === 'dark' ? 'Light' : 'Dark'} Mode
          </Text>
          <LanguageDropdown />
          <Box display={['block', 'block', 'none']}>
            <Box as={Link} to="/">
              Copyright &copy; {new Date().getFullYear()} Shook Law PLLC
            </Box>
          </Box>
        </Flex>
        <Box display={['none', 'none', 'flex']} />
      </Flex>
    </Box>
  );
};
