import { Heading, Text } from '@chakra-ui/core';
import React from 'react';
import { Table } from '@components/table';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ALL_LAW_FIRMS = gql`
  {
    allLawFirms {
      nodes {
        id
        name
        clioIdentifier
        address
        website
      }
    }
  }
`;

const AdminLawFirms = () => {
  const { loading, error, data } = useQuery(ALL_LAW_FIRMS);
  if (loading) return (<>Loading...</>);

  if (error) {
    return (<Text>{JSON.stringify(error)}</Text>);
  }

  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Clio Identifier',
      accessor: 'clioIdentifier',
    },
    {
      Header: 'Address',
      accessor: 'address',
    },
    {
      Header: 'Website',
      accessor: 'website',
    },
  ];

  return (
    <>
      <Heading textAlign="center" marginBottom="20px">
        Users
      </Heading>
      <Table columns={columns} data={data.allLawFirms.nodes} />
    </>
  );
};

export default AdminLawFirms;
