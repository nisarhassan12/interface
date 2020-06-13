import { Box, Button, Textarea } from '@chakra-ui/core';
import React, { useState } from 'react';

interface FlashcardProps {
  answer: string;
  prompt: string;
}

export const Flashcard = ({ prompt, answer }: FlashcardProps) => {
  const [showPrompt, toggleShowPrompt] = useState(true);
  const [userAnswer, changeUserAnswer] = useState('');

  return (
    <Box
      cursor="pointer"
      border="1px"
      padding="2em"
    >
      {showPrompt ?
        (<>
          {prompt}
          <Textarea
            onChange={(event) => { changeUserAnswer(event.target.value); }}
          />
          <Button
            onClick={() => { toggleShowPrompt(!showPrompt); }}
          >
            Show Answer
          </Button>
        </>) :
        (<>
          {answer}
          <Box>
            Your Answer:&nbsp;
            {userAnswer}
          </Box>
          <Button
            onClick={() => { toggleShowPrompt(!showPrompt); }}
          >
            Show Prompt
          </Button>
        </>
        )}
    </Box>
  );
};
