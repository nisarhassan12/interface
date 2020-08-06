import { PostGraphileOptions } from 'postgraphile';
import { findOrCreatePerson } from './findOrCreatePerson';

export const postgraphileOptions: PostGraphileOptions = {
  disableQueryLog: false,
  dynamicJson: true,
  enableCors: true,
  enableQueryBatching: true,
  extendedErrors: ['errcode'],
  graphiql: process.env.SHOW_GRAPHIQL === 'true' ? true : false,
  graphiqlRoute: '/api/graphiql',
  graphqlRoute: '/api/graphql',
  ignoreIndexes: false,
  ignoreRBAC: false,
  legacyRelations: 'omit' as const,
  pgSettings: async (request: any) => {
    const settings: any = {};

    if (request.user) {
      const { role, id } = await findOrCreatePerson(request.user.sub);
      settings['role'] = role;
      settings['person.id'] = id;
    } else {
      settings['role'] = 'anonymous';
    }

    return settings;
  },
  retryOnInitFail: true,
  setofFunctionsContainNulls: false
};
