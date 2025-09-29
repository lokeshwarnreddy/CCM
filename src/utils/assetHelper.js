// Helper function to get the correct public URL for assets
export const getPublicAssetUrl = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // In Vite, public assets are served from the root
  return '/' + cleanPath;
}; 