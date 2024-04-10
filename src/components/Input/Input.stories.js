import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

export const Small = () => <Input size="sm" placeholder="placeholder" />;
export const Medium = () => <Input size="md" placeholder="placeholder" />;
export const Large = () => <Input size="lg" placeholder="placeholder" />;
