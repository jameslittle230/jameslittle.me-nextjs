import slugify from "slugify";
export const slug = (input: string): string =>
  slugify(input, { lower: true, strict: true, locale: "en" });
