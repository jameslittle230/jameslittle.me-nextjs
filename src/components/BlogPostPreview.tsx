import Link from "next/link";
import { BlogPost } from "../models/blog-post";
import { Left, Right, Subgrid } from "./grid";

export const BlogPostPreview = ({ post }: { post: BlogPost }) => {
  const { date, slug, title } = post.metadata;
  const year = new Date(date).getFullYear().toString();
  if (post.metadata.outdated) {
    return (
      <Subgrid
        weight="right"
        className="blog-post-preview blog-post-preview-outdated"
      >
        <Left>
          <p className="blog-post-preview-date">{post.formattedDate()}</p>
        </Left>
        <Right className="flex-container">
          <p className="blog-post-preview-title">
            <Link href={post.href()}>{title}</Link>
          </p>
          <span className="tag">Outdated</span>
        </Right>
      </Subgrid>
    );
  }
  return (
    <Subgrid weight="right" className="blog-post-preview">
      <Left>
        <p className="blog-post-preview-date">{post.formattedDate()}</p>
      </Left>
      <Right>
        <p className="blog-post-preview-title">
          <Link href={post.href()}>{title}</Link>
        </p>
        <p>{post.metadata.blurb}</p>
      </Right>
    </Subgrid>
  );
};
