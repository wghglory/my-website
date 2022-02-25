// 1. useClickAway not implemented cuz ref placed on the nav menu will also trigger click for the humbugger, making the showMenu not working as expected.
// 2. for performance, not using resize and mediaquery to setShowMenu false when the browser window width increases. A little weird thing happen if opening the menu in a small device and then drag to wide device and then drag back. The menu appears. But it's acceptable. https://www.pluralsight.com/guides/re-render-react-component-on-window-resize

import cn from 'classnames';
import FocusTrap from 'focus-trap-react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {useMedia} from 'react-use';

import PlaneIcon from '/public/images/telegram-plane.svg';

import AppLogo from '../share/AppLogo';
import MenuButton from './MenuButton';
import ThemeChanger from './ThemeChanger';

export default function TheHeader() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const isLg = useMedia('(min-width: 1024px)', false);

  // ECS to quit small nav menu
  // function keyPress(e: React.KeyboardEvent) {
  //   if (e.code === 'Escape') {
  //     setShowMenu(false);
  //   }
  // }

  // ECS to quit small nav menu
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setShowMenu(false);
        event.stopPropagation();
      }
    }

    document.addEventListener('keyup', handleEscape);
    return () => {
      document.removeEventListener('keyup', handleEscape);
    };
  }, [setShowMenu]);

  // disable scroll when opening and when in a small screen
  useEffect(() => {
    document.documentElement.style.overflow = showMenu && !isLg ? 'hidden' : 'auto';
  }, [showMenu, isLg]);

  function navigateTo(destination: string) {
    setShowMenu(false);
    router.push(destination);
  }

  return (
    <FocusTrap active={showMenu && !isLg}>
      {/* // h-screen + body overflow hidden to display the menu in the screen */}
      <header className={cn({'h-screen': showMenu}, 'flex flex-col bg-white dark:bg-gray-900 lg:h-auto')}>
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <h1 aria-label="Guanghui Wang's Website">
            <AppLogo />
          </h1>
          <nav className="hidden lg:block">
            <ul className="flex gap-x-4 sm:gap-x-6 md:gap-x-8">
              <li className="hover:text-orange-600">
                <Link href="/">
                  <a className="p-2">Home</a>
                </Link>
              </li>
              <li className="hover:text-orange-600">
                <Link href="/about">
                  <a className="p-2">About</a>
                </Link>
              </li>
              <li className="hover:text-orange-600">
                <Link href="/#project">
                  <a className="p-2">Projects</a>
                </Link>
              </li>
              <li className="hover:text-orange-600">
                <Link href="/posts">
                  <a className="p-2">Blog</a>
                </Link>
              </li>
              <li className="hover:text-orange-600">
                <Link href="/snippets">
                  <a className="p-2">Snippets</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <ThemeChanger />
            <Link href="/contact">
              <a className="btn-primary">
                Contact
                <PlaneIcon className="w-5" />
              </a>
            </Link>
          </div>
          <div className="inline-flex lg:hidden">
            <MenuButton
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          </div>
        </div>

        {
          /* Small screen menu open!!! Menu open: "block", Menu closed: "hidden" */
          // <div
          //   tabIndex={0}
          //   className={`flex flex-1 flex-col gap-4 overflow-auto lg:hidden ${showMenu ? 'flex' : 'hidden'}`}
          //   onKeyUp={keyPress}
          // >
          <div className={`flex flex-1 flex-col gap-4 overflow-auto lg:hidden ${showMenu ? 'flex' : 'hidden'}`}>
            <nav className="mt-auto">
              <ul>
                <li className="hover:bg-gray-100 hover:text-orange-600 hover:dark:bg-gray-800">
                  <button className="w-full py-3 md:py-5" onClick={() => navigateTo('/')}>
                    Home
                  </button>
                </li>
                <li className="hover:bg-gray-100 hover:text-orange-600 hover:dark:bg-gray-800">
                  <button className="w-full py-3 md:py-5" onClick={() => navigateTo('/about')}>
                    About
                  </button>
                </li>
                <li className="hover:bg-gray-100 hover:text-orange-600 hover:dark:bg-gray-800">
                  <button className="w-full py-3 md:py-5" onClick={() => navigateTo('/#project')}>
                    Projects
                  </button>
                </li>
                <li className="hover:bg-gray-100 hover:text-orange-600 hover:dark:bg-gray-800">
                  <button className="w-full py-3 md:py-5" onClick={() => navigateTo('/posts')}>
                    Blog
                  </button>
                </li>
                <li className="hover:bg-gray-100 hover:text-orange-600 hover:dark:bg-gray-800">
                  <button className="w-full py-3 md:py-5" onClick={() => navigateTo('/snippets')}>
                    Snippets
                  </button>
                </li>
              </ul>
            </nav>
            <div className="mb-auto flex flex-col items-center gap-4 border-t border-gray-100 py-8 dark:border-gray-700">
              <ThemeChanger />
              <button className="btn-primary" onClick={() => navigateTo('/contact')}>
                Contact
                <PlaneIcon className="w-5" />
              </button>
            </div>
          </div>
        }
      </header>
    </FocusTrap>
  );
}
