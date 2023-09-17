import { stripHtml } from "string-strip-html";

function excerpt(
  html: string,
  { length }: { length: number } = { length: 140 },
) {
  return stripHtml(html, {
    stripTogetherWithTheirContents: ["h1", "h2", "h3", "h4", "h5", "h6", "pre"],
  })
    .result.slice(0, length)
    .replace("\n", "");
}

export default excerpt;
