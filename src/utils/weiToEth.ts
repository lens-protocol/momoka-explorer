import { formatEther } from 'viem';

const weiToEth = (weiValue: string) => {
  if (!weiValue) {
    return 0;
  }
  const ethValue = formatEther(BigInt(weiValue), 'wei');

  return Number(Number(ethValue).toFixed(2));
};

export default weiToEth;
