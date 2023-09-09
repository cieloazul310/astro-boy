export function pubDateToYYMM(publishedAt: string) {
  const pubDate = new Date(publishedAt);
  const year = pubDate.getFullYear().toString();
  const month = (pubDate.getMonth() + 1).toString().padStart(2, "0");
  return { year, month };
}

export function slugify({
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
