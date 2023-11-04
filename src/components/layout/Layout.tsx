import styled from "styled-components";

import Footer from "components/common/Footer";

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
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 0 32px;
  min-height: 100vh;
  min-height: 100dvh;

  @media ${DEVICES.mobile} {
    padding: 72px 0 16px;
  }
`;
const Content = styled.main`
  flex-grow: 1;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding-inline: 32px;

  @media ${DEVICES.mobile} {
    padding-inline: 16px;
  }
`;
const FooterWrapper = styled.div`
  display: none;
  padding-inline: 32px;

  @media ${DEVICES.mobile} {
    display: block;
    padding-inline: 16px;
  }
`;

export default Layout;
