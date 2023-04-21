import { LensEndpoint, LensterUrl, VerifierNetwork } from '@/constants';

const getConfig = (
  network: string
): {
  apiEndpoint: string;
  lensterUrl: string;
  verifierNetwork: string;
} => {
  switch (network) {
    case 'mainnet':
      return {
        apiEndpoint: LensEndpoint.PRODUCTION,
        lensterUrl: LensterUrl.PRODUCTION,
        verifierNetwork: VerifierNetwork.POLYGON
      };
    case 'testnet':
      return {
        apiEndpoint: LensEndpoint.TESTNET,
        lensterUrl: LensterUrl.TESTNET,
        verifierNetwork: VerifierNetwork.MUMBAI
      };
    case 'staging':
      return {
        apiEndpoint: LensEndpoint.STAGING,
        lensterUrl: LensterUrl.STAGING,
        verifierNetwork: VerifierNetwork.MUMBAI
      };
    default:
      return {
        apiEndpoint: LensEndpoint.PRODUCTION,
        lensterUrl: LensterUrl.PRODUCTION,
        verifierNetwork: VerifierNetwork.POLYGON
      };
  }
};

export default getConfig;
