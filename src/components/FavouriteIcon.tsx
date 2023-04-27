import clsx from 'clsx';
import { useTheme } from 'next-themes';
import type { SVGProps } from 'react';
import * as React from 'react';

interface MySvgProps extends SVGProps<SVGSVGElement> {
  isFavourite?: boolean;
}

const FavouriteIcon: React.FC<MySvgProps> = (props) => {
  const { resolvedTheme } = useTheme();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        stroke={resolvedTheme === 'dark' ? '#E9E9E9' : '#383838'}
        className={clsx('group-hover:stroke-[#C58C89] dark:group-hover:stroke-[#F5D4D2]')}
        fill={props.isFavourite ? (resolvedTheme === 'dark' ? '#E9E9E9' : '#565467') : 'none'}
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M18.973 8.388c0-1.059-.416-2.075-1.157-2.823a3.93 3.93 0 0 0-2.794-1.17c-.374 0-.745.055-1.103.16a4.005 4.005 0 0 0-1.29-2.536 3.926 3.926 0 0 0-5.273 0 4.005 4.005 0 0 0-1.29 2.537 3.913 3.913 0 0 0-2.62.14c-.48.2-.917.494-1.285.865-.368.37-.66.812-.86 1.297a4.03 4.03 0 0 0 .451 3.874 3.954 3.954 0 0 0 1.97 1.451 3.994 3.994 0 0 0-.746 2.324c0 1.059.416 2.074 1.157 2.823a3.93 3.93 0 0 0 4.485.787 3.95 3.95 0 0 0 1.365-1.078c.37.457.835.826 1.363 1.078a3.9 3.9 0 0 0 3.202.077c.479-.201.914-.496 1.28-.867a4.031 4.031 0 0 0 1.154-2.825c0-.836-.262-1.65-.746-2.327a3.95 3.95 0 0 0 1.977-1.444c.492-.68.758-1.5.76-2.343Z"
      />
    </svg>
  );
};

export default FavouriteIcon;
