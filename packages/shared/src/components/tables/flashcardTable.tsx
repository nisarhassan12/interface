import React from 'react';
import { Table } from './base';
import { useAllFlashcardsQuery } from '../../utils/api';

export const FlashcardTable = () => {
  const { loading, data, error } = useAllFlashcardsQuery();

  if (loading) {
    return (<h1>Loading</h1>);
  }
  if (error) {
    return (<h1>{error}</h1>);
  }

  const columns = [
    {
      accessor: 'id',
      Header: 'ID',
    },
    {
      accessor: 'topic',
      Header: 'Topic',
    },
    {
      accessor: 'prompt',
      Header: 'Prompt',
    },
  ];
  const nodes = data?.allFlashcards?.nodes;

  if (nodes) {
    return (
      <Table columns={columns} data={nodes} />
    );
  }
};
