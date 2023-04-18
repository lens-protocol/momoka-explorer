import Link from 'next/link';
import type { FC } from 'react';

import Network from './Network';

const Navbar: FC = () => {
  return (
    <nav className="mx-auto max-w-full px-2 sm:px-6 lg:px-14">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <img className="h-8 w-auto" src="/logo.svg" alt="Lens" draggable={false} />
        </Link>
        <Network />
      </div>
    </nav>
  );
};

export default Navbar;
