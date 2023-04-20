import { WebSocketLink } from '@apollo/client/link/ws';
import { SubscriptionClient } from 'subscriptions-transport-ws/dist/client';

const wsLink =
  typeof window !== 'undefined'
    ? new WebSocketLink(
        new SubscriptionClient('wss://staging-api-social-mumbai.lens.crtlkey.com', {
          reconnect: true,
          reconnectionAttempts: 5
        })
      )
    : null;

export default wsLink;
