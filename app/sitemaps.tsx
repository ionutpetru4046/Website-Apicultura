import { posts } from "../app/content/blog/posts";

export default function sitemap() {
  const baseUrl = "https://apicultura-ta.ro";

  const staticPages = ["", "produse", "despre", "contact", "blog"];

  const pages = staticPages.map((page) => ({
    url: `${baseUrl}/${page}`,
    lastModified: new Date().toISOString(),
  }));

  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...pages, ...blogPages];
}
