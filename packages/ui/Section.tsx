import React from "react";

import * as S from "./Section.styles";

type Props = {
  children?: string | React.ReactNode | React.ReactNode[];
};

const Section: React.FC<Props> = ({ children = "" }) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Section;
