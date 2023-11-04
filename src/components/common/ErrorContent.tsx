import React from "react";

import styled from "styled-components";

import { typo_14_regular, typo_48_bold } from "styles/Typo";

interface Props {
  text: string;
}

const ErrorContent = ({ text }: Props): React.ReactNode => {
  return (
    <Wrapper>
      <Title>Oops! :(</Title>
      <Description>{text}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding-block: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  color: ${({ theme }) => theme.alpha50};
  ${typo_48_bold};
`;
const Description = styled.div`
  color: ${({ theme }) => theme.alpha80};
  ${typo_14_regular};
`;

export default ErrorContent;
