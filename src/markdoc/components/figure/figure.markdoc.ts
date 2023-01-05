const figure = {
  render: "Figure",
  attributes: {
    caption: { type: "String" },
    layout: { type: "String", matches: ["wide", "wide-half-left", "half-left", "half-right"] },
  },
};

export default figure;
