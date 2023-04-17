import { ApolloClient, from, InMemoryCache } from '@apollo/client';

import httpLink from './httpLink';

const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache({})
});

export default client;
