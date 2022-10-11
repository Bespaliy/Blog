import { ButtonStyle } from "../styles/Button.style";

interface ButtonProp {
  name: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button = (props: ButtonProp) => {

  const { name, type, onClick } = props;
  
  return (
    <ButtonStyle type={type} onClick={onClick}>{name}</ButtonStyle>
  );
}

export default Button;