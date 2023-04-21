import type { Profile } from '@/generated';

import getPfp from './getpfp';
import sanitizeDStorageUrl from './sanitizeDStorageUrl';

const getProfilePicture = (profile: Profile): string => {
  const url =
    profile.picture && profile.picture.__typename === 'MediaSet'
      ? profile?.picture?.original?.url
      : profile.picture?.__typename === 'NftImage'
      ? profile?.picture?.uri
      : getPfp(profile?.ownedBy);
  const sanitized = url?.includes('ipfs://') ? sanitizeDStorageUrl(url) : getPfp(profile?.ownedBy);
  return sanitized;
};

export default getProfilePicture;
