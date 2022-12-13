import Markdoc, { Node, RenderableTreeNode } from "@markdoc/markdoc";
import path from "path";
import yaml, { JSON_SCHEMA } from "js-yaml";
import { strict as assert } from "node:assert";
import { BlogPost } from "../models/blog-post";

const fs = require("mz/fs");

const CACHE_ENABLED = false;

// declare function assert(value: unknown): asserts value;

export type Frontmatter = {
  date: string;
  title: string;
  slug: string;
  excerpt?: string;
};

export type ContentFile = BlogPost;

export type Directory = "content/blog" | "content/projects";

class FileService {
  private files: Record<string, ContentFile[]> = {};

  constructor() {}

  getFile = async (
    directory: Directory,
    slug: string
  ): Promise<ContentFile> => {
    let files = [];

    if (CACHE_ENABLED && this.files[directory]) {
      files = this.files[directory];
    } else {
      const remoteFetchedFiles = await this.fetchFromFilesystem(directory);
      this.files[directory] = remoteFetchedFiles;
      files = this.files[directory];
    }

    const file = files.find((file) => file.metadata.slug === slug);
    if (file) {
      return file;
    }

    return Promise.reject("File not found");
  };

  /**
   * The list rich objects representing all the content files in the given directory,
   * ordered by date from oldest to newest.
   *
   * Copy the output of this method to modify it, since any mutations will affect
   * all other calls to this method.
   */
  listFiles = async (directory: Directory): Promise<ContentFile[]> => {
    let files = [];

    if (CACHE_ENABLED && this.files[directory]) {
      files = this.files[directory];
    } else {
      const remoteFetchedFiles = await this.fetchFromFilesystem(directory);
      this.files[directory] = remoteFetchedFiles;
      files = this.files[directory];
    }

    return files;
  };

  private fetchFromFilesystem = async (
    directory: Directory
  ): Promise<ContentFile[]> => {
    const files = await fs.readdir(directory);
    const objects: ContentFile[] = await Promise.all(
      files.map(async (filename: string): Promise<ContentFile> => {
        const source = await fs.readFile(
          path.join(directory, filename),
          "utf-8"
        );

        const ast = Markdoc.parse(source);

        const frontmatter: any = ast.attributes.frontmatter
          ? yaml.load(ast.attributes.frontmatter, { schema: JSON_SCHEMA })
          : {};

        switch (directory) {
          case BlogPost.directory:
            return new BlogPost({ ast, metadata: frontmatter });
        }

        throw new Error("");
      })
    );

    objects.sort(
      (a, b) => a.metadata.date.getTime() - b.metadata.date.getTime()
    );
    return objects;
  };
}

export const fileService = new FileService();
