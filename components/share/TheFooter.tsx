import Link from 'next/link';
import React from 'react';

import PlaneIcon from '/public/telegram-plane.svg';

import AppLogo from './AppLogo';
import SocialIcons from './SocialIcons';

export default function TheFooter() {
  return (
    <footer className="border-t border-gray-200/80 bg-gray-200 pt-20 pb-10 dark:border-gray-700/80 dark:bg-gray-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-20 text-center lg:grid-cols-2 lg:text-left">
          <section className="lg:pl-[50%]">
            <AppLogo />
            <p>Staff Engineer in VMware</p>
          </section>
          <section className="flex flex-col gap-2">
            <div className="text-xl font-bold">Contact</div>
            <a href="mailto:wghglory89@gmail.com">wghglory89@gmail.com</a>
            <SocialIcons iconClass="btn-icon" />
            <div className="flex justify-center lg:justify-start">
              <Link href="/contact">
                <a className="btn-secondary">
                  Contact
                  <PlaneIcon className="w-5" />
                </a>
              </Link>
            </div>
          </section>
          <section className="lg:pl-[50%]">
            <p>
              Learn, think, share, collaborate. <br />
              Make a progress every day.
            </p>
          </section>
          <section>
            <div className="text-xl font-bold">Sitemap</div>
            <nav>
              <ul>
                <li className="py-3 text-center md:py-1 lg:text-left">
                  <Link href="/">
                    <a className="pb-1 hover:border-b-2 hover:border-gray-900 hover:font-semibold dark:hover:border-gray-100 dark:hover:text-gray-100">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="py-3 text-center md:py-1 lg:text-left">
                  <Link href="/about">
                    <a className="pb-1 hover:border-b-2 hover:border-gray-900 hover:font-semibold dark:hover:border-gray-100 dark:hover:text-gray-100">
                      About
                    </a>
                  </Link>
                </li>
                <li className="py-3 text-center md:py-1 lg:text-left">
                  <Link href="/#project">
                    <a className="pb-1 hover:border-b-2 hover:border-gray-900 hover:font-semibold dark:hover:border-gray-100 dark:hover:text-gray-100">
                      Projects
                    </a>
                  </Link>
                </li>
                <li className="py-3 text-center md:py-1 lg:text-left">
                  <Link href="/posts">
                    <a className="pb-1 hover:border-b-2 hover:border-gray-900 hover:font-semibold dark:hover:border-gray-100 dark:hover:text-gray-100">
                      Blog
                    </a>
                  </Link>
                </li>
                <li className="py-3 text-center md:py-1 lg:text-left">
                  <Link href="/snippets">
                    <a className="pb-1 hover:border-b-2 hover:border-gray-900 hover:font-semibold dark:hover:border-gray-100 dark:hover:text-gray-100">
                      Snippets
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
          <section className="lg:pl-[50%]">
            <div className="whitespace-nowrap pb-2 text-center text-xs lg:text-left">
              All rights reserved © Guanghui Wang 2022
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
