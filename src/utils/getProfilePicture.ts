import type { Profile } from '@/generated';

import getPfp from './getpfp';
import sanitizeDStorageUrl from './sanitizeDStorageUrl';

const getProfilePicture = (profile: Profile): string => {
  const url =
    profile.metadata?.picture && profile.metadata.picture.__typename === 'ImageSet'
      ? profile?.metadata.picture?.optimized?.uri
      : profile.metadata?.picture?.__typename === 'NftImage'
      ? profile?.metadata.picture?.image.optimized?.uri
      : getPfp(profile?.ownedBy.address);
  const sanitized = url?.includes('ipfs://') ? sanitizeDStorageUrl(url) : getPfp(profile?.ownedBy.address);
  return sanitized;
};

export default getProfilePicture;
