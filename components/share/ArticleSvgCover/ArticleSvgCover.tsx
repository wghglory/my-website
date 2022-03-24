import {TopicType} from '@/models';

import TopicLogo from './ArticleLogo';
import TopicTitle from './ArticleTitle';

// aspect ratio 16:9
export default function ArticleSvgCover({title, subtitle, topic}: {title: string; subtitle: string; topic: TopicType}) {
  return (
    <div className="absolute h-full w-full overflow-hidden">
      <div className="flex h-full w-full items-center justify-center gap-4 bg-gradient-to-b from-black via-gray-900 to-gray-700 duration-300 group-hover:scale-105">
        <div className="w-24 lg:w-28">
          <TopicLogo topic={topic} />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <TopicTitle title={title} topic={topic} />
          <p className="text-xl font-semibold text-white lg:text-2xl">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
