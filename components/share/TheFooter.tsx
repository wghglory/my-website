import Link from 'next/link';
import React from 'react';

import PlaneIcon from '/public/telegram-plane.svg';

import AppLogo from './AppLogo';
import SocialIcons from './SocialIcons';

export default function TheFooter() {
  return (
    <footer className="bg-king-400 pt-20 pb-10 dark:bg-sky-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-20 text-center lg:grid-cols-2 lg:text-left">
          <section>
            <AppLogo />
            <p>Staff Engineer in VMware</p>
          </section>
          <section className="flex flex-col gap-2">
            <div className="text-xl font-bold">Contact</div>
            <a href="mailto:guanghui-wang@foxmail.com">guanghui-wang@foxmail.com</a>
            <SocialIcons iconClass="btn-icon-accent" />
            <div className="flex justify-center lg:justify-start">
              <button className="btn-accent">
                Contact
                <PlaneIcon className="w-5" />
              </button>
            </div>
          </section>
          <section>
            <p>
              Learn, think, share, collaborate. <br />
              Make a progress every day.
            </p>
          </section>
          <section>
            <div className="text-xl font-bold">Sitemap</div>
            <nav>
              <ul>
                <li className="py-3 text-center hover:font-semibold dark:hover:text-gray-100  md:py-1 lg:text-left">
                  <Link href="/">
                    <a className="pb-1 hover:border-b-2 hover:border-gray-900 dark:hover:border-gray-100">Home</a>
                  </Link>
                </li>
                <li className="py-3 text-center hover:font-semibold dark:hover:text-gray-100 md:py-1 lg:text-left">
                  <Link href="/about">
                    <a className="pb-1 hover:border-b-2 hover:border-gray-900 dark:hover:border-gray-100">About</a>
                  </Link>
                </li>
                <li className="py-3 text-center hover:font-semibold dark:hover:text-gray-100 md:py-1 lg:text-left">
                  <Link href="/#project">
                    <a className="pb-1 hover:border-b-2 hover:border-gray-900 dark:hover:border-gray-100">Projects</a>
                  </Link>
                </li>
                <li className="py-3 text-center hover:font-semibold dark:hover:text-gray-100 md:py-1 lg:text-left">
                  <Link href="/posts">
                    <a className="pb-1 hover:border-b-2 hover:border-gray-900 dark:hover:border-gray-100">Blog</a>
                  </Link>
                </li>
                <li className="py-3 text-center hover:font-semibold dark:hover:text-gray-100 md:py-1 lg:text-left">
                  <Link href="/snippets">
                    <a className="pb-1 hover:border-b-2 hover:border-gray-900 dark:hover:border-gray-100">Snippets</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
          <section className="lg:col-span-2">
            <div className="px-2 pb-2 text-center text-xs lg:text-left">All rights reserved © Guanghui Wang 2022</div>
          </section>
        </div>
      </div>
    </footer>
  );
}
