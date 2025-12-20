# My Website

Hello world! 👋

I'm thrilled to welcome you to my new and improved [personal website crafted with Next.js](https://derekw.netlify.app/).
In the past, I hosted a rather outdated site with generic templates, limiting my control over the user interface.
However, with the advent of Next.js, I've been inspired to create a contemporary space to share my thoughts and document
my professional journey.

Here's a glimpse into the key components of my website:

- **Home Section**: Get to know me a little better.
- **Experience Section**: Explore my skill set and professional background.
- **Project Section**: Check out some of the exciting projects I've been working on.
- **Blog Section**: Dive into the heart of my site, where I regularly share insightful posts.
- **Snippet Section**: Discover and make use of handy code snippets I've curated.

I invite you to explore, leave comments, and share your valuable feedback. Your input is greatly appreciated! Thank you
for visiting! ❤️🤝

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Testing

```bash
# Run unit tests
npm test

# Run unit tests in watch mode
npm run test:watch

# Run E2E tests
npm run test:e2e
```

### Code Quality

```bash
# Run ESLint
npm run lint

# Fix ESLint issues
npm run lint:fix

# Format code with Prettier
npm run format
```

## CI/CD

This project uses GitHub Actions for continuous integration. The CI pipeline runs automatically on:

- Push to `main` or `master` branch
- Pull requests to `main` or `master` branch

### CI Pipeline

The CI workflow includes three jobs:

1. **Lint and Test**: Runs ESLint and unit tests (Vitest)
2. **E2E Tests**: Runs Playwright end-to-end tests
3. **Build**: Builds the Next.js application to verify it compiles successfully

### Deployment

The site is automatically deployed to Netlify when changes are pushed to the main branch. Netlify handles the build and
deployment process based on the configuration in `netlify.toml`.
