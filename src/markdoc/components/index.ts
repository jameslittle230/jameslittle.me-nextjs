import note from "./note/note.markdoc";
import Note from "./note/note";

import figure from "./figure/figure.markdoc";
import Figure from "./figure/figure";

import footnote from "./footnote/footnote.markdoc";
import Footnote from "./footnote/footnote";

import image from "./image/image.markdoc";
import Image from "./image/image";
import { Config } from "@markdoc/markdoc";

export const components = {
  Note,
  Image,
  Figure,
  Footnote,
};

export const tags: Config["tags"] = {
  // @ts-ignore
  note,
  // @ts-ignore
  image,
  // @ts-ignore
  figure,
  footnote,
};
