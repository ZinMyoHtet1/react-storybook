import Button from "../../Button/Button";
import Input from "../../Input/Input";

const Subscribe = ({ size, variant, placeholder }) => (
  <div>
    <Input size={size} placeholder={placeholder} />
    <Button variant={variant}>Subscribe</Button>
  </div>
);

export default Subscribe;
