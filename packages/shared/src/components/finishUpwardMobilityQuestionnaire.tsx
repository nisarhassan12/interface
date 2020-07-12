import { Heading, List, ListItem, Text } from '@chakra-ui/core';
import React from 'react';
import { questions } from '../components/upwardMobilityQuestions';
import { useIntl } from 'gatsby-plugin-intl';

export const FinishUpwardMobilityQuestionnaire = () => {
  const intl = useIntl();
  const savedAnswers: any = JSON.parse(
    localStorage.getItem('upwardMobility.answers') as any || {}
  );
  const answeredQuestionIds: string[] = Object.keys(savedAnswers);

  const answers = questions.reduce((accumulator, question) => {
    if (answeredQuestionIds.includes(question.id)) {
      const answer = savedAnswers[question.id];
      const prompt = question.prompt;

      accumulator.push({ answer, prompt });
      return accumulator;
    }

    return accumulator;
  }, [] as any[]);

  return (
    <>
      <Heading textAlign="center">
        {intl.formatMessage({ id: 'finishUpwardMQ.heading' })}
      </Heading>

      <Text margin="2em 0">
        {intl.formatMessage({ id: 'finishUpwardMQ.text' })}
      </Text>

      <List marginLeft="2em">
        {answers.map((question, i) => (
          <ListItem key={i} margin="2em 0">
            <Text>
              {question.prompt}
            </Text>
            <Text marginLeft="2em">
              {question.answer}
            </Text>
          </ListItem>
        ))}
      </List>
    </>
  );
};
