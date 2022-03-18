import {DrAspectRatio} from 'gloryui-react';

import {ArticleCover} from '@/models';

import {ArticleSvgCover} from './ArticleSvgCover';

export default function AppCardCover({ArticleCover}: {ArticleCover: ArticleCover}) {
  return (
    <DrAspectRatio ratio="16:9" containerClass="bg-gradient-to-t from-gray-700 via-gray-900 to-black">
      {ArticleCover.banner ? (
        // https://hypercolor.dev/
        <img src={ArticleCover.banner} className="duration-300 group-hover:scale-105" alt="cover image" />
      ) : (
        <ArticleSvgCover title={ArticleCover.title!} subtitle={ArticleCover.subtitle!} topic={ArticleCover.topic!} />
      )}
    </DrAspectRatio>
  );
}
