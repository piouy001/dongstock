import React from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

import { useToggleTheme } from "hooks/theme/useToggleTheme";
import MoonIcon from "assets/svg/MoonIcon";
import SunIcon from "assets/svg/SunIcon";

const ThemeToggleButton = () => {
  const [theme, toggle] = useToggleTheme();

  const isDark = theme === "dark";
  const transitions = useTransition(isDark, {
    initial: {
      transform: "scale(1) rotate(0deg)",
      opacity: 1,
    },
    from: {
      transform: "scale(0) rotate(-180deg)",
      opacity: 0,
    },
    enter: {
      transform: "scale(1) rotate(0deg)",
      opacity: 1,
    },
    leave: {
      transform: "scale(0) rotate(180deg)",
      opacity: 0,
    },

    reverse: true,
  });

  return (
    <IconButton onClick={toggle}>
      {transitions((style, item) =>
        item ? (
          <Positioner>
            <AnimatedSVGWrapper style={style}>
              <MoonIcon />
            </AnimatedSVGWrapper>
          </Positioner>
        ) : (
          <Positioner>
            <AnimatedSVGWrapper style={style}>
              <SunIcon />
            </AnimatedSVGWrapper>
          </Positioner>
        ),
      )}
    </IconButton>
  );
};

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 0.25rem;
  color: white;
  position: relative;

  &:hover {
    background: ${({ theme }) => theme.tertiaryBackground};
  }
`;

const Positioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SVGWrapper = styled.div`
  color: ${({ theme }) => theme.primaryContent};
  svg {
    display: block;
  }
`;

const AnimatedSVGWrapper = animated(SVGWrapper);

export default ThemeToggleButton;
