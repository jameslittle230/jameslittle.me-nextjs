import NextImage from "next/image";

const Image = ({ src, width, height, alt }: any) => {
  return <NextImage src={src} width={3000} height={2000} alt={alt}></NextImage>;
};

export default Image;
