import type { Environment, EthereumNode } from '@lens-protocol/data-availability-verifier/client';
import { checkDAProof } from '@lens-protocol/data-availability-verifier/client';

import getConfig from './getConfig';

const isDataVerified = async (id: string, nodeUrl: string, network: string) => {
  const ethereumNode: EthereumNode = {
    environment: getConfig(network).verifierNetwork as Environment,
    nodeUrl: nodeUrl
  };

  try {
    const result = await checkDAProof(id, ethereumNode);
    console.log(result);
    if (result.isSuccess()) {
      return true;
    }

    return false;
  } catch (error) {
    return false;
  }
};

export default isDataVerified;
