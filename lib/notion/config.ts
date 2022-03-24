// NOTE: rootNotionSpaceId is optional; set it to undefined if you don't want to use it.
export const rootNotionPageId = 'My-Blog-fa13e514575041d7b0ed47aa1ba01055';
export const rootNotionSpaceId = undefined;

// NOTE: having this enabled can be pretty expensive as it re-generates preview
// images each time a page is built. In a production setting, we recommend that
// you cache the preview image results in a key-value database.
export const previewImagesEnabled = false;

// whether we should enable static tweet embeds (requires fetching extra info at
// build time)
export const tweetEmbedsEnabled = false;

export const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV;

export const port = process.env.PORT || 3000;
export const rootDomain = isDev ? `localhost:${port}` : '';
