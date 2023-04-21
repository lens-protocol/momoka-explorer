import type { FEATURE_FLAGS } from '@/constants';

const getIsFeatureEnabled = (flag: FEATURE_FLAGS, address: string) => {
  return true;
  // if (!address) {
  //   return false;
  // }
  // const feature = featureFlags.find((f) => f.flag === flag);

  // return feature?.enabledFor.includes(address);
};

export default getIsFeatureEnabled;
