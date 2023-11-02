export const SIZES = {
  mobile: 768,
  desktop: 1200,
};

export const DEVICES = {
  mobile: `(max-width: ${SIZES.mobile}px)`,
  tablet: `(min-width: ${SIZES.mobile}px) and (max-width: ${SIZES.desktop}px)`,
  desktop: `(min-width: ${SIZES.desktop}px)`,
};
