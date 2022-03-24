import {GetStaticProps} from 'next';
import {ExtendedRecordMap} from 'notion-types';
import {getAllPagesInSpace} from 'notion-utils';
import {defaultMapPageUrl} from 'react-notion-x';

import NotionPage from '@/components/share/NotionPage';
import {getPage, notion} from '@/lib/notion';
import {isDev, previewImagesEnabled, rootDomain, rootNotionPageId, rootNotionSpaceId} from '@/lib/notion/config';

export const getStaticProps: GetStaticProps = async (context) => {
  const pageId = context.params?.pageId as string;
  const recordMap = await getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export async function getStaticPaths() {
  // if (isDev) {
  //   return {
  //     paths: [],
  //     fallback: true,
  //   };
  // }

  const customMapPageUrl = (rootPageId?: string) => (pageId: string) => {
    pageId = (pageId || '').replace(/-/g, '');

    if (rootPageId && pageId === rootPageId) {
      return '/notion';
    } else {
      return `/notion/${pageId}`;
    }
  };

  const mapPageUrl = customMapPageUrl(rootNotionPageId);

  // This crawls all public pages starting from the given root page in order
  // for next.js to pre-generate all pages via static site generation (SSG).
  // This is a useful optimization but not necessary; you could just as easily
  // set paths to an empty array to not pre-generate any pages at build time.
  const pages = await getAllPagesInSpace(rootNotionPageId, rootNotionSpaceId, getPage.bind(notion), {
    traverseCollections: false,
  });

  const paths = Object.keys(pages)
    .map((pageId) => mapPageUrl(pageId))
    .filter((path) => path && path !== '/notion');

  return {
    paths,
    fallback: true,
  };
}

export default function Page({recordMap}: {recordMap: ExtendedRecordMap}) {
  return (
    <NotionPage
      recordMap={recordMap}
      rootDomain={rootDomain}
      rootPageId={rootNotionPageId}
      previewImagesEnabled={previewImagesEnabled}
    />
  );
}
