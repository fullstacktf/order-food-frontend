import styled from "@emotion/styled";
import React, { FC } from "react";

const StyledTitle = styled.h1`
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
`;

interface TitleProps {
  name: string;
}

export const Title: FC<TitleProps> = ({ name }) => {
  return <StyledTitle> {name} </StyledTitle>;
};
