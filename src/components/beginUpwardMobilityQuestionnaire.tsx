import { Heading, Text } from '@chakra-ui/core';
import { Button } from '@components/button';
import React from 'react';
import { Seo } from '@components/seo';
import { decisionTree } from '@components/upwardMobilityQuestions';
import { navigate } from 'gatsby';

export const BeginUpwardMobilityQuestionnaire = () => {
  const basePath = 'upward-mobility';

  return (
    <>
      <Seo title="Upward Mobility Questionnaire" />

      <Heading textAlign="center">Upward Mobility Questionnaire</Heading>

      <Text margin="2em 0">
        Thanks for expressing your interest in Neon Law and our commitment
        to Upward Mobility. Please note that taking this questionnaire does
        not constitute an attorney-client relationship. An attorney-client
        relationship only exists if you have a signed retainer with our
        firm. Please contact us if you are interested in attaining our
        services.
      </Text>

      <Button
        onClick={() => { navigate(`${basePath}/${decisionTree['begin']}`); }}>
        Begin Questionnaire
      </Button>
    </>
  );
};
