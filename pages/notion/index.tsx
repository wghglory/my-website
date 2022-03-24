import {ExtendedRecordMap} from 'notion-types';

import NotionPage from '@/components/share/NotionPage';
import {getPage} from '@/lib/notion';
import {previewImagesEnabled, rootDomain, rootNotionPageId} from '@/lib/notion/config';

export const getStaticProps = async () => {
  // 9bdcd90897794450a0a433b70eeb9c01 database id

  const pageId = rootNotionPageId;
  const recordMap = await getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export default function NotionsPage({recordMap}: {recordMap: ExtendedRecordMap}) {
  return (
    <NotionPage
      recordMap={recordMap}
      rootDomain={rootDomain}
      rootPageId={rootNotionPageId}
      previewImagesEnabled={previewImagesEnabled}
    />
  );
}
