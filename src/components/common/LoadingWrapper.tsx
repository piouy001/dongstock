import React from "react";

import styled, { keyframes } from "styled-components";

interface Props {
  isLoading: boolean;
  children: React.ReactNode;
}

const LoadingWrapper = ({ isLoading, children }: Props): React.ReactNode => {
  return (
    <Wrapper>
      {isLoading && (
        <LoadingIndicatorWrapper>
          <LoadingIndicator />
        </LoadingIndicatorWrapper>
      )}
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const LoadingIndicatorWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 4px;
  background: ${({ theme }) => theme.background};
  z-index: 100;
`;
const indeterminateFirst = keyframes`
	 0% {
        left: -100%;
        width: 100%;
    }
    100% {
        left: 100%;
        width: 10%;
    }
`;
const indeterminateSecond = keyframes`
	  0% {
        left: -150%;
        width: 100%;
    }
    100% {
        left: 100%;
        width: 10%;
    }
`;
const LoadingIndicator = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  &:before {
    content: "";
    position: absolute;
    height: 100%;
    background: ${({ theme }) => theme.primary};
    animation: ${indeterminateFirst} 2s infinite ease-out;
  }
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    background: ${({ theme }) => theme.primaryOutline};
    animation: ${indeterminateSecond} 2s infinite ease-in;
  }
`;

export default LoadingWrapper;
