import Image from 'next/image';

import DoorIcon from '/public/door.svg';
import mePic from '/public/me.png';

import SocialIcons from './SocialIcons';

export default function TheHero() {
  return (
    <div className="container m-auto px-6 lg:pt-12">
      <div className="flex flex-col justify-center gap-10 lg:flex-row lg:gap-36">
        <div className="flex flex-col justify-center gap-6 px-12">
          <div>
            <h2 className="py-6 text-2xl lg:text-5xl ">Web Developer Loving UI Design</h2>
            <p>
              Hi 👋 ~ I’m Derek Wang, passionate to use the modern technologies to delivery the best user experience.
            </p>
          </div>
          <SocialIcons />
        </div>
        <div className="relative flex justify-center px-12 text-center text-queen-300 dark:text-gray-600">
          <style jsx>
            {`
              .door {
                background: url(/door.svg) no-repeat center;
                background-size: contain;
              }
            `}
          </style>
          <DoorIcon className="absolute h-full" />
          <Image className="w-1/2" src={mePic} alt="Derek Picture" height={667 / 1.5} width={336 / 1.5} />
        </div>
      </div>
    </div>
  );
}
