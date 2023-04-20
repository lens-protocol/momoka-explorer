import { InMemoryCache } from '@apollo/client';

import cursorBasedPagination from './cursorBasedPagination';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        dataAvailabilityTransactions: cursorBasedPagination(['request', ['cursor', 'limit']])
      }
    }
  }
});

export default cache;
