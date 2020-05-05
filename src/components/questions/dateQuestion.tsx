import { Box, Text } from '@chakra-ui/core';
import React, { useState } from 'react';

import { DatePicker } from 'react-datepicker';

interface DateInterface {
  prompt: string;
}

const currentTime = new Date();

export const DateQuestion = ({ prompt }: DateInterface) => {
  const [startDate, setStartDate] = useState(currentTime);

  return (
    <Box>
      <Text>{prompt}</Text>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
      />
    </Box>
  );
};
