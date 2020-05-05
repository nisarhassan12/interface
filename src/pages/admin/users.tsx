import { Heading, Text } from '@chakra-ui/core';
import React from 'react';
import { Table } from '@components/table';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const ALL_PEOPLE = gql`
  {
    allPeople {
      nodes {
        id
        sub
        name
        email
        role
      }
    }
  }
`;

const AdminUsers = () => {
  const { loading, error, data } = useQuery(ALL_PEOPLE);
  if (loading) return (<>Loading...</>);

  if (error) {
    return (<Text>{error}</Text>);
  }

  const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Sub',
      accessor: 'sub',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Role',
      accessor: 'role',
    },
  ];

  return (
    <>
      <Heading textAlign="center" marginBottom="20px">
        Users
      </Heading>
      <Table columns={columns} data={data.allPeople.nodes} />
    </>
  );
};

export default AdminUsers;
