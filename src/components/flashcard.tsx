/* eslint-disable */
// @ts-nocheck
/* eslint-enable */
import { Box, Button, Text, Textarea, useColorMode } from '@chakra-ui/core';
import React, { useState } from 'react';
import ReactDiffViewer from 'react-diff-viewer';
import { useAllFlashcardsQuery } from '@utils/api';

interface FlashcardProps {
  topic: string;
}

export const Flashcard = ({ topic }: FlashcardProps) => {
  const { colorMode } = useColorMode();
  const { data } = useAllFlashcardsQuery({ variables: { topic } });
  const flashcard = data?.allFlashcards?.nodes[0] ||
    { answer: undefined, prompt: undefined };

  const { prompt, answer } = flashcard;
  const [showPrompt, toggleShowPrompt] = useState(true);
  const [userAnswer, changeUserAnswer] = useState('');

  return (
    <Box
      cursor="pointer"
      border="1px"
      borderRadius="1em"
      padding="2em"
    >
      {showPrompt ?
        (<>
          <Text fontSize="1.2em" marginBottom="1em">
            {prompt}
          </Text>
          <Textarea
            value={userAnswer}
            onChange={(event) => { changeUserAnswer(event.target.value); }}
          />
          <Button
            marginTop="1em"
            onClick={() => { toggleShowPrompt(!showPrompt); }}
          >
            Show Answer
          </Button>
        </>) :
        (<>
          <Text fontSize="1.2em" marginBottom="1em">
            {prompt}
          </Text>
          <ReactDiffViewer
            oldValue={answer}
            newValue={userAnswer}
            hideLineNumbers={true}
            showDiffOnly={false}
            splitView={true}
            useDarkTheme={colorMode === 'dark'}
          />
          <Button
            marginTop="1em"
            onClick={() => { toggleShowPrompt(!showPrompt); }}
          >
            Show Prompt
          </Button>
        </>
        )}
    </Box>
  );
};
