import Markdoc, { Node, RenderableTreeNode } from "@markdoc/markdoc";
import assert from "assert";
import { ContentFile, Directory } from "../markdoc/fetch-files";
import makeSchema from "../markdoc/schema";

type ProjectMetadata = {
  title: string;
  slug: string;
  blurb: string;
  url: string | null;
  image: string;
  order: number;
};

export type DehydratedProject = {
  ast?: any;
  renderableTree?: any;
  metadata: ProjectMetadata;
};

export class Project implements ContentFile {
  static directory: Directory = "content/projects";

  metadata: ProjectMetadata;
  ast?: Node;
  renderableTree?: RenderableTreeNode;

  constructor(object: DehydratedProject) {
    const { metadata, ast, renderableTree } = object;
    assert(metadata);
    assert("title" in metadata);
    assert("blurb" in metadata);
    assert(
      "slug" in metadata,
      `slug metadata value not found in ${metadata.title}`
    );
    assert(
      "image" in metadata,
      `image metadata value not found in ${metadata.title}`
    );

    this.metadata = {
      title: metadata.title,
      slug: metadata.slug,
      blurb: metadata.blurb,
      url: metadata.url || null,
      image: metadata.image,
      order: metadata.order,
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

  static hydrate(object: DehydratedProject): Project {
    return new Project(object);
  }

  serialize(): DehydratedProject {
    if (this.renderableTree) {
      return {
        renderableTree: JSON.stringify(this.renderableTree),
        metadata: this.metadata,
      };
    } else if (this.ast) {
      return {
        ast: JSON.stringify(this.ast),
        metadata: this.metadata,
      };
    }

    return {
      metadata: this.metadata,
    };
  }

  orderKey() {
    return this.metadata.order;
  }

  slug() {
    return Array.isArray(this.metadata.slug)
      ? this.metadata.slug[0]
      : this.metadata.slug;
  }
}
