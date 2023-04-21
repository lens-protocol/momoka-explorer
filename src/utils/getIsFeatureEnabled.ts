import type { FEATURE_FLAGS } from '@/constants';
import { featureFlags } from '@/constants';

const getIsFeatureEnabled = (flag: FEATURE_FLAGS, address: string) => {
  if (!address) {
    return false;
  }
  const feature = featureFlags.find((f) => f.flag === flag);
  return feature?.enabledFor.includes(address);
};

export default getIsFeatureEnabled;
