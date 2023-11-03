import Link from 'next/link';
import type { FC } from 'react';

import type { Profile as TProfile } from '@/generated';
import formatAddress from '@/utils/formatAddress';
import getProfilePicture from '@/utils/getProfilePicture';

interface ProfileProps {
  profile?: TProfile;
}

const Profile: FC<ProfileProps> = ({ profile }) => {
  return (
    <Link className="inline-flex items-center space-x-2 rounded-lg text-sm" href={`/profile/${profile?.id}`}>
      <img className="h-8 w-8 rounded-full" src={getProfilePicture(profile as TProfile)} alt={profile?.id} />
      <div>
        <div className="font-bold">
          {profile?.metadata?.displayName ?? formatAddress(profile?.ownedBy.address)}
        </div>
        <div className="text-xs">{profile?.handle?.suggestedFormatted.localName || profile?.id}</div>
      </div>
    </Link>
  );
};

export default Profile;
