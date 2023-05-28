import Link from "next/link";
import { BlogPost } from "../models/blog-post";
import { Left, Right, Subgrid } from "./grid";
import classNames from "classnames";

export const BlogPostPreview = ({ post }: { post: BlogPost }) => {
  const { title, outdated, blurb } = post.metadata;

  return (
    <Link href={post.href()} className="blog-post-preview-link">
      <Subgrid
        weight="right"
        className={classNames("blog-post-preview", {
          "blog-post-preview-outdated": outdated,
        })}
      >
        <Left>
          <p className="blog-post-preview-date">{post.formattedDate()}</p>
        </Left>
        <Right className="flex-container">
          <p className="blog-post-preview-title">{title}</p>
          {outdated && <span className="tag">Outdated</span>}
          {!outdated && <p>{blurb}</p>}
        </Right>
      </Subgrid>
    </Link>
  );
};
