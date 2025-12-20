# Markdown Tables Support

## Overview

Standard markdown tables (GitHub Flavored Markdown syntax) are now supported in MDX posts.

## Installation

Install the required package:

```bash
npm install remark-gfm
```

## Usage

You can now use standard markdown table syntax in your MDX files:

```markdown
| Feature | Partial<T> | Sparse<T> |
|---------|------------|-----------|
| Top Level Properties | Optional | Optional |
| Nested Objects | Required (Must be complete) | Optional (Can be partial) |
| Use Case | Simple object creation | Patches, deep updates, large forms |
```

## Styling

Markdown tables are automatically styled with:
- Responsive wrapper (horizontal scroll on mobile)
- Dark mode support
- Proper spacing and borders
- Styled headers and cells

## Custom Table Component

You can still use the custom `<Table>` component for more control:

```jsx
<Table
  columns={['Feature', 'Partial<T>', 'Sparse<T>']}
  data={[
    ['Top Level Properties', 'Optional', 'Optional'],
    ['Nested Objects', 'Required (Must be complete)', 'Optional (Can be partial)'],
  ]}
/>
```

## Configuration

The `remark-gfm` plugin is configured in `lib/file.ts`:

```typescript
mdxOptions: {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [...],
}
```

## Features Supported

With `remark-gfm`, you also get:
- ✅ Tables (markdown syntax)
- ✅ Strikethrough (`~~text~~`)
- ✅ Task lists (`- [ ]` and `- [x]`)
- ✅ Autolinks
- ✅ And more GitHub Flavored Markdown features

