import Link from 'next/link';
import type { FC } from 'react';

import type { Profile as TProfile } from '@/generated';
import { useAppPersistStore } from '@/store/app';
import formatAddress from '@/utils/formatAddress';
import getLensterLink from '@/utils/getLensterLink';
import getProfilePicture from '@/utils/getProfilePicture';

interface ProfileProps {
  profile?: TProfile;
}

const Profile: FC<ProfileProps> = ({ profile }) => {
  const selectedEnvironment = useAppPersistStore((state) => state.selectedEnvironment);

  return (
    <Link
      className="inline-flex items-center space-x-2 rounded-lg text-sm"
      href={`${getLensterLink(selectedEnvironment.id)}/u/${profile?.handle}`}
      target="_blank"
    >
      <img
        className="h-8 w-8 rounded-full"
        src={getProfilePicture(profile as TProfile)}
        alt={profile?.handle}
      />
      <div>
        <div className="font-bold">{profile?.name ?? formatAddress(profile?.ownedBy)}</div>
        <div className="text-xs">@{profile?.handle}</div>
      </div>
    </Link>
  );
};

export default Profile;
