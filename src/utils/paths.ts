// Utility function to get the correct path for static assets
export const getAssetPath = (path: string): string => {
  // Check if we're in preview mode by looking at the current URL
  const isPreviewMode = typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') &&
    (window.location.port === '4173' || window.location.port === '4174' || window.location.port === '5173');

  // In production (GitHub Pages) but not in preview mode, we need to add the base path
  if (import.meta.env.PROD && !isPreviewMode) {
    return `/animadeck-studio${path}`;
  }
  // In development and preview mode, use the path as is
  return path;
};
