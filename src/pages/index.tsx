import LatestTransactions from '@/components/home/LatestTransactions';
import SearchBar from '@/components/home/SearchBar';
import MetaTags from '@/components/shared/Metatags';
import Stats from '@/components/Stats';

const index = () => {
  return (
    <>
      <MetaTags />
      <div className="flex justify-center py-10">
        <SearchBar />
      </div>
      <div className="mb-10">
        <Stats />
        <LatestTransactions />
      </div>
    </>
  );
};

export default index;
