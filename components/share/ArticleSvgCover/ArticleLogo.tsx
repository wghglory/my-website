import AE from '/public/images/skills/ae.svg';
import AI from '/public/images/skills/ai.svg';
import Angular from '/public/images/skills/angular.svg';
import Architect from '/public/images/skills/architect.svg';
import Cypress from '/public/images/skills/cypress.svg';
import Docker from '/public/images/skills/docker.svg';
import Figma from '/public/images/skills/figma.svg';
import Flutter from '/public/images/skills/flutter.svg';
import Jest from '/public/images/skills/jest.svg';
import Kubernetes from '/public/images/skills/kubernetes.svg';
import Mongodb from '/public/images/skills/mongodb.svg';
import Nextjs from '/public/images/skills/nextjs.svg';
import Nodejs from '/public/images/skills/nodejs.svg';
import Nuxt from '/public/images/skills/nuxt.svg';
import PS from '/public/images/skills/ps.svg';
import React from '/public/images/skills/react.svg';
import Tailwind from '/public/images/skills/tailwind.svg';
import Typescript from '/public/images/skills/typescript.svg';
import Vue from '/public/images/skills/vue.svg';
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
    case 'PS':
      return <PS />;
    case 'AE':
      return <AE />;
    case 'AI':
      return <AI />;
    case 'Architect':
      return <Architect />;
    default:
      return <div>Please add logo</div>;
  }
}
