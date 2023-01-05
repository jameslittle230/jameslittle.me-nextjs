import { Config } from "@markdoc/markdoc";
import { tags } from "./components";

const schema: Config = {
  nodes: {},
  tags,
  variables: {},
  functions: {},
  partials: {},
};

const makeSchema = (variables: Record<string, any>): Config => {
  return {
    ...schema,
    variables: {
      ...variables,
      ...schema.variables,
    },
  };
};

export default makeSchema;
