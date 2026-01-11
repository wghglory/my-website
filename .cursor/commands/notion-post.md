---
description: Create a blog post from a Notion page using the Notion MCP server
---

# /notion-post Command

Create a blog post from a Notion page. This command will:

1. Verify the Notion MCP server connection is working
2. Fetch the specified Notion page content
3. Convert the Notion page to a properly formatted MDX blog post
4. Save it to `content/posts/` with appropriate frontmatter

## Usage

```
/notion-post <notion-page-url-or-id>
```

## Parameters

- `notion-page-url-or-id`: The Notion page URL (e.g., `https://www.notion.so/2e52883bd89380f491f3fe3a2e187ee7`) or page
  ID (e.g., `2e52883b-d893-80f4-91f3-fe3a2e187ee7`)

## Workflow

1. **Verify Notion MCP Connection**
   - Use `notion-get-self` to check if the Notion MCP server is connected and working
   - If connection fails, inform the user and stop

2. **Fetch Notion Page**
   - Use `notion-fetch` with the provided page URL or ID
   - Extract the page title, content, and metadata

3. **Convert to MDX Post**
   - Generate a kebab-case filename from the page title
   - Create frontmatter with:
     - `title`: From Notion page title (remove emojis if present)
     - `topics`: Infer from content or use "AI" as default
     - `date`: Current date (YYYY-MM-DD)
     - `excerpt`: First paragraph or a summary of the content
     - `cover`:
       - `banner`: Search for a relevant image URL or use placeholder
       - `topic`: Primary topic
       - `title`: Main title
       - `subtitle`: Catchy subtitle
   - Convert Notion markdown to MDX format:
     - Preserve code blocks
     - Convert callouts to blockquotes
     - Handle images appropriately

4. **Save Post**
   - Save to `content/posts/{kebab-case-title}.mdx`
   - Follow the structure defined in `.cursor/rules/post.mdc`

## Example

```
/notion-post https://www.notion.so/2e52883bd89380f491f3fe3a2e187ee7
```

This will:

- Check Notion MCP connection
- Fetch the "Mastering Cursor: From Chatbot to Pair Programmer" page
- Create `content/posts/mastering-cursor-from-chatbot-to-pair-programmer.mdx`

## Error Handling

- If Notion MCP server is not connected, show a clear error message
- If the page is not found, inform the user
- If there's an error converting content, show the error and partial results if available
