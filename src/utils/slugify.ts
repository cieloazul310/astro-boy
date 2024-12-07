import type { MicrocmsBlogs, PostData } from "../types";

export function pubDateToYYMM(publishedAt: string) {
  const pubDate = new Date(publishedAt);
  const year = pubDate.getFullYear().toString();
  const month = (pubDate.getMonth() + 1).toString().padStart(2, "0");
  return { year, month };
}

/** @deprecated */
export function slugifyDEPRECATED({
  year,
  month,
  id,
}: {
  year: string;
  month: string;
  id: string;
}) {
  return `${year}/${month}/${id}`;
}

function isMicrocmsBlogs(
  obj: unknown,
  type: "microcms" | "post",
): obj is Pick<MicrocmsBlogs, "id" | "publishedAt"> {
  return type === "microcms";
}

export function slugify<T extends "microcms" | "post">(
  type: T,
  obj: T extends "microcms"
    ? Pick<MicrocmsBlogs, "id" | "publishedAt">
    : { id: string; data: PostData },
  disablePrefix: boolean = false,
) {
  if (isMicrocmsBlogs(obj, type)) {
    const { year, month } = pubDateToYYMM(obj.publishedAt);
    const slug = `${encodeURIComponent(year)}/${encodeURIComponent(
      month,
    )}/${encodeURIComponent(obj.id)}`;
    if (disablePrefix) return slug;
    return `/microcms/${slug}`;
  }
  if (disablePrefix) return obj.id;
  return `/post/${obj.id}`;
}
