import NextImage from "next/image";

const Image = ({ src, width, height, alt }: any) => {
  return (
    <NextImage
      placeholder="blur"
      src={src}
      blurDataURL={src}
      width={3000}
      height={2000}
      alt={"hi"}
    ></NextImage>
  );
};

export default Image;
