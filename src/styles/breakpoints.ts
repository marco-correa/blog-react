enum ScreenSizes {
  Small = '360px',
  Medium = '768px',
  Large = '1024px',
}

export const breakpoints = {
  sm: `@media (min-width: ${ScreenSizes.Small})`,
  md: `@media (min-width: ${ScreenSizes.Medium})`,
  lg: `@media (min-width: ${ScreenSizes.Large})`,
};
