import React from "react";
// import { addDecorator } from "@storybook/react";
import Center from "../src/decorators/Center/Center";
export const parameters = {
  backgrounds: {
    default: "white",
  },
};

export default {
  parameters: {
    options: {
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
};

export const decorators = [(story) => <Center>{story()}</Center>];
