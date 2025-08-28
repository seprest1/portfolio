import { globalCss } from './theme';

export const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
  body: {
    fontFamily: '$sans',
    backgroundColor: '$background',
    color: '$textHighContrast',
  },
});
