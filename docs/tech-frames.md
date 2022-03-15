# Some Tech Frames that I used to build this website

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with
[npm](https://docs.npmjs.com/cli/init):

```bash
npx create-next-app --example with-tailwindcss my-website
```

## SVGR

[https://react-svgr.com/docs/next/#nextjs](https://react-svgr.com/docs/next/#nextjs)

```js
// svgr.config.js
module.exports = {
  dimensions: false, // remove the width and height from the SVG but keep the viewBox for correct scaling.
  // BUT, it will raise error in nextjs app since server render and client render svg don't match: Prop `width` did not match. Server: "null" Client: "32" (width of svg).
  // To solve this issue, I removed width/height from svg files. Use tailwind to config size.
};
```

```js
// next.config.js
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
```

## Add Sitemap

```bash
npm i next-sitemap
```

copy `next-sitemap.js` in project root.

Add `"postbuild": "next-sitemap"` in package.json. After build, it should generate 3 files in **public** folder --
sitemap.xml, sitemap-0.xml, robots.txt.
