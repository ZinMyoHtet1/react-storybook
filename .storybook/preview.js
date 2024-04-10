import React from "react";
import { makeDecorator } from "@storybook/addons";
import Center from "../src/decorators/Center/Center";
import { ChakraProvider, theme, CSSReset } from "@chakra-ui/react";
import { withConsole } from "@storybook/addon-console";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
export const parameters = {
  backgrounds: {
    default: "white",
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const decorators = [
  (story) => (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {story()}
    </ChakraProvider>
  ),
  (story, context) => withConsole()(story)(context),
];

// makeDecorator();

export const options = {
  storySort: (a, b) =>
    a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
};
