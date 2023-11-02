import React from "react";
import { styled } from "styled-components";

import ThemeToggleButton from "components/common/button/ThemeToggleButton";

import { typo_14_semibold } from "styles/Typo";

const Header = (): React.ReactNode => {
  return (
    <Container>
      <Logo>
        <AccentLabel>Git</AccentLabel>
        <LogoLabel>Dong</LogoLabel>
      </Logo>
      <RightSide>
        <ButtonContainer>
          <ThemeToggleButton />
        </ButtonContainer>
        <SearchContainer>search</SearchContainer>
      </RightSide>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div``;
const LogoLabel = styled.span`
  ${typo_14_semibold};
`;
const AccentLabel = styled(LogoLabel)`
  color: ${({ theme }) => theme.primary};
`;
const RightSide = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonContainer = styled.div``;
const SearchContainer = styled.div``;

export default Header;
