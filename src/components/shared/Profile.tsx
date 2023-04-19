import Link from 'next/link';
import type { FC } from 'react';

import type { Profile as TProfile } from '@/generated';
import getProfilePicture from '@/utils/getProfilePicture';

interface ProfileProps {
  profile?: TProfile;
}

const Profile: FC<ProfileProps> = ({ profile }) => (
  <Link
    className="inline-flex items-center space-x-2 rounded-lg text-sm"
    href={`https://lenster.xyz/u/${profile?.handle}`}
    target="_blank"
  >
    <img
      className="h-8 w-8 rounded-full"
      src={getProfilePicture(profile as TProfile)}
      alt={profile?.handle}
    />
    <div>
      <div className="font-bold">{profile?.name ?? profile?.ownedBy}</div>
      <div className="text-xs">@{profile?.handle}</div>
    </div>
  </Link>
);

export default Profile;
