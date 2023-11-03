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
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div``;
const Content = styled.div`
  padding-top: 72px;
`;

export default Layout;
