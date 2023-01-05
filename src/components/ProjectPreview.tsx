import Link from "next/link";
import NextImage from "next/image";
import { DehydratedProject } from "../models/project";

export const ProjectPreview = ({ project }: { project: DehydratedProject }) => {
  const MaybeLink = ({
    href,
    children,
  }: {
    href: string | null;
    children: any;
  }) => {
    if (href) return <Link href={href}>{children}</Link>;
    return <>{children}</>;
  };
  return (
    <div className="project-list-item">
      <MaybeLink href={project.metadata.link}>
        <NextImage
          src={project.metadata.image}
          alt="cat"
          width={600}
          height={600}
        ></NextImage>
        <h2>{project.metadata.title}</h2>
        <p>{project.metadata.blurb}</p>
      </MaybeLink>
    </div>
  );
};
