import { LensEndpoint, LensterUrl, VerifierDeployment, VerifierNetwork } from '@/constants';

const getConfig = (
  network: string
): {
  apiEndpoint: string;
  lensterUrl: string;
  verifierNetwork: string;
  verifierDeployment: string;
} => {
  switch (network) {
    case 'mainnet':
      return {
        apiEndpoint: LensEndpoint.PRODUCTION,
        lensterUrl: LensterUrl.PRODUCTION,
        verifierNetwork: VerifierNetwork.POLYGON,
        verifierDeployment: VerifierDeployment.PRODUCTION
      };
    case 'testnet':
      return {
        apiEndpoint: LensEndpoint.TESTNET,
        lensterUrl: LensterUrl.TESTNET,
        verifierNetwork: VerifierNetwork.MUMBAI,
        verifierDeployment: VerifierDeployment.PRODUCTION
      };
    case 'staging':
      return {
        apiEndpoint: LensEndpoint.STAGING,
        lensterUrl: LensterUrl.STAGING,
        verifierNetwork: VerifierNetwork.MUMBAI,
        verifierDeployment: VerifierDeployment.STAGING
      };
    default:
      return {
        apiEndpoint: LensEndpoint.PRODUCTION,
        lensterUrl: LensterUrl.PRODUCTION,
        verifierNetwork: VerifierNetwork.POLYGON,
        verifierDeployment: VerifierDeployment.PRODUCTION
      };
  }
};

export default getConfig;
