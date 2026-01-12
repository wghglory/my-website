---
description: Create a blog post from an Obsidian note using the Obsidian MCP server
---

# /obsidian-post Command

Create a blog post from an Obsidian note. This command will:

1. Verify the Obsidian MCP server connection is working
2. Fetch the specified Obsidian note content
3. Convert the Obsidian note to a properly formatted MDX blog post
4. Save it to `content/posts/` with appropriate frontmatter

## Usage

```
/obsidian-post <note-title-or-path>
```

## Parameters

- `note-title-or-path`: The Obsidian note title (e.g., `My Blog Post`) or relative path within vault (e.g.,
  `Blog/My Blog Post.md`)

## Workflow

1. **Verify Obsidian MCP Connection**
   - Use `obsidian_read_note` or `obsidian_list_notes` to check if the Obsidian MCP server is connected and working
   - If connection fails, inform the user and stop

2. **Fetch Obsidian Note**
   - Use `obsidian_read_note` with the provided note title or path
   - If the note is not found, try searching using `obsidian_global_search` with the title
   - Extract the note title, content, and metadata (frontmatter)

3. **Convert to MDX Post**
   - Generate a kebab-case filename from the note title
   - Create frontmatter with:
     - `title`: From Obsidian note title (remove emojis if present)
     - `topics`: Infer from content, Obsidian tags, or frontmatter. Use available topics from `/models/index.ts`
       TopicType. Add new topics if needed.
     - `date`: Current date (YYYY-MM-DD)
     - `excerpt`: Extract from Obsidian frontmatter `excerpt` field, or use first paragraph, or create a summary
     - `cover`:
       - `banner`: Search for a relevant image URL or use placeholder
       - `topic`: Primary topic
       - `title`: Main title
       - `subtitle`: Catchy subtitle
   - Convert Obsidian markdown to MDX format:
     - Preserve code blocks
     - Convert callouts to blockquotes or appropriate MDX components
     - Handle internal wiki links `[[...]]` - convert to regular markdown links or remove
     - Handle embedded images `![[...]]` - convert to markdown image syntax
     - Preserve tables as standard markdown tables
     - Remove or convert Obsidian-specific syntax

4. **Save Post**
   - Save to `content/posts/{kebab-case-title}.mdx`
   - Follow the structure defined in `.cursor/rules/post.mdc`

## Example

```
/obsidian-post My Awesome Blog Post
```

This will:

- Check Obsidian MCP connection
- Fetch the "My Awesome Blog Post" note from Obsidian vault
- Create `content/posts/my-awesome-blog-post.mdx`

## Error Handling

- If Obsidian MCP server is not connected, show a clear error message with setup instructions
- If the note is not found, suggest using `obsidian_list_notes` or `obsidian_global_search` to find available notes
- If there's an error converting content, show the error and partial results if available
- If there are Obsidian-specific syntax elements that can't be converted, warn the user

## Notes

- The command supports both note titles and relative paths within the vault
- Wiki links `[[Note Title]]` will be converted to standard markdown links where possible
- Tags from Obsidian (both frontmatter and inline `#tags`) can be used to infer topics
- Images should be handled according to the website's image strategy (public URL or local path)
