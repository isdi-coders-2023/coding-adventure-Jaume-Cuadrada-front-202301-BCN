import { ButtonProps } from "../../data/types";
import ButtonStyled from "./ButtonStyled";

const Button = ({ text }: ButtonProps): JSX.Element => {
  return <ButtonStyled>{text}</ButtonStyled>;
};

export default Button;
