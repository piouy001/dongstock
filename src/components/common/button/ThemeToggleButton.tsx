import { useTransition, animated } from "react-spring";
import styled from "styled-components";

import { MoonIcon, SunIcon } from "assets/assetMap";
import { useToggleTheme } from "hooks/theme/useToggleTheme";

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
    <ButtonContainer onClick={toggle}>
      {transitions((style, item) =>
        item ? (
          <IconButton>
            <AnimatedSVGWrapper style={style}>
              <MoonIcon />
            </AnimatedSVGWrapper>
          </IconButton>
        ) : (
          <IconButton>
            <AnimatedSVGWrapper style={style}>
              <SunIcon />
            </AnimatedSVGWrapper>
          </IconButton>
        ),
      )}
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  position: relative;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.surfaceVariant};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.surfaceVariantOutline};
  color: ${({ theme }) => theme.onBackground};

  &:hover {
    background: ${({ theme }) => theme.surfaceVariantHover};
    border-color: ${({ theme }) => theme.surfaceVariantOutlineHover};
  }
`;
const IconButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const SVGWrapper = styled.div`
  svg {
    display: block;
  }
`;
const AnimatedSVGWrapper = animated(SVGWrapper);

export default ThemeToggleButton;
