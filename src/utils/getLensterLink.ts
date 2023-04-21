import useAppStore from '@/store/app';

import getConfig from './getConfig';

const { selectedEnvironment } = useAppStore.getState();

const getLensterLink = () => {
  return getConfig(selectedEnvironment.id).lensterUrl;
};

export default getLensterLink;
