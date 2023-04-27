import Link from 'next/link';
import type { FC } from 'react';

const Custom404: FC = () => {
  return (
    <div className="page-center flex-col">
      <div className="py-10 text-center">
        <h1 className="mb-4 text-3xl font-bold">Oops, Lost‽</h1>
        <div className="mb-4">This page could not be found.</div>
        <Link href="/">Go to home</Link>
      </div>
    </div>
  );
};

export default Custom404;
