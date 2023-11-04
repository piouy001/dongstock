import styled from "styled-components";

import { useThemeEffect } from "hooks/theme/useThemeEffect";
import { DEVICES } from "styles/devices";

import Header from "./Header";

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
const Content = styled.main`
  max-width: 1280px;
  width: 100%;
  padding-top: 80px;
  margin: 0 auto;
  min-height: 100vh;
  min-height: 100dvh;
  /* !!! */
  height: 300vh;

  @media ${DEVICES.mobile} {
    padding-top: 72px;
  }
`;

export default Layout;
