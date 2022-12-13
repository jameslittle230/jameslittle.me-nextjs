import Markdoc, { Node, Tag } from "@markdoc/markdoc";

const image = {
  render: "Image",
  attributes: { src: { type: "String" } },
  transform: (node: Node, config: any) => {
    const attributes = node.transformAttributes(config);
    attributes.src = `https://files.jameslittle.me/images/${attributes.src}`;
    const children = node.transformChildren(config);
    return new Tag(image.render, { ...attributes }, children);
  },
};

export default image;
