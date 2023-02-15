import styled from "@emotion/styled";
import { ButtonVariants } from "./Button.types";
import { css } from "@emotion/react";

export const StyledButton = styled.button<{ $variant: ButtonVariants }>`
  background-color: ${({ $variant }) => css`var(--color-${$variant})`};
`;
