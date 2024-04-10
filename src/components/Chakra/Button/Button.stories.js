import { Button } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    onClick: { action: "You clicked me!" },
  },
};

export const Success = () => <Button colorScheme="green">Success</Button>;

export const Warning = () => <Button colorScheme="yellow">Warning</Button>;

const Template = (args) => <Button {...args} />;

export const ClickMe = () => (
  <Button colorScheme="orange" onClick={action("Click Action")}>
    Click Me
  </Button>
);

export const Console = () => (
  <Button colorScheme="pink" onClick={() => console.log("Clicked")}>
    Console Log
  </Button>
);

export const ArgButton = Template.bind({});
ArgButton.args = {
  colorScheme: "blue",
  children: "Arg Button",
  color: "white",
};
