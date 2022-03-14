import {Player} from '@lottiefiles/react-lottie-player';
import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import AboutMe from '/public/images/aboutme.svg';
import UMLogo from '/public/images/companies/um.svg';
import UnionbankLogo from '/public/images/companies/unionbank.svg';
import UPMCLogo from '/public/images/companies/upmc.svg';
import VMwareLogo from '/public/images/companies/vmware.svg';
import DoorBg from '/public/images/door.svg';
import {fadeInVariant, itemVariant, listVariant, rightToLeftVariant} from '@/lib/motion';

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
              <h2 className="py-6 text-center text-3xl lg:text-left lg:text-5xl">
                Web Developer Loving <span className="text-sky-600/80 dark:text-sky-500">React</span> and{' '}
                <span className="text-teal-600/90 dark:text-teal-500">Vue</span>
              </h2>
              <p>
                Hi 👋 ~ I’m Guanghui Wang, a web developer hailing from Shanghai, China. Love modern UI technologies and
                also starting to fall in love with SVG, GSAP, framer motion!
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
            <Player autoplay loop src="/lottie/developer.json" speed={0.5}></Player>

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
            <VMwareLogo className="h-4" />
            <UnionbankLogo className="h-7" />
            <UMLogo className="h-6" />
            <UPMCLogo className="h-5" />
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
