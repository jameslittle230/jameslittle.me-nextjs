import Markdoc from "@markdoc/markdoc";
import { fileService } from "../markdoc/fetch-files";
import { BlogPost } from "../models/blog-post";
import fs from "fs";
import { exec } from "child_process";

type SearchIndexFile = {
  contents: string;
  url: string;
  title: string;
  filetype: "HTML";
};

type SearchIndex = {
  input: {
    url_prefix: string;
    html_selector: "article";
    files: SearchIndexFile[];
  };
};

const generateSearchIndex = async () => {
  const blogPosts = (await fileService.listFiles(
    BlogPost.directory
  )) as BlogPost[];

  const siteURL = process.env.SITE_URL || "https://jameslittle.me";

  const searchIndex = {
    input: {
      url_prefix: siteURL,
      html_selector: "article",
      files: [],
    },
  } as SearchIndex;

  blogPosts.forEach((post) => {
    if (!post.renderableTree) {
      throw new Error("No renderable tree for post");
    }

    const contents = Markdoc.renderers.html(post.renderableTree);
    const url = `${siteURL}${post.href()}`;

    searchIndex.input.files.push({
      contents,
      url,
      title: post.metadata.title,
      filetype: "HTML",
    });
  });

  const dir = "./tmp";
  const configFilename = `${dir}/stork-posts.json`;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(configFilename, JSON.stringify(searchIndex));

  exec(
    `./stork build -i ${configFilename} -o ./out/search-index.st`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      fs.rmSync(configFilename);
    }
  );
};

export { generateSearchIndex };
