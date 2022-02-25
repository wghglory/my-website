import {ArticleCover} from '@/models';

import {ArticleSvgCover} from './ArticleSvgCover';

export default function AppCardCover({ArticleCover}: {ArticleCover: ArticleCover}) {
  return (
    <>
      {ArticleCover.banner ? (
        // https://hypercolor.dev/
        <div
          className={`img-bg relative overflow-hidden bg-gradient-to-t from-gray-700 via-gray-900 to-black pb-[56.25%]`}
        >
          <img
            src={ArticleCover.banner}
            className="absolute h-full w-full object-cover duration-300 group-hover:scale-105"
            alt="cover image"
          />
        </div>
      ) : (
        <ArticleSvgCover title={ArticleCover.title!} subtitle={ArticleCover.subtitle!} topic={ArticleCover.topic!} />
      )}
    </>
  );
}
