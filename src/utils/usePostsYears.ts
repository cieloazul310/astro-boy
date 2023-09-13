import type { MarkdownInstance } from "astro";
import type { MarkdownFrontmatter } from "../types";

function isNumber(value: any): value is number {
  return value && typeof value === "number";
}

function usePostsYears(
  allPosts: MarkdownInstance<MarkdownFrontmatter>[],
  { sort }: { sort: "asc" | "desc" } = { sort: "desc" },
) {
  const years = [
    ...new Set(
      allPosts
        .map(({ frontmatter }) =>
          frontmatter.date ? new Date(frontmatter.date).getFullYear() : null,
        )
        .filter(isNumber),
    ),
  ].sort((a, b) => (sort === "desc" ? -1 : 1) * (a - b));
  return years;
}

export default usePostsYears;
