import { tags } from "./components";

const schema = {
  nodes: {},
  tags,
  variables: {},
  functions: {},
  partials: {},
};

const makeSchema = (variables: Record<string, any>) => {
  return {
    ...schema,
    variables: {
      ...variables,
      ...schema.variables,
    },
  };
};

export default makeSchema;
