import { defineMenu } from "@cieloazul310/astro-sarkara";

export const siteMetadata = {
  title: "Astro Boy",
  description: "Astro + Panda CSSで構成されているWebサイト。",
  image: "/ogimage.jpeg",
};

export const menu = defineMenu([
  { title: "Top", href: "/" },
  { title: "About", href: "/about/" },
  { title: "Markdown Posts", href: "/posts/" },
  { title: "CMS Posts", href: "/microcms/" },
]);

export const pageSize = 25;
