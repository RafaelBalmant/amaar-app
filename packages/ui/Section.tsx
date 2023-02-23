import React from "react";

import * as S from "./Section.styles";
import { SectionProps } from "./Section.types";

const Section: React.FC<SectionProps> = ({ children = "" }) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Section;
