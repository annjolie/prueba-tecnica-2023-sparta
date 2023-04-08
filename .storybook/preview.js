import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import appThemes from '../src/styles/theme';
import '../src/styles/font.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};

const Wrapper = ({ children }) => (
  <ThemeProvider theme={appThemes.light}>{children}</ThemeProvider>
);

addDecorator((storyFn) => <Wrapper>{storyFn()}</Wrapper>);
