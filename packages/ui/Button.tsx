import * as React from "react";
import * as S from "./Button.styles";
import { ButtonVariants } from "./Button.types";

type ButtonProps = {
  variant?: ButtonVariants;
  label?: string;
};

const Button: React.FC<ButtonProps> = ({
  variant = ButtonVariants.primary,
  label = "",
}) => {
  return <S.StyledButton $variant={variant}>{label}</S.StyledButton>;
};

export default Button;
