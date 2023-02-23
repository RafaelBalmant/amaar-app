import styled from "@emotion/styled";

export const Container = styled.section<{ $backgroundColor?: string }>`
  display: flex;
  justify-content: center;

  background-color: ${({ $backgroundColor = "var(--background-color)" }) =>
    $backgroundColor};
`;

export const Content = styled.div<{
  $centerContent?: boolean;
  $contentColor?: string;
}>`
  display: flex;

  width: var(--content-width);
  max-width: 100%;
  padding: var(--spacing-7) var(--spacing-4);

  ${({ $centerContent = false }) =>
    $centerContent && "justify-content: center;"}

  color: ${({ $contentColor = "var(--default-text-color)" }) => $contentColor}
`;
