import Angular from '/public/skills/angular.svg';
import Cypress from '/public/skills/cypress.svg';
import Docker from '/public/skills/docker.svg';
import Figma from '/public/skills/figma.svg';
import Flutter from '/public/skills/flutter.svg';
import Jest from '/public/skills/jest.svg';
import Kubernetes from '/public/skills/kubernetes.svg';
import Mongodb from '/public/skills/mongodb.svg';
import Nextjs from '/public/skills/nextjs.svg';
import Nodejs from '/public/skills/nodejs.svg';
import Nuxt from '/public/skills/nuxt.svg';
import React from '/public/skills/react.svg';
import Tailwind from '/public/skills/tailwind.svg';
import Typescript from '/public/skills/typescript.svg';
import Vue from '/public/skills/vue.svg';
import {TopicType} from '@/models';

export default function ArticleLogo({topic}: {topic: TopicType}) {
  switch (topic) {
    case 'Cypress':
      return <Cypress />;
    case 'Vue':
      return <Vue />;
    case 'React':
      return <React />;
    case 'Angular':
      return <Angular />;
    case 'Docker':
      return <Docker />;
    case 'Figma':
      return <Figma />;
    case 'Flutter':
      return <Flutter />;
    case 'Jest':
      return <Jest />;
    case 'Kubernetes':
      return <Kubernetes />;
    case 'Mongodb':
      return <Mongodb />;
    case 'Nextjs':
      return <Nextjs />;
    case 'Nodejs':
      return <Nodejs />;
    case 'Nuxt':
      return <Nuxt />;
    case 'Tailwind':
      return <Tailwind />;
    case 'Typescript':
      return <Typescript />;
    default:
      return <div>Please add logo</div>;
  }
}
