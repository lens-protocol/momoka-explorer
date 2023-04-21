import getConfig from './getConfig';

const getLensterLink = (networkId: string) => {
  return getConfig(networkId).lensterUrl;
};

export default getLensterLink;
