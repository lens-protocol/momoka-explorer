const isInFavorites = (favorites: any, transactionId: string, network: string) => {
  // return boolean if transactionId is in favorites and network matches
  return favorites.some(
    (favorite: any) => favorite.transactionId === transactionId && favorite.network === network
  );
};

export default isInFavorites;
