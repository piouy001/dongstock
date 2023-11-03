import React, { useState, useEffect } from "react";

import { styled } from "styled-components";

import ThemeToggleButton from "components/common/button/ThemeToggleButton";

import { BackIcon, SearchIcon } from "assets/assetMap";
import { typo_28_bold } from "styles/Typo";
import { DEVICES } from "styles/devices";

const Header = (): React.ReactNode => {
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  const handleSearchButtonClick = () => {
    setIsSearchBoxVisible(prev => !prev);
  };

  const handleScroll = () => {
    setIsHeaderActive(window.scrollY > 50 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper $isActive={isHeaderActive}>
      <Container>
        <Logo $isSearchBoxVisible={isSearchBoxVisible}>
          <AccentLabel>Git</AccentLabel>
          <LogoLabel>Dong</LogoLabel>
        </Logo>
        <SearchContainer>
          <SearchToggleButton onClick={handleSearchButtonClick}>
            {isSearchBoxVisible ? <BackIcon /> : <SearchIcon />}
          </SearchToggleButton>
          <SearchBox $isActive={isSearchBoxVisible}>
            <SearchField placeholder="Search username*" />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </SearchBox>
        </SearchContainer>
        <ButtonContainer $isSearchBoxVisible={isSearchBoxVisible}>
          <ThemeToggleButton />
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header<{ $isActive: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
  background: ${({ theme, $isActive }) => ($isActive ? theme.surface : theme.background)};
  transition: background-color 0.15s cubic-bezier(0.14, 0.97, 0.59, 1);
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 1280px;
  width: 100%;
  margin-inline: auto;
  padding-inline: 16px;
`;

const Logo = styled.div<{ $isSearchBoxVisible: boolean }>`
  @media ${DEVICES.mobile} {
    display: ${({ $isSearchBoxVisible }) => ($isSearchBoxVisible ? "none" : "block")};
  }
`;
const LogoLabel = styled.span`
  ${typo_28_bold};
  color: ${({ theme }) => theme.onBackground};
`;
const AccentLabel = styled(LogoLabel)`
  color: ${({ theme }) => theme.primary};
`;
const ButtonContainer = styled.div<{ $isSearchBoxVisible: boolean }>`
  @media ${DEVICES.mobile} {
    display: ${({ $isSearchBoxVisible }) => ($isSearchBoxVisible ? "none" : "block")};
  }
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  flex-grow: 1;
`;
const SearchBox = styled.div<{ $isActive: boolean }>`
  position: relative;
  overflow: hidden;
  display: ${({ $isActive }) => ($isActive ? "block" : "none")};
  flex-grow: 1;
  border-radius: 100px;
`;
const SearchField = styled.input`
  width: 100%;
  height: 48px;
  line-height: 48px;
  padding-inline: 16px 64px;
  background: ${({ theme }) => theme.surfaceVariant};
  border: 2px solid ${({ theme }) => theme.surfaceVariant};
  border-radius: 100px;
  color: ${({ theme }) => theme.onBackground};

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
  &::placeholder {
    color: ${({ theme }) => theme.alpha60};
  }
`;
const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  background: ${({ theme }) => theme.primary};
  border-radius: 100px;
  color: ${({ theme }) => theme.onBackground};

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.primaryHover};
  }
`;
const SearchToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.surfaceVariant};
  border: 1px solid ${({ theme }) => theme.surfaceVariantOutline};
  border-radius: 50%;
  color: ${({ theme }) => theme.onBackground};

  &:hover {
    background: ${({ theme }) => theme.surfaceVariantHover};
    border-color: ${({ theme }) => theme.surfaceVariantOutlineHover};
  }
`;

export default Header;
