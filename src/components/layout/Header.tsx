import React from "react";
import { styled } from "styled-components";

import ThemeToggleButton from "components/common/button/ThemeToggleButton";

import { typo_18_bold } from "theme/Typo";

const Header = (): React.ReactNode => {
  return (
    <Wrapper>
      <Container>
        <LeftSide>
          <Logo>Logo</Logo>
        </LeftSide>
        <RightSide>
          <ButtonWrapper>
            <ThemeToggleButton />
          </ButtonWrapper>
          <Search>Search</Search>
        </RightSide>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  height: 80px;
`;
const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  color: ${({ theme }) => theme.primaryContent};
  ${typo_18_bold};
  cursor: pointer;
`;
const RightSide = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonWrapper = styled.div``;
const Search = styled.div`
  margin-left: 16px;
  color: ${({ theme }) => theme.primaryContent};
`;

export default Header;
