import React from "react";
import { styled } from "styled-components";

interface Props {}

const Header = ({}: Props): React.ReactNode => {
  return (
    <Wrapper>
      <Container>
        <LeftSide>
          <Logo>Logo</Logo>
          <NavList>NavList</NavList>
        </LeftSide>
        <Search>Search</Search>
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
`;
const Logo = styled.div``;
const NavList = styled.div``;
const Search = styled.div``;

export default Header;
