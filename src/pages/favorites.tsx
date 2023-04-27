import MetaTags from '@/components/shared/Metatags';
import AllFavorites from '@/components/txns/AllFavorites';

const index = () => {
  return (
    <>
      <MetaTags title="Favourites" />
      <div className="mb-10 space-y-4">
        <AllFavorites />
      </div>
    </>
  );
};

export default index;
