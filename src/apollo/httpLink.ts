import { HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://api.lens.dev',
  fetchOptions: 'no-cors',
  fetch
});

export default httpLink;
