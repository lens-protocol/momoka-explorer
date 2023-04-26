import Head from 'next/head';
import type { FC } from 'react';
import React from 'react';

type Props = {
  title?: string;
  description?: string;
  image?: string;
};

const MetaTags: FC<Props> = (props) => {
  const { description, title, image } = props;

  const meta = {
    title: title ?? 'Bonsai Explorer - Lens Protocol',
    description: description ?? 'Bonsai explorer for Lens Protocol',
    image: image ?? 'https://bonsai.lens.xyz/og.png'
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"
      />
      <link rel="canonical" href="https://bonsai.lens.xyz" />
      <meta property="og:url" content="https://bonsai.lens.xyz" />
      <meta property="og:site_name" content="Bonsai" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="400" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:image:width" content="400" />
      <meta property="twitter:image:height" content="400" />
      <meta name="twitter:site" content="Bonsai" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta property="twitter:image:src" content={meta.image} />
    </Head>
  );
};

export default MetaTags;
