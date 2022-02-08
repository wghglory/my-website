import DoorBg from '/public/door.svg';
import UMLogo from '/public/um.svg';
import UnionbankLogo from '/public/unionbank.svg';
import UPMCLogo from '/public/upmc.svg';
import VMwareLogo from '/public/vmware.svg';

import SocialIcons from '../share/SocialIcons';

export default function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-900" id="home">
      <div className="container m-auto px-6 lg:pt-12">
        <div className="flex flex-col justify-center gap-10 lg:flex-row lg:gap-20 xl:gap-28">
          <div className="flex max-w-5xl flex-col justify-center gap-6">
            <div>
              <h2 className="py-6 text-center text-2xl lg:text-left lg:text-5xl">
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
          <div className="relative flex justify-center text-center text-queen-300 dark:text-gray-600">
            <style jsx>
              {`
                .door {
                  background: url(/door.svg) no-repeat center;
                  background-size: contain;
                }
              `}
            </style>
            <DoorBg className="absolute h-full" />
            <img
              src="/me.png"
              className="z-[1] max-h-[300px] min-h-[200px] w-fit lg:max-h-[400px]"
              alt="Guanghui Picture"
            />
          </div>
        </div>
      </div>
      <div className="bg">
        <div className="container m-auto px-6">
          <div className="flex h-28 items-center justify-center gap-4 lg:justify-start lg:gap-10">
            <VMwareLogo className="h-4" />
            <UnionbankLogo className="h-7" />
            <UPMCLogo className="h-5" />
            <UMLogo className="h-6" />
          </div>
        </div>
      </div>
      <style>
        {`
          .bg {
          background: linear-gradient(to right, transparent, rgba(249, 168, 212, 0.1) 60%, rgba(249, 168, 212, 0.3) 70%, rgba(216, 180, 254, .3) 80%, rgba(129, 140, 248, .5), transparent)
          }
        `}
      </style>
    </section>
  );
}
