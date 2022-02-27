import {TopicType} from '@/models';

import TopicLogo from './ArticleLogo';
import TopicTitle from './ArticleTitle';

// aspect ratio 16:9
export default function ArticleSvgCover({title, subtitle, topic}: {title: string; subtitle: string; topic: TopicType}) {
  return (
    <svg width="100%" viewBox="0 0 400 225" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style jsx>
        {`
          .title-container {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
          }

          .title {
            font-size: 44px;
            text-align: center;
          }

          .subtitle {
            font-size: 24px;
            text-align: center;
            color: white;
            font-weight: 500;
            font-family: Arial;
          }
        `}
      </style>

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
