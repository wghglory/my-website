import {TopicType} from '@/models';

import TopicLogo from './ArticleLogo';
import TopicTitle from './ArticleTitle';

// aspect ratio 16:9, foreignObject not working well in safari... so I give up.
export default function ArticleSvgCover({title, subtitle, topic}: {title: string; subtitle: string; topic: TopicType}) {
  return (
    <svg width="100%" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
      <foreignObject x="0" y="0" width="400" height="225">
        <div className="flex h-full w-full items-center justify-center gap-4 bg-gradient-to-b from-black via-gray-900 to-gray-700 duration-300 group-hover:scale-105">
          <div className="w-32">
            <TopicLogo topic={topic} />
          </div>
          <div className="flex flex-col items-center justify-center gap-8">
            <TopicTitle title={title} topic={topic} />
            <p className="text-3xl font-semibold text-white">{subtitle}</p>
          </div>
        </div>
      </foreignObject>
    </svg>
  );
}
