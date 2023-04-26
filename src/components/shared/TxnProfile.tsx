import { UserPlusIcon, UsersIcon } from '@heroicons/react/24/outline';
import type { FC } from 'react';

import type { Profile } from '@/generated';
import formatAddress from '@/utils/formatAddress';
import getProfilePicture from '@/utils/getProfilePicture';

import Card from '../ui/Card';

interface TxnProfileProps {
  profile: Profile;
}

const TxnProfile: FC<TxnProfileProps> = ({ profile }) => {
  if (!profile) {
    return null;
  }

  return (
    <Card className="mt-6">
      <div className="flex flex-wrap items-center justify-between">
        <div className="flex max-w-3xl items-center space-x-5">
          <img src={getProfilePicture(profile)} alt="avatar" className="h-32 w-32 rounded-full" />
          <div>
            <div>
              <h1 className="text-2xl font-medium opacity-90">
                {profile.name ?? formatAddress(profile.ownedBy)}
              </h1>
              <h3 className="text-sm font-medium opacity-60">@{profile.handle}</h3>
              <p className="mt-3 text-sm font-medium opacity-60">{profile.bio ?? ''}</p>
            </div>
          </div>
        </div>
        <div className="hidden space-y-2 text-sm lg:block">
          <div className="flex items-center space-x-3">
            <UsersIcon className="h-4 w-4" />
            <div>
              <b> {profile.stats.totalPosts + profile.stats.totalComments + profile.stats.totalMirrors}</b>{' '}
              publications
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <UsersIcon className="h-4 w-4" />
            <div>
              <b>{profile.stats.totalFollowers}</b> followers
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <UserPlusIcon className="h-4 w-4" />
            <div>
              <b>{profile.stats.totalFollowing}</b> followings
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TxnProfile;
