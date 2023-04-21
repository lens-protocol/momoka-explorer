import { HttpLink } from '@apollo/client';

import { useAppPersistStore } from '@/store/app';
import getConfig from '@/utils/getConfig';

const { selectedEnvironment } = useAppPersistStore.getState();

const httpLink = new HttpLink({
  uri: getConfig(selectedEnvironment.id).apiEndpoint,
  fetchOptions: 'no-cors',
  fetch
});

export default httpLink;
