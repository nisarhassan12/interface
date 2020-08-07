import {
  Box,
  Button,
  Heading,
  useDisclosure,
} from '@chakra-ui/core';
import {
  CreateFlashcardModal
} from '@neonlaw/shared-ui/src/components/modals/createFlashcardModal';
import {
  FlashcardTable
} from '@neonlaw/shared-ui/src/components/tables/flashcardTable';
import { PortalLayout } from '@neonlaw/shared-ui/src/layouts/portalLayout';
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
