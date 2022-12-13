import Markdoc, { Node, RenderableTreeNode } from "@markdoc/markdoc";
import assert from "assert";
import { Directory } from "../markdoc/fetch-files";
import makeSchema from "../markdoc/schema";

type BlogPostMetadata = {
  date: Date;
  title: string;
  slug: string;
  blurb: string;
};

export type DehydratedBlogPost = {
  ast?: any;
  renderableTree?: any;
  metadata: Omit<BlogPostMetadata, "date"> & { date: string };
};

export class BlogPost {
  static directory: Directory = "content/blog";

  metadata: BlogPostMetadata;
  ast?: Node;
  renderableTree?: RenderableTreeNode;

  constructor(object: DehydratedBlogPost) {
    const { metadata, ast, renderableTree } = object;
    assert("date" in metadata, JSON.stringify(metadata));
    assert("title" in metadata);
    assert("slug" in metadata);
    assert(
      "blurb" in metadata,
      `blurb metadata value not found in ${metadata.title}`
    );

    this.metadata = {
      date: new Date(metadata.date),
      title: metadata.title,
      slug: metadata.slug,
      blurb: metadata.blurb,
    };

    this.ast = ast;

    if (ast && renderableTree) {
      throw new Error(
        "BlogPost constructor can't have an AST and a renderable tree!"
      );
    }

    if (ast) {
      this.renderableTree = Markdoc.transform(ast, makeSchema(this.metadata));
    } else if (renderableTree) {
      this.renderableTree = JSON.parse(renderableTree);
    }
  }

  static hydrate(object: DehydratedBlogPost): BlogPost {
    return new BlogPost(object);
  }

  serialize(): DehydratedBlogPost {
    const metadata = {
      ...this.metadata,
      date: this.metadata.date.toISOString(),
    };
    if (this.renderableTree) {
      return {
        renderableTree: JSON.stringify(this.renderableTree),
        metadata,
      };
    } else if (this.ast) {
      return {
        ast: JSON.stringify(this.ast),
        metadata,
      };
    }

    return {
      metadata,
    };
  }

  href() {
    return `/blog/${this.year()}/${this.metadata.slug}`;
  }

  staticPath() {
    return { year: this.year(), slug: this.metadata.slug };
  }

  formattedDate() {
    return this.metadata.date.toISOString().split("T")[0];
  }

  matches(year: string, slug: string): boolean {
    return this.year() === year && this.metadata.slug === slug;
  }

  private year() {
    return this.metadata.date.getFullYear().toString();
  }
}
