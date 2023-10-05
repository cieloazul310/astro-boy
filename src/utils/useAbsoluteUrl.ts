export default function useAbsoluteUrl(path: string | undefined) {
  const baseUrl = import.meta.env.BASE_URL;
  const site = import.meta.env.SITE;
  if (!site) return undefined;

  if (!path) return undefined;
  try {
    const base = new URL(baseUrl, site);
    const absoluteUrl = new URL(path, base);
    return absoluteUrl.href;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}
