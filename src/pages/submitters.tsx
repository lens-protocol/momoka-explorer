import MetaTags from '@/components/shared/Metatags';
import Submitters from '@/components/submitters';

const index = () => {
  return (
    <>
      <MetaTags title="Submitters" />
      <div className="mb-10 space-y-4">
        <Submitters />
      </div>
    </>
  );
};

export default index;
