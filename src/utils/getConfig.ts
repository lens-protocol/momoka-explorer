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
        apiEndpoint: LensEndpoint.TESTNET,
        heyUrl: HeyUrl.TESTNET,
        verifierNetwork: VerifierNetwork.MUMBAI,
        verifierDeployment: VerifierDeployment.PRODUCTION
      };
    case 'testnet':
      return {
        apiEndpoint: LensEndpoint.TESTNET,
        heyUrl: HeyUrl.TESTNET,
        verifierNetwork: VerifierNetwork.MUMBAI,
        verifierDeployment: VerifierDeployment.PRODUCTION
      };
    default:
      return {
        apiEndpoint: LensEndpoint.TESTNET,
        heyUrl: HeyUrl.TESTNET,
        verifierNetwork: VerifierNetwork.MUMBAI,
        verifierDeployment: VerifierDeployment.PRODUCTION
      };
  }
};

export default getConfig;
