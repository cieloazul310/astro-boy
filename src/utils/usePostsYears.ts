import type { PostData } from "../types";

function isNumber(value: number | string): value is number {
  return typeof value === "number";
}

function usePostsYears(
  allPosts: { data: PostData }[],
  { sort }: { sort: "asc" | "desc" } = { sort: "desc" },
) {
  const years = [
    ...new Set(
      allPosts
        .map(({ data }) => new Date(data.date).getFullYear())
        .filter(isNumber),
    ),
  ].sort((a, b) => (sort === "desc" ? -1 : 1) * (a - b));
  return years;
}

export default usePostsYears;
