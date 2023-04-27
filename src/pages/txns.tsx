import MetaTags from '@/components/shared/Metatags';
import AllTransactions from '@/components/txns/AllTransactions';

const index = () => {
  return (
    <>
      <MetaTags title="All Transactions" />
      <div className="mb-10 space-y-4">
        <AllTransactions />
      </div>
    </>
  );
};

export default index;
