import getConfig from './getConfig';

const getHeyLink = (networkId: string) => {
  return getConfig(networkId).heyUrl;
};

export default getHeyLink;
