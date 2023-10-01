import { HeyUrl, LensEndpoint, VerifierDeployment, VerifierNetwork } from '@/constants';

const getConfig = (
  network: string
): {
  apiEndpoint: string;
  heyUrl: string;
  verifierNetwork: string;
  verifierDeployment: string;
} => {
  switch (network) {
    case 'mainnet':
      return {
        apiEndpoint: LensEndpoint.PRODUCTION,
        heyUrl: HeyUrl.PRODUCTION,
        verifierNetwork: VerifierNetwork.POLYGON,
        verifierDeployment: VerifierDeployment.PRODUCTION
      };
    case 'testnet':
      return {
        apiEndpoint: LensEndpoint.TESTNET,
        heyUrl: HeyUrl.TESTNET,
        verifierNetwork: VerifierNetwork.MUMBAI,
        verifierDeployment: VerifierDeployment.PRODUCTION
      };
    case 'staging':
      return {
        apiEndpoint: LensEndpoint.STAGING,
        heyUrl: HeyUrl.STAGING,
        verifierNetwork: VerifierNetwork.MUMBAI,
        verifierDeployment: VerifierDeployment.STAGING
      };
    default:
      return {
        apiEndpoint: LensEndpoint.PRODUCTION,
        heyUrl: HeyUrl.PRODUCTION,
        verifierNetwork: VerifierNetwork.POLYGON,
        verifierDeployment: VerifierDeployment.PRODUCTION
      };
  }
};

export default getConfig;
