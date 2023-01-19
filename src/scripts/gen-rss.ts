import Markdoc from "@markdoc/markdoc";
import { Feed } from "feed";
import { fileService } from "../markdoc/fetch-files";
import { BlogPost } from "../models/blog-post";
import fs from "fs";

const generateRssFeed = async () => {
  const blogPosts = (await fileService.listFiles(
    BlogPost.directory
  )) as BlogPost[];

  const siteURL = process.env.SITE_URL || "https://jameslittle.me";
  const date = new Date();
  const author = {
    name: "James Little",
    email: "hello@jameslittle.me",
    link: siteURL,
  };

  const feed = new Feed({
    title: "Blog - James Little",
    description: "",
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/logo.svg`,
    favicon: `${siteURL}/favicon.png`,
    copyright: `All rights reserved ${date.getFullYear()}, James Little`,
    updated: date,
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });

  blogPosts.forEach((post) => {
    if (!post.renderableTree) {
      throw new Error("No renderable tree for post");
    }

    const content = Markdoc.renderers.html(post.renderableTree);
    feed.addItem({
      title: post.metadata.title,
      id: `${siteURL}${post.href()}`,
      link: `${siteURL}${post.href()}`,
      description: post.metadata.blurb,
      content,
      author: [author],
      date: post.metadata.date,
    });
  });

  const dir = "./public";
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(`${dir}/feed.xml`, feed.rss2());
  fs.writeFileSync(`${dir}/atom.xml`, feed.atom1());
  fs.writeFileSync(`${dir}/feed.json`, feed.json1());
};

export { generateRssFeed };
