import { Box, Tooltip } from '@chakra-ui/core';
import { FaPencilAlt } from 'react-icons/fa';
import React from 'react';

interface EditOnGithubInterface {
  path: string;
}

export const EditOnGithub = ({ path }: EditOnGithubInterface) => {
  const githubPath =
    `https://github.com/NeonLaw/interface/edit/development/src/pages/${path}`;

  return (
    <Tooltip
      hasArrow={true}
      label="Edit on GitHub"
      aria-label="Edit on GitHub"
    >
      <Box
        cursor="pointer"
        as={FaPencilAlt}
        onClick={() => window.open(githubPath, '_blank')}
      />
    </Tooltip >
  );
};
