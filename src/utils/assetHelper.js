// Helper function to get the correct public URL for assets
export const getPublicAssetUrl = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return process.env.PUBLIC_URL + '/' + cleanPath;
}; 