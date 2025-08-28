import { createStitches, createTheme } from '@stitches/react';
import { blackA, whiteA, olive, grass, lime } from '@radix-ui/colors';

export const { styled, globalCss, keyframes } = createStitches({
  theme: {
    colors: {
      ...blackA,
      ...whiteA,
      ...olive,
      ...grass,
      ...lime,

      // colors
      primaryMain: '$grass9',
      primaryLight: '$grass4',
      primaryDark: '$grass11',

      secondaryMain: '$lime9',
      secondaryLight: '$lime4',
      secondaryDark: '$lime11',

      // text
      textPrimary: '$olive12',
      textSecondary: '$olive11',
      textAccent: '$grass11',

      // components
      background: '$olive1',
      surface: '$olive3',
      border: '$olive6',
      shadow: 'rgba(0, 0, 0, 0.1)', 
      shadowColor: '$jadeA7',
    },
    fonts: {
      sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      5: '32px',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '24px',
      6: '32px',
      7: '40px',
      8: '48px',
      9: '64px',
      10: '72px',
      11: '96px',
      12: '128px',
    },
    fontWeights: {
      1: '400',
      2: '500',
      3: '600',
      4: '700',
    },
    radii: {
      1: '4px',
      2: '8px',
      pill: '9999px',
    },
  },
  media: {
    bp1: '(max-width: 768px)',
    bp2: '(max-width: 480px)',
  },
});

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...blackA,
    ...whiteA,
    ...olive,
    ...grass,
    ...lime,

    // colors
    primaryMain: '$grass9',
    primaryLight: '$grass4',
    primaryDark: '$grass11',

    secondaryMain: '$lime9',
    secondaryLight: '$lime4',
    secondaryDark: '$lime11',

    // text
    textPrimary: '$olive12',
    textSecondary: '$olive11',
    textAccent: '$grass11',

    // components
    background: '$olive1',
    surface: '$olive3',
    border: '$olive6',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
});