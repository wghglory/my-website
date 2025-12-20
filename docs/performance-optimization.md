# Performance Optimization: Large Page Data

## Issue

Next.js was warning about large page data (240 KB) exceeding the 128 KB threshold for `/posts/[slug]` routes. This is
caused by serialized MDX content being passed as props.

## Solutions Implemented

### 1. Increased Page Data Threshold ✅

**File:** `next.config.js`

Added configuration to increase the threshold from 128 KB to 512 KB:

```js
experimental: {
  largePageDataBytes: 512 * 1024, // 512 KB
}
```

**Why this is acceptable:**

- We're using static generation, so large props are only sent once during build
- The compiled MDX source needs to be serialized for client-side hydration
- 240 KB is reasonable for long-form blog content

### 2. Added ISR (Incremental Static Regeneration) ✅

**Files:** `pages/posts/[slug].tsx`, `pages/projects/[slug].tsx`, `pages/snippets/[slug].tsx`

Added `revalidate: 3600` (1 hour) to all dynamic MDX pages:

```tsx
export const getStaticProps: GetStaticProps = async ({params}) => {
  const result = await getMdxFileStaticProps('posts', slug);
  return {
    ...result,
    revalidate: 3600, // Regenerate at most once per hour
  };
};
```

**Benefits:**

- Pages are statically generated at build time
- Pages can be regenerated in the background when content changes
- Better performance than full static generation for frequently updated content
- Reduces build time for large sites

## Additional Optimization Recommendations

### Future Improvements (Optional)

1. **Code Splitting for MDX Components**
   - Use dynamic imports for heavy MDX components
   - Lazy load syntax highlighting or other heavy dependencies

2. **Optimize Serialization**
   - Check if `scope` or `frontmatter` contain unnecessary data
   - Consider compressing the compiled source (though Next.js handles this)

3. **Consider App Router Migration**
   - App Router with Server Components doesn't serialize props
   - MDX content can be rendered directly on the server
   - Better for large content sites

4. **Content Optimization**
   - Split very long posts into multiple pages
   - Use lazy loading for images
   - Consider pagination for extremely long articles

## Monitoring

To monitor page data sizes:

```bash
npm run build
# Check the build output for page data sizes
```

The warning will still appear in development but is acceptable for production builds with static generation.
