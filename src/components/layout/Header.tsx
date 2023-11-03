import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import ThemeToggleButton from "components/common/button/ThemeToggleButton";

import { BackIcon, ResetIcon, SearchIcon } from "assets/assetMap";
import { HOME_URL } from "constants/URLConstant";
import { typo_14_regular, typo_14_semibold, typo_28_bold } from "styles/Typo";
import { DEVICES } from "styles/devices";

const Header = (): React.ReactNode => {
  const navigate = useNavigate();
  const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogoClick = () => {
    navigate(HOME_URL);
  };

  const handleSearchButtonClick = () => {
    setIsSearchBoxVisible(prev => !prev);
  };

  const isResetButtonVisible = !!userName.length;

  const handleResetClick = () => {
    setUserName("");
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {
    navigate(`/${userName}`);
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
        <Logo $isSearchBoxVisible={isSearchBoxVisible} onClick={handleLogoClick}>
          <AccentLabel>Git</AccentLabel>
          <LogoLabel>Dong</LogoLabel>
        </Logo>
        <SearchContainer>
          <SearchToggleButton onClick={handleSearchButtonClick}>
            {isSearchBoxVisible ? <BackIcon /> : <SearchIcon />}
          </SearchToggleButton>
          <SearchBox $isActive={isSearchBoxVisible}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <SearchField
              value={userName}
              onChange={handleUserNameChange}
              onKeyUp={handleKeyUp}
              placeholder="Search username*"
            />
            <SearchButton onClick={handleSearchClick}>
              <SearchIcon />
              <SearchButtonLabel>Search</SearchButtonLabel>
              <ResetIconWrapper $isVisible={isResetButtonVisible} onClick={handleResetClick}>
                <ResetIcon />
              </ResetIconWrapper>
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
  height: 80px;
  background: ${({ theme, $isActive }) => ($isActive ? theme.surface : theme.background)};
  transition: background-color 0.15s cubic-bezier(0.14, 0.97, 0.59, 1);

  @media ${DEVICES.mobile} {
    height: 72px;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: 1280px;
  width: 100%;
  margin-inline: auto;
  padding-inline: 32px;

  @media ${DEVICES.mobile} {
    padding-inline: 16px;
  }
`;
const Logo = styled.div<{ $isSearchBoxVisible: boolean }>`
  cursor: pointer;

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
  max-width: 360px;
  margin-inline-start: auto;

  @media ${DEVICES.mobile} {
    max-width: 100%;
  }
`;
const SearchBox = styled.div<{ $isActive: boolean }>`
  position: relative;
  overflow: hidden;
  display: block;
  flex-grow: 1;
  border-radius: 100px;

  @media ${DEVICES.mobile} {
    display: ${({ $isActive }) => ($isActive ? "block" : "none")};
  }
`;
const SearchIconWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  display: block;
  margin-top: 1.5px;

  @media ${DEVICES.mobile} {
    display: none;
  }
`;
const ResetIconWrapper = styled.span<{ $isVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: -24px;
  transform: translateY(-50%);
  display: ${({ $isVisible }) => ($isVisible ? "inline" : "none")};
  margin-top: 2px;
`;
const SearchField = styled.input`
  width: 100%;
  height: 48px;
  line-height: 48px;
  padding-inline: 56px 88px;
  background: ${({ theme }) => theme.surfaceVariant};
  border: 2px solid ${({ theme }) => theme.surfaceVariant};
  border-radius: 100px;
  color: ${({ theme }) => theme.onBackground};
  ${typo_14_regular};

  @media ${DEVICES.mobile} {
    padding-inline: 16px 64px;
  }

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
  width: max-content;
  background: ${({ theme }) => theme.primary};
  border-radius: 100px;
  padding-inline: 16px;
  color: ${({ theme }) => theme.onBackground};
  transition: background-color 0.15s cubic-bezier(0.14, 0.97, 0.59, 1);

  & > svg {
    display: none;
  }

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.primaryHover};
  }

  @media ${DEVICES.mobile} {
    width: 48px;
    padding-inline: 0;
    & > svg {
      display: block;
    }
  }
`;
const SearchButtonLabel = styled.span`
  display: block;
  ${typo_14_semibold};

  @media ${DEVICES.mobile} {
    display: none;
  }
`;
const SearchToggleButton = styled.button`
  display: none;

  @media ${DEVICES.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 48px;
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
  }
`;

export default Header;
