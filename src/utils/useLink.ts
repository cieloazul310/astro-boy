function useLink(
  href: string | URL | undefined | null,
  options: { prefix?: boolean } = { prefix: true },
): {
  href: string | URL | null;
  target?: "_blank";
  rel?: "noreferrer noopener";
} {
  const baseUrl = import.meta.env.BASE_URL;

  if (!href) return { href: null };
  const internal = /^\/(?!\/)/.test(href.toString());

  if (!internal) return { href, target: "_blank", rel: "noreferrer noopener" };

  if (baseUrl === "/") return { href };
  if (options?.prefix === false) return { href };

  return { href: `${baseUrl}${href}` };
}

export default useLink;
