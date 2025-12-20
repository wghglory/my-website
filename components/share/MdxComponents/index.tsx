import Image from 'next/image';

import Bilibili from './Bilibili';
import CodeFrame from './CodeFrame';
import Pre from './Pre';
import Quote from './Quote';
import Table from './Table';
import YouTube from './Youtube';

export const mdxComponents = {
  YouTube,
  Bilibili,
  CodeFrame,
  Quote,
  Image,
  Table,
  pre: Pre,
};
