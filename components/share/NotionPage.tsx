import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import {useTheme} from 'next-themes';
import {ExtendedRecordMap} from 'notion-types';
import {getPageTitle} from 'notion-utils';
import {useEffect, useState} from 'react';
import {defaultMapPageUrl, MapPageUrl, NotionRenderer} from 'react-notion-x';

// -----------------------------------------------------------------------------
// dynamic imports for optional components
// -----------------------------------------------------------------------------

const Code = dynamic(() => import('react-notion-x').then((notion) => notion.Code) as any);
const Collection = dynamic(() => import('react-notion-x').then((notion) => notion.Collection) as any);
const CollectionRow = dynamic(() => import('react-notion-x').then((notion) => notion.CollectionRow) as any, {
  ssr: false,
});

// NOTE: PDF support via "react-pdf" can sometimes cause errors depending on your
// build setup. If you're running into issues, just disable PDF support altogether.
// const Pdf = dynamic(() => import('react-notion-x').then((notion) => (notion as any).Pdf), {ssr: false});

// const Equation = dynamic(() => import('react-notion-x').then((notion) => notion.Equation));

const NotionPage = ({
  recordMap,
  previewImagesEnabled,
  rootPageId,
  rootDomain,
}: {
  recordMap: ExtendedRecordMap;
  previewImagesEnabled?: boolean;
  rootPageId?: string;
  rootDomain?: string;
}) => {
  const {resolvedTheme} = useTheme();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  if (!recordMap) {
    return null;
  }

  const title = getPageTitle(recordMap);
  // console.log(title, recordMap);

  // useful for debugging from the dev console
  if (typeof window !== 'undefined') {
    const keys = Object.keys(recordMap?.block || {});
    const block = recordMap?.block?.[keys[0]]?.value;
    const g = window as any;
    g.recordMap = recordMap;
    g.block = block;
  }

  const socialDescription = 'React Notion X Demo';
  const socialImage = 'https://react-notion-x-demo.transitivebullsh.it/social.jpg';

  const customMapPageUrl = (pageId: string) => {
    pageId = (pageId || '').replace(/-/g, '');

    if (rootPageId && pageId === rootPageId) {
      return '/notion/';
    } else {
      return `/notion/${pageId}`;
    }
  };

  return (
    <>
      <Head>
        {socialDescription && (
          <>
            <meta name="description" content={socialDescription} />
            <meta property="og:description" content={socialDescription} />
            <meta name="twitter:description" content={socialDescription} />
          </>
        )}

        {socialImage ? (
          <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={socialImage} />
            <meta property="og:image" content={socialImage} />
          </>
        ) : (
          <meta name="twitter:card" content="summary" />
        )}

        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:creator" content="@transitive_bs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NotionRenderer
        showTableOfContents
        mapPageUrl={customMapPageUrl}
        recordMap={recordMap}
        fullPage={true}
        darkMode={isDark}
        rootDomain={rootDomain}
        rootPageId={rootPageId}
        previewImages={previewImagesEnabled}
        components={{
          // remove this if you don't want to use next/image
          // NOTE: custom images will only take effect if previewImages is true and
          // if the image has a valid preview image defined in recordMap.preview_images[src]
          image: ({
            src,
            alt,

            width,
            height,

            className,
            style,

            ...rest
          }: any) => {
            const layout = width && height ? 'intrinsic' : 'fill';

            return (
              <Image
                {...rest}
                className={className}
                src={src}
                alt={alt}
                width={layout === 'intrinsic' && width}
                height={layout === 'intrinsic' && height}
                objectFit={style?.objectFit}
                objectPosition={style?.objectPosition}
                layout={layout}
              />
            );
          },
          code: Code,
          collection: Collection,
          collectionRow: CollectionRow,
          // equation: Equation,
          // pdf: Pdf,
        }}
      />
    </>
  );
};

export default NotionPage;
