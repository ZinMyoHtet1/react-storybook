import React from "react";
import Button from "./Button";
// import Center from "../../decorators/Center/Center";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Button", //default
  },
  //   decorators: [(story) => <Center>{story()}</Center>],
};
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Fail = () => <Button variant="fail">Fail</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});

PrimaryA.args = {
  variant: "primary",
  //   children: "Primary Args",
};
