import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Button from '.';

import { ThemeProvider } from 'styled-components';

import appThemes from '../../styles/theme';

afterEach(cleanup);

describe('Button component', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={appThemes.light}>
        <Button label='Test' />
      </ThemeProvider>
    );
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should display label correctly', () => {
    const { getByText } = render(
      <ThemeProvider theme={appThemes.light}>
        <Button label='Test' />
      </ThemeProvider>
    );
    expect(getByText('Test')).toHaveTextContent('Test');
  });

  it('should call onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ThemeProvider theme={appThemes.light}>
        <Button label='Test' onClick={onClick} />
      </ThemeProvider>
    );
    fireEvent.click(getByText('Test'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
