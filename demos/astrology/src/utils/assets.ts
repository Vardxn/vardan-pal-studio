/**
 * Asset path helper to safely resolve public assets whether running in:
 * - Local development: root '/'
 * - Production sub-path: '/shubham-dixit/' (hosted under vardanpalstudio.vercel.app)
 */
export const getAssetPath = (path: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Ensure trailing slash on base if not present
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${cleanPath}`;
};
