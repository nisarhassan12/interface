interface CreatePersonInterface {
  sub: string;
  email: string;
  role: string;
  name: string;
  client: any;
}

export interface CurrentPersonInterface {
  id: string;
  role: string;
}

export const createPerson = async (
  args: CreatePersonInterface
): Promise<CurrentPersonInterface> => {
  const { client, sub, email, role, name } = args;

  return await client.query(
    'INSERT INTO person (client, sub, email, role, name) ' +
    'VALUES ($1, $2, $3, $4, $5) RETURNING (id, role)',
    [
      client,
      sub,
      email,
      role,
      name
    ]
  );
};
