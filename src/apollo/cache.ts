import { InMemoryCache } from '@apollo/client';

import result from '@/generated';

import cursorBasedPagination from './cursorBasedPagination';

const cache = new InMemoryCache({
  possibleTypes: result.possibleTypes,
  typePolicies: {
    Query: {
      fields: {
        dataAvailabilityTransactions: cursorBasedPagination(['request'])
      }
    }
  }
});

export default cache;
