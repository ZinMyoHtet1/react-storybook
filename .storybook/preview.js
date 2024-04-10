import React from "react";
import { makeDecorator } from "@storybook/addons";
import Center from "../src/decorators/Center/Center";
import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react";
export const parameters = {
  backgrounds: {
    default: "white",
  },
};

export const decorators = [
  (story) => (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {story()}
    </ChakraProvider>
  ),
];

// makeDecorator();

export const options = {
  storySort: (a, b) =>
    a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
};
