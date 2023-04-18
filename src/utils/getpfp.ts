const getProfilePicture = (address: string) => {
  return `https://cdn.stamp.fyi/avatar/eth:${address.toLowerCase()}?s=300`;
};

export default getProfilePicture;
