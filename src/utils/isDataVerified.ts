import type { EthereumNode } from '@lens-protocol/data-availability-verifier/client';
import { checkDAProof, Environment } from '@lens-protocol/data-availability-verifier/client';

const isDataVerified = async (id: string, network: string) => {
  const ethereumNode: EthereumNode = {
    environment: Environment.MUMBAI,
    nodeUrl: 'https://rpc.brovider.xyz/80001'
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
