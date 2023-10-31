import React from "react";
import { styled } from "styled-components";

import ThemeToggleButton from "components/common/button/ThemeToggleButton";
import { DOMESTIC_URL, WORLDSTOCK_URL } from "constants/URLConstant";
import { useToggleTheme } from "hooks/theme/useToggleTheme";
import { typo_24_bold } from "theme/Typo";

interface Props {}

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
];

const Header = ({}: Props): React.ReactNode => {
  const [_, toggle] = useToggleTheme();

  return (
    <Wrapper>
      <Container>
        <LeftSide>
          <Logo>Logo</Logo>
          <NavList>
            {navItems.map(item => (
              <Nav key={item.key}>{item.label}</Nav>
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
  align-items: center;
  max-width: 1200px;
  width: 100%;
  height: 64px;
`;
const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  padding: 0 36px;
  color: ${({ theme }) => theme.primaryContent};
  ${typo_24_bold};
`;
const NavList = styled.div`
  display: flex;
  color: ${({ theme }) => theme.primaryContent};
`;
const Nav = styled.div``;
const RightSide = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonWrapper = styled.div``;
const Search = styled.div`
  color: ${({ theme }) => theme.primaryContent};
`;

export default Header;
