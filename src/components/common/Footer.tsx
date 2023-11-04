import React from "react";

import styled from "styled-components";

import { typo_14_regular } from "styles/Typo";

const Footer = (): React.ReactNode => {
  return <Container>© 2023 piouy_</Container>;
};

const Container = styled.div`
  display: block;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid ${({ theme }) => theme.outline};
  color: ${({ theme }) => theme.onSecondarySurface};
  ${typo_14_regular};
`;

export default Footer;
