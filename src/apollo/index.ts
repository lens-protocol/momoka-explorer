import { ApolloClient } from '@apollo/client';

import cache from './cache';
import httpLink from './httpLink';

const client = new ApolloClient({
  link: httpLink,
  cache
});

export default client;
