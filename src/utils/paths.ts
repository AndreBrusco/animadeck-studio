// Utility function to get the correct path for static assets
export const getAssetPath = (path: string): string => {
  // In production (GitHub Pages), we need to add the base path
  if (import.meta.env.PROD) {
    return `/animadeck-studio${path}`;
  }
  // In development, use the path as is
  return path;
};
