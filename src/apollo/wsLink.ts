import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const wsLink =
  typeof window !== 'undefined'
    ? new GraphQLWsLink(
        createClient({
          url: 'wss://staging-api-social-mumbai.lens.crtlkey.com'
        })
      )
    : null;

export default wsLink;
