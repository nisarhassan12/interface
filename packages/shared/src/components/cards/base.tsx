import { Flex } from '@chakra-ui/core';
import React from 'react';
import { animated } from 'react-spring';
import { useFadeUp } from '../../utils/useFadeUp';

const AnimatedFlex = animated(Flex);

export const Card = ({ onClick, children, ...rest }) => {
  const fade = useFadeUp();
  return (
    <AnimatedFlex style={fade} onClick={onClick} {...rest}>
      {children}
    </AnimatedFlex>
  );
};
