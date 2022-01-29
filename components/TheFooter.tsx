import Link from 'next/link';
import React from 'react';

import EmailIcon from '/public/email.svg';
import GithubIcon from '/public/github.svg';
import LinkedInIcon from '/public/linkedin.svg';
import PlaneIcon from '/public/telegram-plane.svg';

import AppLogo from './AppLogo';
export default function TheFooter() {
  return (
    <footer className="bg-yellow-400 pt-20 pb-10 dark:bg-yellow-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-20 text-center lg:grid-cols-2 lg:text-left">
          <section>
            <AppLogo />
            <p>Staff Engineer in VMware</p>
          </section>
          <section className="flex flex-col gap-2">
            <div className="text-xl font-bold">Contact</div>
            <a href="mailto:guanghui-wang@foxmail.com">guanghui-wang@foxmail.com</a>
            <ul className="flex justify-center gap-2 lg:justify-start">
              <li>
                <a target={'_blank'} href="https://github.com/wghglory" className="btn-icon" rel="noreferrer">
                  <GithubIcon className="w-8" />
                </a>
              </li>
              <li>
                <a
                  target={'_blank'}
                  href="https://www.linkedin.com/in/guanghuiwang/"
                  className="btn-icon"
                  rel="noreferrer"
                >
                  <LinkedInIcon className="w-8" />
                </a>
              </li>
              <li>
                <a href="mailto:guanghui-wang@foxmail.com" className="btn-icon">
                  <EmailIcon className="w-8" />
                </a>
              </li>
            </ul>
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
                <li className="py-3 text-center hover:text-white dark:hover:text-black  md:py-1 lg:text-left">
                  <Link href="/">
                    <a className="pb-1 hover:border-b-2 hover:border-white dark:hover:border-black">Home</a>
                  </Link>
                </li>
                <li className="py-3 text-center hover:text-white dark:hover:text-black md:py-1 lg:text-left">
                  <Link href="#about">
                    <a className="pb-1 hover:border-b-2 hover:border-white dark:hover:border-black">About</a>
                  </Link>
                </li>
                <li className="py-3 text-center hover:text-white dark:hover:text-black md:py-1 lg:text-left">
                  <Link href="#projects">
                    <a className="pb-1 hover:border-b-2 hover:border-white dark:hover:border-black">Projects</a>
                  </Link>
                </li>
                <li className="py-3 text-center hover:text-white dark:hover:text-black md:py-1 lg:text-left">
                  <Link href="#blog">
                    <a className="pb-1 hover:border-b-2 hover:border-white dark:hover:border-black">Blog</a>
                  </Link>
                </li>
                <li className="py-3 text-center hover:text-white dark:hover:text-black md:py-1 lg:text-left">
                  <Link href="/snippets">
                    <a className="pb-1 hover:border-b-2 hover:border-white dark:hover:border-black">Snippets</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
          <section className="lg:col-span-2">
            <div className="px-2 pb-2 text-center text-xs lg:text-left">All rights reserved © Derek Wang 2022</div>
          </section>
        </div>
      </div>
    </footer>
  );
}
