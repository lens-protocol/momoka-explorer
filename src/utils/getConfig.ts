import { LensEndpoint, LensterUrl } from '@/constants';

const getConfig = (
  network: string
): {
  apiEndpoint: string;
  lensterUrl: string;
} => {
  switch (network) {
    case 'mainnet':
      return {
        apiEndpoint: LensEndpoint.PRODUCTION,
        lensterUrl: LensterUrl.PRODUCTION
      };
    case 'testnet':
      return {
        apiEndpoint: LensEndpoint.TESTNET,
        lensterUrl: LensterUrl.TESTNET
      };
    case 'staging':
      return {
        apiEndpoint: LensEndpoint.STAGING,
        lensterUrl: LensterUrl.STAGING
      };
    default:
      return {
        apiEndpoint: LensEndpoint.PRODUCTION,
        lensterUrl: LensterUrl.PRODUCTION
      };
  }
};

export default getConfig;
