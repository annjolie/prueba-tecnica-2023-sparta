export const sizes = {
  mobile: 480,
  tabletPortrait: 767,
  tabletLandscape: 960,
  laptop: 1200
} as const;

type Sizes = typeof sizes;

const minMediaQuery = (width: number) => `@media (min-width: ${width}px)`;

export const from = (Object.keys(sizes) as Array<keyof Sizes>).reduce(
  (acc, key: keyof typeof sizes) => ({
    ...acc,
    [key]: minMediaQuery(sizes[key])
  }),
  {} as { [key in keyof Sizes]: string }
);
