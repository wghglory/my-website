import {motion} from 'framer-motion';
import dynamic from 'next/dynamic';

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player) as Promise<React.ComponentType<any>>,
  {ssr: false},
);

import {itemVariant, listVariant, rightToLeftVariant} from '@/lib/motion';
import UMLogo from '@/public/images/companies/um.svg';
import UnionbankLogo from '@/public/images/companies/unionbank.svg';
import UPMCLogo from '@/public/images/companies/upmc.svg';
import VMwareLogo from '@/public/images/companies/vmware.svg';

import SocialIcons from '../share/SocialIcons';

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-white dark:bg-gray-900" id="home">
      <div className="container m-auto px-6 lg:px-20 lg:pt-12">
        <div className="flex flex-col justify-center gap-10 lg:flex-row lg:gap-20 xl:gap-28">
          <motion.div
            className="flex w-full max-w-5xl flex-col justify-center gap-6 lg:w-1/2 lg:py-10 xl:py-20"
            initial="hidden"
            animate="visible"
            variants={listVariant}
          >
            <motion.div variants={itemVariant}>
              <h2 className="py-6 text-center text-3xl !leading-snug lg:text-left lg:text-5xl">
                Web Developer Loving
                <p className="space-x-4">
                  <span className="text-red-600/80 dark:text-red-500">Angular</span>
                  <span className="text-sky-600/80 dark:text-sky-500">React</span>
                  <span className="text-teal-600/90 dark:text-teal-500">Vue</span>
                </p>
              </h2>
              <p>
                Hi 👋 ~ I&apos;m Guanghui Wang, a web developer from Shanghai, China. I&apos;m passionate about modern
                UI technologies and exploring emerging frameworks like Astro, SvelteKit, Qwik, and SolidJS. I&apos;m the
                creator of{' '}
                <a
                  href="https://ngx-lift.netlify.app/ngx-lift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md bg-red-100 px-2 py-0.5 font-semibold text-red-700 no-underline transition-all hover:scale-105 hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50"
                >
                  <span>🚀</span>
                  <span>ngx-lift</span>
                </a>{' '}
                and{' '}
                <a
                  href="https://ngx-lift.netlify.app/clr-lift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-md bg-blue-100 px-2 py-0.5 font-semibold text-blue-700 no-underline transition-all hover:scale-105 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50"
                >
                  <span>✨</span>
                  <span>clr-lift</span>
                </a>
                .
              </p>
            </motion.div>
            <motion.div className="lg:mb-14" variants={itemVariant}>
              <SocialIcons />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 1}}}
            className="relative flex min-h-[250px] w-full items-stretch text-queen-300 dark:text-gray-600 lg:w-1/2"
          >
            <Player autoplay loop src="/lottie/developer.json" speed={0.8}></Player>

            {/* <DoorBg className="absolute h-full" /> */}
            {/* <Image src="/images/me.png" alt="Guanghui Picture" priority={true} layout="fill" objectFit="contain" /> */}
            {/* <img
              src="/images/me.png"
              className="z-[1] max-h-[300px] min-h-[200px] w-auto lg:max-h-[400px]"
              alt="Guanghui Picture"
            /> */}
            {/* <Link href="/about">
              <a className="absolute top-[45%]  z-10 w-16 cursor-pointer text-gray-200 hover:text-white lg:w-20">
                <AboutMe aria-label="more about me" />
              </a>
            </Link> */}
          </motion.div>
        </div>
      </div>
      <motion.div className="bg" initial="hidden" animate="visible" variants={rightToLeftVariant}>
        <div className="container m-auto px-6 lg:px-20">
          <div className="flex h-28 items-center justify-center gap-4 lg:justify-start lg:gap-10">
            <VMwareLogo className="h-8 w-auto text-gray-900 dark:text-gray-100" />
            <UnionbankLogo className="h-8 w-auto" />
            <UMLogo className="h-8 w-auto" />
            <UPMCLogo className="h-8 w-auto" />
          </div>
        </div>
      </motion.div>
      <style>
        {`
          .bg {
          background: linear-gradient(to right, transparent, rgba(249, 168, 212, 0.1) 60%, rgba(249, 168, 212, 0.3) 70%, rgba(216, 180, 254, .3) 80%, rgba(129, 140, 248, .5), transparent)
          }

          .lf-player-container {
            width: 100%;
          }
        `}
      </style>
    </section>
  );
}
