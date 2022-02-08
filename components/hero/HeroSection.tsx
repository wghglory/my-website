import DoorBg from '/public/door.svg';

import SocialIcons from '../share/SocialIcons';

export default function HeroSection() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900" id="home">
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
    </section>
  );
}
