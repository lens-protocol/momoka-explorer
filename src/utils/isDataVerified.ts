import type { Deployment, Environment, EthereumNode } from '@lens-protocol/momoka/client';
import { checkDAProof } from '@lens-protocol/momoka/client';

import getConfig from './getConfig';

const isDataVerified = async (id: string, nodeUrl: string, network: string) => {
  const ethereumNode: EthereumNode = {
    environment: getConfig(network).verifierNetwork as Environment,
    deployment: getConfig(network).verifierDeployment as Deployment,
    nodeUrl
  };

  try {
    const result = await checkDAProof(id, ethereumNode);
    if (result.isSuccess()) {
      return {
        verified: true,
        message: result.successResult
      };
    }
    console.log(result.failure);
    return {
      verified: false,
      message: result.failure
    };
  } catch (error) {
    return {
      verified: false
    };
  }
};

export default isDataVerified;
