import Link from 'next/link';
import React from 'react';

import PlaneIcon from '@/public/images/telegram-plane.svg';

import AppLogo from './AppLogo';
import SocialIcons from './SocialIcons';

export default function TheFooter() {
  return (
    <footer className="border-t border-gray-200/80 bg-gray-200 pb-10 pt-20 dark:border-gray-700/80 dark:bg-gray-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-10 text-center lg:grid-cols-3 lg:gap-20 lg:px-16 lg:text-left">
          <section>
            <AppLogo />
            <p>Staff Engineer in VMware by Broadcom</p>
            <p className="mt-10">
              Learn, think, share, collaborate. <br />
              Make a progress every day.
            </p>
          </section>
          <section className="flex flex-col gap-2">
            <div className="text-xl font-bold">Contact</div>
            <a href="mailto:guanghui-wang@foxmail.com">guanghui-wang@foxmail.com</a>
            <SocialIcons iconClass="btn-icon" />
            <div className="flex justify-center lg:justify-start">
              <Link href="/contact" className="btn-secondary">
                Contact
                <PlaneIcon className="w-5" />
              </Link>
            </div>
          </section>
          <section>
            <div className="text-xl font-bold">Sitemap</div>
            <nav>
              <ul>
                <li className="py-1 text-center lg:text-left">
                  <Link
                    href="/"
                    className="pb-1 hover:border-b-2 hover:border-gray-900 hover:font-semibold dark:hover:border-gray-100 dark:hover:text-gray-100"
                  >
                    Home
                  </Link>
                </li>
                <li className="py-1 text-center lg:text-left">
                  <Link
                    href="/about"
                    className="pb-1 hover:border-b-2 hover:border-gray-900 hover:font-semibold dark:hover:border-gray-100 dark:hover:text-gray-100"
                  >
                    About
                  </Link>
                </li>
                <li className="py-1 text-center lg:text-left">
                  <Link
                    href="/#project"
                    className="pb-1 hover:border-b-2 hover:border-gray-900 hover:font-semibold dark:hover:border-gray-100 dark:hover:text-gray-100"
                  >
                    Projects
                  </Link>
                </li>
                <li className="py-1 text-center lg:text-left">
                  <Link
                    href="/posts"
                    className="pb-1 hover:border-b-2 hover:border-gray-900 hover:font-semibold dark:hover:border-gray-100 dark:hover:text-gray-100"
                  >
                    Blog
                  </Link>
                </li>
                <li className="py-1 text-center lg:text-left">
                  <Link
                    href="/snippets"
                    className="pb-1 hover:border-b-2 hover:border-gray-900 hover:font-semibold dark:hover:border-gray-100 dark:hover:text-gray-100"
                  >
                    Snippets
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
          <section>
            <div className="whitespace-nowrap pb-2 text-center text-xs lg:text-left">
              All rights reserved © Guanghui Wang 2022 - {new Date().getFullYear()}
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
}
