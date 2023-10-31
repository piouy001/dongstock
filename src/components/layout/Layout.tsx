import React from "react";
import styled from "styled-components";

import Header from "./Header";

import { useThemeEffect } from "hooks/theme/useThemeEffect";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props): React.ReactNode => {
  useThemeEffect();

  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.primaryBackground};
`;
const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export default Layout;
