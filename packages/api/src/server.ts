import 'dotenv/config';

import * as cors from 'cors';
import * as express from 'express';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';
import { postgraphile } from 'postgraphile';
import { postgraphileOptions } from './postgraphileOptions';
import { postgresUrl } from './postgresUrl';

const checkJwt = jwt({
  algorithms: ['RS256'],
  audience: 'https://api.neonlaw.com',
  credentialsRequired: false,
  issuer: `https://${process.env.AUTH0_TENANT}/`,
  secret: expressJwtSecret({
    cache: true,
    jwksRequestsPerMinute: 5,
    jwksUri:
      `https://${process.env.AUTH0_TENANT}/.well-known/jwks.json`,
    rateLimit: true,
  }),
});

const app = express();
app.use(cors());

app.get('/', function (_, res) {
  res.send('Neon Law API');
});

app.get('/api', function (_, res) {
  res.send('Neon Law API');
});

app.use('/api/graphql', checkJwt);

app.use(postgraphile(postgresUrl, 'public', postgraphileOptions));

app.listen(3000);
