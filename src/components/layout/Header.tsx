import React from "react";
import { styled } from "styled-components";

import ThemeToggleButton from "components/common/button/ThemeToggleButton";

import { typo_14_semibold, typo_18_bold } from "./../../theme/Typo";

import { CALCULATOR_URL, DOMESTIC_URL, WORLDSTOCK_URL } from "constants/URLConstant";

const navItems = [
  {
    key: "domestic",
    label: "국내주식",
    link: DOMESTIC_URL,
  },
  {
    key: "worldstock",
    label: "해외주식",
    link: WORLDSTOCK_URL,
  },
  {
    key: "calculator",
    label: "적립식 복리 계산기",
    link: CALCULATOR_URL,
  },
];

const Header = (): React.ReactNode => {
  return (
    <Wrapper>
      <Container>
        <LeftSide>
          <Logo>Dong 증권</Logo>
          <NavList>
            {navItems.map(item => (
              <Nav key={item.key}>
                <NavLabel>{item.label}</NavLabel>
                <NavIndicator />
              </Nav>
            ))}
          </NavList>
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
const NavList = styled.div`
  display: flex;
  align-items: center;
  padding-left: 72px;
  color: ${({ theme }) => theme.primaryContent};
`;
const Nav = styled.div`
  position: relative;
  margin: 0 8px;
  cursor: pointer;
`;
const NavLabel = styled.div`
  ${typo_14_semibold};
`;
const NavIndicator = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -30px;
  width: 0;
  height: 4px;
  background: ${({ theme }) => theme.upperContent};
  transition: width 0.3s ease;

  ${Nav}:hover & {
    width: 100%;
  }
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
