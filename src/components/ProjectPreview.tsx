import Link from "next/link";
import NextImage from "next/image";
import { DehydratedProject } from "../models/project";

export const ProjectPreview = ({ project }: { project: DehydratedProject }) => {
  const contents = (
    <>
      <NextImage
        src={project.metadata.image}
        alt={`Thumbnail of ${project.metadata.title}`}
        width={600}
        height={600}
      ></NextImage>
      <h2>
        {project.metadata.title} <span className="arrow">&rarr;</span>
      </h2>
      <p>{project.metadata.blurb}</p>
    </>
  );

  if (project.metadata.url) {
    return (
      <Link
        href={project.metadata.url}
        className="project-list-item project-list-item-link"
      >
        {contents}
      </Link>
    );
  } else {
    return <div className="project-list-item">{contents}</div>;
  }
};
