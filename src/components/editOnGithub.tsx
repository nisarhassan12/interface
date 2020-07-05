import { Box, Flex } from '@chakra-ui/core';
import { FaPencilAlt } from 'react-icons/fa';
import React from 'react';

interface EditOnGithubInterface {
  path: string;
}

export const EditOnGithub = ({ path }: EditOnGithubInterface) => {
  const contentPath = path.replace(/\/.*?\//, '');

  const githubPath =
    'https://github.com/NeonLaw/interface/blob' +
    `/development/src/content/${contentPath}.mdx`;

  return (
    <Flex
      alignItems="center"
      cursor="pointer"
      as="a"
      href={githubPath}
      target="_blank"
      rel="noopener noreferrer"
      data-cy="edit-on-github"
    >
      Edit this page on GitHub
      &nbsp;
      <Box as={FaPencilAlt} />
    </Flex>
  );
};
