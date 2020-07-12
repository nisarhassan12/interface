import {
  Box,
  Button,
  Heading,
  useDisclosure,
} from '@chakra-ui/core';
import {
  CreateFlashcardModal
} from 'neon-law-shared/src/components/modals/createFlashcardModal';
import {
  FlashcardTable
} from 'neon-law-shared/src/components/tables/flashcardTable';
import { PortalLayout } from 'neon-law-shared/src/layouts/portalLayout';
import React from 'react';

const AdminFlashcards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <PortalLayout>
      <Box>
        <Heading>
          Flashcards
        </Heading>

        <Button onClick={onOpen}>Create Flashcard</Button>

        <CreateFlashcardModal isOpen={isOpen} onClose={onClose} />

        <FlashcardTable />
      </Box>
    </PortalLayout>
  );
};

export default AdminFlashcards;
