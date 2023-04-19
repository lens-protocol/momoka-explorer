import { HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://staging-api-social-mumbai.lens.crtlkey.com',
  fetchOptions: 'no-cors',
  fetch
});

export default httpLink;
