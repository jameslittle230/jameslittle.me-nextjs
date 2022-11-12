import Markdoc, { Node, RenderableTreeNode } from "@markdoc/markdoc";
import path from "path";
import yaml, { JSON_SCHEMA } from "js-yaml";
import { strict as assert } from "node:assert";

const fs = require("mz/fs");

// declare function assert(value: unknown): asserts value;

export type ContentFile = {
  ast: Node;
  renderableTree: RenderableTreeNode;
  frontmatter: {
    date: string;
    title: string;
    slug: string;
  };
};

class FileService {
  files: Record<string, ContentFile[]> = {};

  constructor() {}

  fetch = async (directory: string): Promise<ContentFile[]> => {
    if (this.files[directory]) {
      return Promise.resolve(this.files[directory]);
    }

    const remoteFetchedFiles = await this.remoteFetch(directory);
    this.files[directory] = remoteFetchedFiles;
    return remoteFetchedFiles;
  };

  private remoteFetch = async (directory: string): Promise<ContentFile[]> => {
    const files = await fs.readdir(directory);
    return Promise.all(
      files.map(async (filename: string): Promise<ContentFile> => {
        const source = await fs.readFile(path.join(directory, filename), "utf-8");

        const ast = Markdoc.parse(source);

        const frontmatter: any = ast.attributes.frontmatter
          ? yaml.load(ast.attributes.frontmatter, { schema: JSON_SCHEMA })
          : {};

        assert("date" in frontmatter);
        assert("title" in frontmatter);
        assert("slug" in frontmatter);

        const config = {
          variables: { frontmatter }
        };

        const renderableTree = Markdoc.transform(ast, config);

        return {
          ast: JSON.parse(JSON.stringify(ast)),
          renderableTree: JSON.parse(JSON.stringify(renderableTree)),
          frontmatter
        };
      })
    );
  };
}

export const fileService = new FileService();
