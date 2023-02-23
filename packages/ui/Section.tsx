import React from "react";

import * as S from "./Section.styles";

type SectionProps = {
  children?: string | React.ReactNode | React.ReactNode[];
  centerContent?: boolean;
  backgroundColor?: string;
  contentColor?: string;
};

const Section: React.FC<SectionProps> = ({
  children = "",
  centerContent = false,
  backgroundColor = "",
  contentColor = "",
}) => {
  return (
    <S.Container $backgroundColor={backgroundColor}>
      <S.Content $centerContent={centerContent} $contentColor={contentColor}>
        {children}
      </S.Content>
    </S.Container>
  );
};

export default Section;
