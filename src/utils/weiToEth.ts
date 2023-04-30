import { ethers } from 'ethers';

const weiToEth = (weiValue: string) => {
  if (!weiValue) {
    return 0;
  }
  const ethValue = ethers.utils.formatEther(weiValue);
  return Number(Number(ethValue).toFixed(2));
};

export default weiToEth;
