import * as React from "react";
import * as S from "./Button.styles";
import { ButtonVariants } from "./Button.types";

type ButtonProps = {
  variant?: ButtonVariants;
  label?: string;
};

export const Button = ({
  variant = ButtonVariants.primary,
  label = "",
}: ButtonProps) => {
  return <S.StyledButton $variant={variant}>{label}</S.StyledButton>;
};
