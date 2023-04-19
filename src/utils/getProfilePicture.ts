import { Profile } from '@/generated';
import sanitizeDStorageUrl from './sanitizeDStorageUrl';
import getPfp from './getpfp';

const getProfilePicture = (
  channel: Profile,
  type: 'avatar' | 'avatar_lg' | 'thumbnail' = 'avatar'
): string => {
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
