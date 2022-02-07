import Image from 'next/image';

import DoorIcon from '/public/door.svg';
import mePic from '/public/me.png';

import SocialIcons from '../share/SocialIcons';

export default function HeroSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900" id="home">
      <div className="container m-auto px-6 lg:pt-12">
        <div className="flex flex-col justify-center gap-10 lg:flex-row lg:gap-36">
          <div className="flex flex-col justify-center gap-6 lg:px-12">
            <div>
              <h2 className="py-6 text-2xl lg:text-5xl">
                Web Developer Loving <span className="text-sky-500">React</span> and{' '}
                <span className="text-teal-500">Vue</span>
              </h2>
              <p>
                Hi 👋 ~ I’m Guanghui Wang, a web developer hailing from Shanghai, China. Love all modern UI technologies
                and also starting to fall in love with SVG, GSAP, framer motion!
              </p>
            </div>
            <div className="lg:mb-14">
              <SocialIcons />
            </div>
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
            <Image className="w-1/2" src={mePic} alt="Guanghui Picture" height={667 / 1.5} width={336 / 1.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
