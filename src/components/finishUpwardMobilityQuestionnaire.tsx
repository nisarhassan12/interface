import { Heading, List, ListItem, Text } from '@chakra-ui/core';
import React from 'react';
import { Seo } from '@components/seo';
import { questions } from '@components/upwardMobilityQuestions';

export const FinishUpwardMobilityQuestionnaire = () => {
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
      <Seo title="Upward Mobility Questionnaire" />

      <Heading textAlign="center">
        Thank You for Taking the Upward Mobility Questionnaire
      </Heading>

      <Text margin="2em 0">
        You have completed the questionnaire. Your answers are:
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
