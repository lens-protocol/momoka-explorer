import type { Profile } from '@/generated';

import getPfp from './getpfp';
import sanitizeDStorageUrl from './sanitizeDStorageUrl';

const getProfilePicture = (channel: Profile): string => {
  const url =
    channel.picture && channel.picture.__typename === 'MediaSet'
      ? channel?.picture?.original?.url
      : channel.picture?.__typename === 'NftImage'
      ? channel?.picture?.uri
      : getPfp(channel?.ownedBy);
  const sanitized = sanitizeDStorageUrl(url);
  return sanitized;
};

export default getProfilePicture;
