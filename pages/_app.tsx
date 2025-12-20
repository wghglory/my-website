import 'gloryui-react/styles';
import '../styles/globals.css';

import {gsap} from 'gsap';
import {Draggable} from 'gsap/dist/Draggable';
import {EaselPlugin} from 'gsap/dist/EaselPlugin';
import {Flip} from 'gsap/dist/Flip';
import {MotionPathPlugin} from 'gsap/dist/MotionPathPlugin';
import {PixiPlugin} from 'gsap/dist/PixiPlugin';
import {ScrollToPlugin} from 'gsap/dist/ScrollToPlugin';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {TextPlugin} from 'gsap/dist/TextPlugin';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {ThemeProvider} from 'next-themes';
import type {ErrorInfo} from 'react';
import {ErrorBoundary} from 'react-error-boundary';

import TheHeader from '@/components/header/TheHeader';
import ErrorFallback from '@/components/share/ErrorFallback';
import TheFooter from '@/components/share/TheFooter';

/*
DrawSVGPlugin.min.js, GSDevTools.min.js, InertiaPlugin.min.js, MorphSVGPlugin.min.js, MotionPathHelper.min.js, Physics2DPlugin.min.js, PhysicsPropsPlugin.min.js, ScrambleTextPlugin.min.js, and SplitText.min.js are Club GreenSock perks

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { GSDevTools } from "gsap/GSDevTools";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { PhysicsPropsPlugin } from "gsap/PhysicsPropsPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { SplitText } from "gsap/SplitText";

Sign up at https://greensock.com/club or try them for free on CodePen or CodeSandbox
*/

if (typeof window !== 'undefined') {
  gsap.registerPlugin(
    Flip,
    ScrollTrigger,
    ScrollToPlugin,
    Draggable,
    EaselPlugin,
    MotionPathPlugin,
    PixiPlugin,
    TextPlugin,
  );
}

function MyApp({Component, pageProps}: AppProps) {
  const myErrorHandler = (error: Error, info: ErrorInfo) => {
    // Do something with the error
    // E.g. log to an error logging client here
    console.log(error, 'error boundary error');
  };

  return (
    <ThemeProvider attribute="class">
      <div className="flex min-h-screen flex-col">
        <Head>
          <title>Guanghui Wang Website</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <TheHeader />

        <main className="flex-1">
          <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
            <Component {...pageProps} />
          </ErrorBoundary>
        </main>

        <TheFooter />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
